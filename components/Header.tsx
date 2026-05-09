"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/85 backdrop-blur-xl border-b border-accent-purple/20"
            : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="gradient-text text-2xl font-black tracking-tight">
          StakUp
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1 mr-6 list-none">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                    pathname === href
                      ? "text-white bg-white/5"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact?book=true"
            className="btn-gradient text-white font-semibold text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
            </svg>
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 border-none bg-transparent cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile nav */}
      <nav
        className={`fixed top-[72px] left-0 right-0 z-40 flex flex-col gap-2 px-[5%] py-6 bg-bg-primary/97 backdrop-blur-xl border-b border-accent-purple/20 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`block px-4 py-3 text-base rounded-lg transition-colors duration-200 ${
              pathname === href ? "text-white bg-white/5" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact?book=true"
          className="btn-gradient text-white font-semibold text-sm px-6 py-3 rounded-full text-center mt-2"
          onClick={() => setMenuOpen(false)}
        >
          Book Now
        </Link>
      </nav>
    </>
  );
}
