import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Playfair_Display, Sarabun } from "next/font/google";
import LuxuryCursor from "@/components/LuxuryCursor";
import BookingWidget from "@/components/BookingWidget";
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
    images: [
      {
        url: "https://www.berichhotel.com/images/smart-deluxe-1.JPG",
        width: 1200,
        height: 630,
        alt: "ห้อง Smart Deluxe — Berich Hotel เมืองตาก",
      },
    ],
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
  verification: {
    google: "z-l4DLe87fXmjDL61xN8nQJxJeiHeNuUS33AIdGW3YU",
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
    "petsAllowed": false,
    "smokingAllowed": false,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "854",
      "bestRating": "5",
      "worstRating": "1"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Deluxe King Room — ห้องดีลักซ์ คิง",
        "price": "690",
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
        "url": "https://live.ipms247.com/booking/book-rooms-berichhotel",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "690",
          "priceCurrency": "THB",
          "unitCode": "DAY"
        },
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Deluxe King Room",
          "description": "ห้องพักสไตล์ Minimal Luxury ขนาด 32 ตร.ม. เตียง King 6 ฟุต 1 เตียง รวมอาหารเช้า 2 ท่าน",
          "occupancy": { "@type": "QuantitativeValue", "maxValue": 2, "unitText": "person" },
          "floorSize": { "@type": "QuantitativeValue", "value": 32, "unitCode": "MTK" },
          "bed": { "@type": "BedDetails", "typeOfBed": "King", "numberOfBeds": 1 }
        }
      },
      {
        "@type": "Offer",
        "name": "Deluxe Twin Room — ห้องดีลักซ์ ทวิน",
        "price": "790",
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
        "url": "https://live.ipms247.com/booking/book-rooms-berichhotel",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "790",
          "priceCurrency": "THB",
          "unitCode": "DAY"
        },
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Deluxe Twin Room",
          "description": "ห้องพักขนาด 32 ตร.ม. เตียงเดี่ยว 5 ฟุต 2 เตียง รวมอาหารเช้า 2 ท่าน",
          "occupancy": { "@type": "QuantitativeValue", "maxValue": 2, "unitText": "person" },
          "floorSize": { "@type": "QuantitativeValue", "value": 32, "unitCode": "MTK" },
          "bed": { "@type": "BedDetails", "typeOfBed": "Single", "numberOfBeds": 2 }
        }
      },
      {
        "@type": "Offer",
        "name": "Super Deluxe Room — ห้องซูเปอร์ ดีลักซ์",
        "price": "890",
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
        "url": "https://live.ipms247.com/booking/book-rooms-berichhotel",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "890",
          "priceCurrency": "THB",
          "unitCode": "DAY"
        },
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Super Deluxe Room",
          "description": "ห้องอัปเกรดขนาด 32 ตร.ม. เตียง King 6 ฟุต Smart TV 43 นิ้ว โซฟาโยก กาต้มน้ำ รวมอาหารเช้า 2 ท่าน",
          "occupancy": { "@type": "QuantitativeValue", "maxValue": 2, "unitText": "person" },
          "floorSize": { "@type": "QuantitativeValue", "value": 32, "unitCode": "MTK" },
          "bed": { "@type": "BedDetails", "typeOfBed": "King", "numberOfBeds": 1 }
        }
      },
      {
        "@type": "Offer",
        "name": "Smart Deluxe Room — ห้องสมาร์ท ดีลักซ์",
        "price": "990",
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
        "url": "https://live.ipms247.com/booking/book-rooms-berichhotel",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "990",
          "priceCurrency": "THB",
          "unitCode": "DAY"
        },
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Smart Deluxe Room",
          "description": "ห้อง Smart ขนาด 32 ตร.ม. Smart TV 55 นิ้ว Smart Toilet Wireless Charging เตียง King 6 ฟุต รวมอาหารเช้า 2 ท่าน",
          "occupancy": { "@type": "QuantitativeValue", "maxValue": 2, "unitText": "person" },
          "floorSize": { "@type": "QuantitativeValue", "value": 32, "unitCode": "MTK" },
          "bed": { "@type": "BedDetails", "typeOfBed": "King", "numberOfBeds": 1 }
        }
      },
      {
        "@type": "Offer",
        "name": "Family Room — ห้องแฟมิลี่",
        "price": "1190",
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
        "url": "https://live.ipms247.com/booking/book-rooms-berichhotel",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1190",
          "priceCurrency": "THB",
          "unitCode": "DAY"
        },
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Family Room",
          "description": "ห้องครอบครัวขนาด 32 ตร.ม. เตียง 6 ฟุต + เตียงเด็ก 3 ฟุต + กระโจมเด็ก รวมอาหารเช้า 3 ท่าน",
          "occupancy": { "@type": "QuantitativeValue", "maxValue": 3, "unitText": "person" },
          "floorSize": { "@type": "QuantitativeValue", "value": 32, "unitCode": "MTK" },
          "bed": { "@type": "BedDetails", "typeOfBed": "King", "numberOfBeds": 1 }
        }
      }
    ],
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Natthaseth Kitkunee" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "ที่พักโคตรดี ราคาถูกมากสำหรับในราคานี้ ห้องกว้างใหญ่ เตียงใหญ่นอนสบาย ห้องน้ำสะอาด ไม่มีกลิ่น พนักงานบริการดี อาหารเช้าอร่อย แนะนำเลย"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jessica" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "I was really impressed with the service of the staffs and the vibes of the hotel. Both single and double bed rooms are pretty big, comfortable and very clean. The location is quite central so it is very easy to find from the main road."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Apiwich Vijitpokin" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "เดินทางจากเชียงใหม่กลับกรุงเทพ แวะนอนที่ตากก่อน เลยมานอนที่ Berich hotel เลือกเป็นห้อง 3 เตียง ห้องกว้างนอนสบาย โรงแรมอยู่ใจกลางเมือง มีที่จอดรถ อาหารเช้าเป็นคูปองให้เลือก เหมาะสำหรับนอนพักกลางทางครับ"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "ภารดี รุ่งรังษี" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "พักตากครั้งแรก มาเข้าพักจริง คือดีมาก สะอาดมาก ห้องกว้างมาก เตียงกว้าง พัก 2 คน แต่เตียงนอนได้ 4 คนสบายๆ พนักงานบริการดูแลดีมาก"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Hnin Yee Htwe" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "The room is so clean and spacious. It's very pleasant to stay here. The staffs are very friendly and easy to communicate."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/Berichhotel",
      "https://lin.ee/vTflxR0",
      "https://maps.app.goo.gl/HmpqtwvjTxByjN9EA"
    ]
  };

  return (
    <html lang="th" className={`${playfair.variable} ${sarabun.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K8VNMMV');` }} />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sarabun antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8VNMMV" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
        <LuxuryCursor />
        <BookingWidget />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
