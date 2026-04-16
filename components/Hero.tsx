import Image from "next/image";
import { siteConfig } from "../config/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-surface-dim">
        <Image
          src={siteConfig.hero.bgImage}
          alt={siteConfig.hero.bgImageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
          unoptimized // Using Unsplash/external URL
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="site-container relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-secondary text-on-secondary rounded-lg animate-fade-in-up">
            {siteConfig.hero.tagline}
          </span>

          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-tight animate-fade-in-up animate-delay-100">
            {siteConfig.hero.headline_part1}
            <span className="text-secondary">{siteConfig.hero.headline_part2}</span>
          </h1>

          <p className="text-xl text-on-surface-variant font-body mb-10 max-w-xl animate-fade-in-up animate-delay-200">
            {siteConfig.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up animate-delay-300">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-sheen px-8 py-4 rounded-lg text-on-secondary font-headline font-bold flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300"
              aria-label="Chat with us on WhatsApp"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat
              </span>
              Chat on WhatsApp
            </a>
            <div className="flex flex-col px-4">
              <span className="text-xs uppercase tracking-widest text-outline">
                Direct Line
              </span>
              <span className="text-lg font-headline font-bold text-on-surface">
                {siteConfig.contact.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
