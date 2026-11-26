"use client";

import { useLang } from "@/contexts/LanguageContext";

const PHONE = "0824446242";
const LINE_URL = "https://lin.ee/vTflxR0";
const MESSENGER_URL = "https://m.me/Berichhotel";

const LABELS = {
  th: { call: "โทรหาเรา", line: "คุยผ่าน LINE", fb: "คุยผ่าน Facebook" },
  en: { call: "Call us", line: "Chat on LINE", fb: "Chat on Messenger" },
  zh: { call: "致电我们", line: "LINE 咨询", fb: "Messenger 咨询" },
};

/**
 * Floating contact buttons (call / LINE / Messenger), bottom-right.
 * Plain <a> links so ConversionTracking records click_call / click_line /
 * click_facebook in the hotel's GA4.
 */
export default function FloatingContact() {
  const { lang } = useLang();
  const t = LABELS[lang] ?? LABELS.th;

  const items = [
    {
      key: "call",
      href: `tel:${PHONE}`,
      label: t.call,
      bg: "#7a1f2b",
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      ),
    },
    {
      key: "line",
      href: LINE_URL,
      label: t.line,
      bg: "#06C755",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      ),
    },
    {
      key: "fb",
      href: MESSENGER_URL,
      label: t.fb,
      bg: "#0866FF",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.98-.87c.17-.08.36-.09.54-.04.91.25 1.87.38 2.9.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46l-2.94 4.66c-.47.74-1.47.93-2.17.4l-2.34-1.75a.6.6 0 00-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.17-.4l2.34 1.75a.6.6 0 00.72 0l3.16-2.4c.42-.32.97.18.69.63z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {items.map((it) => (
        <a
          key={it.key}
          href={it.href}
          target={it.external ? "_blank" : undefined}
          rel={it.external ? "noopener noreferrer" : undefined}
          aria-label={it.label}
          className="group flex items-center justify-end gap-2"
        >
          <span className="hidden md:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-white text-gray-800 font-sarabun text-xs font-semibold px-3 py-2 rounded-full shadow-lg whitespace-nowrap">
            {it.label}
          </span>
          <span
            className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform duration-200"
            style={{ backgroundColor: it.bg }}
          >
            {it.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
