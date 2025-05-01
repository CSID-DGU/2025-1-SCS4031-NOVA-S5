import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  if (pathname === "/" && accessToken) {
    return NextResponse.redirect(new URL("/main", req.url));
  }

  if ((pathname.startsWith("/main") || pathname.startsWith("/reward")) && !accessToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/main/:path*", "/reward/:path*", "/stamplist/:path*"],
};
