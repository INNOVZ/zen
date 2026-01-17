"use client";

import { useState, useEffect } from "react";
// ModernHeroStats removed — moved stats into StatusGrid
import { ModernQuickActions } from "./QuickActions";
import { ModernIntentAnalytics } from "./IntentAnalytics";
import { ModernPulseChart } from "./PulseChart";
import { conversationApi } from "@/app/api/routes";
import type { DashboardStats } from "@/types/dashboard";
import type { PerformanceMetrics, IntentAnalytics } from "@/app/api/routes";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";

interface ModernDashboardImplProps {
  stats: DashboardStats;
  analyticsMetrics: PerformanceMetrics | null;
  loading: boolean;
  onTrainClick: () => void;
  onCustomizeClick: () => void;
  onSettingsClick: () => void;
}

export function ModernDashboardImpl({
  loading,
  onTrainClick,
  onCustomizeClick,
  onSettingsClick,
}: ModernDashboardImplProps) {
  const [intentAnalytics, setIntentAnalytics] =
    useState<IntentAnalytics | null>(null);
  // const [recentLeads, setRecentLeads] = useState<LeadInfo[]>([]);
  const [intentLoading, setIntentLoading] = useState(false);
  // const [leadsLoading, setLeadsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Resolution rate is now provided to the StatusGrid at a higher level

  // Fetch intent analytics
  useEffect(() => {
    const fetchIntentAnalytics = async () => {
      try {
        setIntentLoading(true);
        setError(null);
        const response = await conversationApi.getIntentAnalytics(30);
        if (response?.success && response.analytics) {
          setIntentAnalytics(response.analytics);
        }
      } catch (err) {
        console.error("Error fetching intent analytics:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load analytics"
        );
      } finally {
        setIntentLoading(false);
      }
    };

    fetchIntentAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8 mt-5">
      {/* Hero Stats removed — status cards now show leads and resolution rate */}

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Intent Analytics Section */}
      {intentLoading ? (
        <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
          <CardContent className="p-12 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
          </CardContent>
        </Card>
      ) : intentAnalytics ? (
        <div className="space-y-6">
          {intentAnalytics.intent_trends &&
            intentAnalytics.intent_trends.length > 0 && (
              <ModernPulseChart intentAnalytics={intentAnalytics} />
            )}
          <ModernIntentAnalytics analytics={intentAnalytics} />
        </div>
      ) : null}

      {/* Recent Leads Section */}

      {/* Quick Actions Section */}
      <ModernQuickActions
        onTrainClick={onTrainClick}
        onCustomizeClick={onCustomizeClick}
        onSettingsClick={onSettingsClick}
      />
    </div>
  );
}

// Default export for compatibility
export default ModernDashboardImpl;
