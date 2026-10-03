"use client";

import { useContext } from "react";
import { subscriptionApi } from "@/app/api/subscription";
import { SubscriptionContext } from "@/contexts/subscription-context";
import type { SubscriptionContextType } from "@/contexts/subscription-context";

export const useSubscription = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider"
    );
  }
  return context;
};

export const useTokenEstimation = () => {
  const estimateTokens = (
    operationType:
      | "chat"
      | "document_upload"
      | "document_processing"
      | "web_scraping"
      | "embedding_generation",
    messageLength?: number,
    documentSize?: number
  ): number =>
    subscriptionApi.estimateTokensForOperation(
      operationType,
      messageLength,
      documentSize
    );

  return { estimateTokens };
};

export const useSubscriptionLimits = () => {
  const { subscription, plans } = useSubscription();

  const getCurrentPlan = () => {
    if (!subscription || !plans) return null;

    const currentPlan = Object.entries(plans).find(
      ([, plan]) => plan.monthly_token_limit === subscription.monthly_limit
    );

    return currentPlan ? { key: currentPlan[0], plan: currentPlan[1] } : null;
  };

  const getUpgradeOptions = () => {
    if (!plans) return [];

    const currentPlan = getCurrentPlan();
    if (!currentPlan) return Object.entries(plans);

    return Object.entries(plans).filter(
      ([, plan]) => plan.monthly_token_limit > subscription!.monthly_limit
    );
  };

  const isNearLimit = (threshold: number = 0.9) =>
    subscription ? subscription.usage_percentage >= threshold * 100 : false;

  const canCreateChatbot = () => true;
  const canUploadDocument = () => true;

  return {
    getCurrentPlan,
    getUpgradeOptions,
    isNearLimit,
    canCreateChatbot,
    canUploadDocument,
  };
};
