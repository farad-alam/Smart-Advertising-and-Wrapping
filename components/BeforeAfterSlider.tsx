"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group select-none shadow-lg">
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute top-4 right-4 bg-on-surface/50 backdrop-blur-md text-surface px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase z-10 pointer-events-none">
        After
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 z-10 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 bg-on-surface/50 backdrop-blur-md text-surface px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase pointer-events-none">
          Before
        </div>
      </div>

      {/* Slider Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize appearance-none"
        aria-label="Compare before and after images"
      />

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-surface z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-75"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-surface rounded-full shadow-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface text-xl">
            sync_alt
          </span>
        </div>
      </div>
    </div>
  );
}
