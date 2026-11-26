import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RoomsIndexContent } from "@/components/RoomPages";
import { JsonLd, breadcrumbs, HOTEL_REF } from "@/lib/jsonld";
import { rooms, roomSlug, ROOM_PRICES, SITE_URL } from "@/lib/rooms";

const title = "ห้องพักและราคา ที่พักตาก ใจกลางเมือง รวมอาหารเช้า";
const description =
  "ราคาห้องพัก Berich Hotel โรงแรมตาก 5 แบบ ขนาด 32 ตร.ม. ดีลักซ์ คิง ดีลักซ์ ทวิน ซูเปอร์ ดีลักซ์ สมาร์ท ดีลักซ์ และห้องแฟมิลี่ รวมอาหารเช้า เริ่มต้น 690 บาท/คืน จองตรงกับโรงแรม";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: `${title} | Berich Hotel`,
    description,
    url: "/rooms",
    type: "website",
    locale: "th_TH",
    siteName: "Berich Hotel",
    images: [{ url: "/images/smart-deluxe-1.JPG", alt: "ห้องพัก Berich Hotel โรงแรมตาก" }],
  },
};

export default function RoomsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ห้องพัก Berich Hotel",
    itemListElement: rooms.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/rooms/${roomSlug(r)}`,
      name: `${r.nameTh} (${r.nameEn ?? r.name})`,
    })),
  };
  const lowest = Math.min(...Object.values(ROOM_PRICES).map((p) => p.default));
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbs([
            { name: "หน้าหลัก", path: "/" },
            { name: "ห้องพักและราคา", path: "/rooms" },
          ]),
          itemList,
          { "@context": "https://schema.org", ...HOTEL_REF, priceRange: `฿${lowest}+` },
        ]}
      />
      <Header />
      <RoomsIndexContent />
      <Footer />
    </main>
  );
}
