import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import { getCurrentUserContext } from "@/app/api/auth";
import { subscriptionApi } from "@/app/api/subscription";
import { useAuth } from "@/hooks/useAuthGuard";

jest.mock("@/app/api/auth", () => ({
  getCurrentUserContext: jest.fn(),
  isUnauthenticatedError: (error: unknown) =>
    error instanceof Error && error.name === "UnauthenticatedError",
}));

jest.mock("@/hooks/useAuthGuard", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@/app/api/subscription", () => ({
  subscriptionApi: {
    getPlans: jest.fn(),
    getSubscriptionStatus: jest.fn(),
    checkTokenAvailability: jest.fn(),
    consumeTokens: jest.fn(),
    estimateTokensForOperation: jest.fn(),
  },
}));

describe("SubscriptionProvider auth lifecycle", () => {
  let refreshCallback: () => void;

  beforeEach(() => {
    jest.clearAllMocks();
    refreshCallback = jest.fn();

    (useAuth as jest.Mock).mockReturnValue({ isAuthorized: true });

    const realSetInterval = global.setInterval.bind(global);
    jest
      .spyOn(global, "setInterval")
      .mockImplementation((callback, delay, ...args) => {
        if (delay === 5 * 60_000) {
          refreshCallback = callback as () => void;
          return 999_999 as unknown as ReturnType<typeof setInterval>;
        }

        return realSetInterval(callback, delay, ...args);
      });
    jest.spyOn(global, "clearInterval");

    (subscriptionApi.getPlans as jest.Mock).mockResolvedValue({});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("does not load or poll without an authenticated provider", async () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthorized: false });

    render(
      <SubscriptionProvider>
        <div>Dashboard</div>
      </SubscriptionProvider>
    );

    expect(getCurrentUserContext).not.toHaveBeenCalled();
    expect(setInterval).not.toHaveBeenCalledWith(
      expect.any(Function),
      5 * 60_000
    );
  });

  it("loads once and refreshes on the bounded five-minute interval", async () => {
    (getCurrentUserContext as jest.Mock).mockResolvedValue({
      userId: "user-id",
      orgId: null,
    });
    (subscriptionApi.getSubscriptionStatus as jest.Mock).mockResolvedValue({
      has_subscription: true,
      subscription_id: "subscription-id",
      tokens_used_this_month: 10,
      tokens_remaining: 90,
      monthly_limit: 100,
      usage_percentage: 10,
      reset_date: "2026-10-01",
      plan_name: "Basic",
    });

    render(
      <SubscriptionProvider>
        <div>Dashboard</div>
      </SubscriptionProvider>
    );

    await waitFor(() => expect(getCurrentUserContext).toHaveBeenCalledTimes(1));

    act(() => {
      refreshCallback();
    });
    await waitFor(() => expect(getCurrentUserContext).toHaveBeenCalledTimes(2));
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 5 * 60_000);
  });
});
