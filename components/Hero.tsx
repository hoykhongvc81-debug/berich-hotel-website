"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";
const VIDEO_ID = "_I47werrJP8";
const VIDEO_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`;

export default function Hero() {
  const { t } = useLang();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Fallback image — always behind, shown on mobile or before video loads */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/images/hero.JPG')",
          backgroundAttachment: "fixed",
          opacity: videoReady && !isMobile ? 0 : 1,
        }}
      />

      {/* YouTube video background — desktop only, after mount */}
      {mounted && !isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            ref={iframeRef}
            src={VIDEO_SRC}
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={() => setTimeout(() => setVideoReady(true), 1500)}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "calc(100vh * 16 / 9)",
              minWidth: "100%",
              height: "calc(100vw * 9 / 16)",
              minHeight: "100%",
              opacity: videoReady ? 1 : 0,
              transition: "opacity 1.5s ease",
            }}
          />
        </div>
      )}

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
