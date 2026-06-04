"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import th from "@/data/locales/th.json";
import en from "@/data/locales/en.json";
import zh from "@/data/locales/zh.json";

export type Lang = "th" | "en" | "zh";

const locales = { th, en, zh };

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof th;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "th",
  setLang: () => {},
  t: th,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: locales[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
