import dotenv from "dotenv";
dotenv.config();

import sgMail from "@sendgrid/mail";
import validator from "validator";

/* ==========================================
   Environment Validation
========================================== */

const requiredEnv = [
  "SENDGRID_API_KEY",
  "FROM_EMAIL",
  "COMPANY_EMAIL",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`${key} is missing in .env`);
  }
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY.trim());

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
  if (!email || !validator.isEmail(email.trim())) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  return {
    success: true,
  };
};

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

    await sgMail.send({
      to: process.env.COMPANY_EMAIL,

      from: {
        email: process.env.FROM_EMAIL,
        name: "Capital BullWave ",
      },

      replyTo: {
        email,
        name,
      },

      subject: `New Contact Form Enquiry • ${safeSubject}`,

        text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Phone: ${phone || "-"}

        Subject:
        ${subject}

        Message:
        ${message}
              `,

      html: `
      <!DOCTYPE html>
      <html>

      <head>
      <meta charset="UTF-8">
      <title>New Contact Form</title>
      </head>

      <body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,sans-serif;">

      <table width="700" align="center" cellpadding="0" cellspacing="0"
      style="background:#ffffff;border-radius:10px;overflow:hidden;">

      <tr>
      <td style="background:#0F172A;padding:25px;color:#ffffff;">
      <h2 style="margin:0;">New Contact Form Submission</h2>
      </td>
      </tr>

      <tr>
      <td style="padding:35px;">

      <table width="100%" cellpadding="10">

      <tr>
      <td width="150"><strong>Name</strong></td>
      <td>${safeName}</td>
      </tr>

      <tr>
      <td><strong>Email</strong></td>
      <td>${safeEmail}</td>
      </tr>

      <tr>
      <td><strong>Phone</strong></td>
      <td>${safePhone}</td>
      </tr>

      <tr>
      <td><strong>Subject</strong></td>
      <td>${safeSubject}</td>
      </tr>

      </table>

      <hr style="margin:30px 0;">

      <h3>Message</h3>

      <p style="line-height:28px;white-space:pre-wrap;">
      ${safeMessage}
      </p>

      <hr style="margin-top:40px;">

      <p style="font-size:13px;color:#777;line-height:22px;">
      Capital Bull Wave<br>
      SEBI Registered Research Analyst<br>
      Registration No. INH000013253
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
    console.error(
      "SendGrid Contact Email Error:",
      error.response?.body || error.message
    );

    throw new Error("Unable to send contact email.");
  }
};

/* ==========================================
   Send Auto Reply
========================================== */

export const sendAutoReply = async ({ name, email }) => {
  try {
    const safeName = escapeHtml(name);

    await sgMail.send({
      to: email,

      from: {
        email: process.env.FROM_EMAIL,
        name: "Capital Bull Wave",
      },

      subject: "Thank You for Contacting Capital Bull Wave",

      text: `
      Hello ${name},

      Thank you for contacting Capital BullWave.

      We have received your enquiry successfully.

      Our team will review your message and get back to you during business hours.

      Regards,
      Capital Bull Wave
            `,

        html: `
        <!DOCTYPE html>
        <html>

        <head>
        <meta charset="UTF-8">
        <title>Thank You</title>
        </head>

        <body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,sans-serif;">

        <table width="700" align="center" cellpadding="0" cellspacing="0"
        style="background:#ffffff;border-radius:10px;overflow:hidden;">

        <tr>
        <td style="background:#0F172A;padding:25px;color:#ffffff;">
        <h2 style="margin:0;">Thank You</h2>
        </td>
        </tr>

        <tr>
        <td style="padding:35px;">

        <p>Hello <strong>${safeName}</strong>,</p>

        <p>
        Thank you for contacting <strong>Capital Bull Wave</strong>.
        </p>

        <p>
        We have successfully received your enquiry.
        </p>

        <p>
        Our support team will carefully review your message and respond as soon as possible during business hours.
        </p>

        <p>
        For urgent enquiries, you may also contact us directly using the phone number or WhatsApp available on our website.
        </p>

        <br>

        <p>
        Kind Regards,
        </p>

        <p>
        <strong>Capital Bull Wave Team</strong>
        </p>

        <hr style="margin-top:40px;">

        <p style="font-size:13px;color:#777;line-height:22px;">
        Capital Bull Wave<br>
        SEBI Registered Research Analyst<br>
        Registration No. INH000013253
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
    console.error(
      "SendGrid Auto Reply Error:",
      error.response?.body || error.message
    );

    throw new Error("Unable to send auto reply.");
  }
};