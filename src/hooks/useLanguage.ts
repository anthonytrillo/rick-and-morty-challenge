import { useContext } from "react";
import { LanguageContextProps } from "@/interfases/language";
import { LanguageContext } from "@/context/LanguageContext";

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};