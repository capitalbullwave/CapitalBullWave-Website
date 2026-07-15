import { getAIResponse } from "../services/openaiService.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    const reply = await getAIResponse(message.trim());

    return res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Chat Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process your request.",
    });
  }
};