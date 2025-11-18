import { Language, TranslationKeys } from "@/context/LanguageContext";

export interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}