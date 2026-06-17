"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  current: number;
  roomName: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}

export default function Lightbox({ images, current, roomName, onClose, onPrev, onNext, onJump }: Props) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={onClose}>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="ปิด"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 font-montserrat text-white/50 text-xs tracking-widest">
        {current + 1} / {images.length}
      </p>

      {/* Main image */}
      <div
        className="relative w-full h-full max-w-5xl mx-16 mb-28"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={`${roomName} รูปที่ ${current + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-burgundy transition-colors"
            aria-label="รูปก่อนหน้า"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-burgundy transition-colors"
            aria-label="รูปถัดไป"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Room name */}
      <p className="absolute bottom-16 left-1/2 -translate-x-1/2 font-sarabun text-white/60 text-sm tracking-wider whitespace-nowrap">
        {roomName}
      </p>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2 pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); onJump(i); }}
              aria-label={`รูปที่ ${i + 1}`}
              className={`relative w-14 h-10 shrink-0 overflow-hidden transition-all duration-200 ${
                i === current ? "ring-2 ring-gold opacity-100 scale-105" : "opacity-40 hover:opacity-70"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      )}

    </div>
  );
}
