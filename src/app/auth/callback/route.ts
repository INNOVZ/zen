import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  console.log('[Auth Callback] Received request:', {
    hasCode: !!code,
    url: requestUrl.toString()
  })

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    
    try {
      // Exchange the code for a session
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      console.log('[Auth Callback] Code exchange result:', {
        hasSession: !!data.session,
        hasUser: !!data.user,
        userId: data.user?.id,
        error: error?.message
      })

      if (error) {
        console.error('[Auth Callback] Error exchanging code:', error)
        return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=${error.message}`)
      }

      if (data.user) {
        // Redirect to user's dashboard
        const dashboardUrl = `${requestUrl.origin}/dashboard/${data.user.id}`
        console.log('[Auth Callback] Redirecting to:', dashboardUrl)
        return NextResponse.redirect(dashboardUrl)
      }
    } catch (err) {
      console.error('[Auth Callback] Exception:', err)
      return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=callback_failed`)
    }
  }

  // No code or user, redirect to login
  console.log('[Auth Callback] No code or no user, redirecting to login')
  return NextResponse.redirect(`${requestUrl.origin}/auth/login`)
}

