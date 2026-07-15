import axios from "axios";
import API_URL from "./api";

export const sendContact = async (formData) => {
  const { data } = await axios.post(
    `${API_URL}/contact`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};