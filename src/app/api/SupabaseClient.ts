import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase environment variables:');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', SUPABASE_URL ? 'Set' : 'Missing');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? 'Set' : 'Missing');
  throw new Error('Missing required Supabase environment variables');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
