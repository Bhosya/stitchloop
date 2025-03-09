import { useState } from "react";
import { requestToGroqAI } from "../utils/groq";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);

  const handleSubmit = async () => {
    if (!input) return;
    const userMessage = { user: input, bot: "Loading..." };
    setMessages((prev) => [...prev, userMessage]);

    const response = await requestToGroqAI(input);
    setMessages((prev) =>
      prev.map((msg, index) =>
        index === prev.length - 1 ? { ...msg, bot: response } : msg
      )
    );
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-md w-80">
      <h2 className="text-lg font-bold">AI Chatbot</h2>
      <div className="h-40 overflow-y-auto border p-2 my-2">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>User:</strong> {msg.user}
            </p>
            <p>
              <strong>Bot:</strong> {msg.bot}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="w-full border rounded p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};

export default Chatbot;
