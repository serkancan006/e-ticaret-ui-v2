import { NextResponse, NextRequest } from "next/server";
import { verifyJwtToken } from "./services/jwt";

const AUTH_PAGES = ['/login', '/register', 'forgot-password']

const isAuthPages = (url: string) => AUTH_PAGES.some(page => page.startsWith(url))

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if(isAuthPageRequested){
    if(!hasVerifiedToken){
        const response = NextResponse.next();

        return response;
    }

    const response = NextResponse.redirect(new URL("/", url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
  }

  console.log(hasVerifiedToken);

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
