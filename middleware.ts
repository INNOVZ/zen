import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })

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

  // Refresh session to get latest state from cookies
  // This is critical for multi-tenant auth
  await supabase.auth.getUser()
  
  // Get the session
  const { data: { session } } = await supabase.auth.getSession()
  const isAuth = !!session?.user
  const pathname = req.nextUrl.pathname
  const isAuthPage = pathname.startsWith('/auth')
  const isDashboard = pathname.startsWith('/dashboard')
  
  console.log(`[Middleware] Path: ${pathname}, Auth: ${isAuth}, Session: ${session?.user?.id || 'none'}`)

  // Redirect unauthenticated users trying to access dashboard to login
  if (!isAuth && isDashboard) {
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = '/auth/login'
    console.log(`[Middleware] Redirecting unauthenticated user from ${pathname} to /auth/login`)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect authenticated users away from auth pages to their dashboard
  // BUT only if they're on the login/signup page, not if they're being redirected
  if (isAuth && isAuthPage && !req.nextUrl.searchParams.has('redirected')) {
    const dashboardUrl = req.nextUrl.clone()
    dashboardUrl.pathname = `/dashboard/${session.user.id}`
    dashboardUrl.searchParams.delete('redirected') // Clean up URL
    console.log(`[Middleware] Redirecting authenticated user from ${pathname} to dashboard`)
    return NextResponse.redirect(dashboardUrl)
  }

  // Redirect /dashboard root to user-specific dashboard
  if (isDashboard && pathname === '/dashboard' && isAuth) {
    const userDashboardUrl = req.nextUrl.clone()
    userDashboardUrl.pathname = `/dashboard/${session.user.id}`
    console.log(`[Middleware] Redirecting from /dashboard to /dashboard/${session.user.id}`)
    return NextResponse.redirect(userDashboardUrl)
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}