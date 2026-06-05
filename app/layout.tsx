import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Playfair_Display, Sarabun } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berich Hotel — Minimal Luxury ใจกลางเมืองตาก",
  description:
    "โรงแรม Berich สไตล์ Minimal Luxury ใจกลางเมืองตาก ห้องพักหรูพร้อมสิ่งอำนวยความสะดวกครบครัน รวมอาหารเช้า จองห้องพักออนไลน์ได้เลย",
  keywords: [
    "Berich Hotel",
    "โรงแรมตาก",
    "ที่พักตาก",
    "โรงแรมใจกลางเมืองตาก",
    "Minimal Luxury",
    "จองโรงแรมตาก",
  ],
  openGraph: {
    title: "Berich Hotel — Minimal Luxury ใจกลางเมืองตาก จังหวัดตาก",
    description:
      "โรงแรม Berich สไตล์ Minimal Luxury ใจกลางเมืองตาก จังหวัดตาก ห้องพักหรูรวมอาหารเช้า ใกล้ศาลพระเจ้าตากสินและสะพานแขวนริมแม่น้ำปิง",
    type: "website",
    locale: "th_TH",
    siteName: "Berich Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berich Hotel — Minimal Luxury ใจกลางเมืองตาก จังหวัดตาก",
    description:
      "โรงแรม Berich สไตล์ Minimal Luxury ใจกลางเมืองตาก จังหวัดตาก ห้องพักหรูรวมอาหารเช้า ใกล้ศาลพระเจ้าตากสินและสะพานแขวนริมแม่น้ำปิง",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Berich Hotel",
    "alternateName": "โรงแรม Berich",
    "description": "โรงแรมสไตล์ Minimal Luxury ใจกลางเมืองตาก ห้องพักหรูพร้อมสิ่งอำนวยความสะดวกครบครัน เหมาะสำหรับทั้งนักท่องเที่ยวและนักเดินทางธุรกิจ",
    "url": "https://www.berichhotel.com",
    "telephone": "+66-82-444-6242",
    "email": "be_rich_hotel@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2/4 ถนนมหาดไทยบำรุง",
      "addressLocality": "ตำบลหนองหลวง อำเภอเมืองตาก",
      "addressRegion": "จังหวัดตาก",
      "postalCode": "63000",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.8796,
      "longitude": 99.1265
    },
    "hasMap": "https://maps.app.goo.gl/HmpqtwvjTxByjN9EA",
    "image": [
      "https://www.berichhotel.com/images/deluxe-king-1.JPG",
      "https://www.berichhotel.com/images/deluxe-twin-1.JPG",
      "https://www.berichhotel.com/images/super-deluxe-1.JPG",
      "https://www.berichhotel.com/images/smart-deluxe-1.JPG",
      "https://www.berichhotel.com/images/family-1.JPG",
      "https://www.berichhotel.com/images/gallery/lobby-1.JPG"
    ],
    "numberOfRooms": "5",
    "checkinTime": "14:00",
    "checkoutTime": "12:00",
    "priceRange": "฿฿",
    "currenciesAccepted": "THB",
    "paymentAccepted": "Cash, Credit Card",
    "starRating": { "@type": "Rating", "ratingValue": "3" },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "ลิฟท์", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "อาหารเช้า", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "แอร์", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "ตู้เย็น", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Smart Toilet", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wireless Charging", "value": true }
    ],
    "sameAs": [
      "https://www.facebook.com/Berichhotel",
      "https://lin.ee/vTflxR0"
    ]
  };

  return (
    <html lang="th" className={`${playfair.variable} ${sarabun.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sarabun antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
