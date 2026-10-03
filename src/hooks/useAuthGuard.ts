import { useAuthContext } from "@/contexts/AuthContext";

export function useAuthGuard() {
  return useAuthContext();
}

/**
 * Simpler version that only checks authentication
 * Use this for pages that don't have user-specific routes
 */
export function useAuth() {
  return useAuthContext();
}
