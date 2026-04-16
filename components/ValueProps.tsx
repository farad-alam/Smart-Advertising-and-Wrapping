"use client";

import { useEffect, useRef } from "react";

const props = [
  {
    icon: "cleaning_services",
    title: "Zero Mess",
    text: "No dust, no demolition, no noise. We work cleanly within your existing footprint.",
  },
  {
    icon: "eco",
    title: "Eco-Friendly",
    text: "Reduce landfill waste by repurposing your existing high-quality cabinetry bases.",
  },
  {
    icon: "verified",
    title: "5-10 Year Warranty",
    text: "Our medical-grade vinyls are heat, water, and scratch resistant with long-term backing.",
  },
  {
    icon: "bolt",
    title: "Fast Completion",
    text: "Full transformations achieved in 24-48 hours. Minimal disruption to your lifestyle.",
  },
];

export default function ValueProps() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = ref.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-surface-container-low" aria-label="Key benefits">
      <div className="site-container" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {props.map((p, i) => (
            <div
              key={p.title}
              className="reveal flex flex-col gap-4"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="material-symbols-outlined text-secondary text-4xl">
                {p.icon}
              </span>
              <h3 className="font-headline font-bold text-xl">{p.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
