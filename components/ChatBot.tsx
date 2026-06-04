"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

// ── Service routing map ──────────────────────────────────────────────────────
const SERVICES = {
  docs: {
    slug: "intelligent-document-processing",
    name: "Intelligent Document Processing",
    line: "Sounds like manual data entry is the bottleneck. We extract data from invoices, receipts, W-2s and bank statements straight into QuickBooks or Xero — no typing.",
    kw: ["data entry","invoice","receipt","document","ocr","typing","scan","statement","w-2","1099","pdf","bookkeep"],
  },
  workflow: {
    slug: "workflow-automation",
    name: "Workflow Automation",
    line: "Repetitive process work is exactly what we automate — onboarding, month-end close checklists, approval routing and reconciliation alerts that run themselves.",
    kw: ["workflow","onboarding","close","approval","reconcil","checklist","deadline","routine","process","repetitive","task"],
  },
  assistant: {
    slug: "ai-client-assistants",
    name: "AI Client Assistants",
    line: "If client questions are eating your day, a 24/7 assistant trained on your firm's knowledge can answer them, book appointments, and only escalate the tricky ones.",
    kw: ["email","client question","chatbot","assistant","inquir","24/7","support","answer","appointment","schedul","call"],
  },
  research: {
    slug: "tax-research-compliance-ai",
    name: "Tax Research & Compliance AI",
    line: "Tax research that took hours takes seconds — we search IRS codes, rulings and state regs and return cited answers with confidence scores.",
    kw: ["tax","research","irs","compliance","ruling","regulation","case law","citation","state tax","nexus"],
  },
  integrations: {
    slug: "custom-integrations",
    name: "Custom Integrations",
    line: "We connect the tools you already use — QuickBooks, Xero, Bill.com, Gusto, Gmail, Slack — into one workflow, and build custom APIs where connectors fall short.",
    kw: ["quickbooks","xero","integrat","connect","bill.com","gusto","api","sync","tool","slack","gmail","excel"],
  },
  strategy: {
    slug: "practice-growth-strategy",
    name: "Practice Growth Strategy",
    line: "Not sure where to start is the most common answer. We audit your workflows and hand you a prioritized AI roadmap with ROI on every step.",
    kw: ["not sure","start","strategy","roadmap","audit","grow","where","everything","overwhelm","plan","advice"],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

const CHIPS: { label: string; key: ServiceKey }[] = [
  { label: "Too much data entry",           key: "docs"         },
  { label: "Drowning in client emails",     key: "assistant"    },
  { label: "Tax research takes forever",    key: "research"     },
  { label: "Manual, repetitive workflows",  key: "workflow"     },
  { label: "My tools don't talk to each other", key: "integrations" },
  { label: "Not sure — show me everything", key: "strategy"     },
];

function route(text: string): ServiceKey {
  const t = text.toLowerCase();
  let best: ServiceKey | null = null;
  let bestScore = 0;
  for (const key of Object.keys(SERVICES) as ServiceKey[]) {
    let score = 0;
    for (const kw of SERVICES[key].kw) if (t.includes(kw)) score++;
    if (score > bestScore) { bestScore = score; best = key; }
  }
  return bestScore > 0 && best ? best : "strategy";
}

// ── Message types ────────────────────────────────────────────────────────────
type BotMsg   = { id: number; role: "bot";  text: string };
type UserMsg  = { id: number; role: "user"; text: string };
type ChipsMsg = { id: number; role: "chips" };
type RecMsg   = { id: number; role: "rec";  serviceKey: ServiceKey };
type Msg = BotMsg | UserMsg | ChipsMsg | RecMsg;

let msgId = 0;
const uid = () => ++msgId;

export default function ChatBot() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chipsVisible, setChipsVisible] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const initiated = useRef(false);

  const scroll = () => {
    setTimeout(() => {
      if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    }, 50);
  };

  const addBot = (text: string, delay = 0) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: uid(), role: "bot", text }]);
        scroll();
        resolve();
      }, delay);
    });

  const showTyping = (ms: number) => {
    setTyping(true);
    return new Promise<void>((r) => setTimeout(() => { setTyping(false); r(); }, ms));
  };

  useEffect(() => {
    if (initiated.current) return;
    initiated.current = true;

    (async () => {
      await showTyping(350);
      await addBot("Hi — I'm Verve. Tell me what's eating your team's time and I'll show you exactly which fix pays off first.");
      await showTyping(500);
      await addBot("What's the biggest drag on your practice right now?");
      setChipsVisible(true);
      scroll();
    })();
  }, []);

  const recommend = async (key: ServiceKey, userText: string) => {
    setChipsVisible(false);
    setMessages((prev) => [...prev, { id: uid(), role: "user", text: userText }]);
    scroll();

    await showTyping(750);
    await addBot(SERVICES[key].line);
    setMessages((prev) => [...prev, { id: uid(), role: "rec", serviceKey: key }]);
    scroll();
    await showTyping(600);
    await addBot("Want me to point you somewhere else? Just tell me what else is on your plate.");
    scroll();
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    const key = route(text);
    await recommend(key, text);
  };

  return (
    <div className="flex flex-col bg-white border border-line rounded-lg overflow-hidden shadow-chat"
         style={{ minHeight: 0 }}>

      {/* Header */}
      <div className="flex items-center gap-[0.7rem] px-5 py-4 flex-shrink-0 border-b border-line-soft"
           style={{ background: "linear-gradient(180deg, #fff, #FBFAF4)" }}>
        <div className="w-[38px] h-[38px] rounded-full bg-sage flex items-center justify-center flex-shrink-0"
             style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "1.25rem", color: "#fff",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}>
          v
        </div>
        <div className="flex flex-col leading-[1.25]">
          <span className="font-semibold text-[0.95rem] text-ink tracking-tight">Verve</span>
          <span className="flex items-center gap-[0.4em] text-[0.72rem] text-ink-muted">
            <i className="not-italic w-[6px] h-[6px] rounded-full bg-sage inline-block animate-pulse-dot" />
            Online · replies instantly
          </span>
        </div>
      </div>

      {/* Log */}
      <div
        ref={logRef}
        className="flex-1 overflow-y-auto p-5 flex flex-col gap-[0.85rem] scroll-smooth"
        style={{
          background: "radial-gradient(circle at 100% 0%, #EAF0E2 0%, transparent 40%)",
          minHeight: "220px",
          maxHeight: "340px",
        }}
      >
        {messages.map((msg) => {
          if (msg.role === "bot") {
            return (
              <div key={msg.id} className="flex gap-[0.6rem] items-end animate-vrise">
                <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center flex-shrink-0 text-white"
                     style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "0.95rem" }}>
                  v
                </div>
                <div className="text-[0.95rem] leading-[1.5] px-[0.95rem] py-[0.7rem] rounded-[18px] rounded-bl-[5px] max-w-[80%] bg-cream text-ink-soft">
                  {msg.text}
                </div>
              </div>
            );
          }
          if (msg.role === "user") {
            return (
              <div key={msg.id} className="flex justify-end animate-vrise">
                <div className="text-[0.95rem] leading-[1.5] px-[0.95rem] py-[0.7rem] rounded-[18px] rounded-br-[5px] max-w-[80%] bg-sage text-white">
                  {msg.text}
                </div>
              </div>
            );
          }
          if (msg.role === "rec") {
            const s = SERVICES[(msg as RecMsg).serviceKey];
            return (
              <div key={msg.id} className="flex gap-[0.6rem] items-start animate-vrise">
                <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center flex-shrink-0 text-white mt-[2px]"
                     style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "0.95rem" }}>
                  v
                </div>
                <div className="rounded-[18px] rounded-bl-[5px] p-[1.05rem_1.15rem] max-w-[86%] animate-vrise"
                     style={{ background: "#18271C", color: "#EEF2E6" }}>
                  <div className="text-[0.66rem] font-semibold tracking-[0.14em] uppercase mb-[0.35rem]"
                       style={{ color: "#9DB389" }}>
                    Recommended for you
                  </div>
                  <div className="font-serif text-[1.35rem] leading-[1.1] mb-[0.9rem]">
                    {s.name}
                  </div>
                  <div className="flex flex-wrap gap-[0.55rem] items-center">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-[0.45em] text-[0.86rem] font-semibold text-white no-underline px-[1em] py-[0.55em] rounded-pill bg-sage hover:bg-sage-soft transition-all duration-200"
                    >
                      See how it works
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[0.86rem] font-medium no-underline px-[0.4em] py-[0.55em] border-b border-transparent"
                      style={{ color: "rgba(238,242,230,0.55)" }}
                    >
                      Book a free call
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}

        {/* Pain-point chips */}
        {chipsVisible && (
          <div className="flex flex-wrap gap-[0.5rem] pl-[2.2rem] animate-vrise">
            {CHIPS.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={() => recommend(chip.key, chip.label)}
                className="text-[0.85rem] font-medium text-sage-deep bg-white border border-sage-soft rounded-pill px-[0.9em] py-[0.5em] cursor-pointer transition-all duration-200 hover:bg-sage hover:text-white hover:border-sage hover:-translate-y-px"
              >
                {chip.label}
              </button>
            ))}
          </div>
        )}

        {/* Typing indicator */}
        {typing && (
          <div className="flex gap-[0.6rem] items-end animate-vrise">
            <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center flex-shrink-0 text-white"
                 style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontSize: "0.95rem" }}>
              v
            </div>
            <div className="flex gap-[3px] px-4 py-3 bg-cream rounded-[18px] rounded-bl-[5px]">
              <div className="w-[6px] h-[6px] rounded-full bg-ink-ghost animate-typing1" />
              <div className="w-[6px] h-[6px] rounded-full bg-ink-ghost animate-typing2" />
              <div className="w-[6px] h-[6px] rounded-full bg-ink-ghost animate-typing3" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-[0.6rem] px-[0.95rem] py-[0.85rem] border-t border-line-soft bg-white flex-shrink-0"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe what's slowing your practice down…"
          className="flex-1 font-sans text-[0.95rem] text-ink bg-paper border border-line rounded-pill px-[1.1em] py-[0.75em] outline-none transition-all duration-200 placeholder:text-ink-ghost focus:border-sage-soft focus:shadow-[0_0_0_3px_#EAF0E2]"
        />
        <button
          type="submit"
          aria-label="Send"
          className="w-11 h-11 flex-shrink-0 rounded-full bg-sage text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-sage-deep hover:scale-105 border-none"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
