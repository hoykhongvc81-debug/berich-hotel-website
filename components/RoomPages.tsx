"use client";

import Link from "next/link";
import Image from "next/image";
import RoomCarousel from "@/components/RoomCarousel";
import PageBanner from "@/components/PageBanner";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { BOOKING_URL, ROOM_PRICES, rooms, roomSlug, roomText, roomFeatures, type Room } from "@/lib/rooms";

const L = {
  th: {
    home: "หน้าหลัก",
    roomsCrumb: "ห้องพักและราคา",
    indexEyebrow: "Rooms & Rates",
    indexTitle: "ห้องพักและราคา โรงแรมตาก Berich Hotel",
    indexIntro:
      "ห้องพัก 5 แบบ ขนาด 32 ตร.ม. ทุกห้อง รวมอาหารเช้าทุกห้อง ใจกลางเมืองตาก ใกล้ศาลพระเจ้าตากสินและสะพานแขวนริมแม่น้ำปิง ราคาเริ่มต้น 690 บาท/คืน",
    from: "เริ่มต้น",
    perNight: "บาท/คืน",
    rates: "ราคาต่อคืน (รวมอาหารเช้า)",
    season: "ช่วงเวลา",
    regular: "ราคาปกติ (ก.พ. – ต.ค.)",
    high: "High Season (พ.ย. – ม.ค.)",
    peak: "Peak Season (วันหยุดยาว / เทศกาล)",
    details: "รายละเอียดห้อง",
    book: "เช็คราคา & จองห้องนี้",
    bed: "เตียง",
    size: "ขนาดห้อง",
    guests: "เข้าพักสูงสุด",
    guestsUnit: "ท่าน",
    breakfast: "อาหารเช้า",
    checkin: "เช็คอิน / เช็คเอาท์",
    extraBed: "เตียงเสริม",
    facilities: "สิ่งอำนวยความสะดวกในห้อง",
    others: "ห้องพักแบบอื่น",
    viewDetails: "ดูรายละเอียด",
    contactTitle: "สอบถามห้องว่างหรือขอใบเสนอราคา",
    contactDesc: "โทรหรือแชท LINE กับโรงแรมได้โดยตรง ทุกวัน",
    call: "โทร 082-444-6242",
    line: "แชท LINE @berichhotel",
    note: "* ราคาอาจเปลี่ยนแปลงตามวันเข้าพัก ตรวจสอบราคาล่าสุดได้ที่ระบบจองออนไลน์",
  },
  en: {
    home: "Home",
    roomsCrumb: "Rooms & Rates",
    indexEyebrow: "Rooms & Rates",
    indexTitle: "Rooms & Rates — Berich Hotel, Tak",
    indexIntro:
      "5 room types, all 32 sq.m. with breakfast included, in the heart of Tak city near the King Taksin Shrine and the Ping River suspension bridge. From 690 THB per night.",
    from: "From",
    perNight: "THB/night",
    rates: "Nightly rates (breakfast included)",
    season: "Season",
    regular: "Regular (Feb – Oct)",
    high: "High Season (Nov – Jan)",
    peak: "Peak Season (long weekends / festivals)",
    details: "Room details",
    book: "Check rates & book",
    bed: "Bed",
    size: "Room size",
    guests: "Max guests",
    guestsUnit: "",
    breakfast: "Breakfast",
    checkin: "Check-in / Check-out",
    extraBed: "Extra bed",
    facilities: "In-room facilities",
    others: "Other room types",
    viewDetails: "View details",
    contactTitle: "Ask about availability",
    contactDesc: "Call or chat with the hotel on LINE, every day",
    call: "Call 082-444-6242",
    line: "LINE @berichhotel",
    note: "* Rates may vary by date. Check the latest price in our online booking system.",
  },
  zh: {
    home: "首页",
    roomsCrumb: "客房与价格",
    indexEyebrow: "Rooms & Rates",
    indexTitle: "客房与价格 — 达府 Berich Hotel",
    indexIntro: "5种房型，每间32平方米，均含早餐。位于达府市中心，靠近达信大帝神祠和滨河吊桥。每晚690泰铢起。",
    from: "起价",
    perNight: "泰铢/晚",
    rates: "每晚价格（含早餐）",
    season: "季节",
    regular: "平季（2月 – 10月）",
    high: "旺季（11月 – 1月）",
    peak: "高峰期（长假 / 节日）",
    details: "客房详情",
    book: "查看价格并预订",
    bed: "床型",
    size: "客房面积",
    guests: "最多入住",
    guestsUnit: "人",
    breakfast: "早餐",
    checkin: "入住 / 退房",
    extraBed: "加床",
    facilities: "客房设施",
    others: "其他房型",
    viewDetails: "查看详情",
    contactTitle: "咨询空房",
    contactDesc: "每天均可致电或通过 LINE 联系酒店",
    call: "致电 082-444-6242",
    line: "LINE @berichhotel",
    note: "* 价格可能因日期而异，请以在线预订系统为准。",
  },
} satisfies Record<Lang, Record<string, string>>;

function price(n: number) {
  return n.toLocaleString("en-US");
}

function ContactBox({ lang }: { lang: Lang }) {
  const l = L[lang];
  return (
    <div className="bg-cream-dark border border-gray-200 p-6 text-center">
      <h2 className="font-sarabun text-xl text-burgundy mb-1">{l.contactTitle}</h2>
      <p className="font-sarabun text-sm text-gray-500 mb-5">{l.contactDesc}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="tel:0824446242" className="btn-outline text-sm px-6 py-3">{l.call}</a>
        <a href="https://lin.ee/vTflxR0" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-6 py-3">
          {l.line}
        </a>
      </div>
    </div>
  );
}

function RateTable({ room, lang }: { room: Room; lang: Lang }) {
  const l = L[lang];
  const p = ROOM_PRICES[room.name];
  if (!p) return null;
  const rows = [
    { label: l.regular, value: p.default },
    { label: l.high, value: p.high },
    { label: l.peak, value: p.peak },
  ];
  return (
    <div>
      <h2 className="font-sarabun text-xl text-gray-900 mb-3">{l.rates}</h2>
      <table className="w-full border border-gray-200 font-sarabun text-sm">
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t border-gray-100 first:border-t-0">
              <th scope="row" className="text-left font-normal text-gray-600 px-4 py-3">{r.label}</th>
              <td className="text-right px-4 py-3 whitespace-nowrap">
                <span className="font-bold text-burgundy text-lg">{price(r.value)}</span>{" "}
                <span className="text-gray-400 text-xs">{l.perNight}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-sarabun text-xs text-gray-400 mt-2">{l.note}</p>
    </div>
  );
}

export function RoomsIndexContent() {
  const { lang } = useLang();
  const l = L[lang];
  return (
    <>
      <PageBanner
        eyebrow={l.indexEyebrow}
        title={l.indexTitle}
        intro={l.indexIntro}
        crumbs={[{ label: l.home, href: "/" }, { label: l.roomsCrumb }]}
      />
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {rooms.map((room) => {
            const name = roomText(room, "name", lang);
            const p = ROOM_PRICES[room.name];
            const href = `/rooms/${roomSlug(room)}`;
            return (
              <article key={room.id} className="bg-white shadow-luxury border border-gray-100 grid md:grid-cols-5 overflow-hidden">
                <Link href={href} className="relative block md:col-span-2 aspect-[4/3] md:aspect-auto md:min-h-[260px]">
                  <Image src={room.images[0]} alt={`${room.nameTh} — Berich Hotel โรงแรมตาก`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                </Link>
                <div className="md:col-span-3 p-6 flex flex-col">
                  <h2 className="font-sarabun text-2xl text-burgundy">
                    <Link href={href} className="hover:text-gold transition-colors">{name}</Link>
                  </h2>
                  <p className="font-sarabun text-xs text-gold tracking-widest uppercase mt-0.5 mb-3">{room.name}</p>
                  <p className="font-sarabun text-sm text-gray-600 leading-relaxed mb-4">{roomText(room, "description", lang)}</p>
                  <ul className="font-sarabun text-xs text-gray-500 flex flex-wrap gap-x-5 gap-y-1 mb-5">
                    <li>{roomText(room, "bed", lang)}</li>
                    <li>{roomText(room, "size", lang)}</li>
                    <li>{l.guests} {room.maxGuests} {l.guestsUnit}</li>
                    <li className="text-gold">{roomText(room, "breakfast", lang)}</li>
                  </ul>
                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                    {p && (
                      <p className="font-sarabun text-sm text-gray-500">
                        {l.from} <span className="text-2xl font-bold text-burgundy">{price(p.default)}</span> {l.perNight}
                      </p>
                    )}
                    <div className="flex gap-2">
                      <Link href={href} className="btn-outline text-xs py-3 px-5 text-center">{l.details}</Link>
                      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-3 px-5 text-center">{l.book}</a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          <p className="font-sarabun text-xs text-gray-400 text-center">{l.note}</p>
          <ContactBox lang={lang} />
        </div>
      </section>
    </>
  );
}

export function RoomDetailContent({ slug }: { slug: string }) {
  const { lang } = useLang();
  const l = L[lang];
  const room = rooms.find((r) => roomSlug(r) === slug)!;
  const name = roomText(room, "name", lang);
  const features = roomFeatures(room, lang);
  const others = rooms.filter((r) => r.id !== room.id);

  const facts = [
    { k: l.bed, v: roomText(room, "bed", lang) },
    { k: l.size, v: roomText(room, "size", lang) },
    { k: l.guests, v: `${room.maxGuests} ${l.guestsUnit}`.trim() },
    { k: l.breakfast, v: roomText(room, "breakfast", lang) },
    { k: l.checkin, v: `${room.checkIn} / ${room.checkOut}` },
    { k: l.extraBed, v: roomText(room, "extraBed", lang) },
  ];

  return (
    <>
      <PageBanner
        eyebrow={room.name}
        title={lang === "th" ? `${name} — โรงแรมตาก Berich Hotel` : `${name} — Berich Hotel, Tak`}
        intro={roomText(room, "description", lang)}
        crumbs={[{ label: l.home, href: "/" }, { label: l.roomsCrumb, href: "/rooms" }, { label: name }]}
      />
      <section className="bg-cream py-14 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-8">
            <div className="shadow-luxury bg-white">
              <RoomCarousel images={room.images} roomName={name} badge={roomText(room, "badge", lang)} />
            </div>
            <div>
              <h2 className="font-sarabun text-xl text-gray-900 mb-3">{l.facilities}</h2>
              <ul className="grid grid-cols-2 gap-2 font-sarabun text-sm text-gray-700">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="lg:col-span-2 space-y-8">
            <dl className="bg-white border border-gray-100 shadow-luxury divide-y divide-gray-100 font-sarabun text-sm">
              {facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-4 px-5 py-3">
                  <dt className="text-gray-500">{f.k}</dt>
                  <dd className="text-gray-900 text-right">{f.v}</dd>
                </div>
              ))}
            </dl>
            <RateTable room={room} lang={lang} />
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary block text-center text-sm py-4">
              {l.book}
            </a>
            <ContactBox lang={lang} />
          </aside>
        </div>
      </section>
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sarabun text-2xl text-gray-900 mb-6 text-center">{l.others}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((r) => {
              const p = ROOM_PRICES[r.name];
              return (
                <Link key={r.id} href={`/rooms/${roomSlug(r)}`} className="group block border border-gray-100 hover:border-gold/40 hover:shadow-luxury transition-all">
                  <div className="relative aspect-[4/3]">
                    <Image src={r.images[0]} alt={`${r.nameTh} — Berich Hotel`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="p-3 font-sarabun">
                    <p className="text-sm text-burgundy group-hover:text-gold">{roomText(r, "name", lang)}</p>
                    {p && <p className="text-xs text-gray-500">{l.from} {price(p.default)} {l.perNight}</p>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
