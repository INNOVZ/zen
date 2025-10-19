// Debug authentication status
import { supabase } from './SupabaseClient';

export async function debugAuth() {
  const debug = {
    supabaseClient: !!supabase,
    environment: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
      NODE_ENV: process.env.NODE_ENV,
    },
    session: null as any,
    error: null as any,
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.auth.getSession();
      debug.session = {
        hasSession: !!data.session,
        hasUser: !!data.session?.user,
        hasToken: !!data.session?.access_token,
        userId: data.session?.user?.id,
        userEmail: data.session?.user?.email,
      };
      debug.error = error;
    } catch (err) {
      debug.error = err;
    }
  }

  return debug;
}
