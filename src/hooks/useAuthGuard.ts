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

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AuthGuardResult {
  isLoading: boolean;
  isAuthorized: boolean;
  user: SupabaseUser | null;
}

export function useAuthGuard(expectedUserId: string): AuthGuardResult {
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
        const { data: { session }, error } = await supabase.auth.getSession();

        if (!mounted) return;

        // Check 1: Authentication - Is user logged in?
        if (error || !session?.user) {
          console.warn('[AuthGuard] No valid session found');
          toast.error("Authentication required. Please log in.");
          router.replace("/auth/login");
          setIsAuthorized(false);
          return;
        }

        // Check 2: Authorization - Does user ID match URL parameter?
        // CRITICAL for multi-tenant security
        if (session.user.id !== expectedUserId) {
          console.warn('[AuthGuard] Unauthorized access attempt:', {
            sessionUserId: session.user.id,
            requestedUserId: expectedUserId
          });
          toast.error("Unauthorized access. Redirecting to your dashboard.");
          
          // Redirect to user's own dashboard
          const currentPath = window.location.pathname;
          const newPath = currentPath.replace(
            `/dashboard/${expectedUserId}`,
            `/dashboard/${session.user.id}`
          );
          router.replace(newPath);
          setIsAuthorized(false);
          return;
        }

        // Both checks passed - user is authenticated AND authorized
        console.log('[AuthGuard] Access granted:', {
          userId: session.user.id,
          email: session.user.email
        });

        setUser(session.user);
        setIsAuthorized(true);

      } catch (error) {
        console.error('[AuthGuard] Verification failed:', error);
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
        const { data: { session } } = await supabase.auth.getSession();

        if (!mounted) return;

        if (!session?.user) {
          router.replace("/auth/login");
          return;
        }

        setUser(session.user);
      } catch (error) {
        console.error('[Auth] Check failed:', error);
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

