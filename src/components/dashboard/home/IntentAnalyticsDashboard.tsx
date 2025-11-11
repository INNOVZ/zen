"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  RefreshCw,
  Brain,
  Activity,
  PieChart,
  LineChart,
} from "lucide-react";
import { conversationApi } from "@/app/api/routes";
import type { IntentAnalytics, IntentDetails } from "@/app/api/types";

interface IntentAnalyticsDashboardProps {
  onRefresh?: () => void;
  initialDays?: number;
}

const INTENT_COLORS: Record<string, string> = {
  greeting: "#3B82F6",
  contact: "#10B981",
  booking: "#F59E0B",
  product: "#8B5CF6",
  pricing: "#EF4444",
  support: "#06B6D4",
  comparison: "#EC4899",
  recommendation: "#14B8A6",
  information: "#6366F1",
  feedback: "#F97316",
  account: "#84CC16",
  order: "#A855F7",
  shipping: "#22C55E",
  return: "#F43F5E",
  partnership: "#0EA5E9",
  career: "#64748B",
  unknown: "#94A3B8",
};

const INTENT_LABELS: Record<string, string> = {
  greeting: "Greeting",
  contact: "Contact",
  booking: "Booking",
  product: "Product",
  pricing: "Pricing",
  support: "Support",
  comparison: "Comparison",
  recommendation: "Recommendation",
  information: "Information",
  feedback: "Feedback",
  account: "Account",
  order: "Order",
  shipping: "Shipping",
  return: "Return",
  partnership: "Partnership",
  career: "Career",
  unknown: "Unknown",
};

const getIntentColor = (intent: string): string => {
  return INTENT_COLORS[intent.toLowerCase()] || INTENT_COLORS.unknown;
};

const getIntentLabel = (intent: string): string => {
  return INTENT_LABELS[intent.toLowerCase()] || intent;
};

const formatNumber = (value: number | undefined): string => {
  if (value === undefined || value === null || isNaN(value)) return "0";
  return value.toLocaleString();
};

const formatPercentage = (value: number | undefined): string => {
  if (value === undefined || value === null || isNaN(value)) return "0%";
  return `${value.toFixed(1)}%`;
};

const formatTime = (ms: number | undefined): string => {
  if (!ms) return "0ms";
  if (ms < 1000) return `${ms.toFixed(0)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
};

const formatConfidence = (confidence: number | undefined): string => {
  if (confidence === undefined || confidence === null || isNaN(confidence))
    return "0%";
  return `${(confidence * 100).toFixed(1)}%`;
};

export default function IntentAnalyticsDashboard({
  onRefresh,
  initialDays = 7,
}: IntentAnalyticsDashboardProps) {
  const [analytics, setAnalytics] = useState<IntentAnalytics | null>(null);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [intentDetails, setIntentDetails] = useState<IntentDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState(initialDays);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // Load intent analytics
  const loadAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await conversationApi.getIntentAnalytics(days);
      if (response?.success && response.analytics) {
        setAnalytics(response.analytics);
      } else {
        setError("Failed to load intent analytics");
      }
    } catch (err) {
      console.error("Error loading intent analytics:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [days]);

  // Load intent details
  const loadIntentDetails = useCallback(
    async (intentType: string) => {
      if (!intentType) return;
      try {
        setDetailsLoading(true);
        const response = await conversationApi.getIntentDetails(
          intentType,
          days
        );
        if (response?.success && response.details) {
          setIntentDetails(response.details);
        }
      } catch (err) {
        console.error("Error loading intent details:", err);
      } finally {
        setDetailsLoading(false);
      }
    },
    [days]
  );

  // Load analytics on mount and when days change
  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  // Load details when intent is selected
  useEffect(() => {
    if (selectedIntent) {
      loadIntentDetails(selectedIntent);
    } else {
      setIntentDetails(null);
    }
  }, [selectedIntent, loadIntentDetails]);

  // Handle refresh
  const handleRefresh = useCallback(() => {
    loadAnalytics();
    if (selectedIntent) {
      loadIntentDetails(selectedIntent);
    }
    onRefresh?.();
  }, [loadAnalytics, selectedIntent, loadIntentDetails, onRefresh]);

  // Get top intents
  const topIntents = useMemo(() => {
    if (!analytics?.intent_distribution) return [];
    return Object.entries(analytics.intent_distribution)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  }, [analytics]);

  // Render intent distribution chart
  const renderIntentDistribution = useCallback(() => {
    if (!analytics?.intent_distribution || topIntents.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <PieChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>No intent data available</p>
        </div>
      );
    }

    const total = analytics.summary.queries_with_intent;

    return (
      <div className="space-y-3">
        {topIntents.map(([intent, count]) => {
          const percentage = total > 0 ? (count / total) * 100 : 0;
          const color = getIntentColor(intent);
          return (
            <div key={intent} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-medium">
                    {getIntentLabel(intent)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{count}</span>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          );
        })}
      </div>
    );
  }, [analytics, topIntents]);

  // Render intent performance table
  const renderIntentPerformance = useCallback(() => {
    if (!analytics?.intent_performance) {
      return (
        <div className="text-center py-8 text-gray-500">
          <Activity className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>No performance data available</p>
        </div>
      );
    }

    const performanceEntries = Object.entries(
      analytics.intent_performance
    ).sort(([, a], [, b]) => b.total_queries - a.total_queries);

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3 font-medium text-gray-700">
                Intent
              </th>
              <th className="text-right py-2 px-3 font-medium text-gray-700">
                Queries
              </th>
              <th className="text-right py-2 px-3 font-medium text-gray-700">
                Avg Time
              </th>
              <th className="text-right py-2 px-3 font-medium text-gray-700">
                Quality
              </th>
              <th className="text-right py-2 px-3 font-medium text-gray-700">
                Confidence
              </th>
              <th className="text-right py-2 px-3 font-medium text-gray-700">
                Sources
              </th>
            </tr>
          </thead>
          <tbody>
            {performanceEntries.map(([intent, perf]) => {
              const color = getIntentColor(intent);
              return (
                <tr
                  key={intent}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedIntent(intent)}
                >
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-medium">
                        {getIntentLabel(intent)}
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-2 px-3">
                    {formatNumber(perf.total_queries)}
                  </td>
                  <td className="text-right py-2 px-3">
                    {formatTime(perf.avg_retrieval_time_ms)}
                  </td>
                  <td className="text-right py-2 px-3">
                    {perf.avg_quality_score.toFixed(2)}
                  </td>
                  <td className="text-right py-2 px-3">
                    {formatConfidence(perf.avg_confidence)}
                  </td>
                  <td className="text-right py-2 px-3">
                    {perf.avg_sources_used.toFixed(1)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }, [analytics]);

  // Render confidence distribution
  const renderConfidenceDistribution = useCallback(() => {
    if (!analytics?.intent_confidence) {
      return (
        <div className="text-center py-4 text-gray-500 text-sm">
          No confidence data available
        </div>
      );
    }

    const total = Object.values(analytics.intent_confidence).reduce(
      (sum, count) => sum + count,
      0
    );

    const confidenceLevels = [
      { key: "high", label: "High (≥0.8)", color: "#10B981" },
      { key: "medium", label: "Medium (0.5-0.8)", color: "#F59E0B" },
      { key: "low", label: "Low (0.3-0.5)", color: "#EF4444" },
      { key: "unknown", label: "Unknown (<0.3)", color: "#94A3B8" },
    ];

    return (
      <div className="space-y-3">
        {confidenceLevels.map(({ key, label, color }) => {
          const count = analytics.intent_confidence[key] || 0;
          const percentage = total > 0 ? (count / total) * 100 : 0;
          return (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-medium">{label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{count}</span>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          );
        })}
      </div>
    );
  }, [analytics]);

  // Render detection methods
  const renderDetectionMethods = useCallback(() => {
    if (!analytics?.detection_methods) {
      return (
        <div className="text-center py-4 text-gray-500 text-sm">
          No detection method data available
        </div>
      );
    }

    const total = Object.values(analytics.detection_methods).reduce(
      (sum, count) => sum + count,
      0
    );

    const methodLabels: Record<string, string> = {
      rule_based: "Rule-Based",
      llm_based: "LLM-Based",
      unknown: "Unknown",
    };

    return (
      <div className="space-y-3">
        {Object.entries(analytics.detection_methods)
          .sort(([, a], [, b]) => b - a)
          .map(([method, count]) => {
            const percentage = total > 0 ? (count / total) * 100 : 0;
            return (
              <div key={method} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {methodLabels[method] || method}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{count}</span>
                    <span className="text-sm font-medium text-gray-900 w-16 text-right">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
      </div>
    );
  }, [analytics]);

  // Render intent trends
  const renderIntentTrends = useCallback(() => {
    if (!analytics?.intent_trends || analytics.intent_trends.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <LineChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>No trend data available</p>
        </div>
      );
    }

    const maxTotal = Math.max(...analytics.intent_trends.map((t) => t.total));

    return (
      <div className="space-y-4">
        {analytics.intent_trends.slice(-7).map((trend) => {
          const date = new Date(trend.date);
          const dateStr = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          return (
            <div key={trend.date} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{dateStr}</span>
                <span className="text-sm text-gray-600">
                  {trend.total} queries
                </span>
              </div>
              <div className="flex gap-1 h-4">
                {Object.entries(trend.intents)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 5)
                  .map(([intent, count]) => {
                    const width = (count / maxTotal) * 100;
                    const color = getIntentColor(intent);
                    return (
                      <div
                        key={intent}
                        className="rounded"
                        style={{
                          width: `${width}%`,
                          backgroundColor: color,
                          minWidth: count > 0 ? "2px" : "0",
                        }}
                        title={`${getIntentLabel(intent)}: ${count}`}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [analytics]);

  // Render intent fulfillment
  const renderIntentFulfillment = useCallback(() => {
    if (!analytics?.intent_fulfillment) {
      return (
        <div className="text-center py-4 text-gray-500 text-sm">
          No fulfillment data available
        </div>
      );
    }

    const fulfillmentEntries = Object.entries(analytics.intent_fulfillment)
      .filter(([, data]) => data.queries_with_feedback > 0)
      .sort(([, a], [, b]) => b.satisfaction_rate - a.satisfaction_rate)
      .slice(0, 10);

    if (fulfillmentEntries.length === 0) {
      return (
        <div className="text-center py-4 text-gray-500 text-sm">
          No feedback data available yet
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {fulfillmentEntries.map(([intent, data]) => {
          const color = getIntentColor(intent);
          return (
            <div key={intent} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-medium">
                    {getIntentLabel(intent)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    {data.satisfaction_rate.toFixed(1)}%
                  </span>
                  <span className="text-xs text-gray-500">
                    ({data.queries_with_feedback} feedback)
                  </span>
                </div>
              </div>
              <Progress value={data.satisfaction_rate} className="h-2" />
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Avg Rating: {data.avg_rating.toFixed(1)}/5</span>
                <span>Positive: {data.positive_feedback}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [analytics]);

  // Render intent details
  const renderIntentDetails = useCallback(() => {
    if (!selectedIntent || !intentDetails) {
      return null;
    }

    if (detailsLoading) {
      return (
        <div className="text-center py-8">
          <RefreshCw className="h-8 w-8 mx-auto animate-spin text-gray-400" />
          <p className="text-gray-500 mt-2">Loading details...</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {getIntentLabel(selectedIntent)} Details
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedIntent(null)}
          >
            Close
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Queries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatNumber(intentDetails.total_queries)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Avg Confidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatConfidence(intentDetails.confidence.average)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Avg Retrieval Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {formatTime(intentDetails.performance.avg_retrieval_time_ms)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Avg Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {intentDetails.performance.avg_quality_score.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Confidence Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(intentDetails.confidence.distribution).map(
                ([level, count]) => {
                  const total = Object.values(
                    intentDetails.confidence.distribution
                  ).reduce((sum, c) => sum + c, 0);
                  const percentage = total > 0 ? (count / total) * 100 : 0;
                  return (
                    <div key={level} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{level}</span>
                        <span className="font-medium">
                          {count} ({percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                }
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Detection Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(intentDetails.detection_methods).map(
                ([method, count]) => {
                  const total = Object.values(
                    intentDetails.detection_methods
                  ).reduce((sum, c) => sum + c, 0);
                  const percentage = total > 0 ? (count / total) * 100 : 0;
                  return (
                    <div key={method} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">
                          {method.replace("_", " ")}
                        </span>
                        <span className="font-medium">
                          {count} ({percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                }
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }, [selectedIntent, intentDetails, detailsLoading]);

  // Loading state
  if (loading) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Intent Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 mx-auto animate-spin text-gray-400" />
            <p className="text-gray-500 mt-2">Loading intent analytics...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Error state
  if (error || !analytics) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Intent Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {error || "Failed to load intent analytics"}
            </AlertDescription>
          </Alert>
          <Button onClick={handleRefresh} className="mt-4" variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Empty state
  if (analytics.summary.queries_with_intent === 0) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Intent Analytics</CardTitle>
            <div className="flex items-center gap-2">
              <Select
                value={days.toString()}
                onValueChange={(v) => setDays(Number(v))}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleRefresh} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Brain className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Intent Data Available
            </h3>
            <p className="text-gray-500 mb-4">
              Intent analytics will appear here once your chatbot starts
              processing queries with intent detection.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6 mt-8">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Intent Analytics
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Analyze user intent patterns and performance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select
                value={days.toString()}
                onValueChange={(v) => setDays(Number(v))}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleRefresh} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Queries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatNumber(analytics.summary.total_queries)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {formatNumber(analytics.summary.queries_with_intent)} with intent
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Intent Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatPercentage(analytics.summary.intent_coverage)}
            </p>
            <p className="text-xs text-gray-500 mt-1">of total queries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Unique Intents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatNumber(analytics.summary.unique_intents)}
            </p>
            <p className="text-xs text-gray-500 mt-1">intent types detected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {analytics.summary.period_days}
            </p>
            <p className="text-xs text-gray-500 mt-1">days analyzed</p>
          </CardContent>
        </Card>
      </div>

      {/* Intent Details Modal */}
      {selectedIntent && (
        <Card>
          <CardHeader>
            <CardTitle>Intent Details</CardTitle>
          </CardHeader>
          <CardContent>{renderIntentDetails()}</CardContent>
        </Card>
      )}

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="distribution" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="confidence">Confidence</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="fulfillment">Fulfillment</TabsTrigger>
        </TabsList>

        <TabsContent value="distribution" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Intent Distribution
              </CardTitle>
              <p className="text-xs text-gray-500">
                Distribution of user intents over the selected period
              </p>
            </CardHeader>
            <CardContent>{renderIntentDistribution()}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Intent Performance
              </CardTitle>
              <p className="text-xs text-gray-500">
                Performance metrics by intent type. Click on an intent to view
                detailed analytics.
              </p>
            </CardHeader>
            <CardContent>{renderIntentPerformance()}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="confidence" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Confidence Distribution
                </CardTitle>
                <p className="text-xs text-gray-500">
                  Distribution of intent detection confidence levels
                </p>
              </CardHeader>
              <CardContent>{renderConfidenceDistribution()}</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Detection Methods
                </CardTitle>
                <p className="text-xs text-gray-500">
                  Breakdown of detection methods used
                </p>
              </CardHeader>
              <CardContent>{renderDetectionMethods()}</CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Intent Trends
              </CardTitle>
              <p className="text-xs text-gray-500">
                Intent distribution trends over time (last 7 days)
              </p>
            </CardHeader>
            <CardContent>{renderIntentTrends()}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fulfillment" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Intent Fulfillment
              </CardTitle>
              <p className="text-xs text-gray-500">
                User satisfaction rates by intent type (based on feedback)
              </p>
            </CardHeader>
            <CardContent>{renderIntentFulfillment()}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
