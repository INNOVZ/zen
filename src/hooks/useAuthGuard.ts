/**
 * Centralized Authentication Guard Hook
 * 
 * SECURITY: Verifies user authentication via Supabase session.
 * Authorization is handled by the backend using JWT tokens and X-User-ID header.
 * 
 * This hook ensures:
 * 1. User is authenticated (has valid session)
 * 2. Automatic redirect on unauthenticated access
 * 
 * @returns Authentication status and user data
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface AuthGuardResult {
  isLoading: boolean;
  isAuthorized: boolean;
  user: SupabaseUser | null;
}

export function useAuthGuard(): AuthGuardResult {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    let mounted = true;

    const verifyAccess = async () => {
      try {
        setIsLoading(true);
        const supabase = createClient();
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        if (!mounted) return;

        const authedUser = userData?.user;
        // Check: Authentication - revalidate via Supabase Auth server
        if (userError || !authedUser) {
          console.warn("[AuthGuard] No valid authenticated user", {
            userError,
          });
          toast.error("Authentication required. Please log in.");
          router.replace("/auth/login");
          setIsAuthorized(false);
          return;
        }

        // Authentication passed
        console.log("[AuthGuard] Access granted:", {
          userId: authedUser.id,
          email: authedUser.email,
        });

        setUser(authedUser);
        setIsAuthorized(true);
      } catch (error) {
        console.error("[AuthGuard] Verification failed:", error);
        if (mounted) {
          toast.error("Security verification failed");
          router.replace("/auth/login");
          setIsAuthorized(false);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    verifyAccess();

    return () => {
      mounted = false;
    };
  }, [router]);

  return {
    isLoading,
    isAuthorized,
    user,
  };
}

/**
 * Simpler version that only checks authentication
 * Use this for pages that don't have user-specific routes
 */
export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();

        if (!mounted) return;

        if (error || !data.user) {
          console.warn("[Auth] Missing authenticated user", { error });
          router.replace("/auth/login");
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error("[Auth] Check failed:", error);
        if (mounted) {
          router.replace("/auth/login");
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, [router]);

  return {
    isLoading,
    user,
  };
}
