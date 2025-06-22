'use client';
import {usePathname, useRouter} from 'next/navigation';

const locales = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];

  function switchLocale(newLocale) {
    if (newLocale === currentLocale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  }

  return (
    <div className="flex gap-2">
      {locales.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={`px-2 py-1 rounded ${currentLocale === code ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
        >
          <span className="mr-1">{flag}</span>{label}
        </button>
      ))}
    </div>
  );
} 