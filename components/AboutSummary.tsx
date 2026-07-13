import ScrollReveal from "@/components/ScrollReveal";

const facts = [
  { label: "ที่ตั้ง", value: "ใจกลางเมืองตาก จ.ตาก" },
  { label: "ราคาเริ่มต้น", value: "690 บาท/คืน รวมอาหารเช้า" },
  { label: "เช็คอิน / เช็คเอาท์", value: "14:00 / 12:00 น." },
  { label: "คะแนนรีวิว", value: "4.4 ★ จาก 854 รีวิว (Google)" },
];

/**
 * Answer-first summary block (GEO): one quotable, entity-rich paragraph
 * that AI answer engines can lift directly, plus a compact fact list.
 */
export default function AboutSummary() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">
              About
            </p>
            <h2 className="font-sarabun text-3xl md:text-4xl text-gray-900 mb-4">
              เกี่ยวกับ Berich Hotel
            </h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="font-sarabun text-gray-700 text-base md:text-lg leading-loose text-center">
            <strong className="text-gray-900">Berich Hotel</strong> (โรงแรม Berich)
            เป็นโรงแรมสไตล์ Minimal Luxury ใจกลางเมืองตาก จังหวัดตาก
            มีห้องพักสะอาดและกว้างขวาง 5 ประเภท ราคาเริ่มต้น{" "}
            <strong className="text-burgundy">690 บาทต่อคืน รวมอาหารเช้าทุกห้อง</strong>{" "}
            พร้อมที่จอดรถฟรีทั้งรถยนต์และรถจักรยานยนต์ โรงแรมตั้งอยู่ห่างจาก
            ศาลพระเจ้าตากสินเพียง 800 เมตร และเดินถึงสะพานแขวนริมแม่น้ำปิงกับ
            ถนนคนเดินริมปิงได้สบาย ได้คะแนนรีวิว{" "}
            <strong className="text-gray-900">4.4 จาก 854 รีวิวบน Google</strong>{" "}
            (Agoda 8.6 · Booking 8.4) เหมาะทั้งนักท่องเที่ยว ครอบครัว และนักเดินทาง
            ที่แวะพักระหว่างเส้นทางเชียงใหม่–กรุงเทพ
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-gray-100 text-center">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-sarabun text-[11px] text-gray-400 uppercase tracking-widest mb-1.5">
                  {f.label}
                </dt>
                <dd className="font-sarabun text-sm text-gray-800 font-medium leading-snug">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
