"use client";

import Link from "next/link";
import ChatBot from "@/components/ChatBot";
import AnimatedCounter from "@/components/AnimatedCounter";
import { servicesData } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

// ── Scroll-reveal hook ────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    const el = ref.current;
    const els = el.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.18 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return ref as React.RefObject<HTMLElement>;
}

const steps = [
  { num: "01", title: "Discovery call",    desc: "We learn your workflows, pain points and tech stack — finding where AI saves the most time." },
  { num: "02", title: "Solution design",   desc: "Our team designs a solution tailored to your practice — invoice automation, client bots, or tax research assistants." },
  { num: "03", title: "Build & test",      desc: "We develop in fast cycles with regular demos. You give feedback, we iterate — tested on real accounting scenarios." },
  { num: "04", title: "Deploy & support",  desc: "We deploy to your environment, train your team, and provide ongoing support. Your AI improves as your practice grows." },
];

export default function HomePage() {
  const heroRef    = useReveal();
  const statsRef   = useReveal();
  const prodsRef   = useReveal();
  const howRef     = useReveal();
  const ctaRef     = useReveal();

  return (
    <>
      {/* ═══════════════════════════════════════════ HERO PANEL ══ */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="snap-panel relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          paddingTop: "84px",
          paddingBottom: "40px",
          background: `
            radial-gradient(ellipse 60% 50% at 20% 30%, #EAF0E2 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 70%, #E1EAD6 0%, transparent 60%),
            #FBFAF4
          `,
        }}
      >
        <div className="max-w-[760px] mx-auto w-full flex flex-col items-center gap-6">

          {/* Pill */}
          <div className="pill" data-reveal>
            <span className="dot" />
            AI automation for accounting firms
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-ink"
            style={{ fontSize: "clamp(1.9rem,4vw,3.1rem)", lineHeight: 1.1, letterSpacing: "-0.025em", maxWidth: "14ch" }}
            data-reveal
          >
            Tell us what&apos;s slowing you down.
            <br />
            <em className="not-italic italic" style={{ color: "#51703F" }}>
              We&apos;ll show you the fix.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="text-ink-muted"
            style={{ fontSize: "clamp(0.98rem,1.4vw,1.12rem)", maxWidth: "46ch", lineHeight: 1.65 }}
            data-reveal
          >
            Start a conversation. Verve listens, finds the busywork in your
            practice, and points you to the solution that pays off first.
          </p>

          {/* Chat widget */}
          <div className="w-full" style={{ maxWidth: "680px" }} data-reveal>
            <ChatBot />
          </div>

          {/* Trust row */}
          <div className="flex flex-col items-center gap-3 mt-2" data-reveal>
            <p className="text-ink-ghost uppercase tracking-[0.16em] font-semibold" style={{ fontSize: "0.65rem" }}>
              Trusted by accounting firms across the US
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {["Chen & Associates", "Rivera Tax Group", "Park Accounting", "Summit CPA"].map((name) => (
                <span key={name} className="text-sm font-medium text-ink-ghost">{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-ghost animate-[scrollbob_2s_ease-in-out_infinite]">
          <span className="text-[0.7rem] uppercase tracking-[0.14em] font-semibold">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ STATS PANEL ══ */}
      <section
        ref={statsRef as React.RefObject<HTMLElement>}
        className="py-20 px-6 lg:px-12"
        style={{ background: "#F2EFE3" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12" data-reveal>
            <span className="eyebrow">The cost of busywork</span>
            <h2
              className="font-serif text-ink mt-5"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.08, letterSpacing: "-0.022em" }}
            >
              Your team loses 20+ hours a week to work
              <br />a machine should be doing.
            </h2>
          </div>

          {/* Stat strip */}
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: "1px", background: "#E4E1D2" }}
            data-reveal
          >
            {[
              { target: 50,  suffix: "+",  label: "Firms served"          },
              { target: 10,  suffix: "k+", label: "Hours saved monthly"   },
              { target: 95,  suffix: "%",  label: "Faster data entry"      },
              { target: 4.9, suffix: "/5", label: "Client satisfaction", decimals: 1 },
            ].map(({ target, suffix, label, decimals }) => (
              <div key={label} className="flex flex-col items-center py-10 px-7" style={{ background: "#FBFAF4" }}>
                <div
                  className="font-serif text-sage-deep tabular-nums"
                  style={{ fontSize: "clamp(2.6rem,4.5vw,3.6rem)", lineHeight: 1 }}
                >
                  <AnimatedCounter target={target} suffix={suffix} decimals={decimals} />
                </div>
                <div className="text-ink-muted font-medium mt-2" style={{ fontSize: "0.95rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ PRODUCT PANELS ══ */}
      <section
        ref={prodsRef as React.RefObject<HTMLElement>}
        id="solutions"
        className="py-4 px-6 lg:px-12 scroll-mt-[68px]"
        style={{ background: "#FBFAF4" }}
      >
        {servicesData.map((svc, i) => {
          const isAlt = i % 2 !== 0;
          const indexLabel = String(i + 1).padStart(2, "0");
          return (
            <div
              key={svc.slug}
              className="max-w-[1180px] mx-auto py-20 lg:py-28"
              style={{ borderBottom: i < servicesData.length - 1 ? "1px solid #E4E1D2" : "none" }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isAlt ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Copy */}
                <div style={{ direction: "ltr" }} data-reveal>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-serif italic text-sage-soft" style={{ fontSize: "1.4rem" }}>
                      {indexLabel}
                    </span>
                    <span className="eyebrow">{svc.category}</span>
                  </div>
                  <h2
                    className="font-serif text-ink mb-5"
                    style={{ fontSize: "clamp(2.4rem,5vw,4rem)", lineHeight: 1.05, letterSpacing: "-0.022em" }}
                  >
                    {svc.title}
                  </h2>
                  <p className="text-ink-muted mb-8" style={{ maxWidth: "42ch", lineHeight: 1.65 }}>
                    {svc.shortDesc}
                  </p>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group inline-flex items-center gap-2 font-semibold text-sage-deep hover:text-sage transition-colors duration-200"
                    style={{ fontSize: "0.97rem" }}
                  >
                    See how it works
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual stat panel */}
                <div style={{ direction: "ltr" }} data-reveal>
                  <div
                    className="rounded-xl relative flex flex-col items-center justify-center overflow-hidden"
                    style={{
                      aspectRatio: "1 / 0.92",
                      background: isAlt
                        ? "linear-gradient(135deg, #F2EFE3 0%, #FFFFFF 100%)"
                        : "linear-gradient(135deg, #EAF0E2 0%, #FFFFFF 100%)",
                      border: "1px solid #E4E1D2",
                    }}
                  >
                    {/* Concentric rings */}
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ opacity: 0.3 }}
                    >
                      <div
                        className="absolute rounded-full"
                        style={{ width: "65%", height: "65%", border: "1px solid #9DB389" }}
                      />
                      <div
                        className="absolute rounded-full"
                        style={{ width: "88%", height: "88%", border: "1px solid #9DB389" }}
                      />
                    </div>

                    {/* Stat */}
                    <div className="relative text-center px-8">
                      <div
                        className="font-serif text-sage-deep"
                        style={{ fontSize: "clamp(3.5rem,7vw,6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                      >
                        {svc.heroStat}
                      </div>
                      <div className="text-ink-muted mt-3 max-w-[24ch] mx-auto" style={{ fontSize: "0.92rem", lineHeight: 1.45 }}>
                        {svc.heroStatCaption}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══════════════════════════════════════════ HOW IT WORKS ══ */}
      <section
        ref={howRef as React.RefObject<HTMLElement>}
        id="how-it-works"
        className="py-24 px-6 lg:px-12 scroll-mt-[68px]"
        style={{ background: "#F2EFE3" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-16" data-reveal>
            <span className="eyebrow">Process</span>
            <h2
              className="font-serif text-ink mt-5"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.08, letterSpacing: "-0.022em" }}
            >
              From discovery to deployment —<br />in weeks, not months.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="py-8 lg:py-0"
                style={{
                  borderLeft: i > 0 ? "1px solid #E4E1D2" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                  paddingRight: i < steps.length - 1 ? "2rem" : 0,
                }}
                data-reveal
              >
                <div
                  className="font-serif italic text-sage mb-4"
                  style={{ fontSize: "2.2rem", lineHeight: 1 }}
                >
                  {step.num}
                </div>
                <h3 className="font-semibold text-ink mb-3" style={{ fontSize: "1.1rem" }}>
                  {step.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ TESTIMONIAL ══ */}
      <section
        className="snap-panel relative min-h-[55vh] flex items-center py-24 px-6 lg:px-12 overflow-hidden"
        style={{ background: "#18271C" }}
      >
        {/* Faint forest radial */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%", right: "-15%", width: "60%", height: "160%",
            background: "radial-gradient(ellipse, rgba(110,139,90,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[860px] mx-auto text-center">
          <span className="eyebrow eyebrow-forest" data-reveal>Why firms choose verve</span>

          <blockquote
            className="font-serif mt-8 mb-10"
            style={{
              fontSize: "clamp(1.8rem,3.6vw,3rem)",
              lineHeight: 1.18,
              fontWeight: 300,
              color: "#EEF2E6",
              letterSpacing: "-0.018em",
            }}
            data-reveal
          >
            &ldquo;verve automated our entire invoice processing pipeline.
            We went from{" "}
            <em className="italic not-italic" style={{ color: "#9DB389" }}>3 hours a day</em>
            {" "}to under{" "}
            <em className="italic not-italic" style={{ color: "#9DB389" }}>20 minutes.</em>
            {" "}The ROI was immediate.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3" data-reveal>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0"
              style={{ background: "#213A28", color: "#9DB389" }}
            >
              SC
            </div>
            <div className="text-left">
              <div className="font-semibold" style={{ color: "#EEF2E6", fontSize: "0.95rem" }}>Sarah Chen</div>
              <div style={{ color: "rgba(238,242,230,0.55)", fontSize: "0.82rem" }}>
                Managing Partner, Chen &amp; Associates CPA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FINAL CTA ══ */}
      <section
        ref={ctaRef as React.RefObject<HTMLElement>}
        className="snap-panel relative min-h-[50vh] flex items-center py-28 px-6 lg:px-12 overflow-hidden"
        style={{ background: "#FBFAF4" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: "70%", height: "200%",
            background: "radial-gradient(ellipse, rgba(110,139,90,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-[680px] mx-auto text-center" data-reveal>
          <span className="eyebrow mb-6 block">Get started</span>

          <h2
            className="font-serif text-ink mb-6"
            style={{ fontSize: "clamp(2.4rem,5.5vw,4rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          >
            Ready to save{" "}
            <em className="italic not-italic" style={{ color: "#51703F" }}>20+ hours</em>
            {" "}a week?
          </h2>

          <p className="text-ink-muted mb-10 mx-auto" style={{ maxWidth: "44ch", lineHeight: 1.65 }}>
            Book a free 30-minute strategy call and discover exactly how AI can
            eliminate busywork in your practice.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact?book=true" className="btn-primary">
              Book free strategy call
              <ArrowRight size={15} />
            </Link>
            <Link href="/#solutions" className="btn-ghost">
              View solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
