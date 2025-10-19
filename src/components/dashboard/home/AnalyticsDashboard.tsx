"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PerformanceMetrics } from "@/app/api/routes";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Clock,
  MessageCircle,
  Bolt,
  AlertTriangle,
  CheckCircle,
  Info,
  RefreshCw,
  Users,
  ThumbsUp,
  Activity,
} from "lucide-react";
import { useCallback, useMemo } from "react";

interface AnalyticsDashboardProps {
  metrics: PerformanceMetrics | null;
  onRefresh: () => void;
  loading: boolean;
}

const getTrendIcon = (change: number | undefined) => {
  if (!change || change === 0) return null;
  if (change > 0) return <TrendingUp className="h-3 w-3" />;
  if (change < 0) return <TrendingDown className="h-3 w-3" />;
  return null;
};

const getTrendColor = (
  change: number | undefined,
  isPositive: boolean = true
) => {
  if (!change || change === 0) return "text-gray-500";
  const isGood = isPositive ? change > 0 : change < 0;
  return isGood ? "text-green-600" : "text-red-600";
};

const formatNumber = (
  value: number | undefined,
  decimals: number = 0
): string => {
  if (value === undefined || value === null || isNaN(value)) return "0";
  return value.toFixed(decimals);
};

const formatPercentage = (value: number | undefined): string => {
  if (value === undefined || value === null || isNaN(value)) return "0%";
  return `${(value * 100).toFixed(0)}%`;
};

const formatResponseTime = (ms: number | undefined): string => {
  if (!ms) return "0ms";
  if (ms < 1000) return `${ms.toFixed(0)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
};

export default function AnalyticsDashboard({
  metrics,
  onRefresh,
  loading,
}: AnalyticsDashboardProps) {
  // Fixed to 30 days - no timeframe selection needed

  // Render distribution charts - memoized to prevent unnecessary re-renders
  const renderDistribution = useCallback(
    (
      distribution: Record<string, number> | undefined,
      totalQueries: number,
      title: string
    ) => {
      if (!distribution || typeof distribution !== "object") {
        return (
          <div className="text-center py-4 text-gray-500 text-sm">
            No data available
          </div>
        );
      }

      const entries = Object.entries(distribution);
      if (entries.length === 0) {
        return (
          <div className="text-center py-4 text-gray-500 text-sm">
            No distribution data
          </div>
        );
      }

      return (
        <div className="space-y-3 border">
          <h4 className="font-medium text-sm text-gray-700">{title}</h4>
          {entries.map(([range, count]) => {
            const percentage =
              totalQueries > 0 ? (count / totalQueries) * 100 : 0;
            return (
              <div key={range} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{range}</span>
                  <span className="font-medium">
                    {count} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>
      );
    },
    []
  );

  // Render insights - memoized to prevent unnecessary re-renders
  const renderInsights = useCallback(
    (insights: PerformanceMetrics["insights"]) => {
      if (!insights || insights.length === 0) {
        return (
          <div className="text-center py-8 text-gray-500 border">
            <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No insights available yet</p>
          </div>
        );
      }

      return (
        <div className="space-y-4 border">
          {insights.map((insight, index) => {
            const getIcon = () => {
              switch (insight.type) {
                case "warning":
                  return <AlertTriangle className="h-4 w-4" />;
                case "success":
                  return <CheckCircle className="h-4 w-4" />;
                case "info":
                  return <Info className="h-4 w-4" />;
                default:
                  return <Info className="h-4 w-4" />;
              }
            };

            const getVariant = (): "default" | "destructive" => {
              switch (insight.type) {
                case "warning":
                  return "destructive";
                case "success":
                  return "default";
                case "info":
                  return "default";
                default:
                  return "default";
              }
            };

            return (
              <Alert key={index} variant={getVariant()}>
                {getIcon()}
                <AlertDescription>
                  <div className="space-y-2">
                    <div className="font-medium">{insight.title}</div>
                    <div className="text-sm">{insight.description}</div>
                    <div className="text-sm font-medium">
                      💡 {insight.recommendation}
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            );
          })}
        </div>
      );
    },
    []
  );

  // Memoize the main dashboard content to prevent unnecessary re-renders
  const dashboardContent = useMemo(() => {
    // Handle missing or malformed metrics
    if (!metrics || typeof metrics !== "object") {
      return (
        <div className="space-y-6 bg-[#e0e7ff] border">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
            <Button onClick={onRefresh} disabled={loading} variant="outline">
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
          <div className="text-center py-12">
            <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Analytics Data
            </h3>
            <p className="text-gray-500 mb-4">
              Analytics data will appear here once your chatbot starts receiving
              queries.
            </p>
            <Button onClick={onRefresh} disabled={loading}>
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Check for Data
            </Button>
          </div>
        </div>
      );
    }

    const { summary, performance, usage_patterns, trends, insights } = metrics;

    return (
      <div className="space-y-6 mt-8 border-[#f0f9ff] rounded-2xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Analytics</h2>
            <p className="text-gray-600">
              Performance insights for the last 30 days
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={onRefresh} disabled={loading} variant="outline">
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Total Queries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="pointer bg-white p-4 shadow-md border hover:-translate-y-1 duration-500">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Queries
                    </p>
                    <p className="text-2xl font-bold">
                      {formatNumber(summary?.total_queries)}
                    </p>
                    {trends?.volume_change && (
                      <div
                        className={`flex items-center gap-1 text-xs ${getTrendColor(
                          trends.volume_change,
                          true
                        )}`}
                      >
                        {getTrendIcon(trends.volume_change)}
                        {Math.abs(trends.volume_change).toFixed(1)}% from last
                        period
                      </div>
                    )}
                  </div>
                  <MessageCircle size={28} color="#5D7DDE" />
                </div>
              </div>
            </Card>

            {/* Average Response Time */}
            <Card className="pointer bg-white p-4 hover:-translate-y-1 duration-500 border shadow-sm">
              <span>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Avg Response Time
                    </p>
                    <p className="text-2xl font-bold">
                      {formatResponseTime(summary?.avg_response_time_ms)}
                    </p>
                    {trends?.response_time_change && (
                      <div
                        className={`flex items-center gap-1 text-xs ${getTrendColor(
                          trends.response_time_change,
                          false
                        )}`}
                      >
                        {getTrendIcon(trends.response_time_change)}
                        {Math.abs(trends.response_time_change).toFixed(1)}% from
                        last period
                      </div>
                    )}
                  </div>
                  <Clock size={28} color="#5D7DDE" />
                </div>
              </span>
            </Card>

            {/* Context Quality */}
            <Card className="pointer bg-white p-4 hover:-translate-y-1 duration-500 border shadow-sm">
              <span>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Context Quality
                    </p>
                    <p className="text-2xl font-bold">
                      {formatPercentage(summary?.avg_context_quality)}
                    </p>
                    {trends?.quality_change && (
                      <div
                        className={`flex items-center gap-1 text-xs ${getTrendColor(
                          trends.quality_change,
                          true
                        )}`}
                      >
                        {getTrendIcon(trends.quality_change)}
                        {Math.abs(trends.quality_change).toFixed(1)}% from last
                        period
                      </div>
                    )}
                  </div>
                  <Bolt className="h-8 w-8 text-[#5D7DDE]" />
                </div>
              </span>
            </Card>

            {/* User Satisfaction */}
            <Card className="pointer bg-white p-4 hover:-translate-y-1 duration-500 border shadow-sm">
              <span>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      User Satisfaction
                    </p>
                    <p className="text-2xl font-bold">
                      {performance?.satisfaction?.total_feedback === 0
                        ? "No Data"
                        : formatPercentage(summary?.avg_satisfaction)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {performance?.satisfaction?.total_feedback === 0
                        ? "Enable feedback collection"
                        : `${
                            performance?.satisfaction?.total_feedback || 0
                          } responses`}
                    </p>
                  </div>
                  <ThumbsUp size={28} color="#5D7DDE" />
                </div>
              </span>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            {usage_patterns && (
              <Card className="pointer border hover:scale-[1.02] duration-500 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Usage Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Queries/Day</p>
                        <p className="text-xl font-bold">
                          {formatNumber(usage_patterns.queries_per_day, 1)}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Avg Sources</p>
                        <p className="text-xl font-bold">
                          {formatNumber(
                            usage_patterns.avg_sources_per_query,
                            1
                          )}
                        </p>
                      </div>
                    </div>
                    {usage_patterns.model_usage && (
                      <div>
                        <h4 className="font-medium text-sm text-gray-700 mb-2">
                          Model Usage
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(usage_patterns.model_usage).map(
                            ([model, usage]) => (
                              <div
                                key={model}
                                className="flex justify-between items-center"
                              >
                                <span className="text-sm">{model}</span>
                                <Badge variant="secondary">
                                  {formatNumber(usage as number)}%
                                </Badge>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        {/* Performance Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Response Time Distribution */}
          {performance?.response_time?.distribution && (
            <Card className="pointer border hover:scale-[1.02] duration-500 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Response Time Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderDistribution(
                  performance.response_time.distribution,
                  summary?.total_queries || 0,
                  "Response Time Ranges"
                )}
              </CardContent>
            </Card>
          )}
          <Card className="pointer hover:scale-[1.02] duration-500 border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Insights & Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>{renderInsights(insights)}</CardContent>
          </Card>

          {/* No Data State */}
          {(!summary || summary.total_queries === 0) && (
            <Card className="pointer hover:scale-[1.02] duration-500 border shadow-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No Query Data Yet
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Your analytics will appear here once users start chatting
                    with your bot.
                  </p>
                  <p className="text-sm text-gray-400">
                    Try testing your chatbot to generate some initial data.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
          {/* Usage Patterns */}
        </div>
      </div>
    );
  }, [metrics, onRefresh, loading, renderDistribution, renderInsights]);

  return dashboardContent;
}
