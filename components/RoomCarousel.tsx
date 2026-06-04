"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

type RoomCarouselProps = {
  images: string[];
  roomName: string;
  badge?: string;
};

export default function RoomCarousel({ images, roomName, badge }: RoomCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    },
    [images.length]
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    },
    [images.length]
  );

  if (images.length === 0) return null;

  return (
    <div className="relative overflow-hidden h-72 group/carousel bg-gray-100">
      {/* Images */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`${roomName} รูปที่ ${i + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 z-20 bg-burgundy text-white font-montserrat text-[10px] tracking-widest uppercase px-3 py-1.5">
          {badge}
        </span>
      )}

      {/* Prev / Next buttons — show only if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="รูปก่อนหน้า"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/40 hover:bg-burgundy text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="รูปถัดไป"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/40 hover:bg-burgundy text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`ไปรูปที่ ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-gold w-4" : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="absolute top-3 left-3 z-20 bg-black/40 text-white font-montserrat text-[10px] px-2 py-1 tracking-wide">
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
