import { memo } from "react";
import { StatusCardProps } from "@/types/dashboard";

export const StatusCard = memo<StatusCardProps>(
  ({ icon: Icon, title, value, isLoading = false }) => (
    <div
      className="px-4 py-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 border shadow-sm"
      role="article"
      aria-label={`${title} statistics`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Icon size={22} className="text-[#020617]" aria-hidden="true" />
          <p className="mt-2 text-sm font-medium text-[#0a0a60]">{title}</p>
        </div>
        <div className="text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white">
          {isLoading ? (
            <div className="flex items-center space-x-1">
              <div className="animate-pulse bg-white/30 rounded-full w-4 h-4" />
              <span className="text-sm animate-pulse">Loading</span>
            </div>
          ) : (
            <span aria-label={`${value} ${title.toLowerCase()}`}>{value}</span>
          )}
        </div>
      </div>
    </div>
  )
);

StatusCard.displayName = "StatCard";
