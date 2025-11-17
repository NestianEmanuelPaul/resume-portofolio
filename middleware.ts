import { NextResponse } from "next/server";

export function middleware(req: { nextUrl: any; }) {
  const url = req.nextUrl;
  const lang = url.searchParams.get("lang");

  // Default English dacă nu există parametru
  if (!lang) {
    url.searchParams.set("lang", "en");
  }

  return NextResponse.rewrite(url);
}
