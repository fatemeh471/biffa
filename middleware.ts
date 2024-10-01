import { NextResponse } from "next/server";

export function middleware(request: { nextUrl: { pathname: any; }; url: string | URL | undefined; }) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/fa", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: "/",
};
