// Import from server
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Export the middleware
export default clerkMiddleware((auth, request) => {
  const publicRoutes = ["/", "/home", "/login", "/signup"];
  const isPublicRoute = publicRoutes.some(route => request.url.includes(route));

  if (!auth.userId && !isPublicRoute) {
    const signInUrl = new URL('/sign-in', request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

// Export the config
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|assets|favicon.ico).*)",
    "/",
  ],
};