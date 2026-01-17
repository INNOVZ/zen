import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import type { UserInfo } from "@/types";
import { User as SupabaseUser } from "@supabase/supabase-js";

// UUID validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const useUserAuth = (userId: string,
  setCurrentUser: (user: SupabaseUser | null) => void) => {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkUserAccess = async () => {
      try {
        setIsAuthLoading(true);
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        const authedUser = userData?.user || null;

        console.log("[useUserAuth] Checking access:", {
          urlUserId: userId,
          userId: authedUser?.id,
          hasUser: !!authedUser,
          currentPath:
            typeof window !== "undefined" ? window.location.pathname : "unknown",
        });

        if (!mounted) return;

        if (userError || !authedUser) {
          console.warn("[useUserAuth] No authenticated user, redirecting to login", {
            userError,
          });
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
          const correctedPath =
            currentPath.replace(
              /\/dashboard\/[^\/]+/,
              `/dashboard/${authedUser.id}`
            ) + searchParams;
          console.log("[useUserAuth] Redirecting to corrected path:", correctedPath);
          router.replace(correctedPath);
          return;
        }

        // Check if the userId in URL matches the logged-in user
        if (authedUser.id !== userId) {
          console.error("[useUserAuth] User ID mismatch!", {
            expected: userId,
            actual: authedUser.id,
          });
          toast.error("Unauthorized access");
          router.replace(`/dashboard/${authedUser.id}`);
          return;
        }

        console.log("[useUserAuth] Access granted for user:", authedUser.id);

        // Fetch extended user info from the database
        const { data: dbUser, error: dbError } = await supabase
          .from("users")
          .select("org_id, role, full_name, display_name")
          .eq("id", authedUser.id)
          .single();

        if (dbError && dbError.code !== "PGRST116") {
          console.warn("[useUserAuth] Failed to fetch extended user metadata:", dbError);
        }

        const userInfo: UserInfo = {
          // BaseEntity
          id: authedUser.id,

          // BaseEntityWithTimestamps
          created_at: authedUser.created_at,

          // BaseOrganizationEntity
          org_id: dbUser?.org_id || authedUser.user_metadata?.org_id || "",

          // UserInfo specific
          user_id: authedUser.id,
          email: authedUser.email || "",
          role: dbUser?.role || "user",
          name:
            dbUser?.full_name ||
            authedUser.user_metadata?.name ||
            authedUser.email ||
            "",
          display_name:
            dbUser?.display_name ||
            authedUser.user_metadata?.display_name ||
            authedUser.user_metadata?.name ||
            "",
          full_name: dbUser?.full_name || authedUser.user_metadata?.name || "",
          organization: null,
          last_login: new Date().toISOString(),
        };

        setUser(userInfo);
        setCurrentUser(authedUser);
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
