import { memo } from "react";
import { DASHBOARD_CONFIG } from "@/types/dashboard";

export const LoadingSkeleton = memo(() => (
  <div
    className={DASHBOARD_CONFIG.CONTAINER_CLASSES}
    role="status"
    aria-label="Loading dashboard"
  >
    <div className="animate-pulse space-y-6">
      {/* Header skeleton */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-8 bg-gray-200 rounded w-64" />
          <div className="h-4 bg-gray-200 rounded w-48" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-gray-200 rounded w-32" />
          <div className="h-10 bg-gray-200 rounded w-32" />
        </div>
      </div>

      {/* Stats cards skeleton */}
      <div className={DASHBOARD_CONFIG.STATS_GRID_CLASSES}>
        {Array.from(
          { length: DASHBOARD_CONFIG.SKELETON_ITEMS_COUNT },
          (_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg" />
          )
        )}
      </div>

      {/* Content skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-96 bg-gray-200 rounded-lg" />
        <div className="h-96 bg-gray-200 rounded-lg" />
      </div>
    </div>
  </div>
));

LoadingSkeleton.displayName = "LoadingSkeleton";
