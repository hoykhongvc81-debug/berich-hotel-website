import { SITE_URL } from "@/lib/rooms";

export const HOTEL_REF = {
  "@type": "Hotel",
  name: "Berich Hotel",
  url: SITE_URL,
  telephone: "+66-82-444-6242",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/4 ถนนมหาดไทยบำรุง",
    addressLocality: "ตำบลหนองหลวง อำเภอเมืองตาก",
    addressRegion: "จังหวัดตาก",
    postalCode: "63000",
    addressCountry: "TH",
  },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
