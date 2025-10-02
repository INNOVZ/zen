/**
 * Cache Status Widget Component
 * Simple component to display cache health in your app
 */

import React from "react";
import { useCacheHealth } from "@/hooks/useCache";

interface CacheStatusWidgetProps {
  className?: string;
  showDetails?: boolean;
}

export function CacheStatusWidget({
  className = "",
  showDetails = false,
}: CacheStatusWidgetProps) {
  const { health, loading, error } = useCacheHealth();

  if (loading) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-600">Cache Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <span className="text-sm text-red-600">Cache Error</span>
      </div>
    );
  }

  if (!health) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <span className="text-sm text-gray-600">Cache Unknown</span>
      </div>
    );
  }

  const isHealthy = health.cache.status === "healthy" && health.cache.enabled;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        className={`w-3 h-3 rounded-full ${
          isHealthy ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>

      <div className="flex flex-col">
        <span
          className={`text-sm font-medium ${
            isHealthy ? "text-green-600" : "text-red-600"
          }`}
        >
          Cache {isHealthy ? "Healthy" : "Unhealthy"}
        </span>

        {showDetails && (
          <div className="text-xs text-gray-500 space-y-1">
            <div>Redis: {health.cache.redis_version}</div>
            <div>Memory: {health.cache.used_memory}</div>
            <div>Clients: {health.cache.connected_clients}</div>
            <div>Uptime: {Math.floor(health.cache.uptime / 60)}m</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CacheStatusWidget;
