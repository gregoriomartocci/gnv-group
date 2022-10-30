// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  const url = req.url;

  const { pathname, origin } = req.nextUrl;

  console.log(pathname, "ok");
  console.log(req, "OKK");
  console.log(url, "BOCA JUNIORS");

  if (url.includes("/profile")) {
    return NextResponse.redirect(`${origin}/login`);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
