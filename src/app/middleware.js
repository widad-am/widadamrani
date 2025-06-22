import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['fr', 'en', 'de'];
const defaultLocale = 'fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore public files and API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Check if locale is present in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Try to detect from headers
    const acceptLang = request.headers.get('accept-language');
    let detected = defaultLocale;
    if (acceptLang) {
      const languages = acceptLang.split(',').map(l => l.split(';')[0]);
      detected = matchLocale(languages, locales, defaultLocale);
    }
    return NextResponse.redirect(new URL(`/${detected}${pathname}`, request.url));
  }

  // Validate locale
  const locale = pathname.split('/')[1];
  if (!locales.includes(locale)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|assets|images).*)'],
}; 