import axios from "axios";
import API_URL from "./api";

export const sendContact = async (formData) => {
  if (!API_URL) {
    throw new Error(
      "API URL is not configured. Set VITE_API_URL in the frontend .env file."
    );
  }

  const { data } = await axios.post(`${API_URL}/api/contact`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
    // Render free tier can cold-start for 30–60s
    timeout: 90000,
  });

  return data;
};