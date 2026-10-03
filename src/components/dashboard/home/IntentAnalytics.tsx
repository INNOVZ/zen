"use client";

import { useMemo } from "react";
import { Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart as PieChartIcon } from "lucide-react";
import type { IntentAnalytics } from "@/types";
import { useTranslation } from "@/contexts/I18nContext";

interface ModernIntentAnalyticsProps {
  analytics: IntentAnalytics;
}

const INTENT_COLORS: Record<string, string> = {
  greeting: "#1e1b4b",
  contact: "#312e81",
  booking: "#3730a3",
  product: "#4338ca",
  pricing: "#4f46e5",
  support: "#6366f1",
  comparison: "#818cf8",
  recommendation: "#a5b4fc",
  information: "#5d7dde",
  feedback: "#3b82f6",
  account: "#60a5fa",
  order: "#93c5fd",
  shipping: "#22C55E",
  return: "#F43F5E",
  partnership: "#0EA5E9",
  enquiry: "#a5b4fc",
  unknown: "#94A3B8",
};

const getIntentColor = (intent: string): string => {
  return INTENT_COLORS[intent.toLowerCase()] || INTENT_COLORS.unknown;
};

export function ModernIntentAnalytics({
  analytics,
}: ModernIntentAnalyticsProps) {
  const { t } = useTranslation();

  const chartData = useMemo(() => {
    if (!analytics.intent_distribution) return [];
    return Object.entries(analytics.intent_distribution)
      .map(([name, value]) => {
        const intentKey = `intents.${name.toLowerCase()}`;
        const translated = t(intentKey);
        // Fallback to capitalized name if translation is missing (returns key)
        const displayName =
          translated === intentKey
            ? name.charAt(0).toUpperCase() + name.slice(1)
            : translated;

        return {
          name: displayName,
          value,
          originalName: name,
        };
      })
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [analytics.intent_distribution, t]);

  if (chartData.length === 0) return null;

  return (
    <div className="grid">
      <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm ">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <PieChartIcon className="h-5 w-5 text-[#5d7dde]" />
            {t("dashboard.confidence_distribution")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-[100%] p-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getIntentColor(entry.originalName)}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center p-2">
              {chartData.slice(0, 4).map((entry, index) => (
                <div key={index} className="flex items-center gap-1 px-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: getIntentColor(entry.originalName),
                    }}
                  />
                  <span className="text-xs font-medium text-gray-600">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
