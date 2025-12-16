"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { DASHBOARD_CONFIG } from "@/types/dashboard";
import SettingsLayout from "@/components/dashboard/settings/SettingsLayout";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useCustomizeStore } from "@/stores/customizeStore";

// UUID validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default function SettingsPage() {
  const params = useParams<{ userId?: string }>();
  const router = useRouter();
  const { setCurrentUser } = useCustomizeStore();
  
  // Extract userId from params
  const userId =
    typeof params?.userId === "string"
      ? params.userId
      : Array.isArray(params?.userId)
      ? params.userId[0]
      : undefined;

  // CRITICAL FIX: If userId is not a valid UUID (e.g., "settings"), 
  // it means we're on the wrong route. Get session and redirect immediately.
  useEffect(() => {
    const fixInvalidRoute = async () => {
      // Check if userId is invalid (not a UUID)
      if (userId && !UUID_REGEX.test(userId)) {
        console.warn("[SettingsPage] Invalid userId detected:", userId);
        console.warn("[SettingsPage] This usually means route is /dashboard/settings instead of /dashboard/{userId}/settings");
        
        // Get session to find correct userId
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          const currentPath = window.location.pathname;
          const searchParams = window.location.search;
          const correctPath = `/dashboard/${session.user.id}/settings${searchParams}`;
          console.log("[SettingsPage] Redirecting from invalid route:", currentPath, "to:", correctPath);
          router.replace(correctPath);
        } else {
          router.replace("/auth/login");
        }
        return;
      }
    };

    fixInvalidRoute();
  }, [userId, router]);

  // Only proceed with auth check if userId is valid
  const isValidUserId = userId && UUID_REGEX.test(userId);
  const { user, isAuthLoading } = useUserAuth(isValidUserId ? userId : "", setCurrentUser);

  // If no userId in URL or invalid, show loading while redirecting
  if (!isValidUserId) {
    return (
      <div className="flex items-center justify-center min-h-[95vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Redirecting to correct page...</p>
        </div>
      </div>
    );
  }

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center min-h-[95vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
    >
      <SettingsLayout />
    </div>
  );
}
