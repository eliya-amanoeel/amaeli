import { useState, useEffect } from "react";
import { en } from "../i18n/en";
import { sv } from "../i18n/sv";
import type { Translations } from "../i18n/types";

export type Lang = "en" | "sv";

const translations: Record<Lang, Translations> = { en, sv };

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "sv") return stored;
    return navigator.language.startsWith("sv") ? "sv" : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((l) => (l === "en" ? "sv" : "en"));

  return { lang, t: translations[lang], toggleLanguage };
}
