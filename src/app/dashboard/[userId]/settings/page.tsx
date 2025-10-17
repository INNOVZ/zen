"use client";

import { DASHBOARD_CONFIG } from "@/types/dashboard";
import OrganizationManagement from "@/components/dashboard/settings/OrganizationManagement";

export default function SettingsPage() {
  return (
    <div
      className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
    >
      <OrganizationManagement />
    </div>
  );
}
