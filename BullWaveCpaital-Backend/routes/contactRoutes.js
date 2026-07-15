import express from "express";
import { sendContactMessage} from "../controllers/contactController.js";

const contactRoute = express.Router();

contactRoute.post("/", sendContactMessage);

export default contactRoute;