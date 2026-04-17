import { siteConfig } from "../config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-surface-container-high w-full py-12 px-8 text-sm uppercase tracking-widest"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="font-headline font-black text-on-surface">
          {siteConfig.name}
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer navigation">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Smart Wrapping! I have a few questions about your architectural resurfacing services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-on-surface-variant">
          © {currentYear} {siteConfig.name.toUpperCase()}. ARCHITECTURAL
          PRECISION.
        </div>
      </div>

      <div className="mt-8 text-center text-[10px] text-outline-variant tracking-[0.3em]">
        {siteConfig.contact.address.toUpperCase()} | LUXURY INTERIOR WRAPPING SPECIALISTS
      </div>
    </footer>
  );
}
