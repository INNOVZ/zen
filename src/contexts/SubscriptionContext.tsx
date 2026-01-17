"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { subscriptionApi } from "@/app/api/subscription";
import { getAuthInfo } from "@/app/api/auth";
import type {
  SubscriptionStatus,
  SubscriptionPlans,
  TokenAvailabilityCheck,
  TokenConsumptionRequest,
  TokenConsumptionResponse,
} from "@/types/subscription";

// Define the context type interface
interface SubscriptionContextType {
  subscription: SubscriptionStatus | null;
  plans: SubscriptionPlans | null;
  isLoading: boolean;
  error: string | null;
  refreshSubscription: () => Promise<void>;
  checkTokenAvailability: (requiredTokens: number) => Promise<TokenAvailabilityCheck>;
  consumeTokens: (request: TokenConsumptionRequest) => Promise<TokenConsumptionResponse>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined
);

interface SubscriptionProviderProps {
  children: ReactNode;
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({
  children,
}) => {
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(
    null
  );
  const [plans, setPlans] = useState<SubscriptionPlans | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load subscription plans on mount
  useEffect(() => {
    let mounted = true;

    const loadPlans = async () => {
      try {
        const plansData = await subscriptionApi.getPlans();
        if (mounted) {
          setPlans(plansData);
        }
      } catch (err) {
        if (mounted) {
          console.error("Failed to load subscription plans:", err);
          setError("Failed to load subscription plans");
        }
      }
    };

    loadPlans();

    return () => {
      mounted = false;
    };
  }, []);

  // Load subscription status when user is authenticated
  useEffect(() => {
    let mounted = true;

    const loadSubscriptionStatus = async () => {
      try {
        if (!mounted) return;
        setIsLoading(true);
        setError(null);

        const { userId, orgId } = await getAuthInfo();
        if (!mounted) return;

        // FIXED: Try both user and organization subscriptions
        // Priority: organization subscription first, then user subscription
        let response: SubscriptionStatus | null = null;
        let entityType = "";

        // First try organization subscription if user has orgId
        if (orgId) {
          try {
            response = await subscriptionApi.getSubscriptionStatus(
              "organization",
              orgId
            );
            if (!mounted) return;
            entityType = "organization";
            console.log("Found organization subscription:", response);
          } catch {
            if (!mounted) return;
            console.log(
              "No organization subscription found, trying user subscription"
            );
            response = null;
          }
        }

        // If no organization subscription or no orgId, try user subscription
        if (!response || response.has_subscription === false) {
          try {
            response = await subscriptionApi.getSubscriptionStatus(
              "user",
              userId
            );
            if (!mounted) return;
            entityType = "user";
            console.log("Found user subscription:", response);
          } catch {
            if (!mounted) return;
            console.log("No user subscription found either");
            response = null;
          }
        }

        // Handle the response
        if (!mounted) return;
        if (!response || response.has_subscription === false) {
          console.log("No subscription found for user or organization");
          setSubscription(null);
          setError(
            "No subscription found. Please contact admin to set up your subscription."
          );
        } else {
          // Convert response to SubscriptionStatus format
          const status: SubscriptionStatus = {
            subscription_id: response.subscription_id || "",
            tokens_used_this_month: response.tokens_used_this_month || 0,
            tokens_remaining: response.tokens_remaining || 0,
            monthly_limit: response.monthly_limit || 0,
            usage_percentage: response.usage_percentage || 0,
            reset_date: response.reset_date || "",
            plan_name: response.plan_name || "Basic Plan",
          };
          setSubscription(status);
          console.log(
            `Successfully loaded ${entityType} subscription:`,
            status
          );
        }
      } catch (err) {
        if (!mounted) return;
        console.error("Failed to load subscription status:", err);

        // FIXED: Better error handling
        if (err instanceof Error) {
          if (err.message.includes("Not authenticated")) {
            // User not logged in - this is normal
            setSubscription(null);
            setError(null);
          } else if (
            err.message.includes("Failed to fetch subscription status: 500")
          ) {
            // Server error - likely no subscription exists
            setSubscription(null);
            setError(
              "No subscription found. Please contact admin to set up your subscription."
            );
          } else {
            setError("Failed to load subscription status");
          }
        } else {
          setError("Failed to load subscription status");
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadSubscriptionStatus();

    // Refresh subscription status every 30 seconds
    const interval = setInterval(() => {
      if (mounted) {
        loadSubscriptionStatus();
      }
    }, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const refreshSubscription = async () => {
    try {
      setError(null);
      const { userId, orgId } = await getAuthInfo();

      // FIXED: Try both user and organization subscriptions
      // Priority: organization subscription first, then user subscription
      let response: SubscriptionStatus | null = null;
      let entityType = "";

      // First try organization subscription if user has orgId
      if (orgId) {
        try {
          response = await subscriptionApi.getSubscriptionStatus(
            "organization",
            orgId
          );
          entityType = "organization";
          console.log("Refreshed organization subscription:", response);
        } catch {
          console.log(
            "No organization subscription found, trying user subscription"
          );
          response = null;
        }
      }

      // If no organization subscription or no orgId, try user subscription
      if (!response || response.has_subscription === false) {
        try {
          response = await subscriptionApi.getSubscriptionStatus(
            "user",
            userId
          );
          entityType = "user";
          console.log("Refreshed user subscription:", response);
        } catch {
          console.log("No user subscription found either");
          response = null;
        }
      }

      // Handle the response
      if (!response || response.has_subscription === false) {
        setSubscription(null);
        setError(
          "No subscription found. Please contact admin to set up your subscription."
        );
      } else {
        const status: SubscriptionStatus = {
          subscription_id: response.subscription_id || "",
          tokens_used_this_month: response.tokens_used_this_month || 0,
          tokens_remaining: response.tokens_remaining || 0,
          monthly_limit: response.monthly_limit || 0,
          usage_percentage: response.usage_percentage || 0,
          reset_date: response.reset_date || "",
          plan_name: response.plan_name || "Basic Plan",
        };
        setSubscription(status);
        console.log(
          `Successfully refreshed ${entityType} subscription:`,
          status
        );
      }
    } catch (err) {
      console.error("Failed to refresh subscription status:", err);
      setError("Failed to refresh subscription status");
    }
  };

  const checkTokenAvailability = async (
    requiredTokens: number
  ): Promise<TokenAvailabilityCheck> => {
    try {
      const { userId, orgId } = await getAuthInfo();

      // FIXED: Try both user and organization subscriptions
      // Priority: organization subscription first, then user subscription
      let result: TokenAvailabilityCheck | null = null;

      // First try organization subscription if user has orgId
      if (orgId) {
        try {
          result = await subscriptionApi.checkTokenAvailability(
            "organization",
            orgId,
            requiredTokens
          );
          console.log("Checked organization token availability:", result);
        } catch {
          console.log(
            "No organization subscription found, trying user subscription"
          );
          result = null;
        }
      }

      // If no organization subscription or no orgId, try user subscription
      if (!result) {
        try {
          result = await subscriptionApi.checkTokenAvailability(
            "user",
            userId,
            requiredTokens
          );
          console.log("Checked user token availability:", result);
        } catch {
          console.log("No user subscription found either");
          result = null;
        }
      }

      // Return result or default response
      if (result) {
        return result;
      } else {
        return {
          success: false,
          has_enough_tokens: false,
          tokens_required: requiredTokens,
          tokens_available: 0,
          can_proceed: false,
          monthly_limit: 0,
          reset_date: "",
        };
      }
    } catch (err) {
      console.error("Failed to check token availability:", err);

      // FIXED: Return appropriate response for no subscription
      return {
        success: false,
        has_enough_tokens: false,
        tokens_required: requiredTokens,
        tokens_available: 0,
        can_proceed: false,
        monthly_limit: 0,
        reset_date: "",
      };
    }
  };

  const consumeTokens = async (
    request: TokenConsumptionRequest
  ): Promise<TokenConsumptionResponse> => {
    try {
      const response = await subscriptionApi.consumeTokens(request);

      // Refresh subscription status after consuming tokens
      await refreshSubscription();

      return response;
    } catch (err) {
      console.error("Failed to consume tokens:", err);
      throw err;
    }
  };

  const value: SubscriptionContextType = {
    subscription,
    plans,
    isLoading,
    error,
    refreshSubscription,
    checkTokenAvailability,
    consumeTokens,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider"
    );
  }
  return context;
};

// Hook for token estimation
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
  ): number => {
    return subscriptionApi.estimateTokensForOperation(
      operationType,
      messageLength,
      documentSize
    );
  };

  return { estimateTokens };
};

// Hook for subscription limits
export const useSubscriptionLimits = () => {
  const { subscription, plans } = useSubscription();

  const getCurrentPlan = () => {
    if (!subscription || !plans) return null;

    // Find plan by monthly limit
    const planEntries = Object.entries(plans);
    const currentPlan = planEntries.find(
      ([, plan]) => plan.monthly_token_limit === subscription.monthly_limit
    );

    return currentPlan ? { key: currentPlan[0], plan: currentPlan[1] } : null;
  };

  const getUpgradeOptions = () => {
    if (!plans) return [];

    const currentPlan = getCurrentPlan();
    if (!currentPlan) return Object.entries(plans);

    const planEntries = Object.entries(plans);
    return planEntries.filter(
      ([, plan]) => plan.monthly_token_limit > subscription!.monthly_limit
    );
  };

  const isNearLimit = (threshold: number = 0.9) => {
    if (!subscription) return false;
    return subscription.usage_percentage >= threshold * 100;
  };

  const canCreateChatbot = () => {
    if (!subscription || !plans) return true;

    const currentPlan = getCurrentPlan();
    if (!currentPlan) return true;

    // This would need to be tracked separately - for now return true
    return true;
  };

  const canUploadDocument = () => {
    if (!subscription || !plans) return true;

    const currentPlan = getCurrentPlan();
    if (!currentPlan) return true;

    // This would need to be tracked separately - for now return true
    return true;
  };

  return {
    getCurrentPlan,
    getUpgradeOptions,
    isNearLimit,
    canCreateChatbot,
    canUploadDocument,
  };
};
