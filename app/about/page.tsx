import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — verve AI Agency",
  description: "Learn about verve — AI automation specialists helping accounting firms scale smarter.",
};

const values = [
  { icon: "🎯", title: "Results-Driven", desc: "We measure success by hours saved and revenue unlocked — not technology complexity." },
  { icon: "🔍", title: "Compliance-First", desc: "We build with CPA confidentiality rules, data security standards, and audit trails in mind." },
  { icon: "⚡", title: "Speed Matters", desc: "We deliver working solutions in weeks, not months — with fast feedback cycles." },
  { icon: "🤝", title: "True Partnership", desc: "We're not vendors. We become embedded partners in your practice's growth." },
  { icon: "🧠", title: "Deep Expertise", desc: "We stay on the cutting edge of AI so you can focus on serving clients." },
  { icon: "🛡️", title: "Security & Privacy", desc: "SOC 2 compliant infrastructure, encrypted data, and signed NDAs — always." },
];

const team = [
  { avatar: "👨‍💻", name: "Ali Zedan", role: "Founder", bio: "5 years of AI and software development. Built automation systems for Fortune 500 companies before focusing on serving accounting practices." },
];

const stats = [
  { target: 50, suffix: "+", label: "Firms Served" },
  { target: 10, suffix: "k+", label: "Hours Saved" },
  { target: 3, suffix: " yrs", label: "In Operation" },
  { target: 95, suffix: "%", label: "Client Retention" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-[160px] pb-20 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-[clamp(2.2rem,5vw,3rem)] font-bold tracking-tight mb-4 text-black">
            We Are verve
          </h1>
          <p className="text-[#4B5563] text-lg max-w-[560px] mx-auto">
            AI automation specialists helping accounting firms scale smarter.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-[120px] px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md aspect-square flex items-center justify-center text-[6rem] relative overflow-hidden">
              🚀
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold mb-5 leading-tight text-black">
              Built by Technologists for Accountants
            </h2>
            <p className="text-[#4B5563] text-[0.95rem] mb-4 leading-[1.7]">
              We saw accounting professionals drowning in manual data entry, repetitive workflows,
              and client communication overload. Meanwhile, AI technology was advancing rapidly —
              but nobody was building practical tools for CPAs.
            </p>
            <p className="text-[#4B5563] text-[0.95rem] mb-4 leading-[1.7]">
              That&apos;s why we started verve: to bring enterprise-grade AI automation to accounting
              practices of all sizes.
            </p>
            <p className="text-[#4B5563] text-[0.95rem] mb-8 leading-[1.7]">
              Today we&apos;ve helped over 50 firms automate millions of tasks, save thousands of
              hours, and scale without adding headcount.
            </p>
            <Link href="/contact?book=true" className="btn-primary font-semibold px-7 py-3 rounded-md inline-flex items-center gap-2 text-sm">
              Work With Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-[120px] px-[5%] bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold mb-4 text-black">
            Our Core Values
          </h2>
          <p className="text-[#6B7280]">The principles that guide every decision, every build, and every client relationship.</p>
        </div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="card rounded-md p-7">
              <div className="text-3xl mb-4">{icon}</div>
              <h4 className="font-semibold mb-2 text-black">{title}</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-[120px] px-[5%] bg-white">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold mb-4 text-black">
            Meet the Team
          </h2>
          <p className="text-[#6B7280]">A small but mighty crew of specialists who care deeply about craft and outcomes.</p>
        </div>
        <div className="max-w-[400px] mx-auto">
          {team.map(({ avatar, name, role, bio }) => (
            <div key={name} className="bg-white border border-[#E5E7EB] rounded-md p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center text-4xl mx-auto mb-5">{avatar}</div>
              <h4 className="font-semibold mb-1.5 text-black">{name}</h4>
              <span className="text-xs text-[#2E8B57] font-semibold">{role}</span>
              <p className="text-sm text-[#6B7280] mt-3 leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-[5%] bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map(({ target, suffix, label, ...rest }) => (
            <div key={label}>
              <div className="text-5xl font-bold text-black mb-2">
                <AnimatedCounter target={target} suffix={suffix} {...rest} />
              </div>
              <div className="text-sm text-[#6B7280]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%] bg-white border-t border-[#E5E7EB]">
        <div className="max-w-[700px] mx-auto text-center py-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Transform Your Practice?</h2>
          <p className="text-[#6B7280] max-w-[480px] mx-auto mb-9">Whether you&apos;re just exploring AI or ready to transform your operations, we&apos;d love to talk.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?book=true" className="btn-primary font-semibold px-7 py-3 rounded-md text-sm">Book Free Call</Link>
            <Link href="/services" className="btn-secondary font-semibold px-7 py-3 rounded-md text-sm">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
