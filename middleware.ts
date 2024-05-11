import { NextRequest, NextResponse } from "next/server";
import { gqlClient, gqlServerClient } from "./clients/api";
import { verifyToken } from "./graphql/query/user";

export default async function middleware(req: NextRequest) {
  const publicPaths = ["/", "/sign-in", "sign-up"]; //all public paths
  const path = req.nextUrl.pathname;
  const isPublicPath = publicPaths.includes(path);
  const token = req.cookies.get("access_token")?.value || "";

  if (isPublicPath && token) {
    const redirectPath = "/dashboard/drafts";
    return NextResponse.redirect(new URL(redirectPath, req.nextUrl));
  } else if (!isPublicPath && !token) {
    const loginPath = "/sign-in";
    return NextResponse.redirect(new URL(loginPath, req.nextUrl));
  }
  if (!isPublicPath && token) {
    try {
      const gqlClient = gqlServerClient(token);
      const response = await gqlClient.request(verifyToken);
      if (!response.verifyToken?.success) {
        return NextResponse.rewrite(new URL("/error", req.nextUrl));
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      return NextResponse.rewrite(new URL("/error", req.nextUrl));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
