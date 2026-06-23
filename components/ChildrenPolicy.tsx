"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

export default function ChildrenPolicy() {
  const { t } = useLang();

  const childPolicies = [
    { icon: "/images/babyicon-1.png", height: t.hotelInfo.children.freeHeight, label: t.hotelInfo.children.free, detail: t.hotelInfo.children.freeDetail, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
    { icon: "/images/babyicon-2.png", height: t.hotelInfo.children.midHeight, label: t.hotelInfo.children.mid, detail: t.hotelInfo.children.midDetail, color: "text-gold-dark", bg: "bg-amber-50 border-amber-100" },
    { icon: "/images/babyicon-3.png", height: t.hotelInfo.children.adultHeight, label: t.hotelInfo.children.adult, detail: t.hotelInfo.children.adultDetail, color: "text-burgundy", bg: "bg-red-50 border-red-100" },
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sarabun text-xs text-gold tracking-widest uppercase mb-2">{t.hotelInfo.children.subtitle}</p>
            <h3 className="font-sarabun text-3xl md:text-4xl text-burgundy">{t.hotelInfo.children.title}</h3>
            <div className="w-10 h-px bg-gold mx-auto mt-3" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {childPolicies.map((p, i) => (
            <ScrollReveal key={p.height} delay={i * 80}>
              <div className={`border rounded-none p-6 flex flex-col items-center text-center ${p.bg}`}>
                <div className="w-14 h-14 relative mb-4">
                  <Image src={p.icon} alt={p.height} fill className="object-contain mix-blend-multiply" />
                </div>
                <p className="font-sarabun text-xs text-gray-500 mb-2 tracking-wide">{p.height}</p>
                <p className={`font-sarabun text-3xl font-bold mb-1 ${p.color}`}>{p.label}</p>
                <div className="w-8 h-px bg-gray-300 my-3" />
                <p className="font-sarabun text-gray-500 text-xs leading-relaxed">{p.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="font-sarabun text-xs text-gray-400 text-center mt-6 italic">{t.hotelInfo.children.note}</p>

      </div>
    </section>
  );
}
