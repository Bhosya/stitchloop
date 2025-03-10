import { Groq } from "groq-sdk";

const GROQ_API = import.meta.env.VITE_GROQ_API_KEY;
const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

// System prompt
const systemPrompt = `
You are StitchLoop AI, a helpful and professional assistant for an e-commerce platform specializing in sustainable fashion.
Provide concise, friendly, and informative responses.
Use historical context when available to make responses more relevant.
If unsure, suggest checking the FAQ or contacting support.
Avoid uncertain or misleading information.
`;

// Simpan riwayat percakapan (maksimal 10 pesan untuk jaga konteks tetap ringan)
let conversationHistory: { role: "user" | "assistant"; content: string }[] = [];

export const requestToGroqAI = async (content: string) => {
  try {
    // Tambah pesan user ke dalam riwayat percakapan
    conversationHistory.push({ role: "user", content });

    // Membatasi riwayat percakapan agar tidak terlalu panjang
    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    // Kirim request ke Groq API
    const reply = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
      ],
      model: "llama3-8b-8192", // Ganti model sesuai kebutuhan
    });

    // Simpan respon AI ke dalam riwayat percakapan
    const aiResponse =
      reply.choices[0]?.message.content || "No response from AI";

    conversationHistory.push({ role: "assistant", content: aiResponse });

    return aiResponse;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error retrieving response";
  }
};
