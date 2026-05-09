import Link from "next/link";

const socials = ["𝕏", "in", "gh", "yt"];

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "AI Agents", href: "/services" },
    { label: "Automation", href: "/services" },
    { label: "LLM Integration", href: "/services" },
    { label: "Consulting", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-accent-purple/20 pt-16 pb-8 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="gradient-text text-2xl font-black tracking-tight block mb-4">
              StakUp
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building the AI-powered future, one automation at a time. We help businesses of all sizes unlock the potential of artificial intelligence.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-accent-purple/20 flex items-center justify-content-center text-sm hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all duration-200 text-slate-300 font-semibold"
                  style={{ justifyContent: "center" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500 mb-5">
                {title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-accent-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">&copy; 2026 StakUp. All rights reserved.</p>
          <p className="text-xs text-slate-500">Built with ❤️ and a lot of AI</p>
        </div>
      </div>
    </footer>
  );
}
