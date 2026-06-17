"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";

export default function Hero() {
  const { t } = useLang();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Fallback image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/images/hero.JPG')",
          opacity: showVideo ? 0 : 1,
        }}
      />

      {/* MP4 video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: showVideo ? 1 : 0 }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sarabun text-gold text-xs tracking-[0.4em] uppercase mb-6 opacity-90 animate-fade-in">
          {t.hero.welcome}
        </p>
        <h1 className="font-sarabun text-5xl sm:text-6xl md:text-8xl text-white font-bold mb-4 leading-tight">
          Berich Hotel
        </h1>
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10 md:w-16 gold-divider-shimmer" />
          <span className="font-sarabun gold-shimmer text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">
            {t.hero.tagline}
          </span>
          <span className="h-px w-10 md:w-16 gold-divider-shimmer" />
        </div>
        <p className="font-sarabun text-white/80 text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed px-2">
          {t.hero.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center px-6 sm:px-0">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-sm px-8 py-3.5 text-center shadow-luxury hover:shadow-luxury-hover">
            {t.hero.bookNow}
          </a>
          <a href="#rooms"
            className="btn-outline text-sm px-8 py-3.5 text-center text-white border-white/60 hover:bg-white hover:text-burgundy">
            {t.hero.viewRooms}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="font-sarabun text-white/50 text-[10px] tracking-widest uppercase">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
