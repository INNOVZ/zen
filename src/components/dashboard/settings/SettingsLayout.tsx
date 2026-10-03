"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { type UpdateOrganizationRequest } from "@/app/api/routes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RefreshCw,
  Phone,
  Mail,
  Briefcase,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { useOrganizationInfo } from "@/hooks/useOrganizationInfo";
import PasswordChange from "@/components/dashboard/settings/PasswordChange";
import { useTranslation } from "@/contexts/I18nContext";

export default function SettingsLayout() {
  const { t } = useTranslation();
  const {
    organizationInfo,
    isLoading: isLoadingInfo,
    isMounted,
    loadOrganizationInfo,
    updateOrganization,
  } = useOrganizationInfo();

  const [formData, setFormData] = useState<UpdateOrganizationRequest>({
    name: organizationInfo?.organization.name || "",
    email:
      organizationInfo?.organization.email ||
      organizationInfo?.user?.email ||
      "",
    contact_phone: organizationInfo?.organization.contact_phone || "",
    business_type: organizationInfo?.organization.business_type || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  // Update form data when organization info loads
  useEffect(() => {
    if (organizationInfo) {
      setFormData({
        name: organizationInfo.organization.name || "",
        email:
          organizationInfo.organization.email ||
          organizationInfo.user?.email ||
          "",
        contact_phone: organizationInfo.organization.contact_phone || "",
        business_type: organizationInfo.organization.business_type || "",
      });
    }
  }, [organizationInfo]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await updateOrganization(formData);
      } catch (error) {
        console.error("Failed to update organization:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, updateOrganization]
  );

  if (!isMounted || isLoadingInfo) {
    return (
      <div className="space-y-6 h-full w-full">
        <div className="bg-color-gradient p-8 rounded-t-xl">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-64 mb-2"></div>
            <div className="h-4 bg-white/20 rounded w-32"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 h-full w-full">
      {/* Current Organization Info */}
      <header className="w-full bg-color-gradient p-8 rounded-lg">
        {organizationInfo ? (
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl text-white font-bold">
                {organizationInfo.organization.name || "No Organization"}
              </h1>
              <p className="text-white mt-1 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {organizationInfo.organization.business_type ||
                  "No business type set"}
              </p>
            </div>
            <div
              className="flex gap-2"
              role="group"
              aria-label="Primary actions"
            >
              <Button variant="outline">
                <Mail className="h-4 w-4" />
                {organizationInfo.organization.email}
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4" />
                {organizationInfo.organization.contact_phone}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-white">
            <h1 className="text-3xl font-bold">{t("sidebar.settings")}</h1>
            <p className="mt-1">{t("common.error_loading")}</p>
          </div>
        )}
      </header>

      {/* Two Column Layout */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Agentic configuration lives in the unified Automations workspace. */}
          <div className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-[#5d7dde]" />
                  Automations & connections
                </CardTitle>
                <CardDescription>
                  Integrations, MCP adapters, workflow routes and execution history now live in one governed workspace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/dashboard/automations/connections">
                    Open Automations <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle>{t("settings.update_org")}</CardTitle>
                <CardDescription>
                  {t("settings.update_org_subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("settings.org_name")}</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("settings.org_name")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("settings.org_email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t("settings.org_email")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact_phone">{t("settings.contact_phone")}</Label>
                    <Input
                      id="contact_phone"
                      type="tel"
                      value={formData.contact_phone || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_phone: e.target.value,
                        })
                      }
                      placeholder={t("settings.contact_phone")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business_type">{t("settings.business_type")}</Label>
                    <Input
                      id="business_type"
                      type="text"
                      value={formData.business_type || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          business_type: e.target.value,
                        })
                      }
                      placeholder={t("settings.business_type")}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? t("common.saving") : t("settings.update_org_btn")}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={loadOrganizationInfo}
                      disabled={isLoadingInfo}
                    >
                      <RefreshCw
                        className={`h-4 w-4 mr-2 ${isLoadingInfo ? "animate-spin" : ""
                          }`}
                      />
                      {t("common.refresh")}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Password Change Section */}
            <PasswordChange />
          </div>
        </div>
      </div>
    </div>
  );
}
