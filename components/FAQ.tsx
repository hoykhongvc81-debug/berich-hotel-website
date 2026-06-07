"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "มีที่จอดรถไหมครับ/ค่ะ?",
    a: "มีที่จอดรถให้บริการฟรีครับ ทั้งรถยนต์และรถจักรยานยนต์ รองรับได้หลายคัน อยู่บริเวณหน้าและข้างโรงแรม",
  },
  {
    q: "เช็คอินก่อนเวลาได้ไหม?",
    a: "เวลาเช็คอินปกติคือ 14:00 น. หากต้องการเช็คอินก่อน กรุณาแจ้งล่วงหน้าครับ ทางโรงแรมจะพยายามจัดห้องให้ตามความพร้อม ขึ้นอยู่กับห้องว่างในวันนั้น",
  },
  {
    q: "เช็คเอาท์ช้าได้ไหม?",
    a: "เวลาเช็คเอาท์ปกติคือ 12:00 น. สามารถแจ้งขอเช็คเอาท์ช้าได้ที่แผนกต้อนรับ ขึ้นอยู่กับความพร้อมของห้องพักในวันนั้น และมีค่าบริการเพิ่มเติมครับ",
  },
  {
    q: "รับสัตว์เลี้ยงไหมครับ?",
    a: "ขออภัยครับ ทางโรงแรมไม่อนุญาตให้นำสัตว์เลี้ยงเข้าพักเพื่อรักษาความสะอาดและความสะดวกสบายของผู้เข้าพักทุกท่าน",
  },
  {
    q: "มีสระว่ายน้ำไหม?",
    a: "ทางโรงแรมไม่มีสระว่ายน้ำครับ แต่มีสิ่งอำนวยความสะดวกครบครัน ได้แก่ Free WiFi, Smart TV, ตู้เย็น, Smart Toilet และอาหารเช้ารวมทุกห้อง",
  },
  {
    q: "อาหารเช้ารวมในราคาทุกห้องไหม?",
    a: "รวมอาหารเช้าทุกห้องครับ เป็นคูปองให้เลือกเมนูได้ เช่น ข้าวต้ม ข้าวกระเพราไก่ ไข่ดาวไส้กรอก บริการที่ร้านอาหารของโรงแรม",
  },
  {
    q: "โรงแรมอยู่ใกล้อะไรบ้าง?",
    a: "โรงแรมตั้งอยู่ใจกลางเมืองตาก ใกล้ศาลพระเจ้าตากสิน สะพานแขวนริมแม่น้ำปิง ถนนคนเดินริมปิง และสวนสาธารณะ สะดวกสำหรับการเดินทางท่องเที่ยวมากครับ",
  },
  {
    q: "จองตรงกับโรงแรมได้ไหม ดีกว่า Booking/Agoda ไหม?",
    a: "จองตรงได้เลยครับ ผ่านระบบออนไลน์ของโรงแรม หรือโทรหาเราโดยตรงที่ 082-444-6242 ราคาจองตรงดีที่สุด ไม่ผ่านตัวแทน และได้รับการดูแลเป็นพิเศษครับ",
  },
  {
    q: "มี LINE หรือช่องทางติดต่ออื่นไหม?",
    a: "ติดต่อได้หลายช่องทางครับ โทร 082-444-6242, LINE Official: @berichhotel, Facebook: Berich Hotel หรืออีเมล be_rich_hotel@hotmail.com ยินดีให้บริการ 24 ชั่วโมง",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <section className="py-20 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">FAQ</p>
            <h2 className="font-sarabun text-4xl md:text-5xl text-gray-900 mb-4">คำถามที่พบบ่อย</h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-sarabun text-gray-900 font-medium pr-4">{faq.q}</span>
                  <span className={`shrink-0 w-5 h-5 flex items-center justify-center text-burgundy transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${open === i ? "max-h-96" : "max-h-0"}`}>
                  <p className="font-sarabun text-gray-600 text-sm leading-relaxed px-6 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <p className="font-sarabun text-gray-500 text-sm mb-4">ยังมีคำถามอื่น? ติดต่อเราได้เลยครับ</p>
            <a
              href="tel:0824446242"
              className="inline-flex items-center gap-2 btn-primary px-8 py-3 text-sm tracking-widest"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              โทรหาเรา 082-444-6242
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
