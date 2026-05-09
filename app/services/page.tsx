import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — StakUp AI Agency",
  description: "Explore StakUp's full suite of AI services: custom agents, workflow automation, LLM integrations, analytics, and strategic consulting.",
};

const services = [
  {
    icon: "🤖",
    title: "Custom AI Agents",
    desc: "We design and deploy autonomous AI agents that can research, reason, and take action across your tools and systems — from email automation to complex multi-step workflows. Our agents integrate with APIs, databases, and third-party services to execute tasks with minimal human oversight.",
    tags: ["LangChain", "AutoGen", "Claude API", "OpenAI", "RAG"],
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    desc: "Eliminate manual, repetitive processes by wiring up intelligent automation pipelines. We connect your existing tools — CRMs, spreadsheets, email, Slack, databases — and build AI-powered logic that decides, routes, and acts automatically.",
    tags: ["n8n", "Make", "Zapier", "Python", "Webhooks"],
  },
  {
    icon: "💬",
    title: "LLM Integration & Chatbots",
    desc: "Embed state-of-the-art language models into your product or internal tools. We build context-aware chatbots, document Q&A systems, and intelligent assistants trained on your data and fine-tuned for your use case.",
    tags: ["Claude", "GPT-4o", "Gemini", "Fine-tuning", "Vector DBs"],
  },
  {
    icon: "📊",
    title: "AI-Powered Analytics",
    desc: "Turn raw data into competitive advantage with AI-driven dashboards, anomaly detection, and predictive models. We integrate with your data warehouse and build custom models that surface the insights you need most.",
    tags: ["Python", "SQL", "Pandas", "Tableau", "BigQuery"],
  },
  {
    icon: "🔗",
    title: "AI API & Backend Development",
    desc: "We build the backend infrastructure for AI products — scalable FastAPI/Node services, vector search, retrieval-augmented generation pipelines, and robust APIs that power your AI-first applications.",
    tags: ["FastAPI", "Node.js", "Pinecone", "Supabase", "AWS"],
  },
  {
    icon: "🛡️",
    title: "AI Strategy Consulting",
    desc: "Not sure where to start? Our consultants audit your current operations, identify automation opportunities, and deliver a prioritized AI roadmap with clear ROI estimates for each initiative.",
    tags: ["Roadmapping", "ROI Analysis", "Workshops", "Audits"],
  },
];

const techStack = [
  { icon: "🧠", label: "Claude API" },
  { icon: "⚡", label: "OpenAI" },
  { icon: "🔗", label: "LangChain" },
  { icon: "🐍", label: "Python" },
  { icon: "📦", label: "Supabase" },
  { icon: "🌲", label: "Pinecone" },
];

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    unit: "/project",
    desc: "Perfect for small automations and chatbot MVPs",
    features: ["1 automation pipeline", "Basic LLM integration", "2-week delivery", "30-day support"],
    cta: "Get Started",
    href: "/contact?book=true",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$7,500",
    unit: "/project",
    desc: "Full AI agent systems and complex integrations",
    features: ["Up to 5 automations", "Custom AI agent", "Full stack AI backend", "4-week delivery", "90-day support"],
    cta: "Get Started",
    href: "/contact?book=true",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    desc: "Tailored AI programs for larger organizations",
    features: ["Unlimited scope", "Dedicated AI team", "SLA guarantees", "Ongoing retainer", "Priority support"],
    cta: "Contact Us",
    href: "/contact",
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-[160px] pb-20 px-[5%] text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)" }} />
          <div className="hero-grid absolute inset-0" />
        </div>
        <span className="section-label justify-center mb-4 inline-flex">What We Offer</span>
        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black tracking-tight mb-4">
          Our <span className="gradient-text">AI Services</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[560px] mx-auto">
          End-to-end AI solutions designed to automate, accelerate, and amplify your business.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon, title, desc, tags }) => (
            <div key={title} className="bg-bg-card card-border rounded-2xl p-9 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="w-[52px] h-[52px] rounded-xl bg-accent-purple/[0.12] border border-accent-purple/30 flex items-center justify-center text-2xl mb-5">{icon}</div>
              <h3 className="font-bold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-xs text-accent-purple">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-[5%] border-t border-b border-accent-purple/20" style={{ background: "#0c1120" }}>
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <span className="section-label mb-4 inline-flex">Tech Stack</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-4">
            Built on the <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="text-slate-400">We use the most capable, production-proven AI frameworks and infrastructure available.</p>
        </div>
        <div className="max-w-[900px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techStack.map(({ icon, label }) => (
            <div key={label} className="bg-bg-card card-border rounded-xl p-5 text-center hover:-translate-y-1 transition-all duration-200">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-xs font-semibold text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-[5%]">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">Pricing</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400">Clear packages designed to match your stage — from first experiments to enterprise rollouts.</p>
        </div>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(({ name, price, unit, desc, features, cta, href, highlighted }) => (
            <div
              key={name}
              className={`rounded-2xl p-9 relative ${
                highlighted
                  ? "bg-bg-card border-2 border-accent-purple shadow-glow"
                  : "bg-bg-card card-border"
              }`}
            >
              {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className={`text-xs font-bold uppercase tracking-[0.12em] mb-4 ${highlighted ? "text-accent-purple" : "text-slate-500"}`}>{name}</div>
              <div className="text-4xl font-black mb-1">
                {price}<span className="text-base text-slate-500 font-normal">{unit}</span>
              </div>
              <div className="text-sm text-slate-400 mb-7">{desc}</div>
              <ul className="flex flex-col gap-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="text-accent-purple">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className={`block text-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  highlighted
                    ? "btn-gradient text-white"
                    : "border border-accent-purple/50 text-white hover:bg-accent-purple/10"
                }`}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%]">
        <div className="max-w-[800px] mx-auto bg-bg-card border border-accent-purple/50 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)" }} />
          <span className="section-label mb-5 inline-flex justify-center">Get Started</span>
          <h2 className="text-3xl font-bold mb-4">Not Sure Which <span className="gradient-text">Plan Fits</span>?</h2>
          <p className="text-slate-400 max-w-[480px] mx-auto mb-9">Book a free discovery call and we&apos;ll recommend the best solution for your needs and budget.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?book=true" className="btn-gradient text-white font-semibold px-7 py-3 rounded-full text-sm inline-block">Book Free Strategy Call</Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-accent-purple/50 text-white hover:bg-accent-purple/10 transition-all duration-200">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
