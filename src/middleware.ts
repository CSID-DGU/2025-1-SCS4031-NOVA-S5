import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const role = req.cookies.get("role")?.value;
  const { pathname } = req.nextUrl;

  if (role === "USER") {
    if (pathname === "/" && accessToken) {
      return NextResponse.redirect(new URL("/main", req.url));
    }

    if (
      (pathname.startsWith("/main") ||
        pathname.startsWith("/reward") ||
        pathname.startsWith("/stamplist")) &&
      !accessToken
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (role === "OWNER") {
    if (pathname === "/owner/login" && accessToken) {
      return NextResponse.redirect(new URL("/owner/main", req.url));
    }

    if (pathname.startsWith("/owner/main") && !accessToken) {
      return NextResponse.redirect(new URL("/owner/login", req.url));
    }
  }

  if (role === "STAFF") {
    if (pathname === "/owner/login" && accessToken) {
      return NextResponse.redirect(new URL("/staff/main", req.url));
    }

    if (pathname.startsWith("/staff/main") && !accessToken) {
      return NextResponse.redirect(new URL("/owner/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/main/:path*",
    "/reward/:path*",
    "/stamplist/:path*",
    "/owner/login",
    "/owner/main/:path*",
    "/staff/main/:path*",
  ],
};
