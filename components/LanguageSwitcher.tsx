"use client";

import { useLang, Lang } from "@/contexts/LanguageContext";

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "th", flag: "🇹🇭", label: "ไทย" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
];

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1">
      {languages.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            onClick={() => setLang(l.code)}
            className={`font-sarabun text-xs px-2 py-1 transition-all duration-200 ${
              lang === l.code
                ? "text-gold font-semibold"
                : dark
                ? "text-white/60 hover:text-white"
                : "text-gray-500 hover:text-burgundy"
            }`}
            aria-label={`Switch to ${l.label}`}
          >
            <span className="mr-1">{l.flag}</span>
            {l.label}
          </button>
          {i < languages.length - 1 && (
            <span className={`text-xs ${dark ? "text-white/20" : "text-gray-200"}`}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}
