import { NextRequest, NextResponse } from "next/server";

// 경로 목록
const protectedPaths = [
  "/dashboard",
  "/statistics/",
  "/user/",
  "/qna/",
  "/settings/",
];

// 권한이 없는 사용자가 접근하면 /unauthorize로 리다이렉트 미들웨어
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuth = req.cookies.get("accessToken");

  // if (pathname.startsWith("/login") && isAuth) {
  //   return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  // }

  // // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  // if (protectedPaths.some((path) => pathname.startsWith(path)) && !isAuth) {
  //   return NextResponse.redirect(new URL("/login", req.nextUrl));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/dashboard/:path*",
    "/statistics/:path*",
    "/user/:path*",
    "/qna/:path*",
    "/settings/:path*",
  ],
};
