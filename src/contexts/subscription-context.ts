import { createContext } from "react";
import type {
  SubscriptionPlans,
  SubscriptionStatus,
  TokenAvailabilityCheck,
  TokenConsumptionRequest,
  TokenConsumptionResponse,
} from "@/types/subscription";

export interface SubscriptionContextType {
  subscription: SubscriptionStatus | null;
  plans: SubscriptionPlans | null;
  isLoading: boolean;
  error: string | null;
  refreshSubscription: () => Promise<void>;
  checkTokenAvailability: (
    requiredTokens: number
  ) => Promise<TokenAvailabilityCheck>;
  consumeTokens: (
    request: TokenConsumptionRequest
  ) => Promise<TokenConsumptionResponse>;
}

export const SubscriptionContext = createContext<
  SubscriptionContextType | undefined
>(undefined);
