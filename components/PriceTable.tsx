"use client";

import ScrollReveal from "@/components/ScrollReveal";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";

const rooms = [
  { name: "Deluxe King", nameEn: "DELUXE KING", default: 690, high: 790, peak: 890 },
  { name: "Deluxe Twin", nameEn: "DELUXE TWIN", default: 790, high: 890, peak: 990 },
  { name: "Super Deluxe", nameEn: "SUPER DELUXE", default: 890, high: 990, peak: 1090 },
  { name: "Smart Deluxe", nameEn: "SMART DELUXE", default: 990, high: 1190, peak: 1190 },
  { name: "Family Room", nameEn: "FAMILY ROOM", default: 1190, high: 1290, peak: 1290 },
];

const seasons = [
  {
    key: "default",
    label: "ราคาปกติ",
    sublabel: "ก.พ. – ต.ค.",
    color: "bg-cream border-gray-200",
    headerColor: "bg-gray-50",
    badge: "",
  },
  {
    key: "high",
    label: "High Season",
    sublabel: "พ.ย. – ม.ค.",
    color: "bg-amber-50 border-amber-200",
    headerColor: "bg-amber-50",
    badge: "ยอดนิยม",
  },
  {
    key: "peak",
    label: "Peak Season",
    sublabel: "วันหยุดยาว / เทศกาล",
    color: "bg-burgundy/5 border-burgundy/20",
    headerColor: "bg-burgundy/5",
    badge: "",
  },
];

export default function PriceTable() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">Room Rates</p>
            <h2 className="font-sarabun text-4xl md:text-5xl text-gray-900 mb-4">ราคาห้องพัก</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-4" />
            <p className="font-sarabun text-gray-500 text-sm">
              ราคาต่อคืน • <span className="text-burgundy font-semibold">รวมอาหารเช้าทุกห้อง</span> • จองตรงราคาดีที่สุด
            </p>
          </div>
        </ScrollReveal>

        {/* Price Table — Desktop */}
        <ScrollReveal>
          <div className="hidden md:block overflow-hidden border border-gray-200 shadow-luxury mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-burgundy text-white">
                  <th className="font-sarabun text-left px-6 py-4 text-sm font-semibold">ประเภทห้อง</th>
                  <th className="font-sarabun text-center px-6 py-4 text-sm font-semibold">
                    ราคาปกติ<br />
                    <span className="text-white/60 text-xs font-normal">ก.พ. – ต.ค.</span>
                  </th>
                  <th className="font-sarabun text-center px-6 py-4 text-sm font-semibold">
                    High Season<br />
                    <span className="text-white/60 text-xs font-normal">พ.ย. – ม.ค.</span>
                  </th>
                  <th className="font-sarabun text-center px-6 py-4 text-sm font-semibold">
                    Peak Season<br />
                    <span className="text-white/60 text-xs font-normal">วันหยุดยาว / เทศกาล</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, i) => (
                  <tr key={room.name} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-gold/5 transition-colors duration-200`}>
                    <td className="px-6 py-4">
                      <p className="font-sarabun text-gray-900 font-semibold">{room.name}</p>
                      <p className="font-montserrat text-[10px] text-gray-400 tracking-widest uppercase">{room.nameEn}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-montserrat text-xl font-bold text-gray-800">{room.default.toLocaleString()}</span>
                      <span className="font-sarabun text-gray-400 text-xs ml-1">บาท/คืน</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-montserrat text-xl font-bold text-amber-600">{room.high.toLocaleString()}</span>
                      <span className="font-sarabun text-gray-400 text-xs ml-1">บาท/คืน</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-montserrat text-xl font-bold text-burgundy">{room.peak.toLocaleString()}</span>
                      <span className="font-sarabun text-gray-400 text-xs ml-1">บาท/คืน</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Price Cards — Mobile */}
        <div className="md:hidden space-y-4 mb-8">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.name} delay={i * 80}>
              <div className="bg-white border border-gray-200 shadow-luxury p-5">
                <div className="mb-4">
                  <p className="font-sarabun text-gray-900 font-semibold text-lg">{room.name}</p>
                  <p className="font-montserrat text-[10px] text-gray-400 tracking-widest uppercase">{room.nameEn}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-50 border border-gray-100">
                    <p className="font-sarabun text-[10px] text-gray-400 mb-1">ปกติ</p>
                    <p className="font-montserrat text-lg font-bold text-gray-800">{room.default.toLocaleString()}</p>
                    <p className="font-sarabun text-[10px] text-gray-400">บาท/คืน</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 border border-amber-100">
                    <p className="font-sarabun text-[10px] text-amber-600 mb-1">High</p>
                    <p className="font-montserrat text-lg font-bold text-amber-600">{room.high.toLocaleString()}</p>
                    <p className="font-sarabun text-[10px] text-gray-400">บาท/คืน</p>
                  </div>
                  <div className="text-center p-3 bg-burgundy/5 border border-burgundy/20">
                    <p className="font-sarabun text-[10px] text-burgundy mb-1">Peak</p>
                    <p className="font-montserrat text-lg font-bold text-burgundy">{room.peak.toLocaleString()}</p>
                    <p className="font-sarabun text-[10px] text-gray-400">บาท/คืน</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note + CTA */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-gray-200 p-6 shadow-luxury">
            <div>
              <p className="font-sarabun text-sm text-gray-500 mb-1">
                ✅ ราคาข้างต้น <span className="text-burgundy font-semibold">รวมอาหารเช้า</span> ทุกห้อง
              </p>
              <p className="font-sarabun text-sm text-gray-500 mb-1">
                ✅ จองตรงกับโรงแรม <span className="text-burgundy font-semibold">ได้ราคาดีที่สุด</span> ไม่ผ่านตัวแทน
              </p>
              <p className="font-sarabun text-sm text-gray-500">
                ✅ Peak Season ขึ้นอยู่กับวันหยุดนักขัตฤกษ์และเทศกาลแต่ละปี
              </p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap px-8 py-4 text-sm tracking-widest"
            >
              เช็คราคา & จองเลย
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
