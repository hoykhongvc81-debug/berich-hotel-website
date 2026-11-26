"use client";

import Image from "next/image";
import Link from "next/link";
import attractionsData from "@/data/attractions.json";
import PageBanner from "@/components/PageBanner";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { BOOKING_URL } from "@/lib/rooms";

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

const places = attractionsData as Attraction[];

const L = {
  th: {
    home: "หน้าหลัก",
    crumb: "ที่เที่ยวเมืองตาก",
    eyebrow: "Tak City Guide",
    title: "ที่เที่ยวเมืองตาก ใกล้ที่พักใจกลางเมือง",
    intro:
      "รวมสถานที่ท่องเที่ยวในตัวเมืองตาก พร้อมระยะทางจาก Berich Hotel โรงแรมที่ตั้งอยู่ใจกลางเมืองตาก ถนนมหาดไทยบำรุง ไปศาลพระเจ้าตากสิน สะพานแขวน และถนนคนเดินริมน้ำปิงได้ในระยะไม่ถึง 1 กิโลเมตร",
    distance: "ระยะทางจากโรงแรม",
    time: "เวลาเดินทาง",
    hours: "เวลาเปิด",
    planTitle: "เที่ยวเมืองตากแบบพักที่ Berich Hotel",
    plan: [
      "ช่วงเช้า: ขับรถราว 30 นาทีไปวัดพระบรมธาตุบ้านตาก ขอพรหลวงพ่อทันใจ (เปิด 06:00–18:00 น.)",
      "ช่วงบ่าย: กลับเข้าเมือง สักการะศาลพระเจ้าตากสิน ห่างจากโรงแรมเพียง 800 เมตร",
      "ช่วงเย็น: เดินเล่นและถ่ายรูปที่สะพานแขวนริมแม่น้ำปิง แล้วต่อด้วยถนนคนเดินริมน้ำปิง (ศุกร์–อาทิตย์ 17:00–22:00 น.)",
      "ถ้าอยากเดินถนนคนเดิน แนะนำจองห้องพักคืนวันศุกร์หรือวันเสาร์",
    ],
    stayTitle: "ที่พักตากใกล้สถานที่เที่ยว",
    stayDesc:
      "Berich Hotel โรงแรมสไตล์ Minimal Luxury ใจกลางเมืองตาก ห้องพักขนาด 32 ตร.ม. รวมอาหารเช้าทุกห้อง มีที่จอดรถ ราคาเริ่มต้น 690 บาท/คืน",
    rooms: "ดูห้องพักและราคา",
    book: "เช็คราคา & จอง",
  },
  en: {
    home: "Home",
    crumb: "Tak City Guide",
    eyebrow: "Tak City Guide",
    title: "Things to Do in Tak City, Near Our Hotel",
    intro:
      "Attractions in Tak city with distances from Berich Hotel on Mahatthai Bamrung Road. The King Taksin Shrine, the suspension bridge and the Ping River walking street are all less than 1 km away.",
    distance: "Distance from hotel",
    time: "Travel time",
    hours: "Opening hours",
    planTitle: "A day in Tak from Berich Hotel",
    plan: [
      "Morning: drive about 30 minutes to Wat Phra Borommathat Ban Tak (open 06:00–18:00).",
      "Afternoon: back in town, visit the King Taksin Shrine, just 800 m from the hotel.",
      "Evening: walk the Ping River suspension bridge, then the riverside walking street (Fri–Sun 17:00–22:00).",
      "For the walking street, book a Friday or Saturday night.",
    ],
    stayTitle: "Stay close to it all",
    stayDesc:
      "Berich Hotel is a Minimal Luxury hotel in central Tak. All rooms are 32 sq.m. with breakfast included and free parking, from 690 THB per night.",
    rooms: "View rooms & rates",
    book: "Check rates & book",
  },
  zh: {
    home: "首页",
    crumb: "达府旅游指南",
    eyebrow: "Tak City Guide",
    title: "达府市区景点 — 酒店附近好去处",
    intro: "达府市区景点及与 Berich Hotel 的距离。达信大帝神祠、吊桥和平河步行街距离酒店均不到1公里。",
    distance: "距酒店",
    time: "交通时间",
    hours: "开放时间",
    planTitle: "入住 Berich Hotel 的一日游",
    plan: [
      "上午：驾车约30分钟前往班塔克佛塔寺（06:00–18:00 开放）。",
      "下午：返回市区，参拜距酒店仅800米的达信大帝神祠。",
      "傍晚：漫步滨河吊桥，再逛平河步行街（周五至周日 17:00–22:00）。",
      "想逛步行街，建议预订周五或周六晚。",
    ],
    stayTitle: "住在景点附近",
    stayDesc: "Berich Hotel 是位于达府市中心的简约奢华酒店，客房32平方米，均含早餐，提供停车位，每晚690泰铢起。",
    rooms: "查看客房与价格",
    book: "查看价格并预订",
  },
} satisfies Record<Lang, Record<string, string | string[]>>;

function en(s: string) {
  return s.replace("กิโลเมตร", "km").replace("เมตร", "m").replace("นาที", "min");
}

export default function TakGuide() {
  const { lang } = useLang();
  const l = L[lang];
  return (
    <>
      <PageBanner eyebrow={l.eyebrow} title={l.title} intro={l.intro} crumbs={[{ label: l.home, href: "/" }, { label: l.crumb }]} />
      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {places.map((p) => {
            const name = lang === "en" ? p.nameEn : lang === "zh" ? p.nameZh ?? p.nameEn : p.name;
            const desc = lang === "en" ? p.descriptionEn ?? p.description : lang === "zh" ? p.descriptionZh ?? p.description : p.description;
            return (
              <article key={p.id} className="bg-white shadow-luxury border border-gray-100 grid md:grid-cols-2 overflow-hidden">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image src={p.image} alt={`${p.name} เมืองตาก`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <p className="font-sarabun text-xs text-gold tracking-widest uppercase mb-1">
                    {p.categoryIcon} {lang === "th" ? p.category : p.nameEn}
                  </p>
                  <h2 className="font-sarabun text-2xl text-burgundy mb-3">{name}</h2>
                  <p className="font-sarabun text-sm text-gray-600 leading-relaxed mb-5">{desc}</p>
                  <dl className="font-sarabun text-sm divide-y divide-gray-100 border-y border-gray-100">
                    <div className="flex justify-between py-2"><dt className="text-gray-500">{l.distance}</dt><dd>{lang === "th" ? p.distance : en(p.distance)}</dd></div>
                    <div className="flex justify-between py-2"><dt className="text-gray-500">{l.time}</dt><dd>{lang === "th" ? p.travelTime : en(p.travelTime)}</dd></div>
                    <div className="flex justify-between py-2"><dt className="text-gray-500">{l.hours}</dt><dd>{p.openHours}</dd></div>
                  </dl>
                </div>
              </article>
            );
          })}

          <div className="bg-white border border-gray-100 shadow-luxury p-6 md:p-8">
            <h2 className="font-sarabun text-2xl text-gray-900 mb-4">{l.planTitle}</h2>
            <ul className="space-y-3 font-sarabun text-sm text-gray-700 leading-relaxed">
              {l.plan.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-burgundy text-white p-8 text-center">
            <h2 className="font-sarabun text-2xl mb-2">{l.stayTitle}</h2>
            <p className="font-sarabun text-sm text-white/75 max-w-xl mx-auto mb-6">{l.stayDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/rooms" className="border border-gold text-gold hover:bg-gold hover:text-burgundy font-sarabun text-sm px-6 py-3 transition-colors">
                {l.rooms}
              </Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-gold text-burgundy hover:bg-gold-light font-sarabun font-semibold text-sm px-6 py-3 transition-colors">
                {l.book}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
