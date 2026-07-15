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

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    /* Required Fields */

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    /* Input Validation */

    if (!validator.isLength(name.trim(), { min: 2, max: 100 })) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    if (phone && !validator.isMobilePhone(phone, "any")) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    if (!validator.isLength(subject.trim(), { min: 3, max: 150 })) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid subject.",
      });
    }

    if (!validator.isLength(message.trim(), { min: 10, max: 5000 })) {
      return res.status(400).json({
        success: false,
        message:
          "Message should contain at least 10 characters.",
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

    /* Send Auto Reply */

    await sendAutoReply({
      name,
      email,
    });

    console.log("✅ Auto reply sent successfully");

    return res.status(200).json({
        success: true,
        message: "Thank you for contacting Bull Wave Capital. We will get back to you shortly.",
    });

  } catch (error) {
    console.error("Contact Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};