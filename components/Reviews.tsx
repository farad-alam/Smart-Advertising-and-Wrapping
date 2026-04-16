"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    quote:
      "Completely changed the vibe of my Marina apartment. The kitchen looks like it cost 100k AED, but we only spent a fraction. The marble wrap is incredible.",
    author: "Sarah J.",
    location: "Dubai Marina",
  },
  {
    quote:
      "The team was so professional. No dust at all. They finished my entire wardrobe and kitchen in one day. Highly recommended for anyone renting!",
    author: "Ahmed K.",
    location: "Jumeirah Heights",
  },
  {
    quote:
      "Used them for our office reception. The wood finish looks so real people touch it to check. Professional and efficient.",
    author: "Michael R.",
    location: "Business Bay",
  },
];

const brands = ["EMAAR", "DAMAC", "MERAAS", "NAKHEEL"];

function Stars() {
  return (
    <div className="flex text-secondary mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
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
      className="py-32 bg-surface-container-low"
      id="reviews"
      aria-label="Customer reviews"
    >
      <div className="site-container" ref={ref}>
        {/* Brands */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-headline font-bold mb-6">
            Trusted Across Dubai
          </h2>
          <div
            className="flex justify-center gap-12 opacity-40"
            aria-label="Trusted by leading developers"
          >
            {brands.map((b) => (
              <span key={b} className="font-headline font-black text-xl italic">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.author}
              className="reveal bg-surface-container-lowest p-8 rounded-xl"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Stars />
              <blockquote className="italic text-on-surface-variant mb-6 leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <cite className="font-headline font-bold text-sm not-italic">
                — {review.author}, {review.location}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
