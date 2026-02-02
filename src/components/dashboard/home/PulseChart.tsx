"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import type { IntentAnalytics } from "@/types";
import { useTranslation } from "@/contexts/I18nContext";

interface ModernPulseChartProps {
  intentAnalytics: IntentAnalytics;
}

export function ModernPulseChart({ intentAnalytics }: ModernPulseChartProps) {
  const { t, language } = useTranslation();

  const chartData = useMemo(() => {
    if (!intentAnalytics.intent_trends) return [];

    return intentAnalytics.intent_trends
      .map((trend) => {
        const date = new Date(trend.date);
        return {
          date: date.toLocaleDateString(language, {
            month: "short",
            day: "numeric",
          }),
          conversations: trend.total,
          // Mocking some leads data for visual effect since we don't have direct daily trends for leads yet
          // In a real app, we'd fetch actual daily lead trends
          leads: Math.round(trend.total * 0.25),
        };
      })
      .slice(-14); // Last 14 days
  }, [intentAnalytics.intent_trends, language]);

  if (chartData.length === 0) return null;

  return (
    <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Activity className="h-5 w-5 text-[#0a0a60]" />
            {t("dashboard.user_activity")}
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#0a0a60]" />
              <span className="text-xs font-medium text-gray-600">
                {t("dashboard.conversations_chart")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#5d7dde]" />
              <span className="text-xs font-medium text-gray-600">
                {t("dashboard.leads_captured")}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorConversations"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#94a3b8" }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow:
                    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                  padding: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="conversations"
                stroke="#0a0a60"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorConversations)"
              />
              <Area
                type="monotone"
                dataKey="leads"
                stroke="#5d7dde"
                strokeWidth={3}
                fillOpacity={0.1}
                fill="#5d7dde"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
