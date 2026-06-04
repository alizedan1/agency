"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/#solutions",      label: "Solutions"     },
  { href: "/#how-it-works",   label: "How it works"  },
  { href: "/contact",         label: "Contact"       },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line"
            : "border-b border-transparent"
        }`}
        style={
          scrolled
            ? { background: "rgba(251,250,244,0.82)", backdropFilter: "blur(18px)" }
            : { background: "transparent" }
        }
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-[68px] max-w-[1280px] mx-auto">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif italic text-[1.55rem] text-ink leading-none"
            style={{ letterSpacing: "-0.01em" }}
          >
            verve
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 text-[0.92rem] text-ink-muted hover:text-ink transition-colors duration-200 rounded"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/contact?book=true" className="btn-primary text-sm py-[0.6em]">
              Book a call
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 border-none bg-transparent cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-[1.5px] bg-ink rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-ink rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-ink rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav
        className={`fixed top-[68px] left-0 right-0 z-40 flex flex-col gap-1 px-6 py-5 border-b border-line shadow-[0_4px_16px_rgba(36,38,31,0.08)] transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ background: "rgba(251,250,244,0.96)", backdropFilter: "blur(18px)" }}
      >
        {[
          { href: "/",              label: "Home"         },
          { href: "/#solutions",    label: "Solutions"    },
          { href: "/#how-it-works", label: "How it works" },
          { href: "/contact",       label: "Contact"      },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block px-4 py-3 text-sm text-ink-muted hover:text-ink rounded transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact?book=true"
          className="btn-primary text-sm mt-2 justify-center"
          onClick={() => setMenuOpen(false)}
        >
          Book a call
          <ArrowRight size={14} />
        </Link>
      </nav>
    </>
  );
}
