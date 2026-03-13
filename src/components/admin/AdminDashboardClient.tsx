"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AdminUserManagement from "@/components/admin/AdminUserManagement";
import { getAdminStatus, fetchWithAuth } from "@/app/api/auth";
import { toast } from "sonner";
// import { RefreshCw } from "lucide-react";

type AdminDashboardData = {
  overview: {
    total_users: number;
    total_organizations: number;
    active_subscriptions: number;
    onboardings_this_month: number;
    active_admins: number;
  };
  recent_onboarding: Array<{
    subscription_id: string;
    entity_id: string;
    entity_type: "user" | "organization";
    display_name: string;
    email: string;
    organization_name?: string | null;
    plan: string;
    status: string;
    created_at: string;
    billing_cycle_end?: string | null;
    tokens_used_this_month: number;
    monthly_token_limit: number;
    usage_percentage: number;
    contact_phone?: string | null;
    business_type?: string | null;
    last_login?: string | null;
  }>;
  summary: {
    plans: Record<string, number>;
    statuses: Record<string, number>;
  };
};

const AdminDashboardClient = () => {
  const router = useRouter();
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [dashboard, setDashboard] = useState<AdminDashboardData | null>(null);
  const [isLoadingDashboard, setIsLoadingDashboard] = useState(false);

  const loadDashboard = async () => {
    setIsLoadingDashboard(true);
    try {
      const data = await fetchWithAuth("/api/admin/dashboard");
      setDashboard(data as AdminDashboardData);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to load admin dashboard.";
      toast.error(message);
    } finally {
      setIsLoadingDashboard(false);
    }
  };

  useEffect(() => {
    let active = true;

    const verifyAdminAccess = async () => {
      try {
        const status = await getAdminStatus();

        if (!active) {
          return;
        }

        if (!status.is_admin) {
          toast.error("Admin access is required to use this page.");
          router.replace("/dashboard");
          return;
        }

        setIsAuthorized(true);
        await loadDashboard();
      } catch (error) {
        if (!active) {
          return;
        }

        const message =
          error instanceof Error ? error.message : "Authentication required.";

        if (
          message.includes("Authentication expired") ||
          message.includes("Not authenticated")
        ) {
          router.replace("/auth/login");
          return;
        }

        toast.error(message);
        router.replace("/dashboard");
      } finally {
        if (active) {
          setIsCheckingAccess(false);
        }
      }
    };

    verifyAdminAccess();

    return () => {
      active = false;
    };
  }, [router]);

  if (isCheckingAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Verifying admin access
          </h1>
          <p className="text-gray-600 mt-2">
            Please wait while your permissions are checked.
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  const overview = dashboard?.overview;
  const statusEntries = Object.entries(dashboard?.summary?.statuses || {});
  const planEntries = Object.entries(dashboard?.summary?.plans || {});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <p className="font-semibold">Subscriptions</p>
              <Badge variant="default" className="py-1">
                {statusEntries.length === 0 ? (
                  <p className="text-sm text-white gap-3">
                    No subscription activity yet.
                  </p>
                ) : (
                  statusEntries.map(([statusName, count]) => (
                    <div key={statusName} className="flex flex-wrap">
                      <span className="min-w-0 px-3 text-sm font-medium gap-3 capitalize text-white">
                        {statusName}
                      </span>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  ))
                )}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-semibold">Plan</p>
              <Badge variant="default" className="py-1">
                {planEntries.length === 0 ? (
                  <p className="text-sm text-white">No plan data yet.</p>
                ) : (
                  planEntries.map(([planName, count]) => (
                    <div key={planName} className="flex flex-wrap ">
                      <span className="min-w-0 px-3 text-sm font-medium capitalize text-white ">
                        {planName}
                      </span>
                      <Badge variant="secondary">{count}</Badge>
                    </div>
                  ))
                )}
              </Badge>
            </div>
            {/* <Button
              variant="outline"
              onClick={loadDashboard}
              disabled={isLoadingDashboard}
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${isLoadingDashboard ? "animate-spin" : ""}`}
              />
              Refresh
            </Button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
          <div>
            <div className="p-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 hover:shadow-blue-200 shadow-sm">
              <div className="flex flex-row gap-3 items-center justify-between px-3">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">
                  {overview?.total_users ?? 0}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="p-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 hover:shadow-blue-200 shadow-sm">
              <div className="flex flex-row gap-3 items-center justify-between px-3">
                <p className="text-sm font-medium text-gray-600">
                  Organizations
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {overview?.total_organizations ?? 0}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="p-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 hover:shadow-blue-200 shadow-sm">
              <div className="flex flex-row gap-3 items-center justify-between px-3">
                <p className="text-sm font-medium text-gray-600">
                  Active Subscriptions
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {overview?.active_subscriptions ?? 0}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="p-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 hover:shadow-blue-200 shadow-sm">
              <div className="flex flex-row gap-3 items-center justify-between px-3">
                <p className="text-sm font-medium text-gray-600">
                  Onboarded This Month
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {overview?.onboardings_this_month ?? 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 grid ">
          <div className="min-w-0">
            <AdminUserManagement
              recentOnboarding={dashboard?.recent_onboarding || []}
              onRefresh={loadDashboard}
              isRefreshing={isLoadingDashboard}
            />
          </div>

          <div className="min-w-0 space-x-6"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardClient;
