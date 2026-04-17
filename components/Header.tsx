"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Process", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Completed Work", href: "/completed-work" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_12px_rgba(45,52,53,0.06)]"
          : "bg-transparent"
        }`}
    >
      <nav
        className="flex justify-between items-center px-10 py-4 max-w-[1440px] mx-auto"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter font-headline text-on-surface"
          aria-label="Smart Wrapping — Home"
        >
          SMART ADVERTISING & WRAPPING
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent("I'm interested in Smart Wrapping's services. Could you provide more details?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-sheen flex items-center gap-2 px-5 py-2.5 rounded-lg text-on-secondary font-headline font-bold text-sm hover:scale-[1.02] hover:opacity-90 transition-all duration-300"
          >
            <span
              className="material-symbols-outlined text-base"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            WhatsApp Concierge
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 border-t border-outline-variant/20" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface transition-colors text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent("I'm exploring your mobile site and would like to request more details.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-sheen px-6 py-3 rounded-lg text-on-secondary font-headline font-bold flex items-center gap-3 w-fit mt-2"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
