"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Consult",
    text: "Send us photos of your space on WhatsApp for a same-day instant estimate.",
  },
  {
    num: "02",
    title: "Choose Finish",
    text: "Our specialist brings samples to your home to match your interior vision perfectly.",
  },
  {
    num: "03",
    title: "Transform",
    text: 'Our crew installs your new surface in less than 24 hours. Enjoy your "new" home.',
  },
];

export default function Process() {
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
    <section className="py-32 bg-surface" id="process" aria-label="How it works" ref={ref}>
      <div className="site-container text-center mb-20 reveal">
        <h2 className="text-4xl font-headline font-extrabold mb-4">
          How It Works
        </h2>
        <p className="text-on-surface-variant">
          Your transformation is only three steps away.
        </p>
      </div>
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal text-center relative"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <span
                className="text-[12rem] font-black text-surface-container-high absolute -top-24 left-1/2 -translate-x-1/2 z-0 opacity-50 select-none font-headline"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-2xl mb-4">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
