"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.rooms, href: "#rooms" },
    { label: t.nav.hotelInfo, href: "#hotel-info" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.nearby, href: "#nearby" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-luxury border-b border-gold/10"
          : "glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Berich Hotel"
            width={180}
            height={72}
            className={`h-16 w-auto object-contain transition-all duration-300 ${scrolled ? "brightness-75" : "brightness-0 invert"}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sarabun text-xs tracking-widest uppercase transition-colors duration-200 ${
                scrolled ? "text-gray-700 hover:text-burgundy" : "text-white/90 hover:text-gold"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher dark={!scrolled} />

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-5 whitespace-nowrap"
          >
            {t.nav.book}
          </a>
        </nav>

        {/* Mobile: Language + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher dark={!scrolled} />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-burgundy" : "bg-white"
                } ${menuOpen && i === 0 ? "rotate-45 translate-y-2" : ""} ${
                  menuOpen && i === 1 ? "opacity-0" : ""
                } ${menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gold/20 shadow-luxury">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sarabun text-xs tracking-widest uppercase text-gray-700 hover:text-burgundy py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-xs py-3 mt-2"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

