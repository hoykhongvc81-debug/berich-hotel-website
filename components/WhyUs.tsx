"use client";

import { useLang } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function WhyUs() {
  const { t } = useLang();

  const features = [
    { icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>),
      title: t.whyUs.features.luxury.title, desc: t.whyUs.features.luxury.desc },
    { icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      title: t.whyUs.features.location.title, desc: t.whyUs.features.location.desc },
    { icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      title: t.whyUs.features.value.title, desc: t.whyUs.features.value.desc },
    { icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>),
      title: t.whyUs.features.safe.title, desc: t.whyUs.features.safe.desc },
  ];

  const stats = [
    { value: 5, suffix: t.whyUs.stats.floors, label: t.whyUs.stats.floorsLabel },
    { value: 33, suffix: t.whyUs.stats.photos, label: t.whyUs.stats.photosLabel },
    { value: 5, suffix: t.whyUs.stats.roomTypes, label: t.whyUs.stats.roomTypesLabel },
    { value: 24, suffix: t.whyUs.stats.service, label: t.whyUs.stats.serviceLabel },
  ];

  return (
    <section className="py-20 bg-burgundy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-sarabun text-gold text-xs tracking-[0.4em] uppercase mb-3">{t.whyUs.subtitle}</p>
            <h2 className="font-sarabun text-4xl md:text-5xl text-white mb-4">{t.whyUs.title}</h2>
            <div className="gold-divider-shimmer w-16 h-px mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-16">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 120}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border border-gold/40 text-gold mb-3 md:mb-5 group-hover:bg-gold group-hover:text-burgundy transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="font-sarabun text-base md:text-xl text-white mb-2">{f.title}</h3>
                <p className="font-sarabun text-white/60 text-xs md:text-sm leading-relaxed hidden sm:block">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="border-t border-gold/20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-sarabun text-3xl md:text-4xl gold-shimmer font-bold mb-1 leading-tight pt-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="font-sarabun text-white/50 text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

