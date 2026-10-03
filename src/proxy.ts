import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { isAuthSessionMissingError } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

const copyResponseCookies = (
  source: NextResponse,
  destination: NextResponse
) => {
  source.cookies.getAll().forEach((cookie) => destination.cookies.set(cookie));
  return destination;
};

type CookieToSet = {
  name: string;
  value: string;
  options: CookieOptions;
};

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet: CookieToSet[]) => {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // This remote validation also refreshes expired access tokens when possible.
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  const authStatus = authError?.status;
  const isTransientAuthFailure =
    Boolean(authError) &&
    !isAuthSessionMissingError(authError) &&
    (!authStatus || authStatus >= 500);

  if (isDashboard && isTransientAuthFailure) {
    return copyResponseCookies(
      response,
      new NextResponse("Authentication service temporarily unavailable", {
        status: 503,
        headers: { "Retry-After": "5" },
      })
    );
  }

  if (!user && isDashboard) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/auth/login";
    loginUrl.searchParams.set("returnTo", request.nextUrl.pathname);
    return copyResponseCookies(response, NextResponse.redirect(loginUrl));
  }

  if (user && isAuthPage && request.nextUrl.pathname !== "/auth/callback") {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard";
    dashboardUrl.search = "";
    return copyResponseCookies(response, NextResponse.redirect(dashboardUrl));
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
