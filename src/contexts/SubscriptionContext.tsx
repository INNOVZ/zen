"use client";

import React, {
  useCallback,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { subscriptionApi } from "@/app/api/subscription";
import {
  getCurrentUserContext,
  isUnauthenticatedError,
} from "@/app/api/auth";
import { SubscriptionContext } from "@/contexts/subscription-context";
import { useAuth } from "@/hooks/useAuthGuard";
import type { SubscriptionContextType } from "@/contexts/subscription-context";
import type {
  SubscriptionStatus,
  SubscriptionPlans,
  TokenAvailabilityCheck,
  TokenConsumptionRequest,
  TokenConsumptionResponse,
} from "@/types/subscription";

interface SubscriptionProviderProps {
  children: ReactNode;
}

const normalizeSubscription = (
  response: SubscriptionStatus
): SubscriptionStatus => ({
  subscription_id: response.subscription_id || "",
  tokens_used_this_month: response.tokens_used_this_month || 0,
  tokens_remaining: response.tokens_remaining || 0,
  monthly_limit: response.monthly_limit || 0,
  usage_percentage: response.usage_percentage || 0,
  reset_date: response.reset_date || "",
  plan_name: response.plan_name || "Basic Plan",
});

const loadCurrentSubscription = async (): Promise<SubscriptionStatus | null> => {
  const { userId, orgId } = await getCurrentUserContext();

  if (orgId) {
    const organizationSubscription =
      await subscriptionApi.getSubscriptionStatus("organization", orgId);
    if (organizationSubscription.has_subscription !== false) {
      return normalizeSubscription(organizationSubscription);
    }
  }

  const userSubscription = await subscriptionApi.getSubscriptionStatus(
    "user",
    userId
  );
  return userSubscription.has_subscription === false
    ? null
    : normalizeSubscription(userSubscription);
};

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({
  children,
}) => {
  const { isAuthorized } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(
    null
  );
  const [plans, setPlans] = useState<SubscriptionPlans | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Subscription plans use an authenticated API, so wait for auth initialization.
  useEffect(() => {
    if (!isAuthorized) return;

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
  }, [isAuthorized]);

  // Load subscription status when user is authenticated
  useEffect(() => {
    if (!isAuthorized) return;

    let mounted = true;
    let requestInFlight = false;

    const loadSubscriptionStatus = async () => {
      if (!mounted || requestInFlight) return;

      requestInFlight = true;
      try {
        setIsLoading(true);
        setError(null);

        const response = await loadCurrentSubscription();
        if (!mounted) return;

        if (!response) {
          setSubscription(null);
          setError(
            "No subscription found. Please contact admin to set up your subscription."
          );
        } else {
          setSubscription(response);
        }
      } catch (err) {
        if (!mounted) return;

        if (isUnauthenticatedError(err)) {
          setSubscription(null);
          setError(null);
        } else {
          console.warn("Failed to load subscription status", err);
          setError("Failed to load subscription status");
        }
      } finally {
        requestInFlight = false;
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    void loadSubscriptionStatus();
    const refreshInterval = setInterval(
      () => void loadSubscriptionStatus(),
      5 * 60 * 1000
    );

    return () => {
      mounted = false;
      clearInterval(refreshInterval);
    };
  }, [isAuthorized]);

  const refreshSubscription = useCallback(async () => {
    try {
      setError(null);
      const response = await loadCurrentSubscription();

      if (!response) {
        setSubscription(null);
        setError(
          "No subscription found. Please contact admin to set up your subscription."
        );
      } else {
        setSubscription(response);
      }
    } catch (err) {
      if (isUnauthenticatedError(err)) {
        setSubscription(null);
        setError(null);
      } else {
        console.warn("Failed to refresh subscription status", err);
        setError("Failed to refresh subscription status");
      }
    }
  }, []);

  const checkTokenAvailability = async (
    requiredTokens: number
  ): Promise<TokenAvailabilityCheck> => {
    try {
      const { userId, orgId } = await getCurrentUserContext();

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
