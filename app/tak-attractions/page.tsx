import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TakGuide from "@/components/TakGuide";
import attractions from "@/data/attractions.json";
import { JsonLd, breadcrumbs } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/rooms";

const title = "ที่เที่ยวเมืองตาก ใกล้ที่พักใจกลางเมือง พร้อมระยะทาง";
const description =
  "ที่เที่ยวในตัวเมืองตาก ศาลพระเจ้าตากสิน สะพานแขวนริมแม่น้ำปิง ถนนคนเดินริมน้ำปิง และวัดพระบรมธาตุบ้านตาก พร้อมระยะทางและเวลาเปิด จาก Berich Hotel ที่พักใจกลางเมืองตาก";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tak-attractions" },
  openGraph: {
    title: `${title} | Berich Hotel`,
    description,
    url: "/tak-attractions",
    type: "article",
    locale: "th_TH",
    siteName: "Berich Hotel",
  },
};

export default function TakAttractionsPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ที่เที่ยวเมืองตาก ใกล้ Berich Hotel",
    itemListElement: attractions.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristAttraction",
        name: a.name,
        alternateName: a.nameEn,
        description: a.description,
        image: `${SITE_URL}${encodeURI(a.image)}`,
      },
    })),
  };
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbs([
            { name: "หน้าหลัก", path: "/" },
            { name: "ที่เที่ยวเมืองตาก", path: "/tak-attractions" },
          ]),
          list,
        ]}
      />
      <Header />
      <TakGuide />
      <Footer />
    </main>
  );
}
