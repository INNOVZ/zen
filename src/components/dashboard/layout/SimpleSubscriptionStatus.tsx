"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { Zap, Calendar, AlertTriangle, Loader2, RefreshCw } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface SimpleSubscriptionStatusProps {
  className?: string;
  showRefreshButton?: boolean;
}

export const SimpleSubscriptionStatus: React.FC<
  SimpleSubscriptionStatusProps
> = ({ className, showRefreshButton = true }) => {
  const { subscription, isLoading, error, refreshSubscription } =
    useSubscription();
  const { t, language } = useTranslation();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatPercentage = (num: number) => {
    return `${num.toFixed(1)}%`;
  };

  if (isLoading) {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm">{t('subscription.loading')}</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between">
              <span>{error}</span>
              {showRefreshButton && (
                <RefreshCw
                  className="h-4 w-4 cursor-pointer hover:rotate-180 transition-transform"
                  onClick={refreshSubscription}
                />
              )}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  if (!subscription) {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <div className="text-center text-gray-500">
            <Zap className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">{t('subscription.no_subscription')}</p>
            <p className="text-xs mt-1">
              {t('subscription.contact_admin')}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const usagePercentage = subscription.usage_percentage;
  const isNearLimit = usagePercentage >= 80;
  const isAtLimit = usagePercentage >= 95;

  const getStatusBadge = () => {
    if (isAtLimit)
      return <Badge className="bg-red-100 text-red-800">{t('subscription.at_limit')}</Badge>;
    if (isNearLimit)
      return (
        <Badge className="bg-yellow-100 text-yellow-800">{t('subscription.near_limit')}</Badge>
      );
    return <Badge className="bg-green-100 text-green-800">{t('subscription.healthy')}</Badge>;
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center">
            <Zap className="h-5 w-5 mr-2 text-blue-500" />
            {t('subscription.status')}
          </span>
          {showRefreshButton && (
            <RefreshCw
              className="h-4 w-4 cursor-pointer hover:rotate-180 transition-transform text-gray-400"
              onClick={refreshSubscription}
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Plan Information */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">{t('subscription.current_plan')}</p>
            <p className="text-lg font-semibold">
              {subscription.plan_name || "Basic Plan"}
            </p>
          </div>
          {getStatusBadge()}
        </div>

        {/* Token Usage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{t('subscription.usage')}</span>
            <span className="font-medium">
              {formatNumber(subscription.tokens_used_this_month)} /{" "}
              {formatNumber(subscription.monthly_limit)}
            </span>
          </div>
          <Progress value={usagePercentage} className="h-2" />
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{formatPercentage(usagePercentage)} {t('subscription.used')}</span>
            <span>{formatNumber(subscription.tokens_remaining)} {t('subscription.remaining')}</span>
          </div>
        </div>

        {/* Billing Cycle */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{t('subscription.resets')}</span>
          </div>
          <span className="font-medium">
            {new Date(subscription.reset_date).toLocaleDateString(language)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
