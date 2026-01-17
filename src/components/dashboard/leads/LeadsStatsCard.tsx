import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface LeadsStatsCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  description?: string;
  isLoading?: boolean;
  
}

export const LeadsStatsCard = memo<LeadsStatsCardProps>(
  ({ icon: Icon, title, value, description, isLoading = false }) => (
    <div
      className="px-4 py-4 bg-white rounded-lg hover:-translate-y-1 duration-500 border shadow-sm transition-transform"
      role="article"
      aria-label={`${title} statistics`}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Icon size={22} className="text-[#020617]" aria-hidden="true" />
          <p className="text-sm font-medium text-[#0a0a60]">{title}</p>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
        <div className="text-2xl font-bold px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          {isLoading ? (
            <div className="flex items-center space-x-1">
              <div className="animate-pulse bg-white/30 rounded-full w-4 h-4" />
            </div>
          ) : (
            <span aria-label={`${value} ${title.toLowerCase()}`}>{value}</span>
          )}
        </div>
      </div>
    </div>
  )
);

LeadsStatsCard.displayName = "LeadsStatsCard";
