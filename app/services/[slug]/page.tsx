import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import ChatBot from "@/components/ChatBot";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — verve`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const { title, category, fullDesc, tags, features } = service;
  const others = servicesData.filter((s) => s.slug !== slug);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 lg:px-12"
        style={{
          paddingTop: "10rem",
          paddingBottom: "4.5rem",
          background: `
            radial-gradient(ellipse 55% 60% at 90% 10%, #EAF0E2 0%, transparent 65%),
            #FBFAF4
          `,
        }}
      >
        <div className="max-w-[1180px] mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-xs text-ink-ghost">
            <Link href="/" className="hover:text-ink-muted transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#solutions" className="hover:text-ink-muted transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-ink-muted">{title}</span>
          </div>

          <div className="max-w-[780px]">
            <span className="eyebrow mb-6 block">{category}</span>

            <h1
              className="font-serif text-ink mb-7"
              style={{
                fontSize: "clamp(2.6rem,6vw,4.6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                maxWidth: "13ch",
              }}
            >
              {title}
            </h1>

            <p
              className="text-ink-muted mb-10"
              style={{ fontSize: "1.08rem", maxWidth: "60ch", lineHeight: 1.7 }}
            >
              {fullDesc}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact?book=true" className="btn-primary">
                Book a free strategy call
                <ArrowRight size={14} />
              </Link>
              <Link href="/#solutions" className="btn-ghost">
                All solutions
              </Link>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-10 border-t border-line">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-tint border border-line rounded-pill text-xs text-ink-muted font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: "#FBFAF4" }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-14">
            <span className="eyebrow mb-5 block">What&apos;s included</span>
            <h2
              className="font-serif text-ink"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.022em", lineHeight: 1.08 }}
            >
              Everything in one solution.
            </h2>
          </div>

          {/* Editorial numbered list */}
          <div>
            {features.map((feature, i) => (
              <div
                key={i}
                className="grid items-start py-9"
                style={{
                  gridTemplateColumns: "90px 1fr",
                  borderTop: "1px solid #E4E1D2",
                }}
              >
                <div
                  className="font-serif italic text-sage"
                  style={{ fontSize: "1.6rem", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-3" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}>
                    {feature.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed" style={{ maxWidth: "70ch" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CHAT ────────────────────────────────────── */}
      <section
        className="py-24 px-6 lg:px-12 relative overflow-hidden"
        style={{ background: "#18271C" }}
      >
        {/* Faint radial */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%", left: "-10%", width: "50%", height: "160%",
            background: "radial-gradient(ellipse, rgba(110,139,90,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <span className="eyebrow eyebrow-forest mb-6 block">Try it now</span>
            <h2
              className="font-serif mb-6"
              style={{
                color: "#EEF2E6",
                fontSize: "clamp(2rem,4vw,3.2rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.022em",
              }}
            >
              See <em className="italic not-italic" style={{ color: "#9DB389" }}>{title}</em>
              {" "}on your own data.
            </h2>
            <p className="mb-10" style={{ color: "rgba(238,242,230,0.55)", lineHeight: 1.7 }}>
              Describe your current process below. Verve will walk you through exactly
              how this solution fits your firm — no generic demos.
            </p>
            <Link href="/contact?book=true" className="btn-primary">
              Book a free strategy call
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Chat widget */}
          <div>
            <ChatBot />
          </div>
        </div>
      </section>

      {/* ── OTHER SOLUTIONS ───────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12" style={{ background: "#F2EFE3" }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="eyebrow mb-5 block">Also from verve</span>
            <h2
              className="font-serif text-ink"
              style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.02em" }}
            >
              Other solutions
            </h2>
          </div>

          <div className="flex flex-col">
            {others.map((other, i) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group"
                style={{ borderTop: i === 0 ? "1px solid #E4E1D2" : "none", borderBottom: "1px solid #E4E1D2" }}
              >
                <div
                  className="grid items-center py-5 transition-all duration-200 group-hover:pl-3"
                  style={{ gridTemplateColumns: "160px 1fr 40px" }}
                >
                  <span className="eyebrow" style={{ fontSize: "0.65rem" }}>{other.category}</span>
                  <span
                    className="font-serif text-ink group-hover:text-sage-deep transition-colors"
                    style={{ fontSize: "1.15rem" }}
                  >
                    {other.title}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-ink-ghost group-hover:text-sage-deep transition-all duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
