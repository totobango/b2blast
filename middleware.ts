import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const lang = request.headers.get("accept-language") || "";
    const locale = lang.toLowerCase().includes("fr") ? "fr" : "en";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: "/" };
