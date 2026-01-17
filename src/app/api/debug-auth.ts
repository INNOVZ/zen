// Debug authentication status
import { createClient } from '@/lib/supabase/client';

export async function debugAuth() {
  type DebugSession =
    | {
        hasSession: boolean;
        hasUser: boolean;
        hasToken: boolean;
        userId?: string | null;
        userEmail?: string | null;
      }
    | null;

  type DebugResult = {
    supabaseClient: boolean;
    environment: {
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      NODE_ENV?: string | undefined;
    };
    session: DebugSession;
    error: unknown;
  };

  const supabase = createClient();

  const debug: DebugResult = {
    supabaseClient: !!supabase,
    environment: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
      NODE_ENV: process.env.NODE_ENV,
    },
    session: null,
    error: null,
  };

  try {
    const [{ data: userData, error: userError }, { data: sessionData }] =
      await Promise.all([supabase.auth.getUser(), supabase.auth.getSession()]);
    debug.session = {
      hasSession: !!sessionData.session,
      hasUser: !!userData.user,
      hasToken: !!sessionData.session?.access_token,
      userId: userData.user?.id,
      userEmail: userData.user?.email,
    };
    debug.error = userError;
  } catch (err) {
    debug.error = err;
  }

  return debug;
}
