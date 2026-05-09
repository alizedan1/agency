"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const BOT_REPLIES = [
  "Great question! StakUp specializes in building custom AI solutions tailored to your business needs.",
  "We'd love to help you automate your workflows. Our team can build intelligent agents that work 24/7.",
  "Our services include AI agents, automation pipelines, LLM integrations, and custom chatbots.",
  "Ready to get started? Click 'Book Now' to schedule a free strategy call with our team.",
  "We've helped dozens of businesses save thousands of hours through intelligent automation.",
  "From MVP to production, we deliver AI solutions that scale with your business.",
];

let msgId = 3;

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey there! I'm Stak, StakUp's AI assistant. How can I help you today?", isUser: false },
    { id: 2, text: "I can answer questions about our services, pricing, or help you figure out the best AI solution for your business.", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [replyIndex, setReplyIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: msgId++, text, isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: msgId++,
        text: BOT_REPLIES[replyIndex % BOT_REPLIES.length],
        isUser: false,
      };
      setMessages((prev) => [...prev, botMsg]);
      setReplyIndex((i) => i + 1);
    }, 1200 + Math.random() * 800);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-accent-purple/20 shadow-glow bg-bg-card">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-accent-purple/[0.08] border-b border-accent-purple/20">
        <div className="relative w-9 h-9 rounded-full bg-gradient-accent flex items-center justify-center text-base">
          🤖
          <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-bg-card" />
        </div>
        <div>
          <h4 className="text-sm font-semibold">Stak AI</h4>
          <span className="text-xs text-green-400">● Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-4 p-5 min-h-[280px] max-h-[320px] overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2.5 items-start ${msg.isUser ? "flex-row-reverse" : ""}`}>
            <div className="w-7 h-7 min-w-[28px] rounded-full bg-gradient-accent flex items-center justify-center text-xs font-bold text-white">
              {msg.isUser ? "U" : "S"}
            </div>
            <div
              className={`max-w-[75%] px-3.5 py-2.5 text-sm leading-relaxed ${
                msg.isUser
                  ? "bg-gradient-accent text-white rounded-2xl rounded-tr-sm"
                  : "bg-accent-purple/[0.12] border border-accent-purple/20 text-slate-100 rounded-2xl rounded-tl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2.5 items-start">
            <div className="w-7 h-7 min-w-[28px] rounded-full bg-gradient-accent flex items-center justify-center text-xs font-bold text-white">S</div>
            <div className="flex gap-1 px-4 py-3 bg-accent-purple/10 rounded-2xl rounded-tl-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-typing1" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-typing2" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-typing3" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-3 items-center px-5 py-4 border-t border-accent-purple/20">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask me anything about AI..."
          className="flex-1 bg-white/[0.04] border border-accent-purple/20 rounded-full px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-accent-purple focus:bg-accent-purple/[0.06] transition-all duration-200"
        />
        <button
          onClick={sendMessage}
          aria-label="Send"
          className="w-10 h-10 min-w-[40px] rounded-full bg-gradient-accent flex items-center justify-center text-white hover:scale-110 hover:shadow-glow-btn transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
