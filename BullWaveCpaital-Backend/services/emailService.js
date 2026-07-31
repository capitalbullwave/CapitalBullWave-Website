import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";
import validator from "validator";

/* ==========================================
   Config helpers
========================================== */

const cleanEnv = (value = "") =>
  String(value)
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/>+$/g, "")
    .trim();

const EMAIL_PROVIDER = cleanEnv(process.env.EMAIL_PROVIDER || "api").toLowerCase();

const rawApiKey = cleanEnv(process.env.BREVO_API_KEY);
const rawSmtpKey = cleanEnv(
  process.env.BREVO_SMTP_KEY || process.env.BREVO_SMTP_PASS
);

const isApiKey = (key) => Boolean(key && key.startsWith("xkeysib-"));

/**
 * Accept keys even if pasted into the wrong env var.
 * Never treat xkeysib- as an SMTP password.
 */
const BREVO_API_KEY = isApiKey(rawApiKey)
  ? rawApiKey
  : isApiKey(rawSmtpKey)
    ? rawSmtpKey
    : "";

const BREVO_SMTP_KEY =
  rawSmtpKey && !isApiKey(rawSmtpKey)
    ? rawSmtpKey
    : rawApiKey && !isApiKey(rawApiKey)
      ? rawApiKey
      : "";

const BREVO_SENDER_EMAIL = cleanEnv(
  process.env.BREVO_SENDER_EMAIL || process.env.FROM_EMAIL
);
const BREVO_SENDER_NAME =
  cleanEnv(process.env.BREVO_SENDER_NAME) || "Capital Bull Wave";
const COMPANY_EMAIL = cleanEnv(
  process.env.COMPANY_EMAIL || process.env.BREVO_SENDER_EMAIL
);

const BREVO_SMTP_HOST =
  cleanEnv(process.env.BREVO_SMTP_HOST) || "smtp-relay.brevo.com";

/** Render / cloud hosts often block or stall SMTP 587 — prefer 2525 there. */
const isCloudHost = Boolean(
  process.env.RENDER ||
    process.env.RENDER_EXTERNAL_URL ||
    process.env.RAILWAY_ENVIRONMENT ||
    process.env.FLY_APP_NAME
);
const BREVO_SMTP_PORT = Number(
  process.env.BREVO_SMTP_PORT || (isCloudHost ? 2525 : 587)
);

/** Must be Brevo SMTP login (e.g. xxx@smtp-brevo.com) — never default to Gmail sender */
const BREVO_SMTP_USER = cleanEnv(process.env.BREVO_SMTP_USER);

let smtpTransporter = null;
let loggedProvider = false;

export const getEmailConfigStatus = () => {
  let provider = "none";
  try {
    provider = resolveProvider();
  } catch {
    provider = "invalid";
  }

  return {
    provider,
    hasSender: Boolean(BREVO_SENDER_EMAIL),
    hasCompanyEmail: Boolean(COMPANY_EMAIL),
    hasSmtpHost: Boolean(BREVO_SMTP_HOST),
    hasSmtpUser: Boolean(BREVO_SMTP_USER),
    hasSmtpKey: Boolean(BREVO_SMTP_KEY),
    hasApiKey: Boolean(BREVO_API_KEY),
    smtpPort: BREVO_SMTP_PORT,
    cloudHost: isCloudHost,
    smtpUserLooksValid: /@smtp-brevo\.com$/i.test(BREVO_SMTP_USER),
    ready: Boolean(
      BREVO_SENDER_EMAIL &&
        COMPANY_EMAIL &&
        ((BREVO_SMTP_KEY && BREVO_SMTP_USER) || BREVO_API_KEY)
    ),
  };
};

const assertMailConfig = () => {
  if (!BREVO_SENDER_EMAIL) {
    throw new Error("BREVO_SENDER_EMAIL (or FROM_EMAIL) is missing in .env");
  }
  if (!COMPANY_EMAIL) {
    throw new Error("COMPANY_EMAIL is missing in .env");
  }
  if (!BREVO_API_KEY && !BREVO_SMTP_KEY) {
    throw new Error("BREVO_API_KEY or BREVO_SMTP_KEY is missing in .env");
  }
  if (BREVO_SMTP_KEY && !BREVO_SMTP_USER) {
    throw new Error(
      "BREVO_SMTP_USER is missing. Use your Brevo SMTP login (e.g. xxx@smtp-brevo.com)."
    );
  }
};

/**
 * Resolve transport safely:
 * - smtp + real SMTP key  → SMTP
 * - smtp + only xkeysib   → API (xkeysib cannot authenticate SMTP)
 * - api + API key         → API
 */
const resolveProvider = () => {
  // Prefer real SMTP credentials whenever present
  if (BREVO_SMTP_KEY) {
    if (!BREVO_SMTP_USER) {
      throw new Error(
        "BREVO_SMTP_USER is required (use your Brevo SMTP login, e.g. xxx@smtp-brevo.com)."
      );
    }
    return "smtp";
  }

  if (isApiKey(BREVO_API_KEY)) {
    if (EMAIL_PROVIDER === "smtp" && !loggedProvider) {
      loggedProvider = true;
      console.warn(
        "[email] EMAIL_PROVIDER=smtp but only BREVO_API_KEY (xkeysib-) is set. Using Brevo API transport."
      );
    }
    return "api";
  }

  return EMAIL_PROVIDER === "smtp" ? "smtp" : "api";
};

const getSmtpTransporter = () => {
  if (smtpTransporter) return smtpTransporter;

  if (!BREVO_SMTP_USER || !BREVO_SMTP_KEY) {
    throw new Error(
      "SMTP requires BREVO_SMTP_USER and BREVO_SMTP_KEY (xsmtpsib-...). xkeysib- API keys cannot be used over SMTP."
    );
  }

  smtpTransporter = nodemailer.createTransport({
    host: BREVO_SMTP_HOST,
    port: BREVO_SMTP_PORT,
    secure: BREVO_SMTP_PORT === 465,
    requireTLS: BREVO_SMTP_PORT === 587 || BREVO_SMTP_PORT === 2525,
    auth: {
      user: BREVO_SMTP_USER,
      pass: BREVO_SMTP_KEY,
    },
    connectionTimeout: 20000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
    tls: {
      // Brevo relay
      minVersion: "TLSv1.2",
    },
  });

  console.log(
    `[email] SMTP transport ready → ${BREVO_SMTP_HOST}:${BREVO_SMTP_PORT}`
  );

  return smtpTransporter;
};

/* ==========================================
   HTML Escape Helper
========================================== */

const escapeHtml = (text = "") =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

/* ==========================================
   Email Validation
========================================== */

export const validateEmail = (email) => {
  const AUTH_MSG = "Please provide an authenticated email address.";
  const value = String(email || "").trim().toLowerCase();

  if (!value || !validator.isEmail(value, { allow_utf8_local_part: false })) {
    return { success: false, message: AUTH_MSG };
  }

  const [local, domain] = value.split("@");
  if (!local || !domain || local.length < 2) {
    return { success: false, message: AUTH_MSG };
  }

  if (
    local.includes("..") ||
    domain.includes("..") ||
    local.startsWith(".") ||
    local.endsWith(".")
  ) {
    return { success: false, message: AUTH_MSG };
  }

  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];
  if (
    domainParts.length < 2 ||
    !tld ||
    tld.length < 2 ||
    !validator.isFQDN(domain)
  ) {
    return { success: false, message: AUTH_MSG };
  }

  const disposable = new Set([
    "mailinator.com",
    "guerrillamail.com",
    "guerrillamail.net",
    "sharklasers.com",
    "grr.la",
    "10minutemail.com",
    "10minmail.com",
    "tempmail.com",
    "temp-mail.org",
    "temp-mail.io",
    "throwawaymail.com",
    "yopmail.com",
    "yopmail.fr",
    "trashmail.com",
    "trashmail.me",
    "getnada.com",
    "moakt.com",
    "fakeinbox.com",
    "mailnesia.com",
    "dispostable.com",
    "maildrop.cc",
    "mintemail.com",
    "mytemp.email",
    "tmpmail.org",
    "tmpmail.net",
    "emailondeck.com",
    "spam4.me",
    "mailcatch.com",
    "discard.email",
    "mailnull.com",
    "spamgourmet.com",
    "inboxkitten.com",
    "tempail.com",
    "burnermail.io",
    "mailsac.com",
  ]);

  const dummyDomains = new Set([
    "example.com",
    "example.org",
    "example.net",
    "test.com",
    "test.in",
    "testing.com",
    "fake.com",
    "fake.in",
    "dummy.com",
    "dummy.in",
    "sample.com",
    "asdf.com",
    "abc.com",
    "xyz.com",
    "xxx.com",
    "localhost",
    "localdomain",
    "invalid",
    "domain.com",
    "emailprovider.com",
  ]);

  const dummyLocals = new Set([
    "test",
    "testing",
    "tester",
    "dummy",
    "fake",
    "sample",
    "example",
    "demo",
    "asdf",
    "asdfgh",
    "qwerty",
    "abc",
    "abcd",
    "abcdef",
    "xyz",
    "xxx",
    "aaa",
    "abc123",
    "user",
    "username",
    "email",
    "mail",
    "none",
    "null",
    "undefined",
    "admin",
    "noreply",
    "no-reply",
    "donotreply",
    "do-not-reply",
  ]);

  if (disposable.has(domain) || dummyDomains.has(domain)) {
    return { success: false, message: AUTH_MSG };
  }

  const localBase = local.split("+")[0].replace(/[._-]/g, "");
  if (dummyLocals.has(local) || dummyLocals.has(localBase)) {
    return { success: false, message: AUTH_MSG };
  }

  if (/^(.)\1{4,}$/.test(localBase)) {
    return { success: false, message: AUTH_MSG };
  }

  const sequences = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "1234567890"];
  if (
    localBase.length >= 5 &&
    sequences.some(
      (seq) => seq.includes(localBase) || localBase.includes(seq.slice(0, 5))
    )
  ) {
    return { success: false, message: AUTH_MSG };
  }

  const domainName = domainParts[0];
  if (
    localBase === domainName &&
    ["test", "demo", "fake", "dummy", "sample", "mail", "email", "user"].includes(
      domainName
    )
  ) {
    return { success: false, message: AUTH_MSG };
  }

  return { success: true };
};

/* ==========================================
   Low-level send helpers
========================================== */

async function sendViaBrevoApi({ to, subject, text, html, replyTo }) {
  if (!isApiKey(BREVO_API_KEY)) {
    throw new Error("BREVO_API_KEY is missing or invalid (expected xkeysib-...).");
  }

  const payload = {
    sender: {
      name: BREVO_SENDER_NAME,
      email: BREVO_SENDER_EMAIL,
    },
    to: Array.isArray(to) ? to : [{ email: to }],
    subject,
    textContent: text,
    htmlContent: html,
  };

  if (replyTo?.email) {
    payload.replyTo = {
      email: replyTo.email,
      name: replyTo.name || replyTo.email,
    };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await response.text();
  let bodyJson = null;
  try {
    bodyJson = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    bodyJson = { raw: bodyText };
  }

  if (!response.ok) {
    const detail =
      bodyJson?.message ||
      bodyJson?.error ||
      bodyText ||
      `HTTP ${response.status}`;
    throw new Error(`Brevo API error (${response.status}): ${detail}`);
  }

  return bodyJson;
}

async function sendViaSmtp({ to, subject, text, html, replyTo }) {
  const transporter = getSmtpTransporter();
  const toAddress = Array.isArray(to)
    ? to.map((item) => item.email).join(", ")
    : to;

  await transporter.sendMail({
    from: `"${BREVO_SENDER_NAME}" <${BREVO_SENDER_EMAIL}>`,
    to: toAddress,
    replyTo: replyTo?.email
      ? `"${replyTo.name || replyTo.email}" <${replyTo.email}>`
      : undefined,
    subject,
    text,
    html,
  });

  return true;
}

async function sendMail(options) {
  assertMailConfig();
  const provider = resolveProvider();

  if (provider === "smtp") {
    return sendViaSmtp(options);
  }

  return sendViaBrevoApi(options);
}

/* ==========================================
   Send Contact Email to Company
========================================== */

export const sendContactEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await sendMail({
      to: [{ email: COMPANY_EMAIL }],
      replyTo: { email, name },
      subject: `New Contact Form Enquiry • ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}

Subject:
${subject}

Message:
${message}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Contact Form</title>
</head>
<body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,sans-serif;">
<table width="700" align="center" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:10px;overflow:hidden;max-width:100%;">
<tr>
<td style="background:#0F172A;padding:25px;color:#ffffff;">
<h2 style="margin:0;">New Contact Form Submission</h2>
</td>
</tr>
<tr>
<td style="padding:35px;">
<table width="100%" cellpadding="10">
<tr><td width="150"><strong>Name</strong></td><td>${safeName}</td></tr>
<tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
<tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
<tr><td><strong>Subject</strong></td><td>${safeSubject}</td></tr>
</table>
<hr style="margin:30px 0;">
<h3>Message</h3>
<p style="line-height:28px;white-space:pre-wrap;">${safeMessage}</p>
<hr style="margin-top:40px;">
<p style="font-size:13px;color:#777;line-height:22px;">
Capital Bull Wave<br>
Research &amp; Investment Advisory
</p>
</td>
</tr>
</table>
</body>
</html>
      `,
    });

    return true;
  } catch (error) {
    console.error("Brevo Contact Email Error:", error.message || error);
    throw new Error("Unable to send contact email.");
  }
};

/* ==========================================
   Send Auto Reply
========================================== */

export const sendAutoReply = async ({ name, email }) => {
  try {
    const safeName = escapeHtml(name);

    await sendMail({
      to: [{ email }],
      subject: "Thank You for Contacting Capital Bull Wave",
      text: `
Hello ${name},

Thank you for contacting Capital BullWave.

We have received your enquiry successfully.

Our team will review your message and get back to you during business hours.

Regards,
Capital Bull Wave
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Thank You</title>
</head>
<body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,sans-serif;">
<table width="700" align="center" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:10px;overflow:hidden;max-width:100%;">
<tr>
<td style="background:#0F172A;padding:25px;color:#ffffff;">
<h2 style="margin:0;">Thank You</h2>
</td>
</tr>
<tr>
<td style="padding:35px;">
<p>Hello <strong>${safeName}</strong>,</p>
<p>Thank you for contacting <strong>Capital Bull Wave</strong>.</p>
<p>We have successfully received your enquiry.</p>
<p>Our support team will carefully review your message and respond as soon as possible during business hours.</p>
<p>For urgent enquiries, you may also contact us directly using the phone number or WhatsApp available on our website.</p>
<br>
<p>Kind Regards,</p>
<p><strong>Capital Bull Wave Team</strong></p>
<hr style="margin-top:40px;">
<p style="font-size:13px;color:#777;line-height:22px;">
Capital Bull Wave<br>
Research &amp; Investment Advisory
</p>
</td>
</tr>
</table>
</body>
</html>
      `,
    });

    return true;
  } catch (error) {
    console.error("Brevo Auto Reply Error:", error.message || error);
    throw new Error("Unable to send auto reply.");
  }
};
