'use client';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('hero');
  return (
    <main>
      <h1>{t('title')}</h1>
      {/* Ajoute ici le reste de ton contenu, en utilisant les clés de traduction */}
    </main>
  );
} 