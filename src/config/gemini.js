// src/config/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ Missing Gemini API key. Check your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

async function runChat(prompt) {
  try {
    // ✅ Correct model name
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("❌ Error from Gemini API:", error);
    return "Something went wrong while fetching the response.";
  }
}

export default runChat;
