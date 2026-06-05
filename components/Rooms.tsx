"use client";

import { useState } from "react";
import roomsData from "@/data/rooms.json";
import RoomCarousel from "@/components/RoomCarousel";
import { useLang } from "@/contexts/LanguageContext";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";

type Room = {
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

function FeaturesModal({ room, onClose }: { room: Room; onClose: () => void }) {
  const { t, lang } = useLang();
  const roomName = lang === "en" ? (room.nameEn ?? room.nameTh) : lang === "zh" ? (room.nameZh ?? room.nameTh) : room.nameTh;
  const features = lang === "en" ? (room.featuresEn ?? room.features) : lang === "zh" ? (room.featuresZh ?? room.features) : room.features;
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white max-w-md w-full p-6 shadow-luxury-hover" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-sarabun text-xl text-burgundy">{roomName}</h3>
            <p className="font-sarabun text-xs text-gold tracking-widest uppercase">{room.name}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-burgundy transition-colors ml-4 shrink-0" aria-label="Close">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="w-10 h-px bg-gold mb-4" />
        <p className="font-sarabun text-xs text-gray-400 uppercase tracking-widest mb-3">
          {t.rooms.allFacilities} ({features.length} {t.rooms.items})
        </p>
        <div className="grid grid-cols-2 gap-2">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 font-sarabun text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-center text-xs py-3 w-full block" onClick={onClose}>
            {t.rooms.bookRoom}
          </a>
        </div>
      </div>
    </div>
  );
}

function RoomCard({ room }: { room: Room }) {
  const [showModal, setShowModal] = useState(false);
  const { t, lang } = useLang();
  const roomName = lang === "en" ? (room.nameEn ?? room.nameTh) : lang === "zh" ? (room.nameZh ?? room.nameTh) : room.nameTh;
  const roomDesc = lang === "en" ? (room.descriptionEn ?? room.description) : lang === "zh" ? (room.descriptionZh ?? room.description) : room.description;
  const breakfast = lang === "en" ? (room.breakfastEn ?? room.breakfast) : lang === "zh" ? (room.breakfastZh ?? room.breakfast) : room.breakfast;
  const bed = lang === "en" ? (room.bedEn ?? room.bed) : lang === "zh" ? (room.bedZh ?? room.bed) : room.bed;
  const size = lang === "en" ? (room.sizeEn ?? room.size) : lang === "zh" ? (room.sizeZh ?? room.size) : room.size;
  const extraBed = lang === "en" ? (room.extraBedEn ?? room.extraBed) : lang === "zh" ? (room.extraBedZh ?? room.extraBed) : room.extraBed;
  const badge = lang === "en" ? (room.badgeEn ?? room.badge) : lang === "zh" ? (room.badgeZh ?? room.badge) : room.badge;
  const features = lang === "en" ? (room.featuresEn ?? room.features) : lang === "zh" ? (room.featuresZh ?? room.features) : room.features;

  return (
    <div className="group bg-white shadow-luxury hover:shadow-luxury-hover transition-all duration-400 overflow-hidden border border-gray-100 hover:border-gold/30 flex flex-col">
      <RoomCarousel images={room.images} roomName={roomName} badge={badge} />
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-sarabun text-2xl text-burgundy">{roomName}</h3>
          <p className="font-sarabun text-xs text-gold tracking-widest uppercase mt-0.5">{room.name}</p>
        </div>
        <div className="w-10 h-px bg-gold mb-4" />
        <p className="font-sarabun text-gray-600 text-sm leading-relaxed mb-4">{roomDesc}</p>

        {/* Check-in/out + Breakfast */}
        <div className="bg-cream-dark border border-gray-100 p-3 mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <div>
              <p className="font-sarabun text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">{t.rooms.checkin}</p>
              <p className="font-sarabun text-xs text-gray-700 font-semibold">{room.checkIn}</p>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200 shrink-0" />
          <div className="flex items-center gap-1.5 shrink-0">
            <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H3m5 4v1a3 3 0 003 3h7a3 3 0 003-3V7a3 3 0 00-3-3h-7a3 3 0 00-3 3v1" />
            </svg>
            <div>
              <p className="font-sarabun text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">{t.rooms.checkout}</p>
              <p className="font-sarabun text-xs text-gray-700 font-semibold">{room.checkOut}</p>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200 shrink-0" />
          <div className="flex items-center gap-1.5 min-w-0">
            <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="min-w-0">
              <p className="font-sarabun text-[9px] text-gray-400 uppercase tracking-wide leading-none mb-0.5">{t.rooms.breakfast}</p>
              <p className="font-sarabun text-xs text-gold font-semibold truncate">{breakfast}</p>
            </div>
          </div>
        </div>

        {/* Bed + Size + Guests */}
        <div className="flex flex-wrap gap-4 mb-4 font-sarabun text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {bed}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {size}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.rooms.maxGuests} {room.maxGuests} {t.rooms.guests}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-2 content-start">
          {features.slice(0, 5).map((f) => (
            <span key={f} className="font-sarabun text-[10px] tracking-wide bg-cream-dark text-gray-600 px-2.5 py-1 border border-gray-200 h-7 flex items-center">
              {f}
            </span>
          ))}
          {features.length > 5 && (
            <button onClick={() => setShowModal(true)}
              className="font-sarabun text-[10px] tracking-wide text-gold border border-gold/40 px-2.5 py-1 h-7 flex items-center gap-1 hover:bg-gold hover:text-white transition-all duration-200 cursor-pointer">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {features.length - 5} {t.rooms.more}
            </button>
          )}
        </div>

        {showModal && <FeaturesModal room={room} onClose={() => setShowModal(false)} />}
        <p className="font-sarabun text-[11px] text-gray-400 italic mb-5">* {extraBed}</p>

        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-xs py-3 w-full mt-auto">
          {t.rooms.bookRoom}
        </a>
      </div>
    </div>
  );
}

export default function Rooms() {
  const { t } = useLang();
  return (
    <section id="rooms" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">{t.rooms.subtitle}</p>
          <h2 className="section-title">{t.rooms.title}</h2>
          <div className="gold-divider" />
          <p className="font-sarabun text-gray-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">{t.rooms.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(roomsData as Room[]).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <div className="text-center mt-14">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            {t.rooms.bookOnline}
          </a>
        </div>
      </div>
    </section>
  );
}
