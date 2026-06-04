"use client";

import { useState, useEffect } from "react";

const PHONE = "0824446242";

export default function FloatingCall() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    const timer = setTimeout(() => setShowLabel(false), 4000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-5 z-50 flex items-center gap-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showLabel ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="bg-white text-burgundy font-sarabun text-xs font-semibold px-3 py-2 rounded-full shadow-luxury whitespace-nowrap border border-burgundy/20">
          082-444-6242
        </span>
      </div>

      <a
        href={`tel:${PHONE}`}
        aria-label="โทรหาโรงแรม"
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        className="w-14 h-14 rounded-full shadow-luxury-hover flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 bg-burgundy"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      </a>
    </div>
  );
}
