"use client";

import { useState, useRef, useEffect } from "react";
import type { ProjectState, ChatMessage } from "@/lib/types";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

let msgId = 3;

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey there! I'm Stak, StakUp's AI assistant. I'll walk you through a quick evaluation to scope your project and get you a quote.", isUser: false },
    { id: 2, text: "Let's start with the basics — what are you looking to build?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [projectState, setProjectState] = useState<ProjectState>({
    currentPass: 1,
    originalQuote: null,
    scopeLog: [],
    changeOrders: [],
  });
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const streamingStarted = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      // On initial mount, scroll inside the chat container without affecting the page
      isInitialMount.current = false;
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: msgId++, text, isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    streamingStarted.current = false;

    const newHistory: ChatMessage[] = [
      ...conversationHistory,
      { role: "user", content: text },
    ];

    const botMsgId = msgId++;
    setMessages((prev) => [...prev, { id: botMsgId, text: "", isUser: false }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory, projectState }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";
      let updatedState = projectState;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const raw = decoder.decode(value, { stream: true });
        const lines = raw.split("\n\n").filter((l) => l.startsWith("data: "));

        for (const line of lines) {
          let payload: { text?: string; done?: boolean; updatedProjectState?: ProjectState; error?: string };
          try {
            payload = JSON.parse(line.slice(6));
          } catch {
            continue;
          }

          if (payload.done) {
            if (payload.updatedProjectState) updatedState = payload.updatedProjectState;
          } else if (payload.text) {
            if (!streamingStarted.current) {
              streamingStarted.current = true;
              setIsTyping(false);
            }
            accumulatedText += payload.text;
            setMessages((prev) =>
              prev.map((m) => (m.id === botMsgId ? { ...m, text: accumulatedText } : m))
            );
          }
        }
      }

      setProjectState(updatedState);
      setConversationHistory([
        ...newHistory,
        { role: "assistant", content: accumulatedText },
      ]);
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botMsgId
            ? { ...m, text: "Sorry, something went wrong. Please try again." }
            : m
        )
      );
    } finally {
      setIsTyping(false);
    }
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
      <div ref={chatContainerRef} className="flex flex-col gap-4 p-5 min-h-[280px] max-h-[320px] overflow-y-auto">
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
