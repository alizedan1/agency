import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us",   href: "/about"        },
    { label: "Solutions",  href: "/#solutions"   },
    { label: "Contact",    href: "/contact"      },
  ],
  Solutions: [
    { label: "Document Automation",  href: "/services/intelligent-document-processing" },
    { label: "Workflow Automation",  href: "/services/workflow-automation"              },
    { label: "AI Client Assistants", href: "/services/ai-client-assistants"            },
    { label: "Tax Research AI",      href: "/services/tax-research-compliance-ai"      },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-8 px-6 lg:px-12" style={{ background: "#F2EFE3" }}>
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif italic text-ink block mb-4"
              style={{ fontSize: "1.55rem", letterSpacing: "-0.01em" }}
            >
              verve
            </Link>
            <p className="text-ink-muted text-sm leading-relaxed mb-6">
              Custom AI automation for modern accounting practices.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sage" />
              <span className="text-xs font-medium text-ink-ghost">SOC 2 Compliant Infrastructure</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-ghost mb-5">
                {title}
              </h5>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-ghost">&copy; 2026 verve. All rights reserved.</p>
          <p className="text-xs text-ink-ghost">Custom AI for modern accounting practices.</p>
        </div>
      </div>
    </footer>
  );
}
