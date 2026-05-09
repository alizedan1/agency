import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — StakUp AI Agency",
  description: "Learn about StakUp — the team, the mission, and the values driving the next generation of AI-powered businesses.",
};

const values = [
  { icon: "🎯", title: "Outcomes First", desc: "We measure success by the business results we create, not the complexity of what we built." },
  { icon: "🔍", title: "Radical Transparency", desc: "You'll always know what we're building, why, and what to expect — no black boxes, no surprises." },
  { icon: "⚡", title: "Move Fast", desc: "We ship working software in weeks, gather feedback, and iterate — not months of planning." },
  { icon: "🤝", title: "True Partnership", desc: "We're not vendors — we become embedded partners invested in your long-term success." },
  { icon: "🧠", title: "Expertise Matters", desc: "We stay on the cutting edge of AI so you don't have to. Our team is always learning." },
  { icon: "🌱", title: "Responsible AI", desc: "We build with ethics in mind — secure, private, and designed for human benefit." },
];

const team = [
  { avatar: "👨‍💻", name: "Alex Rivera", role: "Co-Founder & CEO", bio: "Former ML engineer at a top tech firm. Obsessed with making AI practical for real businesses." },
  { avatar: "👩‍🔬", name: "Priya Sharma", role: "Co-Founder & CTO", bio: "PhD in ML, ex-research lead. Architect of all the systems that power our client solutions." },
  { avatar: "🧑‍🎨", name: "Jordan Lee", role: "Head of Product & Design", bio: "10 years in product. Ensures every AI tool we build is actually usable by real people." },
  { avatar: "👨‍🚀", name: "Marcus Chen", role: "Lead AI Engineer", bio: "Agent-builder extraordinaire. If it can be automated, Marcus has probably automated it." },
];

const stats = [
  { target: 50, suffix: "+", label: "Projects Shipped" },
  { target: 10, suffix: "k+", label: "Hours Saved" },
  { target: 3, suffix: " yrs", label: "In Operation" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-[160px] pb-20 px-[5%] text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)" }} />
          <div className="hero-grid absolute inset-0" />
        </div>
        <span className="section-label justify-center mb-4 inline-flex">Our Story</span>
        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black tracking-tight mb-4">
          We Are <span className="gradient-text">StakUp</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[560px] mx-auto">
          A team of engineers, designers, and AI researchers obsessed with building tools that make businesses smarter.
        </p>
      </section>

      {/* ABOUT STORY */}
      <section className="py-16 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="bg-bg-card card-border rounded-2xl aspect-square flex items-center justify-center text-[6rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-[0.06]" />
              🚀
            </div>
            <div className="hidden md:block absolute -bottom-5 -left-5 bg-bg-secondary border border-accent-purple/50 rounded-xl px-6 py-4 text-center">
              <div className="text-2xl font-black gradient-text"><AnimatedCounter target={50} suffix="+" /></div>
              <div className="text-xs text-slate-500">Projects</div>
            </div>
            <div className="hidden md:block absolute -top-5 -right-5 bg-bg-secondary border border-accent-purple/50 rounded-xl px-6 py-4 text-center">
              <div className="text-2xl font-black gradient-text"><AnimatedCounter target={3} suffix=" yrs" /></div>
              <div className="text-xs text-slate-500">Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label mb-4 block">Our Mission</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold mb-5 leading-tight">
              Making <span className="gradient-text">AI Accessible</span> for Every Business
            </h2>
            <p className="text-slate-400 text-[0.95rem] mb-4 leading-relaxed">
              StakUp was founded with a simple belief: the transformative power of AI shouldn&apos;t
              be reserved for billion-dollar enterprises. Every business — from a solo founder
              to a mid-market company — deserves intelligent automation that actually works.
            </p>
            <p className="text-slate-400 text-[0.95rem] mb-4 leading-relaxed">
              We started in 2023 when our founders saw a gap in the market: there were AI tools,
              and there were consultants, but no one was actually building production-ready AI
              systems for growing businesses at a fair price.
            </p>
            <p className="text-slate-400 text-[0.95rem] mb-8 leading-relaxed">
              Today we&apos;ve helped over 50 companies automate millions of tasks, save thousands of
              hours, and unlock new revenue streams through intelligent technology.
            </p>
            <Link href="/contact?book=true" className="btn-gradient text-white font-semibold px-7 py-3 rounded-full inline-flex items-center gap-2 text-sm">
              Work With Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-[5%] border-t border-b border-accent-purple/20" style={{ background: "#0c1120" }}>
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">What We Stand For</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-4">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-slate-400">The principles that guide every decision, every build, and every client relationship.</p>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="bg-bg-card card-border rounded-xl p-7 hover:border-accent-purple/50 transition-colors duration-200">
              <div className="text-3xl mb-4">{icon}</div>
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-[5%]">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="section-label mb-4 inline-flex">The People</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-slate-400">A small but mighty crew of specialists who care deeply about craft and outcomes.</p>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {team.map(({ avatar, name, role, bio }) => (
            <div key={name} className="bg-bg-card card-border rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-accent-purple/50 transition-all duration-200">
              <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center text-4xl mx-auto mb-5">{avatar}</div>
              <h4 className="font-bold mb-1.5">{name}</h4>
              <span className="text-xs text-accent-purple font-semibold">{role}</span>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-[5%] border-t border-b border-accent-purple/20" style={{ background: "#0c1120" }}>
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map(({ target, suffix, label, ...rest }) => (
            <div key={label}>
              <div className="text-5xl font-black gradient-text mb-2">
                <AnimatedCounter target={target} suffix={suffix} {...rest} />
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.08em]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%]">
        <div className="max-w-[800px] mx-auto bg-bg-card border border-accent-purple/50 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)" }} />
          <span className="section-label mb-5 inline-flex justify-center">Join Us</span>
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something <span className="gradient-text">Remarkable</span></h2>
          <p className="text-slate-400 max-w-[480px] mx-auto mb-9">Whether you&apos;re just exploring AI or ready to transform your operations, we&apos;d love to talk.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?book=true" className="btn-gradient text-white font-semibold px-7 py-3 rounded-full text-sm inline-block">Book a Free Call</Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-accent-purple/50 text-white hover:bg-accent-purple/10 transition-all duration-200">See Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
