import { Groq } from "groq-sdk";

const GROQ_API = import.meta.env.VITE_GROQ_API_KEY;
const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async (content: string) => {
  try {
    const reply = await groq.chat.completions.create({
      messages: [{ role: "user", content }],
      model: "mixtral-8x7b-32768", // Ganti model sesuai kebutuhan
    });

    return reply.choices[0]?.message.content || "No response from AI";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error retrieving response";
  }
};
