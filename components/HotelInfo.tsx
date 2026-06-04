"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

export default function HotelInfo() {
  const { t } = useLang();

  const childPolicies = [
    { icon: "/images/babyicon-1.png", height: t.hotelInfo.children.freeHeight, label: t.hotelInfo.children.free, detail: t.hotelInfo.children.freeDetail, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
    { icon: "/images/babyicon-2.png", height: t.hotelInfo.children.midHeight, label: t.hotelInfo.children.mid, detail: t.hotelInfo.children.midDetail, color: "text-gold-dark", bg: "bg-amber-50 border-amber-100" },
    { icon: "/images/babyicon-3.png", height: t.hotelInfo.children.adultHeight, label: t.hotelInfo.children.adult, detail: t.hotelInfo.children.adultDetail, color: "text-burgundy", bg: "bg-red-50 border-red-100" },
  ];

  const highlights = [
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      title: t.hotelInfo.highlights.location.title,
      desc: t.hotelInfo.highlights.location.desc,
    },
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M10 3v18M14 3v18" /></svg>),
      title: t.hotelInfo.highlights.elevator.title,
      desc: t.hotelInfo.highlights.elevator.desc,
    },
    {
      icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      title: t.hotelInfo.highlights.family.title,
      desc: t.hotelInfo.highlights.family.desc,
    },
  ];

  const nearbyList = [
    { place: "King Taksin Shrine / ศาลพระเจ้าตากสิน", dist: "800 m (~10 min)" },
    { place: "Ping River Bridge / สะพานแขวนพิง", dist: "950 m (~12 min)" },
    { place: "Wat Phra Borommathat / วัดพระบรมธาตุบ้านตาก", dist: "27 km (~30 min)" },
    { place: "Ping River Walking Street / ถนนคนเดินริมน้ำปิง", dist: "950 m (~12 min)" },
  ];

  return (
    <section id="hotel-info" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">{t.hotelInfo.subtitle}</p>
          <h2 className="section-title">{t.hotelInfo.title}</h2>
          <div className="gold-divider" />
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {highlights.map((h) => (
            <div key={h.title} className="flex flex-col items-center text-center p-4 md:p-8 border border-gray-100 shadow-luxury hover:shadow-luxury-hover hover:border-gold/30 transition-all duration-300 group">
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
              <h3 className="font-sarabun text-base md:text-xl text-burgundy mb-2">{h.title}</h3>
              <div className="w-8 h-px bg-gold mb-2 md:mb-3" />
              <p className="font-sarabun text-gray-500 text-xs md:text-sm leading-relaxed hidden sm:block">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="bg-cream border border-gray-100 p-8 md:p-12 mb-16 flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="font-sarabun text-xs text-gold tracking-widest uppercase mb-2">{t.hotelInfo.location.subtitle}</p>
            <h3 className="font-sarabun text-3xl text-burgundy mb-3">{t.hotelInfo.location.title}</h3>
            <div className="w-10 h-px bg-gold mb-5" />
            <p className="font-sarabun text-gray-600 text-sm leading-relaxed mb-6">{t.hotelInfo.location.desc}</p>
            <ul className="space-y-3">
              {nearbyList.map((item) => (
                <li key={item.place} className="flex items-start gap-3 font-sarabun text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span>
                    <span className="text-burgundy font-semibold">{item.place}</span>
                    <span className="text-gray-400 ml-2">{item.dist}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href="https://maps.app.goo.gl/HmpqtwvjTxByjN9EA" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-sarabun text-xs text-burgundy border border-burgundy/30 hover:bg-burgundy hover:text-white px-4 py-2.5 transition-all duration-300">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t.hotelInfo.location.openMaps}
            </a>
          </div>

          <div className="w-full md:w-72 shrink-0">
            <div className="bg-burgundy text-white p-6 text-center">
              <svg className="w-10 h-10 text-gold mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M10 3v18M14 3v18" />
              </svg>
              <p className="font-sarabun text-2xl font-bold mb-1">{t.hotelInfo.elevator.floors}</p>
              <p className="font-sarabun text-xs text-gold tracking-widest uppercase">{t.hotelInfo.elevator.label}</p>
              <div className="w-8 h-px bg-gold/50 mx-auto my-3" />
              <p className="font-sarabun text-white/70 text-xs leading-relaxed">{t.hotelInfo.elevator.desc}</p>
            </div>
          </div>
        </div>

        {/* Children Policy */}
        <div>
          <div className="text-center mb-10">
            <p className="font-sarabun text-xs text-gold tracking-widest uppercase mb-2">{t.hotelInfo.children.subtitle}</p>
            <h3 className="font-sarabun text-3xl text-burgundy">{t.hotelInfo.children.title}</h3>
            <div className="w-10 h-px bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {childPolicies.map((p) => (
              <div key={p.height} className={`border rounded-none p-6 flex flex-col items-center text-center ${p.bg}`}>
                <div className="w-14 h-14 relative mb-4">
                  <Image src={p.icon} alt={p.height} fill className="object-contain mix-blend-multiply" />
                </div>
                <p className="font-sarabun text-xs text-gray-500 mb-2 tracking-wide">{p.height}</p>
                <p className={`font-sarabun text-3xl font-bold mb-1 ${p.color}`}>{p.label}</p>
                <div className="w-8 h-px bg-gray-300 my-3" />
                <p className="font-sarabun text-gray-500 text-xs leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
          <p className="font-sarabun text-xs text-gray-400 text-center mt-6 italic">{t.hotelInfo.children.note}</p>
        </div>

      </div>
    </section>
  );
}
