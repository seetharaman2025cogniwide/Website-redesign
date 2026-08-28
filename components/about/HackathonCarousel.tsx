"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HackathonCarousel({
  images,
  intervalMs = 3500,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-md">
      <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Event moment"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B0A14]/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Carousel indicator dots if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 bg-[#A78BFA] shadow-[0_0_8px_#8B5CF6]'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}