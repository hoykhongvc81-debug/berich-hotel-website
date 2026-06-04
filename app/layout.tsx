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
  title: "Berich Hotel — Minimal Luxury in Bangkok",
  description:
    "สัมผัสประสบการณ์ความหรูหราในสไตล์ Minimal Luxury ที่ Berich Hotel กรุงเทพฯ ห้องพักสุดหรูพร้อมสิ่งอำนวยความสะดวกครบครัน จองห้องพักออนไลน์ได้เลย",
  keywords: [
    "Berich Hotel",
    "โรงแรมกรุงเทพ",
    "โรงแรมหรู",
    "ที่พักกรุงเทพ",
    "จองโรงแรม",
    "Luxury Hotel Bangkok",
  ],
  openGraph: {
    title: "Berich Hotel — Minimal Luxury in Bangkok",
    description:
      "สัมผัสประสบการณ์ความหรูหราในสไตล์ Minimal Luxury ที่ Berich Hotel กรุงเทพฯ",
    type: "website",
    locale: "th_TH",
    siteName: "Berich Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berich Hotel — Minimal Luxury in Bangkok",
    description:
      "สัมผัสประสบการณ์ความหรูหราในสไตล์ Minimal Luxury ที่ Berich Hotel กรุงเทพฯ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${playfair.variable} ${sarabun.variable}`}>
      <body className="font-sarabun antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
