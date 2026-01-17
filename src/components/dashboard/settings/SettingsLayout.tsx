"use client";

import { useState, useCallback, useMemo } from "react";
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
  Calendar,
  Database,
  ShoppingCart,
  Sheet,
  MessageSquare,
} from "lucide-react";
import { useOrganizationInfo } from "@/hooks/useOrganizationInfo";
import { useIntegrationStatuses } from "@/hooks/useIntegrationStatuses";
import {
  IntegrationCard,
  type ConnectionStatus,
} from "@/components/dashboard/integrations/IntegrationCard";
import { INTEGRATION_IDS } from "@/constants/integrations";
import GoogleCalendarIntegration from "@/components/dashboard/integrations/GoogleCalendarIntegration";
import GoogleSheetsIntegration from "@/components/dashboard/integrations/GoogleSheetsIntegration";
import CRMIntegration from "@/components/dashboard/integrations/CRMIntegration";
import ShopifyIntegration from "@/components/dashboard/integrations/ShopifyIntegration";
import LeadCaptureSettings from "@/components/dashboard/integrations/LeadCaptureSettings";
import WhatsAppConfiguration from "@/components/dashboard/settings/WhatsAppConfiguration";
import PasswordChange from "@/components/dashboard/settings/PasswordChange";

export default function SettingsLayout() {
  const {
    organizationInfo,
    isLoading: isLoadingInfo,
    isMounted,
    loadOrganizationInfo,
    updateOrganization,
  } = useOrganizationInfo();

  const { statuses: integrationStatuses } = useIntegrationStatuses();

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
  const [openIntegrationModal, setOpenIntegrationModal] = useState<
    string | null
  >(null);
  const [organizationPhone, setOrganizationPhone] = useState<string>(
    organizationInfo?.organization.contact_phone || ""
  );

  // Update form data when organization info loads
  useMemo(() => {
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
      setOrganizationPhone(organizationInfo.organization.contact_phone || "");
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

  const handlePhoneNumberChange = useCallback((phone: string) => {
    setOrganizationPhone(phone);
  }, []);

  const handleOpenIntegrationModal = useCallback(
    (integrationId: string, open: boolean) => {
      setOpenIntegrationModal(open ? integrationId : null);
    },
    []
  );

  // Define integrations configuration with connection status
  const integrations = useMemo(
    () => [
      {
        id: INTEGRATION_IDS.WHATSAPP,
        title: "WhatsApp",
        description: "Connect via Twilio",
        icon: MessageSquare,
        iconColor: "text-green-600",
        iconBgColor: "bg-green-100",
        hoverBorderColor: "border-green-500",
        connectionStatus:
          integrationStatuses[INTEGRATION_IDS.WHATSAPP]?.status ||
          ("not-configured" as ConnectionStatus),
        component: (
          <WhatsAppConfiguration
            organizationPhone={organizationPhone}
            onPhoneNumberChange={handlePhoneNumberChange}
          />
        ),
      },
      {
        id: INTEGRATION_IDS.GOOGLE,
        title: "Google Services",
        description: "Calendar & Sheets",
        icon: Calendar,
        iconColor: "text-blue-600",
        iconBgColor: "bg-blue-100",
        hoverBorderColor: "border-blue-500",
        connectionStatus:
          integrationStatuses[INTEGRATION_IDS.GOOGLE]?.status ||
          ("not-configured" as ConnectionStatus),
        component: (
          <div className="space-y-6">
            <GoogleCalendarIntegration />
            <div className="border-t pt-6">
              <GoogleSheetsIntegration />
            </div>
          </div>
        ),
      },
      {
        id: INTEGRATION_IDS.CRM,
        title: "CRM",
        description: "HubSpot, Salesforce, Zoho",
        icon: Database,
        iconColor: "text-purple-600",
        iconBgColor: "bg-purple-100",
        hoverBorderColor: "border-purple-500",
        connectionStatus:
          integrationStatuses[INTEGRATION_IDS.CRM]?.status ||
          ("not-configured" as ConnectionStatus),
        component: <CRMIntegration />,
      },
      {
        id: INTEGRATION_IDS.SHOPIFY,
        title: "Shopify",
        description: "E-commerce integration",
        icon: ShoppingCart,
        iconColor: "text-green-600",
        iconBgColor: "bg-green-100",
        hoverBorderColor: "border-green-500",
        connectionStatus:
          integrationStatuses[INTEGRATION_IDS.SHOPIFY]?.status ||
          ("not-configured" as ConnectionStatus),
        component: <ShopifyIntegration />,
      },
      {
        id: INTEGRATION_IDS.LEAD_CAPTURE,
        title: "Lead Capture",
        description: "Auto-capture leads",
        icon: Sheet,
        iconColor: "text-orange-600",
        iconBgColor: "bg-orange-100",
        hoverBorderColor: "border-orange-500",
        connectionStatus:
          integrationStatuses[INTEGRATION_IDS.LEAD_CAPTURE]?.status ||
          ("not-configured" as ConnectionStatus),
        component: <LeadCaptureSettings />,
      },
    ],
    [organizationPhone, handlePhoneNumberChange, integrationStatuses]
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
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="mt-1">Unable to load organization information</p>
          </div>
        )}
      </header>

      {/* Two Column Layout */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Organization Management */}
          <div className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Integrations </CardTitle>
                <CardDescription>
                  Connect your chatbot with external services and messaging
                  platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {integrations.map((integration) => (
                  <IntegrationCard
                    key={integration.id}
                    id={integration.id}
                    title={integration.title}
                    description={integration.description}
                    icon={integration.icon}
                    iconColor={integration.iconColor}
                    iconBgColor={integration.iconBgColor}
                    hoverBorderColor={integration.hoverBorderColor}
                    connectionStatus={integration.connectionStatus}
                    isOpen={openIntegrationModal === integration.id}
                    onOpenChange={(open) =>
                      handleOpenIntegrationModal(integration.id, open)
                    }
                  >
                    {integration.component}
                  </IntegrationCard>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Update Organization</CardTitle>
                <CardDescription>
                  Update your organization details including name, email,
                  contact phone, and business type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Organization Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter organization name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Organization Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter organization email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact_phone">Contact Phone</Label>
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
                      placeholder="Enter contact phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business_type">Business Type</Label>
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
                      placeholder="Enter business type (e.g., SaaS, E-commerce, etc.)"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Updating..." : "Update Organization"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={loadOrganizationInfo}
                      disabled={isLoadingInfo}
                    >
                      <RefreshCw
                        className={`h-4 w-4 mr-2 ${
                          isLoadingInfo ? "animate-spin" : ""
                        }`}
                      />
                      Refresh
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
