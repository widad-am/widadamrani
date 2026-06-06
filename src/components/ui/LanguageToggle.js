"use client";
import { useLanguage, useTranslation } from '@/contexts/LanguageContext';
import { SUPPORTED_LANGS } from '@/data/cv';

const LABELS = { en: 'EN', fr: 'FR', de: 'DE' };

export default function LanguageToggle() {
  const { lang, setLang, mounted } = useLanguage();
  const { t } = useTranslation();

  if (!mounted) {
    return (
      <div className="mac-lang-toggle opacity-50" aria-hidden="true">
        <span className="mac-lang-btn active">EN</span>
      </div>
    );
  }

  return (
    <div className="mac-lang-toggle" role="group" aria-label={t('lang.groupLabel')}>
      {SUPPORTED_LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={`mac-lang-btn ${lang === code ? 'active' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={t(`lang.${code}`)}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}
