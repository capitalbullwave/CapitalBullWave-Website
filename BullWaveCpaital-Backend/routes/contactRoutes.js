import express from "express";
import { sendContactMessage } from "../controllers/contactController.js";
import { getEmailConfigStatus } from "../services/emailService.js";

const contactRoute = express.Router();

contactRoute.get("/status", (req, res) => {
  const status = getEmailConfigStatus();
  return res.status(status.ready ? 200 : 503).json({
    success: status.ready,
    message: status.ready
      ? "Email service is configured."
      : "Email service is not configured correctly on this server.",
    ...status,
  });
});

contactRoute.post("/", sendContactMessage);

export default contactRoute;