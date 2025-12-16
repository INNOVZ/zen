"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DashboardIndex() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    const redirectToUserDashboard = async () => {
      try {
        // Check for OAuth success parameter
        const zohoOAuthSuccess = searchParams?.get("zoho_oauth_success");
        
        console.log("[Dashboard Root] OAuth success param:", zohoOAuthSuccess);
        console.log("[Dashboard Root] Current URL:", window.location.href);
        
        // Get the current user's session
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        console.log("[Dashboard Root] Session check:", {
          hasSession: !!session,
          userId: session?.user?.id,
          email: session?.user?.email,
          error: sessionError,
        });

        if (session?.user) {
          // If coming from OAuth, set flag and redirect to settings
          if (zohoOAuthSuccess === "true") {
            console.log("[Dashboard Root] Zoho OAuth success detected, redirecting to settings");
            sessionStorage.setItem("check_zoho_oauth_success", "true");
            const redirectUrl = `/dashboard/${session.user.id}/settings?success=zoho_connected&tab=mcp`;
            console.log("[Dashboard Root] Redirect URL:", redirectUrl);
            router.replace(redirectUrl);
          } else {
            // Normal redirect to user-specific dashboard
            console.log("[Dashboard Root] Normal redirect to user dashboard");
            router.replace(`/dashboard/${session.user.id}`);
          }
        } else {
          // If no session, redirect to login
          console.warn("[Dashboard Root] No session found, redirecting to login");
          router.replace("/auth/login");
        }
      } catch (error) {
        console.error("[Dashboard Root] Error getting session:", error);
        router.replace("/auth/login");
      }
    };

    redirectToUserDashboard();
  }, [router, supabase, searchParams]);

  // Show loading state while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 text-lg">Redirecting to dashboard...</p>
      </div>
    </div>
  );
}
