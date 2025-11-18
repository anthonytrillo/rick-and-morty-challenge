import { createContext, useState, useEffect, ReactNode } from 'react';
import translations from '@/utils/translations';
import { LanguageContextProps } from '@/interfases/language';

export type Language = 'en' | 'es' | 'pt';
export type TranslationKeys = keyof typeof translations['en'];

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language || navigator.languages[0];
  const supportedLanguages: Language[] = ['en', 'es', 'pt'];
  return supportedLanguages.includes(browserLang.slice(0, 2) as Language)
    ? (browserLang.slice(0, 2) as Language)
    : 'en';
};

const getSavedLanguage = (): Language => {
  const savedLang = localStorage.getItem('language') as Language | null;
  return savedLang || getBrowserLanguage();
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKeys): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};