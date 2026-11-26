import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RoomDetailContent } from "@/components/RoomPages";
import { JsonLd, breadcrumbs, HOTEL_REF } from "@/lib/jsonld";
import { rooms, roomSlug, findRoom, ROOM_PRICES, SITE_URL, BOOKING_URL } from "@/lib/rooms";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: roomSlug(r) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const room = findRoom(params.slug);
  if (!room) return {};
  const p = ROOM_PRICES[room.name];
  const title = `${room.nameTh} (${room.name}) ห้องพักตาก ${p ? `${p.default} บาท` : ""}`.trim();
  const description = `${room.nameTh} ${room.description} ขนาด ${room.size} ${room.bed} เข้าพักได้ ${room.maxGuests} ท่าน${
    p ? ` ราคาเริ่มต้น ${p.default} บาท/คืน` : ""
  } ที่ Berich Hotel โรงแรมใจกลางเมืองตาก`;
  const path = `/rooms/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Berich Hotel`,
      description,
      url: path,
      type: "website",
      locale: "th_TH",
      siteName: "Berich Hotel",
      images: [{ url: room.images[0], alt: `${room.nameTh} — Berich Hotel โรงแรมตาก` }],
    },
  };
}

export default function RoomPage({ params }: Props) {
  const room = findRoom(params.slug);
  if (!room) notFound();
  const p = ROOM_PRICES[room.name];
  const path = `/rooms/${params.slug}`;

  const hotelRoom = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: `${room.nameTh} — ${room.nameEn ?? room.name}`,
    description: room.description,
    url: `${SITE_URL}${path}`,
    image: room.images.map((src) => `${SITE_URL}${src}`),
    occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests, unitText: "person" },
    floorSize: { "@type": "QuantitativeValue", value: 32, unitCode: "MTK" },
    amenityFeature: room.features.map((f) => ({ "@type": "LocationFeatureSpecification", name: f, value: true })),
    containedInPlace: HOTEL_REF,
    ...(p && {
      offers: {
        "@type": "Offer",
        price: p.default,
        priceCurrency: "THB",
        url: BOOKING_URL,
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbs([
            { name: "หน้าหลัก", path: "/" },
            { name: "ห้องพักและราคา", path: "/rooms" },
            { name: room.nameTh, path },
          ]),
          hotelRoom,
        ]}
      />
      <Header />
      <RoomDetailContent slug={params.slug} />
      <Footer />
    </main>
  );
}
