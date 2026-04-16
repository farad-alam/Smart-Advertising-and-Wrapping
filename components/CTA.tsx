"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    const items = ref.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-surface-container-low" aria-label="Get a free quote">
      <div className="site-container" ref={ref}>
        <div className="reveal bg-on-surface rounded-3xl p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          {/* Background texture */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNFetk6upvM4Bj7bR2p-M4zDHDD81qHLLIXy0JCdALI4jAfj7ZOgdrZ1zR_Z1s3EonLsLb6fB4kQ-hDVLP_Y1zUQ5qLtfhKU7jAX-J0YGypGdfjldVk4cTd5XKqpg7y5ON1nid7Q2WxYBoHM1iPrM45ID57sCkIQjYUOsccXrMQbIEbkJi728C_v8kWnXU0aIl3ujrBMpirzy3SfI5JRPUssdH6cHjqlSCYBkvWqwOtWAIE4N3oe7Of9NjRFSwyNKOvqIkn_0BA3g"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
              quality={60}
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-surface tracking-tighter mb-8 leading-tight">
              Ready for your 24hr transformation?
            </h2>
            <p className="text-surface-dim text-xl mb-12 leading-relaxed">
              Get a free quote and consultation today. Our concierge is standing
              by to help you choose the perfect finish.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <a
                href="https://wa.me/971562023458"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-sheen px-10 py-5 rounded-lg text-on-secondary font-headline font-extrabold text-lg flex items-center justify-center gap-4 hover:scale-[1.05] transition-transform duration-300"
                aria-label="Start a WhatsApp conversation for a free quote"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chat
                </span>
                WhatsApp +971 56 202 3458
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
