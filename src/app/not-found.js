"use client";
import Link from 'next/link';
import { useTranslation } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 mac-desktop">
      <h1 className="text-4xl font-bold mb-4">{t('notFound.title')}</h1>
      <p className="text-xl mb-8 text-center max-w-md">{t('notFound.description')}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#86198f] text-white rounded-md hover:bg-[#701a7a] transition-colors"
      >
        {t('notFound.cta')}
      </Link>
    </div>
  );
}
