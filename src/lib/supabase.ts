// Re-export the unified browser client
// This maintains backward compatibility with existing imports
import { createClient } from './supabase/client'

// Create a singleton instance for backward compatibility
let supabaseInstance: ReturnType<typeof createClient> | null = null

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient()
  }
  return supabaseInstance
})()
