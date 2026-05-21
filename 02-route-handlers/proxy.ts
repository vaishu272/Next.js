import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const isRSC = request.headers.get("RSC");

  if (isRSC) {
    return NextResponse.next();
  }

  console.log("Middleware Executed:", request.nextUrl.pathname);

  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("URL:", request.url);

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
