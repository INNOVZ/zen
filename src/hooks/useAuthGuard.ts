/**
 * Centralized Authentication Guard Hook
 * 
 * CRITICAL SECURITY: Verifies both authentication AND authorization
 * for multi-tenant access control.
 * 
 * This hook ensures:
 * 1. User is authenticated (has valid session)
 * 2. User ID in URL matches logged-in user ID (multi-tenant isolation)
 * 3. Automatic redirect on unauthorized access
 * 
 * @param expectedUserId - The user ID from the URL parameter
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

export function useAuthGuard(expectedUserId?: string): AuthGuardResult {
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
        const [{ data: userData, error: userError }, sessionResult] =
          await Promise.all([
            supabase.auth.getUser(),
            supabase.auth.getSession(),
          ]);

        if (!mounted) return;

        const authedUser = userData?.user;
        const sessionUser = sessionResult.data?.session?.user;

        // Check 1: Authentication - revalidate via Supabase Auth server
        if (userError || !authedUser) {
          console.warn("[AuthGuard] No valid authenticated user", {
            userError,
          });
          toast.error("Authentication required. Please log in.");
          router.replace("/auth/login");
          setIsAuthorized(false);
          return;
        }

        // Optional: warn if session storage didn't match authenticated user
        if (sessionUser && sessionUser.id !== authedUser.id) {
          console.warn("[AuthGuard] Session/user mismatch detected", {
            sessionUserId: sessionUser.id,
            authedUserId: authedUser.id,
          });
        }

        // Check 2: Authorization - Does user ID match URL parameter?
        if (expectedUserId && authedUser.id !== expectedUserId) {
          console.warn("[AuthGuard] Unauthorized access attempt:", {
            authedUserId: authedUser.id,
            requestedUserId: expectedUserId,
          });
          toast.error("Unauthorized access. Redirecting to your dashboard.");

          const currentPath =
            typeof window !== "undefined" ? window.location.pathname : "/";
          const newPath = currentPath.replace(
            `/dashboard/${expectedUserId}`,
            `/dashboard/${authedUser.id}`
          );
          router.replace(newPath);
          setIsAuthorized(false);
          return;
        }

        // Both checks passed
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
  }, [expectedUserId, router]);

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

