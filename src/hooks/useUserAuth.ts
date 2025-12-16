import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { User } from "@/types/schemaTypes";
import { User as SupabaseUser } from "@supabase/supabase-js";

// UUID validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const useUserAuth = (userId: string, 
  setCurrentUser: (user: SupabaseUser | null) => void) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkUserAccess = async () => {
      try {
        setIsAuthLoading(true);
        const {
          data: { session },
        } = await supabase.auth.getSession();

        console.log("[useUserAuth] Checking access:", {
          urlUserId: userId,
          sessionUserId: session?.user?.id,
          hasSession: !!session,
          currentPath: typeof window !== "undefined" ? window.location.pathname : "unknown",
        });

        if (!mounted) return;

        if (!session?.user) {
          console.warn("[useUserAuth] No session, redirecting to login");
          router.replace("/auth/login");
          return;
        }

        // CRITICAL FIX: If userId is not a valid UUID (e.g., "settings", "train", etc.),
        // it means the route is wrong. Redirect to correct path immediately.
        if (userId && !UUID_REGEX.test(userId)) {
          console.warn("[useUserAuth] Invalid userId (not a UUID):", userId);
          console.warn("[useUserAuth] This usually means route is /dashboard/{invalid}/settings instead of /dashboard/{userId}/settings");
          const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
          const searchParams = typeof window !== "undefined" ? window.location.search : "";
          // Replace the invalid userId in the path with the correct one
          const correctedPath = currentPath.replace(/\/dashboard\/[^\/]+/, `/dashboard/${session.user.id}`) + searchParams;
          console.log("[useUserAuth] Redirecting to corrected path:", correctedPath);
          router.replace(correctedPath);
          return;
        }

        // Check if the userId in URL matches the logged-in user
        if (session.user.id !== userId) {
          console.error("[useUserAuth] User ID mismatch!", {
            expected: userId,
            actual: session.user.id,
          });
          toast.error("Unauthorized access");
          router.replace(`/dashboard/${session.user.id}`);
          return;
        }

        console.log("[useUserAuth] Access granted for user:", session.user.id);

        const userData: User = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata?.name || session.user.email || "",
          display_name: session.user.user_metadata?.display_name || session.user.user_metadata?.name || session.user.email || "",
        };

        setUser(userData);
        setCurrentUser(session.user);
      } catch (error) {
        console.error("Error checking user access:", error);
        if (mounted) {
          router.replace("/auth/login");
        }
      } finally {
        if (mounted) {
          setIsAuthLoading(false);
        }
      }
    };

    checkUserAccess();

    return () => {
      mounted = false;
    };
  }, [userId, router, setCurrentUser]);

  return {
    user,
    isAuthLoading,
  };
};
