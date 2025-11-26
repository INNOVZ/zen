"use client";

import { useState, useEffect } from "react";
import { DASHBOARD_CONFIG } from "@/types/dashboard";
import WhatsAppConfiguration from "@/components/dashboard/settings/WhatsAppConfiguration";
import { organizationApi } from "@/app/api/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function IntegrationPage() {
  const [organizationPhone, setOrganizationPhone] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadOrganizationInfo();
  }, []);

  const loadOrganizationInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const info = await organizationApi.getOrganizationInfo();
      setOrganizationPhone(info.organization.contact_phone || "");
    } catch (err) {
      console.error("Failed to load organization info:", err);
      setError("Failed to load organization information");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneNumberChange = (phone: string) => {
    setOrganizationPhone(phone);
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
      >
        <div className="container mx-auto p-8">
          <div className="text-center py-12">
            Loading integration settings...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
    >
      <div className="container mx-auto p-8 space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Integrations
          </h1>
          <p className="text-gray-600">
            Connect your chatbots with external messaging platforms and services
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Integration Cards */}
        <div className="space-y-6">
          {/* WhatsApp Integration */}
          <WhatsAppConfiguration
            organizationPhone={organizationPhone}
            onPhoneNumberChange={handlePhoneNumberChange}
          />

          {/* Placeholder for future integrations */}
          <Card className="border-0 opacity-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                More Integrations Coming Soon
              </CardTitle>
              <CardDescription>
                We&rsquo;re working on adding more messaging platform
                integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Facebook Messenger</p>
                <p>• Instagram Direct</p>
                <p>• Telegram</p>
                <p>• Slack</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
