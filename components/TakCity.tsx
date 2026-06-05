"use client";

import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "ประวัติศาสตร์แผ่นดิน",
    desc: "ตากเป็นบ้านเกิดของสมเด็จพระเจ้าตากสินมหาราช กษัตริย์ผู้กอบกู้เอกราชไทยหลังการเสียกรุงศรีอยุธยา ร่องรอยประวัติศาสตร์ยังปรากฏให้เห็นทั่วเมือง",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "ธรรมชาติและน้ำตก",
    desc: "จังหวัดตากเป็นที่ตั้งของน้ำตกทีลอซู หนึ่งในน้ำตกที่ใหญ่และสวยที่สุดในเอเชียตะวันออกเฉียงใต้ รวมถึงอุทยานแห่งชาติอุ้มผางและผืนป่าธรรมชาติอีกมากมาย",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "ทำเลเชื่อมภาคเหนือ",
    desc: "ตากตั้งอยู่บนเส้นทางสำคัญที่เชื่อมกรุงเทพฯ สู่ภาคเหนือ ห่างจากกรุงเทพฯ เพียง 426 กม. และเป็นประตูสู่สุโขทัย กำแพงเพชร และแม่สอด",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "วัฒนธรรมและของฝาก",
    desc: "ตากมีผ้าทอพื้นเมือง ผ้าตีนจก และกล้วยตากชื่อดังที่เป็นของฝากขึ้นชื่อ รวมถึงอาหารพื้นถิ่นรสเด็ดที่หาไม่ได้จากที่อื่น",
  },
];

const reasons = [
  {
    num: "01",
    title: "เมืองเงียบสงบ ไม่แออัด",
    desc: "ต่างจากเชียงใหม่หรือกรุงเทพฯ เมืองตากยังคงบรรยากาศเมืองเล็กที่เงียบสงบ เหมาะสำหรับผู้ที่ต้องการพักผ่อนอย่างแท้จริง ไม่วุ่นวาย ไม่เสียงดัง",
  },
  {
    num: "02",
    title: "แม่น้ำปิง สายน้ำแห่งประวัติศาสตร์",
    desc: "แม่น้ำปิงไหลผ่านใจกลางเมืองตาก สร้างบรรยากาศริมน้ำที่งดงาม มีสะพานแขวนโบราณ ถนนคนเดินยามเย็น และร้านอาหารริมน้ำที่บรรยากาศดี",
  },
  {
    num: "03",
    title: "จุดแวะพักระหว่างเดินทางภาคเหนือ",
    desc: "ตากเป็นจุดแวะพักที่ดีเยี่ยมสำหรับนักเดินทางที่มุ่งหน้าสู่เชียงใหม่ เชียงราย หรือสุโขทัย ใช้เวลาเดินทางจากกรุงเทพฯ เพียง 4-5 ชั่วโมงทางรถยนต์",
  },
  {
    num: "04",
    title: "ราคาที่พักและอาหารสมเหตุสมผล",
    desc: "เมืองตากมีค่าครองชีพต่ำกว่าเมืองท่องเที่ยวหลักอย่างเห็นได้ชัด ทั้งอาหาร ที่พัก และแหล่งช้อปปิ้ง ทำให้คุ้มค่าการเดินทางอย่างแท้จริง",
  },
];

export default function TakCity() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">Tak Province, Thailand</p>
            <h2 className="font-sarabun text-4xl md:text-5xl text-gray-900 mb-4">
              ทำไมต้องมาพักที่<span className="text-burgundy">เมืองตาก</span>?
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />
            <p className="font-sarabun text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              จังหวัดตาก — เมืองประวัติศาสตร์ริมแม่น้ำปิง ดินแดนแห่งวีรกษัตริย์ตากสินมหาราช
              ธรรมชาติงดงาม วัฒนธรรมเข้มข้น และบรรยากาศที่หาไม่ได้จากเมืองท่องเที่ยวทั่วไป
            </p>
          </div>
        </ScrollReveal>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 100}>
              <div className="p-6 border border-gray-100 hover:border-gold/40 hover:shadow-luxury transition-all duration-300 group">
                <div className="w-12 h-12 bg-burgundy/5 text-burgundy flex items-center justify-center mb-4 group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                  {h.icon}
                </div>
                <h3 className="font-sarabun text-base font-semibold text-gray-800 mb-2">{h.title}</h3>
                <p className="font-sarabun text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Why Stay Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <ScrollReveal>
            <div>
              <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">Why Stay in Tak</p>
              <h3 className="font-sarabun text-3xl md:text-4xl text-gray-900 mb-6">
                4 เหตุผลที่นักเดินทาง<br />เลือกพักที่ตาก
              </h3>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="font-sarabun text-gray-500 text-sm leading-relaxed mb-6">
                เมืองตากไม่ใช่แค่ "จุดผ่าน" อีกต่อไป — ด้วยสถานที่ท่องเที่ยวที่หลากหลาย
                บรรยากาศริมน้ำที่สงบงาม และความเป็นเมืองที่ยังคงเสน่ห์ดั้งเดิม
                ทำให้นักเดินทางทั้งไทยและต่างชาติเริ่มหันมาให้ความสนใจมากขึ้น
              </p>
              <p className="font-sarabun text-gray-500 text-sm leading-relaxed">
                โรงแรม Berich ตั้งอยู่ใจกลางตัวเมืองตาก ห่างจากสะพานแขวนริมแม่น้ำปิงเพียง 950 เมตร
                และศาลพระเจ้าตากสินเพียง 800 เมตร เป็นฐานที่ดีที่สุดสำหรับการสำรวจเมืองตาก
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.num} delay={i * 100}>
                <div className="flex gap-5 group">
                  <div className="font-montserrat text-3xl font-bold text-burgundy/15 group-hover:text-burgundy/30 transition-colors duration-300 leading-none pt-1 min-w-[48px]">
                    {r.num}
                  </div>
                  <div>
                    <h4 className="font-sarabun text-base font-semibold text-gray-800 mb-1">{r.title}</h4>
                    <p className="font-sarabun text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Tak City Facts */}
        <ScrollReveal>
          <div className="bg-burgundy text-white p-10 md:p-14">
            <div className="text-center mb-10">
              <p className="font-sarabun text-gold text-xs tracking-[0.4em] uppercase mb-3">Did You Know?</p>
              <h3 className="font-sarabun text-2xl md:text-3xl">ข้อเท็จจริงเกี่ยวกับจังหวัดตาก</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "426", unit: "กม.", label: "จากกรุงเทพฯ" },
                { value: "4-5", unit: "ชม.", label: "ทางรถยนต์" },
                { value: "16", unit: "อำเภอ", label: "ในจังหวัดตาก" },
                { value: "1", unit: "แห่งเดียว", label: "น้ำตกทีลอซู ใหญ่ที่สุดในอาเซียน" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-montserrat text-3xl md:text-4xl font-bold text-gold mb-1">
                    {s.value}<span className="text-lg ml-1">{s.unit}</span>
                  </p>
                  <p className="font-sarabun text-white/60 text-xs leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
