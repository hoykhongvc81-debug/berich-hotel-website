"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function VideoSection() {
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
          <div className="relative w-full aspect-video shadow-luxury border border-gray-100">
            <iframe
              src="https://www.youtube.com/embed/_I47werrJP8?rel=0&modestbranding=1"
              title="Berich Hotel — แนะนำโรงแรม"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
