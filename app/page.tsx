import Link from "next/link";
import ChatBot from "@/components/ChatBot";
import AnimatedCounter from "@/components/AnimatedCounter";

const services = [
  { icon: "🤖", title: "Custom AI Agents", desc: "Autonomous agents that reason, plan, and execute complex multi-step tasks on your behalf — 24/7 without human intervention." },
  { icon: "⚡", title: "Workflow Automation", desc: "Eliminate repetitive tasks with intelligent automation that integrates with your existing tools and processes seamlessly." },
  { icon: "💬", title: "LLM Integrations", desc: "Embed the power of cutting-edge language models directly into your products, apps, and internal tools." },
  { icon: "📊", title: "AI-Powered Analytics", desc: "Transform raw data into actionable insights with AI dashboards and predictive models built for your industry." },
  { icon: "🔗", title: "API & Backend AI", desc: "Production-ready AI backends, RESTful APIs, and scalable infrastructure designed for performance and reliability." },
  { icon: "🛡️", title: "AI Strategy Consulting", desc: "Our experts map out your AI roadmap and identify the highest-ROI opportunities fast." },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn about your business, challenges, and goals. Together we identify where AI can have the biggest impact." },
  { num: "02", title: "Strategy & Architecture", desc: "Our team designs a custom AI solution architecture tailored to your needs, tech stack, and budget." },
  { num: "03", title: "Build & Iterate", desc: "We develop in fast cycles with regular demos and feedback loops, keeping you in the loop at every step." },
  { num: "04", title: "Deploy & Scale", desc: "We deploy to production, monitor performance, and optimize over time. Your AI solution grows as your business grows." },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-[5%] pt-[120px] pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="hero-grid absolute inset-0" />
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[80px] animate-float" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.35) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full blur-[80px] animate-float2" style={{ background: "radial-gradient(circle, rgba(0,212,255,0.22) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full blur-[80px] animate-float3" style={{ background: "radial-gradient(circle, rgba(255,107,157,0.18) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-[820px] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-purple/[0.12] border border-accent-purple/30 rounded-full text-xs font-semibold text-accent-cyan mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse2" />
            Intelligent Automation for Modern Business
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tight leading-[1.1] mb-6">
            Build Smarter.<br />
            <span className="gradient-text">Scale Faster.</span><br />
            With AI.
          </h1>

          <p className="text-lg text-slate-400 max-w-[560px] mx-auto mb-10">
            StakUp designs and deploys custom AI agents, automation pipelines, and intelligent
            integrations that save time, cut costs, and unlock new growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?book=true" className="btn-gradient text-white font-semibold px-7 py-3 rounded-full inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
              Book a Free Strategy Call
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-accent-purple/50 text-white hover:bg-accent-purple/10 hover:border-accent-purple transition-all duration-200 w-full sm:w-auto">
              Explore Services
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 pt-12 border-t border-accent-purple/20">
            {[
              { target: 50, suffix: "+", label: "Projects Delivered" },
              { target: 10, suffix: "k+", label: "Hours Automated" },
              { target: 98, suffix: "%", label: "Client Satisfaction" },
              { target: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
            ].map(({ target, suffix, label, decimals }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black gradient-text">
                  <AnimatedCounter target={target} suffix={suffix} decimals={decimals} />
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-[0.08em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHATBOT ===== */}
      <section className="relative py-20 px-[5%] overflow-hidden" style={{ background: "#0c1120" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #6c63ff, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #6c63ff, transparent)" }} />

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-4 block">AI Assistant</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-5 leading-tight">
              Meet <span className="gradient-text">Stak</span>, Your AI Business Partner
            </h2>
            <p className="text-slate-400 mb-8 text-[0.95rem]">
              Get instant answers about our services, pricing, and how AI can transform
              your operations — available 24/7, no waiting.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {["Instant responses to your AI questions", "Personalized service recommendations", "Qualified leads connect directly with our team", "Available around the clock, every day"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="w-[18px] h-[18px] min-w-[18px] rounded-full bg-accent-purple/20 border border-accent-purple inline-flex items-center justify-center">
                    <svg width="9" height="7" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#6c63ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-accent-purple/50 text-white hover:bg-accent-purple/10 transition-all duration-200">
              Talk to a Human Instead
            </Link>
          </div>
          <ChatBot />
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 px-[5%]">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">What We Build</span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">
            AI Solutions That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-slate-400">From intelligent chatbots to fully automated workflows, we engineer AI products that work in the real world.</p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="bg-bg-card card-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none" />
              <div className="w-[52px] h-[52px] rounded-xl bg-accent-purple/[0.12] border border-accent-purple/30 flex items-center justify-center text-2xl mb-5">{icon}</div>
              <h3 className="font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-purple hover:text-accent-cyan transition-colors duration-200">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 px-[5%] border-t border-b border-accent-purple/20" style={{ background: "#0c1120" }}>
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">The Process</span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">
            From Idea to <span className="gradient-text">Production</span>
          </h2>
          <p className="text-slate-400">A clear, proven process that delivers working AI solutions in weeks, not months.</p>
        </div>
        <div className="max-w-[900px] mx-auto flex flex-col">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className={`grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-10 ${i < steps.length - 1 ? "border-b border-accent-purple/20" : ""}`}>
              <div className="text-4xl md:text-5xl font-black gradient-text opacity-40 leading-none">{num}</div>
              <div>
                <h3 className="text-xl font-bold mb-2.5">{title}</h3>
                <p className="text-slate-400 text-[0.95rem]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[800px] mx-auto bg-bg-card border border-accent-purple/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)" }} />
          <span className="section-label mb-5 inline-flex justify-center">Get Started</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-4">
            Ready to <span className="gradient-text">Automate & Grow</span>?
          </h2>
          <p className="text-slate-400 max-w-[480px] mx-auto mb-9">
            Book a free 30-minute strategy call and discover exactly how AI can save your team hours every week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?book=true" className="btn-gradient text-white font-semibold px-7 py-3 rounded-full inline-flex items-center gap-2 text-sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
              Book Free Call
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-accent-purple/50 text-white hover:bg-accent-purple/10 transition-all duration-200">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
