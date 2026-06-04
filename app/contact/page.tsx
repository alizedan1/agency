"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const contactItems = [
  { icon: "📧", label: "Email", value: "hello@stakup.ai" },
  { icon: "📅", label: "Book a Call", value: "Free 30-min strategy session" },
  { icon: "⏱️", label: "Response Time", value: "Within 24 hours" },
  { icon: "🌍", label: "We Work With", value: "CPA firms nationwide (remote)" },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "2-6 weeks for most automation projects. We ship working software early and often.",
  },
  {
    q: "Do I need to be tech-savvy?",
    a: "No. We handle all technical work and train your team on using the finished product.",
  },
  {
    q: "What happens after delivery?",
    a: "30-90 day support period, then optional ongoing retainer for continuous improvements and new automations.",
  },
  {
    q: "Is my client data safe?",
    a: "Yes. SOC 2 compliant, encrypted infrastructure, signed NDAs before any project begins.",
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
      {/* CONTACT INFO CARDS */}
      <section className="pb-16 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map(({ icon, label, value }) => (
            <div key={label} className="bg-white border border-[#E5E7EB] rounded-md p-6 text-center hover:border-[#2E8B57] transition-colors duration-200">
              <div className="text-2xl mb-3">{icon}</div>
              <span className="block text-xs text-[#9CA3AF] uppercase tracking-[0.1em] mb-1">{label}</span>
              <strong className="text-sm text-black font-semibold">{value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="pb-24 px-[5%]">
        <div className="max-w-[700px] mx-auto bg-white border border-[#E5E7EB] rounded-md p-10">
          <h3 className="text-xl font-semibold mb-2 text-black">Send Us a Message</h3>
          <p className="text-sm text-[#6B7280] mb-8">Fill in the details below and we&apos;ll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-semibold text-[#4B5563]" htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your full name" required className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-black placeholder-[#9CA3AF] outline-none focus:border-[#2E8B57] transition-all duration-200" />
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-semibold text-[#4B5563]" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@yourfirm.com" required className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-black placeholder-[#9CA3AF] outline-none focus:border-[#2E8B57] transition-all duration-200" />
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-semibold text-[#4B5563]" htmlFor="firm">Firm Name</label>
              <input id="firm" type="text" placeholder="Your accounting firm" className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-black placeholder-[#9CA3AF] outline-none focus:border-[#2E8B57] transition-all duration-200" />
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-semibold text-[#4B5563]" htmlFor="firmSize">Firm Size</label>
              <select id="firmSize" className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-black outline-none focus:border-[#2E8B57] transition-all duration-200">
                <option value="">Select firm size...</option>
                <option value="solo">Solo</option>
                <option value="2-5">2-5 people</option>
                <option value="6-15">6-15 people</option>
                <option value="16-50">16-50 people</option>
                <option value="50+">50+ people</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-semibold text-[#4B5563]" htmlFor="service">Service Interest</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-black outline-none focus:border-[#2E8B57] transition-all duration-200"
              >
                <option value="">Select a service...</option>
                <option value="document">Document Automation</option>
                <option value="workflow">Workflow Automation</option>
                <option value="chatbot">Client Chatbot</option>
                <option value="tax">Tax Research AI</option>
                <option value="integration">Custom Integration</option>
                <option value="consulting">Strategy Consulting</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-7">
              <label className="text-xs font-semibold text-[#4B5563]" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your practice and what you'd like to automate..."
                required
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-black placeholder-[#9CA3AF] outline-none focus:border-[#2E8B57] transition-all duration-200 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-3.5 rounded-md text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                status === "sent"
                  ? "bg-green-600 text-white"
                  : "btn-primary"
              }`}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent! ✓"}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-[5%] bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-[750px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm text-black hover:bg-[#F9FAFB] transition-colors duration-200"
              >
                {faq.q}
                <span className={`text-[#6B7280] text-xl ml-4 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E7EB] pt-4">
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
      {/* HERO */}
      <section className="pt-[160px] pb-16 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-[clamp(2.2rem,5vw,3rem)] font-bold tracking-tight mb-4 text-black">
            Let&apos;s Automate Your Practice
          </h1>
          <p className="text-[#4B5563] text-lg max-w-[560px] mx-auto">
            Schedule a free consultation to discuss your firm&apos;s automation needs.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </>
  );
}
