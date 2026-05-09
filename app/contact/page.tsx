"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const contactItems = [
  { icon: "📧", label: "Email", value: "hello@stakup.ai" },
  { icon: "📅", label: "Book a Call", value: "Free 30-min strategy session" },
  { icon: "⏱️", label: "Response Time", value: "Within 24 hours" },
  { icon: "🌍", label: "Where We Work", value: "Remote — Worldwide" },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship within 2–6 weeks depending on scope. We're fast because we iterate in short cycles rather than doing months of upfront planning. You'll see working software early and often.",
  },
  {
    q: "Do I need technical knowledge to work with you?",
    a: "Not at all. We work with non-technical founders, executives, and operators all the time. We explain everything in plain language and handle all the technical complexity so you can focus on your business.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "All projects include a support period (30–90 days depending on package). After that, many clients move to an ongoing retainer for continuous improvements, monitoring, and new automations.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We sign NDAs before any project begins, use encrypted infrastructure, and never share client data with third parties. Data privacy and security are built into every system we design.",
  },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (searchParams.get("book") === "true") {
      setService("consulting");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
    setTimeout(() => setStatus("idle"), 4500);
  };

  return (
    <>
      {/* CONTACT WRAPPER */}
      <section className="pt-10 pb-24 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">

          {/* INFO */}
          <div>
            <span className="section-label mb-4 block">Reach Out</span>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold mb-4 leading-tight">
              We&apos;re Ready When <span className="gradient-text">You Are</span>
            </h2>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed">
              Whether you have a specific project in mind or just want to understand how AI
              can help, we&apos;re here for it. Most clients book a free call first — no commitment required.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {contactItems.map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 min-w-[44px] bg-accent-purple/10 border border-accent-purple/20 rounded-lg flex items-center justify-center text-xl">{icon}</div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-[0.1em] mb-1">{label}</span>
                    <strong className="text-sm text-white font-semibold">{value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct booking card */}
            <div className="bg-bg-card border border-accent-purple/50 rounded-2xl p-7">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-accent-purple mb-3">Skip the Form</div>
              <h4 className="font-bold text-lg mb-2">Book Directly</h4>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Prefer to jump straight to a call? Schedule a free 30-minute discovery session.
              </p>
              <button
                onClick={() => alert("Connect Calendly or Cal.com to activate calendar booking.")}
                className="btn-gradient text-white font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 w-full justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
                Schedule a Free Call
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-bg-card card-border rounded-2xl p-10">
            <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-sm text-slate-400 mb-8">Fill in the details below and we&apos;ll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400" htmlFor="first">First Name</label>
                  <input id="first" type="text" placeholder="Alex" required className="bg-white/[0.04] border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent-purple focus:bg-accent-purple/[0.06] transition-all duration-200" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-400" htmlFor="last">Last Name</label>
                  <input id="last" type="text" placeholder="Rivera" required className="bg-white/[0.04] border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent-purple focus:bg-accent-purple/[0.06] transition-all duration-200" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-xs font-semibold text-slate-400" htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="alex@company.com" required className="bg-white/[0.04] border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent-purple focus:bg-accent-purple/[0.06] transition-all duration-200" />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-xs font-semibold text-slate-400" htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Acme Inc." className="bg-white/[0.04] border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent-purple focus:bg-accent-purple/[0.06] transition-all duration-200" />
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-xs font-semibold text-slate-400" htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="bg-bg-primary border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent-purple transition-all duration-200"
                >
                  <option value="">Select a service...</option>
                  <option value="agents">Custom AI Agents</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="llm">LLM / Chatbot Integration</option>
                  <option value="analytics">AI-Powered Analytics</option>
                  <option value="backend">AI API & Backend</option>
                  <option value="consulting">Strategy Consulting</option>
                  <option value="other">Not Sure Yet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-xs font-semibold text-slate-400" htmlFor="budget">Budget Range</label>
                <select id="budget" className="bg-bg-primary border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-accent-purple transition-all duration-200">
                  <option value="">Select a range...</option>
                  <option value="starter">Under $5,000</option>
                  <option value="growth">$5,000 – $15,000</option>
                  <option value="scale">$15,000 – $50,000</option>
                  <option value="enterprise">$50,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label className="text-xs font-semibold text-slate-400" htmlFor="message">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe what you're trying to build or automate. The more detail, the better!"
                  required
                  className="bg-white/[0.04] border border-accent-purple/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent-purple focus:bg-accent-purple/[0.06] transition-all duration-200 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "sent"
                    ? "bg-green-500 text-white"
                    : "btn-gradient text-white"
                }`}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent! ✓"}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-[5%] border-t border-b border-accent-purple/20" style={{ background: "#0c1120" }}>
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="section-label mb-4 inline-flex">FAQ</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="max-w-[750px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg-card card-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm hover:bg-white/[0.02] transition-colors duration-200"
              >
                {faq.q}
                <span className={`text-accent-purple text-xl ml-4 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-accent-purple/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-[160px] pb-16 px-[5%] text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)" }} />
          <div className="hero-grid absolute inset-0" />
        </div>
        <span className="section-label justify-center mb-4 inline-flex">Let&apos;s Talk</span>
        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black tracking-tight mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[560px] mx-auto">
          Ready to explore AI for your business? We&apos;d love to hear about your project and see how we can help.
        </p>
      </section>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </>
  );
}
