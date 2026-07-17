import axios from "axios";
import API_URL from "./api";

export const AIsendMessage = async (message) => {
  const { data } = await axios.post(
    `${API_URL}/api/chat`,
    {
      message,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};