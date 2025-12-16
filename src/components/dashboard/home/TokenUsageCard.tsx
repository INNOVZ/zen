"use client";

import { memo } from "react";
import { Zap } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";

interface TokenUsageCardProps {
  className?: string;
}

export const TokenUsageCard = memo<TokenUsageCardProps>(({ className }) => {
  const { subscription, isLoading } = useSubscription();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getUsagePercentage = () => {
    if (!subscription) return 0;
    return subscription.usage_percentage;
  };

  const getStatusColor = () => {
    const percentage = getUsagePercentage();
    if (percentage >= 95) return "text-red-400";
    if (percentage >= 80) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div
      className={`px-4 py-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 border shadow-sm ${
        className || ""
      }`}
      role="article"
      aria-label="Token usage statistics"
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <Zap size={20} className="text-gray-700" aria-hidden="true" />
          <p className="mt-2 text-sm font-medium text-gray-700">Token Usage</p>
        </div>
        <div className="text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white">
          {isLoading ? (
            <div
              className="flex items-center space-x-1"
              role="status"
              aria-label="Loading token usage"
            >
              <div className="animate-pulse bg-white/30 rounded-full w-4 h-4" />
              <span className="text-sm animate-pulse">0%</span>
            </div>
          ) : subscription ? (
            <span
              className={getStatusColor()}
              aria-label={`${getUsagePercentage().toFixed(1)}% token usage`}
            >
              {getUsagePercentage().toFixed(1)}%
            </span>
          ) : (
            <span className="text-md" aria-label="No subscription">
              0%
            </span>
          )}
        </div>
      </div>

      {subscription && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-700/80">
            <span>
              {formatNumber(subscription.tokens_used_this_month)} used
            </span>
            <span>{formatNumber(subscription.monthly_limit)} limit</span>
          </div>

          <div className="flex justify-between text-xs text-gray-700/60">
            <span>{formatNumber(subscription.tokens_remaining)} remaining</span>
            <span className={getStatusColor()}>
              {getUsagePercentage() >= 95
                ? "Critical"
                : getUsagePercentage() >= 80
                ? "Warning"
                : "Healthy"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

TokenUsageCard.displayName = "TokenUsageCard";
