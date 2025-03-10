import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { requestToGroqAI } from "../utils/groq";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const CustomerServiceChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setMessage("");

    // Get AI response from Groq API
    const aiResponse = await requestToGroqAI(message);
    const aiMessage: Message = {
      id: messages.length + 2,
      text: aiResponse || "Sorry, I couldn't process your request.",
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-[#8B4513] text-white rounded-full shadow-lg hover:bg-[#5C4033] transition-all duration-300 z-50 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-[90%] max-w-md bg-white rounded-lg shadow-xl transition-all duration-300 z-50 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#8B4513] text-white rounded-t-lg">
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            <h3 className="font-semibold">Customer Service</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-[#5C4033] rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-[#8B4513] text-white"
                    : "bg-[#FAF7F2] text-[#5C4033]"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-[#E2D5C3]"
        >
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-[#E2D5C3] rounded-md focus:outline-none focus:border-[#8B4513]"
            />
            <button
              type="submit"
              className="p-2 bg-[#8B4513] text-white rounded-md hover:bg-[#5C4033] transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerServiceChat;