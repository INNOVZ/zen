"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DashboardIndex() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const redirectToUserDashboard = async () => {
      try {
        // Get the current user's session
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          // Redirect to user-specific dashboard
          router.replace(`/dashboard/${session.user.id}`);
        } else {
          // If no session, redirect to login
          router.replace("/auth/login");
        }
      } catch (error) {
        console.error("Error getting session:", error);
        router.replace("/auth/login");
      }
    };

    redirectToUserDashboard();
  }, [router, supabase]);

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
