"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Kitchen Wrapping",
    description:
      "Stone, Wood, & Ultra-Matte finishes for a designer kitchen at a fraction of the cost.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPiMgRQwXaZGG5VcVoTwodZ9OcNSz5ET_TtFekglPn0NEyGRLJ58HztLc5EflVk7t_LnCG7_kg_u3hYxOOT6W9HwWeVAoZlqc_F_kMNE9svSj3D4QK5e8DQpiJHcp15xz4sob9P-jkWhCTIamZQ1Rijv4tXBmJTh5alkMKP3QXXmlwENPXpS99t0DQzUBeY0LenbYVDR_t-6cMM5fhgLaLhGkruFleqmNja0nkuJgcXvovU2LIZH1Y46urY0AWpz-hl5x-gRHjC0o",
    alt: "Modern kitchen with charcoal grey wrapped cabinets and gold handles, clean architectural lines",
  },
  {
    title: "Bathroom & Dining",
    description:
      "Moisture-resistant wraps for vanities, dining tables, and sideboards.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZORo6bPP89rWriG4YRQq0mBzqwY3c2zyBI5ZJ3-Un-eYIWHDIJyVs3OqgkRYTZ4Jw9lMpG-Tyachg4WaaE69mXEFM3OGICt4fCOO27g4cFde2KneZHxOVPKvTkBw8I7NBq1aY00KlPkUCwJrXDwHbmqWO0mCphvsAZLeeanOD8iQb2_lykEuj-83nKun08epozgbLCYbMwqr-iloGmW1SntrrZM5VQ89BTuE5bver053FwaNKXc5wSMPEZhAxBlHkS0Hkqo2pJ6I",
    alt: "Luxury bathroom vanity wrapped in light oak texture with modern black hardware",
  },
  {
    title: "Furniture & Walls",
    description:
      "Wardrobes, feature walls, and interior doors with seamless corner execution.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdg7zBVstRie7qX7Xj6YxGaHwcpgaUUqWrLEir046VGFRkp1LmhcK6SJd8ocks0uBRpo8p8SR4oo5Xnd-gaYzMx3iD7L_AU9PLrs1n1pQX8Oq0mivjXZ2O-GOqlzeLn_b3BGsg0guA5e507KdBDSjsPyqp6CsP2bQuOJqY5oyVbPoO-M96QKTdgFHZwYFe1n0C07WKo17_mdp9wJC19Cg5yPnbviHYsJLcwDgVQI2EIdn5yk_YJFMusCh52LyJldJxF0xjo10-9LI",
    alt: "Minimalist wardrobe wrapped in premium textile fabric finish in a contemporary bedroom",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const items = ref.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-surface" id="solutions" aria-label="Our services">
      <div className="site-container" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-6">
              Bespoke Resurfacing Solutions
            </h2>
            <p className="text-on-surface-variant font-body">
              Choose from over 500 premium textures including Italian marble,
              Nordic wood, and industrial metals.
            </p>
          </div>
          <div className="pb-2">
            <a
              href="https://wa.me/971562023458"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-secondary border-b-2 border-secondary/20 hover:border-secondary transition-colors duration-300"
            >
              View Texture Catalog
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-high"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-surface font-headline font-bold text-2xl mb-2">
                  {service.title}
                </h3>
                <p className="text-surface/80 text-sm mb-4">
                  {service.description}
                </p>
                <span className="text-secondary font-bold uppercase text-xs tracking-widest">
                  Explore Finishes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
