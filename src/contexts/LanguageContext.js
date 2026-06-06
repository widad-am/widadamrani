"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { SUPPORTED_LANGS } from '@/data/cv';
import { createTranslator, getMeta } from '@/i18n';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  mounted: false,
});

function applyLang(lang) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
    const meta = getMeta(lang);
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
  }
}

function getInitialLang() {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('lang');
  if (SUPPORTED_LANGS.includes(saved)) return saved;
  const browser = navigator.language?.slice(0, 2);
  if (SUPPORTED_LANGS.includes(browser)) return browser;
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');
  const [mounted, setMounted] = useState(false);

  const t = useMemo(() => createTranslator(lang), [lang]);

  useEffect(() => {
    const initial = getInitialLang();
    setLangState(initial);
    applyLang(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) applyLang(lang);
  }, [lang, mounted]);

  const setLang = useCallback((next) => {
    if (!SUPPORTED_LANGS.includes(next)) return;
    setLangState(next);
    localStorage.setItem('lang', next);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslation() {
  const { lang, setLang, t, mounted } = useLanguage();
  return { lang, setLang, t, mounted };
}

export function localeForLang(lang) {
  if (lang === 'fr') return 'fr-FR';
  if (lang === 'de') return 'de-DE';
  return 'en-US';
}
