import { NextResponse } from "next/server";
import Negotiator from "negotiator";

const locales = ["en", "fa"];
const defaultLocale = "en";

function getLocale(request: { headers: any }) {
  const negotiator = new Negotiator({ headers: request.headers });
  const languages = negotiator.languages();

  for (const lang of languages) {
    if (locales.includes(lang)) {
      return lang;
    }
  }

  return defaultLocale;
}

export function middleware(request: { nextUrl: any; headers: any; }) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/((?!_next).*)",
};
