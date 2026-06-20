"use client";

import { useState, useEffect } from "react";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";

const ROOM_TYPES = [
  { value: "", label: "ทุกห้อง" },
  { value: "deluxe-king", label: "Deluxe King" },
  { value: "deluxe-twin", label: "Deluxe Twin" },
  { value: "super-deluxe", label: "Super Deluxe" },
  { value: "smart-deluxe", label: "Smart Deluxe" },
  { value: "family", label: "Family Room" },
];

function todayStr() {
  return new Date().toISOString().split("T")[0];
}

function tomorrowStr() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function formatDateTH(dateStr: string) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${parseInt(d)} ${months[parseInt(m) - 1]}`;
}

export default function BookingWidget() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [checkIn, setCheckIn] = useState(todayStr());
  const [checkOut, setCheckOut] = useState(tomorrowStr());
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCheckInChange = (val: string) => {
    setCheckIn(val);
    if (val >= checkOut) {
      const d = new Date(val);
      d.setDate(d.getDate() + 1);
      setCheckOut(d.toISOString().split("T")[0]);
    }
  };

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const handleBook = () => {
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Desktop: horizontal bar at bottom */}
      <div
        className={`hidden lg:flex fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="w-full bg-white/95 backdrop-blur-xl border-t border-gold/30 shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
          <div className="max-w-6xl mx-auto px-6 pr-24 py-4 flex items-center gap-6">
            {/* Label */}
            <div className="shrink-0">
              <p className="font-sarabun text-[10px] tracking-[0.3em] uppercase text-gold mb-0.5">Reserve</p>
              <p className="font-sarabun text-sm font-semibold text-gray-900">จองห้องพัก</p>
            </div>

            <div className="w-px h-10 bg-gray-200" />

            {/* Check-in */}
            <div className="flex flex-col flex-1 min-w-[120px]">
              <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-1">เช็คอิน</label>
              <input
                type="date"
                value={checkIn}
                min={todayStr()}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="font-sarabun text-sm text-gray-900 bg-transparent border-none outline-none focus:ring-0 p-0"
              />
            </div>

            <div className="w-px h-10 bg-gray-200" />

            {/* Check-out */}
            <div className="flex flex-col flex-1 min-w-[120px]">
              <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-1">
                เช็คเอาท์
                <span className="ml-2 text-gold font-normal">{nights} คืน</span>
              </label>
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="font-sarabun text-sm text-gray-900 bg-transparent border-none outline-none focus:ring-0 p-0"
              />
            </div>

            <div className="w-px h-10 bg-gray-200" />

            {/* Guests */}
            <div className="flex flex-col shrink-0">
              <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-1">ผู้เข้าพัก</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-burgundy hover:text-burgundy transition-colors text-sm leading-none"
                >−</button>
                <span className="font-sarabun text-sm font-semibold text-gray-900 w-4 text-center">{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(8, guests + 1))}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-burgundy hover:text-burgundy transition-colors text-sm leading-none"
                >+</button>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200" />

            {/* Room type */}
            <div className="flex flex-col flex-1 min-w-[140px]">
              <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-1">ประเภทห้อง</label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="font-sarabun text-sm text-gray-900 bg-transparent border-none outline-none focus:ring-0 p-0 appearance-none"
              >
                {ROOM_TYPES.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>

            {/* CTA */}
            <button
              onClick={handleBook}
              className="shrink-0 bg-burgundy hover:bg-burgundy/90 text-white font-sarabun text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-200 hover:shadow-lg"
            >
              เช็คราคา & จอง
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: floating button → expand panel */}
      <div
        className={`lg:hidden fixed bottom-6 left-5 z-40 transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        {/* Expanded panel */}
        {expanded && (
          <div className="absolute bottom-16 left-0 w-80 bg-white border border-gold/30 shadow-[0_8px_40px_rgba(0,0,0,0.18)] p-5 mb-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-sarabun text-[10px] tracking-[0.3em] uppercase text-gold">Reserve</p>
                <p className="font-sarabun text-base font-semibold text-gray-900">จองห้องพัก</p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-gray-400 hover:text-gray-700 text-xl leading-none"
              >×</button>
            </div>

            <div className="space-y-4">
              {/* Check-in */}
              <div className="border-b border-gray-100 pb-3">
                <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 block mb-1.5">เช็คอิน</label>
                <input
                  type="date"
                  value={checkIn}
                  min={todayStr()}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  className="font-sarabun text-sm text-gray-900 w-full bg-transparent outline-none border border-gray-200 px-3 py-2 focus:border-gold transition-colors"
                />
              </div>

              {/* Check-out */}
              <div className="border-b border-gray-100 pb-3">
                <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 block mb-1.5">
                  เช็คเอาท์ <span className="text-gold font-normal">{nights} คืน</span>
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="font-sarabun text-sm text-gray-900 w-full bg-transparent outline-none border border-gray-200 px-3 py-2 focus:border-gold transition-colors"
                />
              </div>

              {/* Guests */}
              <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400">ผู้เข้าพัก</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-burgundy hover:text-burgundy transition-colors"
                  >−</button>
                  <span className="font-sarabun text-sm font-semibold text-gray-900 w-5 text-center">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(8, guests + 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-burgundy hover:text-burgundy transition-colors"
                  >+</button>
                </div>
              </div>

              {/* Room type */}
              <div className="border-b border-gray-100 pb-3">
                <label className="font-sarabun text-[10px] tracking-[0.25em] uppercase text-gray-400 block mb-1.5">ประเภทห้อง</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="font-sarabun text-sm text-gray-900 w-full bg-transparent outline-none border border-gray-200 px-3 py-2 focus:border-gold transition-colors"
                >
                  {ROOM_TYPES.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              <div className="bg-cream px-3 py-2 text-xs font-sarabun text-gray-500">
                {formatDateTH(checkIn)} → {formatDateTH(checkOut)} · {nights} คืน · {guests} ท่าน
              </div>

              <button
                onClick={handleBook}
                className="w-full bg-burgundy hover:bg-burgundy/90 text-white font-sarabun text-xs tracking-[0.2em] uppercase py-3.5 transition-all duration-200 hover:shadow-lg"
              >
                เช็คราคา & จอง
              </button>
            </div>
          </div>
        )}

        {/* Floating button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-2.5 bg-burgundy text-white font-sarabun text-xs tracking-widest uppercase shadow-[0_4px_20px_rgba(0,0,0,0.25)] px-5 py-3.5 transition-all duration-200 hover:bg-burgundy/90 ${
            expanded ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          จองห้องพัก
        </button>
      </div>
    </>
  );
}
