import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })
  const isDebug = process.env.NODE_ENV === 'development'

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          req.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          req.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Log all cookies to debug
  const allCookies = req.cookies.getAll()
  const supabaseCookies = allCookies.filter(c => c.name.startsWith('sb-') || c.name.includes('supabase'))
  
  if (isDebug) {
    console.log(`[Middleware] Request to: ${req.nextUrl.pathname}`)
    console.log(`[Middleware] Total cookies: ${allCookies.length}`)
    console.log(`[Middleware] Supabase cookies: ${supabaseCookies.length}`, supabaseCookies.map(c => c.name))
  }
  
  // Refresh user to get latest state from cookies
  // This is critical for multi-tenant auth
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (isDebug) {
    console.log(`[Middleware] getUser result:`, {
      hasUser: !!userData.user,
      userId: userData.user?.id,
      error: userError?.message
    })
  }

  const isAuth = !!userData.user
  const pathname = req.nextUrl.pathname
  const isAuthPage = pathname.startsWith('/auth')
  const isDashboard = pathname.startsWith('/dashboard')
  
  if (isDebug) {
    console.log(`[Middleware] ====================================`)
    console.log(`[Middleware] Path: ${pathname}`)
    console.log(`[Middleware] Auth: ${isAuth}`)
    console.log(`[Middleware] User: ${userData.user?.id || 'NONE'}`)
    console.log(`[Middleware] Is Auth Page: ${isAuthPage}`)
    console.log(`[Middleware] Is Dashboard: ${isDashboard}`)
    console.log(`[Middleware] ====================================`)
  }

  // Redirect unauthenticated users trying to access dashboard to login
  if (!isAuth && isDashboard) {
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = '/auth/login'
    if (isDebug) {
      console.log(`[Middleware] Redirecting unauthenticated user from ${pathname} to /auth/login`)
    }
    return NextResponse.redirect(loginUrl)
  }

  // Redirect authenticated users away from auth pages to their dashboard
  // Use clean URL without userId
  if (isAuth && isAuthPage && !req.nextUrl.searchParams.has('redirected')) {
    const dashboardUrl = req.nextUrl.clone()
    dashboardUrl.pathname = `/dashboard`
    dashboardUrl.searchParams.delete('redirected') // Clean up URL
    if (isDebug) {
      console.log(`[Middleware] Redirecting authenticated user from ${pathname} to /dashboard`)
    }
    return NextResponse.redirect(dashboardUrl)
  }

  // Allow clean dashboard URLs without userId
  // The app now uses /dashboard/settings, /dashboard/calendar, etc.
  // No need to redirect to userId-based paths

  return response
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}
