"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

const BOOKING_URL = "https://live.ipms247.com/booking/book-rooms-berichhotel";
const LINE_URL = "https://lin.ee/vTflxR0";
const FACEBOOK_URL = "https://www.facebook.com/Berichhotel";

export default function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.rooms, href: "#rooms" },
    { label: t.nav.hotelInfo, href: "#hotel-info" },
    { label: t.nav.nearby, href: "#nearby" },
    { label: t.nav.book, href: BOOKING_URL, external: true },
    { label: "Facebook", href: FACEBOOK_URL, external: true },
    { label: "LINE Official", href: LINE_URL, external: true },
  ];

  return (
    <footer id="contact" className="bg-gray-950 text-white">

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-burgundy via-burgundy-dark to-burgundy py-14 px-6 text-center">
        <p className="font-sarabun text-gold text-xs tracking-[0.4em] uppercase mb-3">{t.footer.cta.subtitle}</p>
        <h2 className="font-sarabun text-4xl md:text-5xl text-white mb-4">{t.footer.cta.title}</h2>
        <p className="font-sarabun text-white/70 text-sm mb-8 max-w-md mx-auto">{t.footer.cta.desc}</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-burgundy font-sarabun font-semibold px-10 py-4 transition-all duration-300 tracking-widest uppercase text-sm">
          {t.footer.cta.book}
        </a>
      </div>

      {/* Footer main */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="mb-4">
            <p className="font-sarabun text-3xl font-bold text-white tracking-wider">BERICH</p>
            <p className="font-sarabun text-[10px] tracking-[0.4em] text-gold uppercase">Hotel</p>
          </div>
          <div className="w-10 h-px bg-gold mb-4" />
          <p className="font-sarabun text-white/50 text-sm leading-relaxed mb-5">{t.footer.brand}</p>
          <div className="flex gap-3">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold text-white/50 transition-all duration-200"
              aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold text-white/50 transition-all duration-200"
              aria-label="LINE">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sarabun text-lg text-white mb-4">{t.footer.contact}</h4>
          <div className="w-8 h-px bg-gold mb-5" />
          <ul className="space-y-4 font-sarabun text-sm text-white/50">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="whitespace-pre-line">{t.footer.address}</span>
                <a href="https://maps.app.goo.gl/HmpqtwvjTxByjN9EA" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gold hover:text-gold-light transition-colors mt-1.5 text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t.footer.viewMap}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0824446242" className="hover:text-gold transition-colors">082-444-6242</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:be_rich_hotel@hotmail.com" className="hover:text-gold transition-colors break-all">
                be_rich_hotel@hotmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                @berichhotel
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sarabun text-lg text-white mb-4">{t.footer.links}</h4>
          <div className="w-8 h-px bg-gold mb-5" />
          <ul className="space-y-2 font-sarabun text-sm text-white/50">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LINE QR */}
        <div>
          <h4 className="font-sarabun text-lg text-white mb-4">{t.footer.line}</h4>
          <div className="w-8 h-px bg-gold mb-5" />
          <p className="font-sarabun text-white/50 text-xs mb-4 leading-relaxed whitespace-pre-line">{t.footer.lineScan}</p>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-block group">
            <div className="bg-white p-2 inline-block border-2 border-transparent group-hover:border-gold transition-all duration-300">
              <Image src="/images/lineQRcode.png" alt="LINE QR Code @berichhotel" width={120} height={120} className="block" />
            </div>
            <p className="font-sarabun text-gold text-[10px] tracking-widest uppercase text-center mt-2">@berichhotel</p>
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 px-6">
        <p className="font-sarabun text-white/30 text-xs text-center tracking-wide">
          © {new Date().getFullYear()} Berich Hotel. {t.footer.copyright}.
        </p>
      </div>
    </footer>
  );
}
