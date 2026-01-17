"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart as PieChartIcon, BarChart3 } from "lucide-react";
import type { IntentAnalytics } from "@/types";

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
  const chartData = useMemo(() => {
    if (!analytics.intent_distribution) return [];
    return Object.entries(analytics.intent_distribution)
      .map(([name, value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value,
        originalName: name,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [analytics.intent_distribution]);

  if (chartData.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm py-10 border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <BarChart3 className="h-5 w-5 text-[#0a0a60]" />
            Top User queries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#f0f0f0"
                />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  width={80}
                  style={{ fontSize: "12px", fontWeight: 500 }}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getIntentColor(entry.originalName)}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 border-none shadow-sm bg-white/50 backdrop-blur-sm py-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <PieChartIcon className="h-5 w-5 text-[#5d7dde]" />
            Confidence Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
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
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 p-4">
              {chartData.slice(0, 4).map((entry, index) => (
                <div key={index} className="flex items-center gap-1.5">
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
