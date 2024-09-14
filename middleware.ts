import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  // Redirect to sign-in page if token is not present
  if (
    req.nextUrl.pathname === "/login" ||
    req.nextUrl.pathname === "/register"
  ) {
    if (!token) {
      return NextResponse.next();
    } else return NextResponse.redirect(new URL("/", req.url));
    // Allow access to these routes
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"], // Apply middleware to specific routes
};
