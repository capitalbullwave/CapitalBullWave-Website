import axios from "axios";
import API_URL from "./api";

export const AIsendMessage = async (message) => {
  if (!API_URL) {
    throw new Error("API URL is not configured");
  }

  const { data } = await axios.post(
    `${API_URL}/api/chat`,
    { message },
    {
      headers: { "Content-Type": "application/json" },
      timeout: 45000,
    }
  );

  if (!data?.reply) {
    throw new Error(data?.message || "Empty chat response");
  }

  return data;
};
