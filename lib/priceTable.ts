export const PRICE_TABLE = {
  Direct: {
    Low: {
      "Deluxe King size": 690,
      "Deluxe Twin": 790,
      "Super Deluxe": 890,
      "Smart Deluxe": 990,
      "Family Room": 1190,
      "เพิ่มผู้เข้าพักเด็ก": 150,
      "เตียงเสริม": 350,
      "เพิ่มผู้เข้าพักผู้ใหญ่": 200,
    },
    High: {
      "Deluxe King size": 790,
      "Deluxe Twin": 890,
      "Super Deluxe": 990,
      "Smart Deluxe": 1190,
      "Family Room": 1290,
      "เพิ่มผู้เข้าพักเด็ก": 150,
      "เตียงเสริม": 350,
      "เพิ่มผู้เข้าพักผู้ใหญ่": 200,
    },
    Peak: {
      "Deluxe King size": 890,
      "Deluxe Twin": 990,
      "Super Deluxe": 1090,
      "Smart Deluxe": 1190,
      "Family Room": 1290,
      "เพิ่มผู้เข้าพักเด็ก": 150,
      "เตียงเสริม": 350,
      "เพิ่มผู้เข้าพักผู้ใหญ่": 200,
    },
  },
  Sale: {
    Low: {
      "Deluxe King size": 590,
      "Deluxe Twin": 690,
      "Super Deluxe": 790,
      "Smart Deluxe": 990,
      "Family Room": 1190,
      "เพิ่มผู้เข้าพักเด็ก": 150,
      "เตียงเสริม": 350,
      "เพิ่มผู้เข้าพักผู้ใหญ่": 200,
    },
    High: {
      "Deluxe King size": 690,
      "Deluxe Twin": 790,
      "Super Deluxe": 990,
      "Smart Deluxe": 1090,
      "Family Room": 1190,
      "เพิ่มผู้เข้าพักเด็ก": 150,
      "เตียงเสริม": 350,
      "เพิ่มผู้เข้าพักผู้ใหญ่": 200,
    },
    Peak: {
      "Deluxe King size": 690,
      "Deluxe Twin": 790,
      "Super Deluxe": 990,
      "Smart Deluxe": 1090,
      "Family Room": 1190,
      "เพิ่มผู้เข้าพักเด็ก": 150,
      "เตียงเสริม": 350,
      "เพิ่มผู้เข้าพักผู้ใหญ่": 200,
    },
  },
} as const;

export type RateType = keyof typeof PRICE_TABLE;
export type SeasonType = keyof typeof PRICE_TABLE.Direct;
export type RoomKey = keyof typeof PRICE_TABLE.Direct.Low;

export const ROOM_TYPES: RoomKey[] = [
  "Deluxe King size",
  "Deluxe Twin",
  "Super Deluxe",
  "Smart Deluxe",
  "Family Room",
];

export const ADDON_TYPES: RoomKey[] = [
  "เพิ่มผู้เข้าพักเด็ก",
  "เตียงเสริม",
  "เพิ่มผู้เข้าพักผู้ใหญ่",
];
