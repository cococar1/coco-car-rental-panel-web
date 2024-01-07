import { getSession } from "next-auth/react";
// import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

import { initializeApollo } from "./lib/apolloClient";
import { LOGGED_USER } from "./gql/auth/auth.query";

export async function middleware(req: NextRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie") ?? undefined,
    },
  };
  const session = await getSession({ req: requestForNextAuth }) as any;
  const token = await req.cookies.get("access_token")?.value;
  const apolloClient = initializeApollo();
  const url = req.nextUrl.clone();
  const redirectedParam = req.url.includes("?redirected=true");

  if (req.nextUrl.pathname.startsWith("/app")) {
    if (!session || !token) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
  //TODO: Corregir estaba con estar/ pero algo no me cuadr
  if (req.nextUrl.pathname == "/" && !redirectedParam) {
    const accessToken = session?.user?.accessToken;

    if (accessToken) {
      try {
        console.log("session 32", session);
        const {
          data: { dataWithToken },
        } = await apolloClient.query({
          query: LOGGED_USER,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        });
        if (dataWithToken) {
          const url = req.nextUrl.clone();
          url.pathname = "/";
          url.searchParams.set("redirected", "true");
          const response = NextResponse.redirect(url);
          response.cookies.set("access_token", accessToken);
          return response;
        } else {
          const url = req.nextUrl.clone();
          url.pathname = "/login";

          return NextResponse.redirect(url);
        }
      } catch (error) {
        console.log(error, "error with get user");
      }
    } else {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

// export default withAuth({});
