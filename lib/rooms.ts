import roomsData from "@/data/rooms.json";
import type { Lang } from "@/contexts/LanguageContext";

export const SITE_URL = "https://www.berichhotel.com";
export const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";

export type Room = {
  id: number;
  name: string;
  nameTh: string;
  nameEn?: string;
  nameZh?: string;
  description: string;
  descriptionEn?: string;
  descriptionZh?: string;
  checkIn: string;
  checkOut: string;
  breakfast: string;
  breakfastEn?: string;
  breakfastZh?: string;
  size: string;
  sizeEn?: string;
  sizeZh?: string;
  maxGuests: number;
  bed: string;
  bedEn?: string;
  bedZh?: string;
  extraBed: string;
  extraBedEn?: string;
  extraBedZh?: string;
  features: string[];
  featuresEn?: string[];
  featuresZh?: string[];
  images: string[];
  badge: string;
  badgeEn?: string;
  badgeZh?: string;
};

// Nightly rates in THB, per season. Single source for the price table,
// the room pages and their structured data.
export const ROOM_PRICES: Record<string, { default: number; high: number; peak: number }> = {
  "Deluxe King": { default: 690, high: 790, peak: 990 },
  "Deluxe Twin": { default: 790, high: 890, peak: 1090 },
  "Super Deluxe": { default: 890, high: 990, peak: 1190 },
  "Smart Deluxe": { default: 990, high: 1190, peak: 1290 },
  "Family Room": { default: 1190, high: 1290, peak: 1390 },
};

export const rooms = roomsData as Room[];

export function roomSlug(room: Room) {
  return room.name.toLowerCase().replace(/\s+/g, "-");
}

export function findRoom(slug: string) {
  return rooms.find((r) => roomSlug(r) === slug);
}

type Localized = "name" | "description" | "breakfast" | "size" | "bed" | "extraBed" | "badge";

export function roomText(room: Room, field: Localized, lang: Lang): string {
  if (field === "name") {
    return lang === "en" ? room.nameEn ?? room.nameTh : lang === "zh" ? room.nameZh ?? room.nameTh : room.nameTh;
  }
  const r = room as unknown as Record<string, string | undefined>;
  const base = r[field] ?? "";
  if (lang === "en") return r[`${field}En`] ?? base;
  if (lang === "zh") return r[`${field}Zh`] ?? base;
  return base;
}

export function roomFeatures(room: Room, lang: Lang): string[] {
  return lang === "en" ? room.featuresEn ?? room.features : lang === "zh" ? room.featuresZh ?? room.features : room.features;
}
