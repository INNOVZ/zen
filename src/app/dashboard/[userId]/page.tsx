"use client";

import { useState, useEffect, Suspense } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { WifiOff, RefreshCw } from "lucide-react";
import ErrorBoundary, { SimpleErrorFallback } from "@/components/ErrorBoundary";
import { useCustomizeStore } from "@/stores/customizeStore";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useDashboardNavigation } from "@/hooks/useDashboardNavigation";
import { useDashboardStats } from "@/hooks/useDashboardStats";
import { useUserAuth } from "@/hooks/useUserAuth";
import { DashboardHeader } from "@/components/dashboard/home/DashboardHeader";
import { StatusGrid } from "@/components/dashboard/home/StatusGrid";
import { QuickActionsGrid } from "@/components/dashboard/home/QuickActionsGrid";
import { LoadingSkeleton } from "@/components/dashboard/home/LoadingSkeleton";
import { DASHBOARD_CONFIG } from "@/types/dashboard";

const DevModeAlert = dynamic(() => import("@/components/DevModeAlert"), {
  ssr: false,
});

// Lazy load components with optimized loading states
const AnalyticsDashboard = dynamic(
  () => import("@/components/dashboard/home/AnalyticsDashboard"),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const IntentAnalyticsDashboard = dynamic(
  () => import("@/components/dashboard/home/IntentAnalyticsDashboard"),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const PerformanceMonitor = dynamic(
  () => import("@/components/PerformanceMonitor"),
  {
    ssr: false,
  }
);

const OfflineMode = dynamic(
  () => import("@/components/dashboard/home/OfflineMode"),
  {
    ssr: false,
  }
);

export default function UserDashboard() {
  const params = useParams<{ userId?: string }>();
  const userId =
    typeof params?.userId === "string"
      ? params.userId
      : Array.isArray(params?.userId)
      ? params.userId[0]
      : undefined;
  const userIdString = userId as string;

  // Custom hooks for separation of concerns
  const { setCurrentUser } = useCustomizeStore();
  const { user, isAuthLoading } = useUserAuth(userIdString, setCurrentUser);
  const { quickActions, handleCustomizeClick, handleTrainClick } =
    useDashboardNavigation(userIdString);

  const {
    loading,
    analyticsLoading,
    chatbots,
    uploads,
    conversations,
    analyticsMetrics,
    isOffline,
    conversationCount,
    conversationCountLoading,
    loadDashboardData,
    handleRefreshAnalytics,
    refreshConnection,
  } = useDashboardData();

  const stats = useDashboardStats(
    chatbots,
    uploads,
    conversations,
    conversationCount
  );
  const [conversationsLoaded, setConversationsLoaded] = useState(false);

  // Load dashboard data after user authentication with a small delay
  useEffect(() => {
    if (user && !isAuthLoading) {
      // Add a small delay to ensure authentication is fully complete
      const timer = setTimeout(() => {
        loadDashboardData();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [user, isAuthLoading, loadDashboardData]);

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

  return (
    <div
      className={DASHBOARD_CONFIG.CONTAINER_CLASSES}
      role="main"
      aria-label="User Dashboard"
    >
      <PerformanceMonitor name="Dashboard Render" />

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
        userId={userIdString}
        onTrainClick={handleTrainClick}
        onCustomizeClick={handleCustomizeClick}
      />
      <div className="p-8">
        {/* Stats Grid */}
        <StatusGrid
          stats={stats}
          conversationsLoaded={conversationsLoaded}
          conversations={conversations}
          loading={loading}
          conversationCount={conversationCount}
          conversationCountLoading={conversationCountLoading}
          onCreateConversation={handleCustomizeClick}
        />

        {/* Analytics Dashboard */}
        <ErrorBoundary fallback={SimpleErrorFallback}>
          <Suspense fallback={<LoadingSkeleton />}>
            <AnalyticsDashboard
              metrics={analyticsMetrics}
              onRefresh={handleRefreshAnalytics}
              loading={analyticsLoading}
            />
          </Suspense>
        </ErrorBoundary>

        {/* Intent Analytics Dashboard */}
        <ErrorBoundary fallback={SimpleErrorFallback}>
          <Suspense fallback={<LoadingSkeleton />}>
            <IntentAnalyticsDashboard
              initialDays={7}
              onRefresh={handleRefreshAnalytics}
            />
          </Suspense>
        </ErrorBoundary>

        {/* Subscription Analytics */}
        <ErrorBoundary fallback={SimpleErrorFallback}>
          <Suspense fallback={<LoadingSkeleton />}></Suspense>
        </ErrorBoundary>

        {/* Quick Actions */}
        <QuickActionsGrid actions={quickActions} />
      </div>
    </div>
  );
}
