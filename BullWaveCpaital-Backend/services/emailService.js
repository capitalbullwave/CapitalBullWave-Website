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

const BREVO_API_KEY = cleanEnv(process.env.BREVO_API_KEY);
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
const BREVO_SMTP_PORT = Number(process.env.BREVO_SMTP_PORT || 587);
const BREVO_SMTP_USER = cleanEnv(
  process.env.BREVO_SMTP_USER || BREVO_SENDER_EMAIL
);

/**
 * SMTP password must be a Brevo SMTP key (xsmtpsib-...), never an API key (xkeysib-).
 * Ignore xkeysib values if someone accidentally puts the API key in SMTP_KEY.
 */
const rawSmtpKey = cleanEnv(
  process.env.BREVO_SMTP_KEY || process.env.BREVO_SMTP_PASS
);
const BREVO_SMTP_KEY =
  rawSmtpKey && !rawSmtpKey.startsWith("xkeysib-") ? rawSmtpKey : "";

const isApiKey = (key) => Boolean(key && key.startsWith("xkeysib-"));

let smtpTransporter = null;
let loggedProvider = false;

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
};

/**
 * Resolve transport safely:
 * - smtp + real SMTP key  → SMTP
 * - smtp + only xkeysib   → API (xkeysib cannot authenticate SMTP)
 * - api + API key         → API
 */
const resolveProvider = () => {
  if (EMAIL_PROVIDER === "smtp" && BREVO_SMTP_KEY) {
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

  if (BREVO_SMTP_KEY) return "smtp";
  return "api";
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
    auth: {
      user: BREVO_SMTP_USER,
      pass: BREVO_SMTP_KEY,
    },
  });

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
  if (!email || !validator.isEmail(String(email).trim())) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
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
