import { memo } from "react";
import { LeadsStatsCard } from "./LeadsStatsCard";
import { LeadsStats } from "@/app/api/leads";
import { Users, TrendingUp, MessageSquare, Phone } from "lucide-react";

interface LeadsStatsGridProps {
  stats: LeadsStats | null;
  isLoading?: boolean;
}

export const LeadsStatsGrid = memo<LeadsStatsGridProps>(
  ({ stats, isLoading = false }) => {
    if (!stats) return null;

    const computeThisMonthLeads = () => {
      const coerceCount = (value: number | string | undefined) =>
        typeof value === "number" ? value : Number(value) || 0;

      if (typeof stats.this_month_leads === "number") {
        return stats.this_month_leads;
      }

      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const monthKey = `${year}-${String(month).padStart(2, "0")}`;
      const directMatch = coerceCount(stats.leads_by_month[monthKey]);
      if (directMatch) {
        return directMatch;
      }

      let total = 0;
      let latestKeyValue = -1;
      let latestCount = 0;

      for (const [key, count] of Object.entries(stats.leads_by_month)) {
        const match = key.match(/^(\d{4})[-/](\d{1,2})$/);
        if (match) {
          const keyYear = Number(match[1]);
          const keyMonth = Number(match[2]);
          if (keyYear === year && keyMonth === month) {
            total += coerceCount(count);
          }
          const keyValue = keyYear * 12 + keyMonth;
          if (keyValue > latestKeyValue) {
            latestKeyValue = keyValue;
            latestCount = coerceCount(count);
          }
          continue;
        }

        const parsed = new Date(key);
        if (!Number.isNaN(parsed.getTime())) {
          const parsedYear = parsed.getFullYear();
          const parsedMonth = parsed.getMonth() + 1;
          if (parsedYear === year && parsedMonth === month) {
            total += coerceCount(count);
          }
          const keyValue = parsedYear * 12 + parsedMonth;
          if (keyValue > latestKeyValue) {
            latestKeyValue = keyValue;
            latestCount = coerceCount(count);
          }
        }
      }

      if (total > 0) {
        return total;
      }

      return latestCount;
    };

    const thisMonthLeads = computeThisMonthLeads();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <LeadsStatsCard
          icon={Users}
          title="Total Leads"
          value={stats.total_leads}
          description="All captured leads"
          isLoading={isLoading}
        />

        <LeadsStatsCard
          icon={TrendingUp}
          title="This Month"
          value={thisMonthLeads}
          description="Leads captured this month"
          isLoading={isLoading}
        />

        <LeadsStatsCard
          icon={MessageSquare}
          title="From Website"
          value={stats.leads_by_channel.website || 0}
          description="Website chat leads"
          isLoading={isLoading}
        />

        <LeadsStatsCard
          icon={Phone}
          title="From WhatsApp"
          value={stats.leads_by_channel.whatsapp || 0}
          description="WhatsApp leads"
          isLoading={isLoading}
        />
      </div>
    );
  }
);

LeadsStatsGrid.displayName = "LeadsStatsGrid";
