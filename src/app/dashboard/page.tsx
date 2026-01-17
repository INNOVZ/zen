"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { WifiOff, RefreshCw } from "lucide-react";
import { useCustomizeStore } from "@/stores/customizeStore";

import { useDashboardData } from "@/hooks/useDashboardData";
import { useDashboardStats } from "@/hooks/useDashboardStats";
import { useAuth } from "@/hooks/useAuthGuard";

import { DashboardHeader } from "@/components/dashboard/home/DashboardHeader";
import { StatusGrid } from "@/components/dashboard/home/StatusGrid";
import { LoadingSkeleton } from "@/components/dashboard/home/LoadingSkeleton";
import { ModernDashboardImpl } from "@/components/dashboard/home/ModernDashboardImpl";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import ErrorBoundary, { SimpleErrorFallback } from "@/components/ErrorBoundary";

import { DASHBOARD_CONFIG } from "@/types/dashboard";

const DevModeAlert = dynamic(() => import("@/components/DevModeAlert"), {
  ssr: false,
});

const OfflineMode = dynamic(
  () => import("@/components/dashboard/home/OfflineMode"),
  {
    ssr: false,
  }
);

export default function UserDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get user from auth - no URL params needed
  const { user: authUser, isLoading: isAuthLoading } = useAuth();
  const userId = authUser?.id;

  // Custom hooks for separation of concerns
  const { setCurrentUser } = useCustomizeStore();

  // Handle OAuth redirect (e.g., Zoho OAuth success)
  useEffect(() => {
    const zohoOAuthSuccess = searchParams?.get("zoho_oauth_success");
    if (zohoOAuthSuccess === "true") {
      sessionStorage.setItem("check_zoho_oauth_success", "true");
      router.replace(`/dashboard/settings?success=zoho_connected&tab=mcp`);
    }
  }, [searchParams, router]);

  const {
    loading,
    chatbots,
    uploads,
    conversations,
    analyticsMetrics,
    isOffline,
    conversationCount,
    conversationCountLoading,
    loadDashboardData,
    refreshConnection,
  } = useDashboardData();

  const stats = useDashboardStats(
    chatbots,
    uploads,
    conversations,
    conversationCount
  );
  // Compute resolution rate (percentage) for dashboard status card
  const resolutionRate = analyticsMetrics?.summary?.avg_satisfaction
    ? analyticsMetrics.summary.avg_satisfaction * 100
    : 85.2;
  const [conversationsLoaded, setConversationsLoaded] = useState(false);

  // Navigation handlers - simple paths without userId
  const handleTrainClick = () => router.push("/dashboard/train");
  const handleCustomizeClick = () => router.push("/dashboard/customize");
  const handleSettingsClick = () => router.push("/dashboard/settings");

  // Set current user when auth loads
  useEffect(() => {
    if (authUser) {
      setCurrentUser(authUser);
    }
  }, [authUser, setCurrentUser]);

  // Load dashboard data after user authentication with a small delay
  useEffect(() => {
    if (authUser && !isAuthLoading) {
      // Add a small delay to ensure authentication is fully complete
      const timer = setTimeout(() => {
        loadDashboardData();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [authUser, isAuthLoading, loadDashboardData]);

  // Track conversation loading state for better UX
  useEffect(() => {
    if (conversations.length > 0) {
      setConversationsLoaded(true);
    }
  }, [conversations.length]);

  // Early returns for loading and authentication states
  if (isAuthLoading || loading) {
    return <LoadingSkeleton />;
  }

  // Show offline mode if we can't connect to the server
  if (isOffline) {
    return <OfflineMode onRetry={refreshConnection} isRetrying={loading} />;
  }

  // Build user info object for components that need it
  const user = authUser
    ? {
        id: authUser.id,
        user_id: authUser.id,
        email: authUser.email || "",
        name: authUser.user_metadata?.name || authUser.email || "",
        display_name:
          authUser.user_metadata?.display_name ||
          authUser.user_metadata?.name ||
          "",
        full_name: authUser.user_metadata?.name || "",
        role: "user" as const,
        org_id: authUser.user_metadata?.org_id || "",
        created_at: authUser.created_at,
        organization: null,
        last_login: new Date().toISOString(),
      }
    : null;

  return (
    <div
      className={DASHBOARD_CONFIG.CONTAINER_CLASSES}
      role="main"
      aria-label="User Dashboard"
    >
      {/* Development Mode Alert */}
      <DevModeAlert show={isOffline} />

      {/* Offline Status Banner */}
      {isOffline && (
        <Alert variant="destructive" role="alert">
          <WifiOff className="h-4 w-4" aria-hidden="true" />
          <AlertDescription className="flex items-center justify-between">
            <span>
              Unable to connect to server. Some features may not work properly.
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={refreshConnection}
              className="ml-4"
              aria-label="Retry connection"
            >
              <RefreshCw className="h-4 w-4 mr-1" aria-hidden="true" />
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Dashboard Header */}
      <DashboardHeader
        user={user}
        userId={userId || ""}
        onTrainClick={handleTrainClick}
        onCustomizeClick={handleCustomizeClick}
      />
      <div className="p-3">
        {/* Stats Grid */}
        <StatusGrid
          stats={stats}
          conversationsLoaded={conversationsLoaded}
          conversations={conversations}
          loading={loading}
          conversationCount={conversationCount}
          conversationCountLoading={conversationCountLoading}
          onCreateConversation={handleCustomizeClick}
          resolutionRate={resolutionRate}
        />

        {/* Intent Analytics Dashboard */}
        <ErrorBoundary fallback={SimpleErrorFallback}>
          <Suspense fallback={<LoadingSkeleton />}>
            <ModernDashboardImpl
              stats={stats}
              analyticsMetrics={analyticsMetrics}
              loading={loading}
              onTrainClick={handleTrainClick}
              onCustomizeClick={handleCustomizeClick}
              onSettingsClick={handleSettingsClick}
            />
          </Suspense>
        </ErrorBoundary>

        {/* Subscription Analytics */}
        <ErrorBoundary fallback={SimpleErrorFallback}>
          <Suspense fallback={<LoadingSkeleton />}></Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
