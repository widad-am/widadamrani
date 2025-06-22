import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {readFile} from 'node:fs/promises';
import path from 'node:path';

export const dynamic = 'force-static'; // pas de mismatch

export async function generateStaticParams() {
  return ['fr','en','de'].map(locale => ({locale}));
}

export default async function LocaleLayout({children, params: {locale}}) {
  if (!['fr','en','de'].includes(locale)) notFound();
  const messages = JSON.parse(
    await readFile(path.join(process.cwd(), 'src/i18n/messages', `${locale}.json`), 'utf8')
  );
  return (
    <html lang={locale} className="!scroll-smooth" suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 