import { createContext, useContext } from "react";
import type { Translations } from "../i18n/types";
import { en } from "../i18n/en";
import type { Lang } from "../hooks/useLanguage";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  toggleLanguage: () => {},
});

export function useT() {
  return useContext(LanguageContext);
}
