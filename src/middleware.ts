import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, type Locale } from './types/i18n';

function getLocaleFromGeo(request: NextRequest): Locale | null {
  // Vercel geo - only available in deployed environments (not localhost)
  const geo = (request as any).geo;
  if (!geo) return null;

  const country = geo.country;
  if (country === 'KR') return 'ko';
  if (country === 'JP') return 'ja';

  return null;
}

function getLocaleFromHeader(request: NextRequest): Locale | null {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return null;

  const languages = acceptLanguage.split(',').map((lang) => {
    const [locale] = lang.trim().split(';');
    return locale.split('-')[0];
  });

  for (const lang of languages) {
    if (LOCALES.includes(lang as Locale)) {
      return lang as Locale;
    }
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value as Locale;
  const geoLocale = getLocaleFromGeo(request);
  const headerLocale = getLocaleFromHeader(request);

  const locale = cookieLocale || geoLocale || headerLocale || DEFAULT_LOCALE;

  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 });

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
