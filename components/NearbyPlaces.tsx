"use client";

import Image from "next/image";
import attractionsData from "@/data/attractions.json";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/contexts/LanguageContext";

type Attraction = {
  id: number;
  name: string;
  nameEn: string;
  nameZh?: string;
  category: string;
  categoryIcon: string;
  distance: string;
  travelTime: string;
  description: string;
  descriptionEn?: string;
  descriptionZh?: string;
  image: string;
  openHours: string;
};

function AttractionCard({ place, lang }: { place: Attraction; lang: string }) {
  const name = lang === "en" ? place.nameEn : lang === "zh" ? (place.nameZh ?? place.nameEn) : place.name;
  const desc = lang === "en" ? (place.descriptionEn ?? place.description) : lang === "zh" ? (place.descriptionZh ?? place.description) : place.description;
  return (
    <div className="group bg-white shadow-luxury hover:shadow-luxury-hover transition-all duration-400 overflow-hidden border border-gray-100 hover:border-gold/30">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-3 left-3 bg-white/95 font-montserrat text-[10px] tracking-widest uppercase text-burgundy px-2.5 py-1 flex items-center gap-1">
          <span>{place.categoryIcon}</span>
          {place.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-sarabun text-lg text-burgundy mb-0.5 leading-snug">{name}</h3>
        <p className="font-sarabun text-[11px] text-gold tracking-wide mb-2">{place.nameEn}</p>
        <p className="font-sarabun text-gray-500 text-xs leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-montserrat text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {place.distance}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {place.travelTime}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {place.openHours}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function NearbyPlaces() {
  const { t, lang } = useLang();
  return (
    <section id="nearby" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">{t.nearby.subtitle}</p>
          <h2 className="section-title">{t.nearby.title}</h2>
          <div className="gold-divider" />
          <p className="font-sarabun text-gray-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">{t.nearby.desc}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(attractionsData as Attraction[]).map((place, i) => (
            <ScrollReveal key={place.id} delay={i * 100}>
              <AttractionCard place={place} lang={lang} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

