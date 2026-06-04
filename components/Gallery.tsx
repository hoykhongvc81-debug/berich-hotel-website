"use client";

import { useState } from "react";
import Image from "next/image";
import galleryData from "@/data/gallery.json";
import { useLang } from "@/contexts/LanguageContext";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
  span: string;
};

const ITEMS_PER_PAGE = 12;

export default function Gallery() {
  const { t } = useLang();
  const categories = [t.gallery.all, t.gallery.lobby, t.gallery.surroundings, t.gallery.restaurant];
  const categoryMap: Record<string, string> = {
    [t.gallery.all]: "ทั้งหมด",
    [t.gallery.lobby]: "ล็อบบี้",
    [t.gallery.surroundings]: "โดยรอบ",
    [t.gallery.restaurant]: "ห้องอาหาร",
  };

  const [activeCategory, setActiveCategory] = useState(t.gallery.all);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const rawCategory = categoryMap[activeCategory] ?? activeCategory;
  const filtered = (galleryData as GalleryItem[]).filter(
    (g) => rawCategory === "ทั้งหมด" || g.category === rawCategory
  );
  const visible = filtered.slice(0, visibleCount);

  const openLightbox = (item: GalleryItem, idx: number) => {
    setLightbox(item);
    setLightboxIndex(idx);
  };

  const navigate = (dir: number) => {
    const newIdx = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(newIdx);
    setLightbox(filtered[newIdx]);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const countForCat = (label: string) => {
    const raw = categoryMap[label] ?? label;
    if (raw === "ทั้งหมด") return (galleryData as GalleryItem[]).length;
    return (galleryData as GalleryItem[]).filter(g => g.category === raw).length;
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="section-subtitle">{t.gallery.subtitle}</p>
          <h2 className="section-title">{t.gallery.title}</h2>
          <div className="gold-divider" />
          <p className="font-sarabun text-gray-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">{t.gallery.desc}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`font-prompt text-xs tracking-widest uppercase px-4 md:px-5 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-burgundy text-white border-burgundy"
                  : "border-gray-300 text-gray-500 hover:border-burgundy hover:text-burgundy"
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60">
      ({countForCat(cat)})
              </span>
            </button>
          ))}
        </div>

        {/* Uniform Grid — 2 col mobile, 3 col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {visible.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, idx)}
              className="relative overflow-hidden cursor-pointer group aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-burgundy/50 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-1">
                  <div className="w-8 h-8 border border-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zm-7-4v4m0 0H10m2 0h2" />
                    </svg>
                  </div>
                  <p className="font-prompt text-white text-[11px] tracking-wide text-center px-2">{item.alt}</p>
                </div>
              </div>
              {/* Category tag */}
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-prompt text-white/80 text-[10px] tracking-widest uppercase">{item.category}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
              className="btn-outline"
            >
              {t.gallery.loadMore} ({filtered.length - visibleCount} {t.gallery.remaining})
            </button>
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-all z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 hover:border-gold text-white/70 hover:text-gold flex items-center justify-center transition-all z-10"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl px-14 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="font-prompt text-white/60 text-xs tracking-wide">
                {lightbox.alt} — {lightbox.category}
              </p>
              <p className="font-prompt text-white/40 text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 hover:border-gold text-white/70 hover:text-gold flex items-center justify-center transition-all z-10"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
