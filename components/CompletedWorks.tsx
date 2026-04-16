"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function CompletedWorks() {
  const [filter, setFilter] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  // Extract unique categories, "All" first
  const categories = ["All", ...Array.from(new Set(siteConfig.completedWorks.map((w) => w.category)))];

  const filteredWorks = filter === "All"
    ? siteConfig.completedWorks
    : siteConfig.completedWorks.filter((w) => w.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );

    const items = ref.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredWorks]); // re-observe when items change

  return (
    <section className="py-24 bg-surface" id="portfolio" aria-label="Our Completed Works">
      <div className="site-container" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4">
            Our Masterpieces
          </h2>
          <p className="text-on-surface-variant font-body max-w-2xl mx-auto">
            Browse our latest completions. From stunning kitchen revamps to elegant architectural texturing.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal animate-delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? "bg-on-surface text-surface shadow-md scale-105"
                  : "bg-surface-container-high text-on-surface hover:bg-on-surface/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredWorks.map((work, i) => (
            <div
              key={work.image + i}
              className="reveal break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={80}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-secondary text-surface text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                  {work.category}
                </span>
                <h3 className="text-white font-headline text-xl font-bold">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
