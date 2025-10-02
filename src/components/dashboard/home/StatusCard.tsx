import { memo } from "react";
import { StatusCardProps } from "@/types/dashboard";

export const StatusCard = memo<StatusCardProps>(
  ({
    icon: Icon,
    title,
    value,
    className = "text-white",
    isLoading = false,
  }) => (
    <div
      className="px-4 py-3 bg-color border rounded-lg pointer border-0 hover:-translate-y-1 duration-500"
      role="article"
      aria-label={`${title} statistics`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Icon size={22} className={className} aria-hidden="true" />
          <p className="text-sm font-medium text-white">{title}</p>
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
