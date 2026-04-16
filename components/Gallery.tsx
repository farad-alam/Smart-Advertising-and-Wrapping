"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const textures = [
  "Ribbed Wood Textures",
  "Brushed Gold & Steel",
  "Anti-Fingerprint Ultra-Matte",
];

export default function Gallery() {
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
    <section
      className="py-32 bg-on-surface text-surface overflow-hidden"
      id="gallery"
      aria-label="Project gallery"
    >
      <div className="site-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <div className="relative reveal">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeVnXcFRbk0XlVn2LYjpaY-sqrZAI6jZwuUsOKZ4ecdH8rsr7WwkLJRh_HUlG_1O9kOXRA2kYzODGDUjZq6mhJOSlOtv2sOzddJx44zZ6k_qUM92gO-US0H6PI-ORwYnSWMn_W8merJ4h3-0phEJv6PmWM1GFkkxCCrWcK2HhCbriuZFKm_51c4XveafIrhHRZwAUClU0ePP5LTSITVGZBxhKPSGzepOelegtX4O6kAQvp8pZpONSy3RBihhRURs-eRPyzBJir0Aw"
                alt="Close-up detail of a perfect 45-degree wrapped corner on a furniture piece showing brushed metal texture"
                width={400}
                height={400}
                className="rounded-lg w-full aspect-square object-cover mt-12"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={80}
              />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2kG8rlTdsopH0rycvkzSFS98WSmAnM9MlHV9K8pmREk0locqgyQhgDmVUv3-xzntpFtdlcgv_U8K68Q5QcrQdj276F9u9hNyXsSLu8furyTcCJ5qwSuauid7dEbtQ49WBr3A4QxtEXOp40sazeoKsUt3z0MLLqW42uAGU3fw5by8Rvn-ZnSkFcLq2KUTw801wqy39mdqS-bg2Ytdt4IlKqOEZQNWTkrAJv01B_lZmp6Z5hxYX0ttL7TMP3FOPJdPJd44KFBoxYtw"
                alt="Detailed texture of ribbed wood architectural wrap under dramatic side lighting"
                width={400}
                height={400}
                className="rounded-lg w-full aspect-square object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={80}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 blur-3xl pointer-events-none" />
          </div>

          {/* Text */}
          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-8">
              The Art of Seamless Wrapping
            </h2>
            <p className="text-surface-dim mb-8 text-lg leading-relaxed">
              Our technicians are trained in architectural-grade application. We
              specialize in precision cornering, heat-shrinking for curves, and
              zero-bubble installation that makes the wrap indistinguishable from
              original material.
            </p>
            <ul className="space-y-6" role="list">
              {textures.map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="w-12 h-px bg-secondary" aria-hidden="true" />
                  <span className="font-headline tracking-widest uppercase text-xs">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
