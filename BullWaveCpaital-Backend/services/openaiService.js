import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
import { companyData, bullWaveRidesData } from "../data/companyData.js";
import { getLocalReply } from "./chatKnowledge.js";

const hasApiKey = Boolean(process.env.OPENAI_API_KEY?.trim());

const client = hasApiKey
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

/* ==========================================
   OpenAI Chat Service (with local fallback)
========================================== */

export const getAIResponse = async (message, history = []) => {
  const trimmed = String(message || "").trim();

  // Fast local path when OpenAI is not configured
  if (!client) {
    console.warn("OPENAI_API_KEY missing — using local knowledge base.");
    return getLocalReply(trimmed);
  }

  try {
    const systemPrompt = `
    You are the official AI Assistant for Capital Bull Wave (Capital BullWave Private Limited).

    Capital Bull Wave is the primary company and this website belongs to Capital Bull Wave.

    BullWave Rides is a ride-booking application developed and provided by Capital Bull Wave.

    Users visiting this website are primarily looking for information about Capital Bull Wave, its services, plans, contact information, company details, research services, investment education, funding program, and policies.

    Only answer about BullWave Rides when the user explicitly asks about rides, cab, taxi, driver, booking, fare, trip, pickup, or BullWave Rides.

    Otherwise ALWAYS assume the user is referring to Capital Bull Wave.

    Use previous conversation history to understand the user's current topic.

    ====================================================
    CAPITAL BULL WAVE INFORMATION
    ====================================================

    ${JSON.stringify(companyData, null, 2)}

    ====================================================
    BULLWAVE RIDES INFORMATION
    ====================================================

    ${JSON.stringify(bullWaveRidesData, null, 2)}

    ====================================================
    RULES
    ====================================================

    1. Capital Bull Wave is the default topic.
    2. Never invent information — use only the data above.
    3. Never provide personalized investment advice.
    4. Never recommend buying or selling stocks.
    5. Never predict market prices or guarantee profits.
    6. Keep responses professional, clear, and under 180 words when possible.
    7. Use short headings and bullet points when helpful.
    8. Format important labels and titles with markdown bold, for example:
       **Expertise:** description
       **Email:** admin@capitalbullwave.com
       **Phone/WhatsApp:** +91-9616212526
       **Office:** address
       **Business Hours:** Monday to Friday | 9:00 AM – 6:30 PM
    9. When giving contact details, include email, phone, WhatsApp, office address, and business hours when available.
    10. Output emails/phones/URLs as plain text (frontend will linkify and style them).
    11. If information is unavailable, say so politely and share contact details.
    `;

    const messages = [
      { role: "system", content: systemPrompt },
      ...history,
      { role: "user", content: trimmed },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages,
      temperature: 0.3,
      max_tokens: 500,
    });

    return (
      completion.choices[0]?.message?.content ||
      getLocalReply(trimmed)
    );
  } catch (error) {
    console.error("OpenAI Error:", error?.message || error);

    // Always fall back to local knowledge so the bot still responds
    const local = getLocalReply(trimmed);

    if (error?.status === 401) {
      return `${local}\n\n(Note: AI service key issue — answered from company knowledge.)`;
    }

    if (error?.status === 429) {
      return `${local}\n\n(Note: AI is busy — answered from company knowledge.)`;
    }

    return local;
  }
};
