import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const authRoutes = ["/login", "/register"];
const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

type TRole = keyof typeof roleBasedRoutes;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = {
    name: "Rahad",
    role: "ADMIN",
  };
  //   const user = undefined;

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  }

  // Protect with user role
  if (user?.role && roleBasedRoutes[user?.role as TRole]) {
    const routes = roleBasedRoutes[user?.role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/admin/:path*", "/login", "/register"],
};
