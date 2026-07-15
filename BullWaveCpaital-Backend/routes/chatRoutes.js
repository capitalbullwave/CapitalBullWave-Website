
import express from "express";
import { chatWithAI } from "../controllers/chatController.js";

const chatRoute = express.Router();

chatRoute.post("/", chatWithAI);

export default chatRoute;
