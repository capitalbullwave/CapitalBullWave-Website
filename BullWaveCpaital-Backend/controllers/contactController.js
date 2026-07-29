/**
 * ==========================================
 * Contact Controller
 * Bull Wave Capital
 * ==========================================
 */

import validator from "validator";

import {
  validateEmail,
  sendContactEmail,
  sendAutoReply,
} from "../services/emailService.js";

/** Strip spaces/dashes so "+91 87965-65234" validates like "+918796565234". */
const normalizePhone = (phone) => {
  if (!phone || typeof phone !== "string") return "";
  return phone.trim().replace(/[\s\-().]/g, "");
};

const isValidPhone = (phone) =>
  validator.isMobilePhone(phone, "en-IN", { strictMode: false }) ||
  validator.isMobilePhone(phone, "any", { strictMode: false });

export const sendContactMessage = async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim();
    const email = String(req.body?.email || "").trim();
    const phone = normalizePhone(req.body?.phone);
    const subject = String(req.body?.subject || "").trim();
    const message = String(req.body?.message || "").trim();

    /* Required Fields */

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    /* Input Validation */

    if (!validator.isLength(name, { min: 2, max: 100 })) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    if (!validator.isLength(subject, { min: 3, max: 150 })) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid subject.",
      });
    }

    if (!validator.isLength(message, { min: 10, max: 5000 })) {
      return res.status(400).json({
        success: false,
        message: "Message should contain at least 10 characters.",
      });
    }

    /* Email Validation */

    const validation = validateEmail(email);

    if (!validation.success) {
      return res.status(400).json(validation);
    }

    /* Send Email to Company */

    await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    console.log("✅ Contact email sent successfully");

    /* Auto-reply is best-effort — do not fail the enquiry if it errors */
    try {
      await sendAutoReply({ name, email });
      console.log("✅ Auto reply sent successfully");
    } catch (autoReplyError) {
      console.error(
        "Auto reply failed (enquiry still saved/sent):",
        autoReplyError.message || autoReplyError
      );
    }

    return res.status(200).json({
      success: true,
      message:
        "Thank you for contacting Bull Wave Capital. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact Controller Error:", error);

    const detail = String(error?.message || error || "");
    const isEmailConfig =
      /Brevo|BREVO_|api key|unauthorized|Key not found|Unable to send contact email|SMTP/i.test(
        detail
      );

    return res.status(500).json({
      success: false,
      message: isEmailConfig
        ? "Email service is not configured correctly. Please try again later or contact us by phone."
        : "Something went wrong. Please try again later.",
      ...(process.env.NODE_ENV !== "production" ? { debug: detail } : {}),
    });
  }
};