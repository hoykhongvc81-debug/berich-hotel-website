"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const VIDEO_ID = "_I47werrJP8";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">Hotel Experience</p>
            <h2 className="font-sarabun text-4xl md:text-5xl text-burgundy mb-4">ชมบรรยากาศโรงแรม</h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative w-full aspect-video shadow-luxury border border-gray-100 bg-black overflow-hidden">
            {!playing ? (
              // Thumbnail + play button — ไม่โหลด iframe จนกว่าจะกด
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="เล่นวิดีโอ"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Berich Hotel — ชมบรรยากาศโรงแรม"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
                title="Berich Hotel — แนะนำโรงแรม"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
