"use client";

import { DASHBOARD_CONFIG } from "@/types/dashboard";
import SettingsLayout from "@/components/dashboard/settings/SettingsLayout";
import { useAuth } from "@/hooks/useAuthGuard";
import { useTranslation } from "@/contexts/I18nContext";

export default function SettingsPage() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const { t } = useTranslation();

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center min-h-[95vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">{t("common.loading")}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[95vh]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
    >
      <SettingsLayout />
    </div>
  );
}
