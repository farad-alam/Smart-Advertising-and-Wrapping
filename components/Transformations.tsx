"use client";

import { useEffect, useRef } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { siteConfig } from "@/config/site";

export default function Transformations() {
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
    <section className="py-24 bg-surface" id="transformations" aria-label="Amazing Transformations">
      <div className="site-container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4">
            Amazing Transformations
          </h2>
          <p className="text-on-surface-variant font-body">
            See the dramatic difference our vinyl wrapping makes
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {siteConfig.transformations.map((item, i) => (
            <div
              key={item.title}
              className="reveal flex flex-col items-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeAlt={`${item.title} Before`}
                afterAlt={`${item.title} After`}
              />
              <h3 className="mt-6 text-xl font-headline font-bold text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
