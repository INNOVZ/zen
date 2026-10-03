"use client";

import { useCallback, useMemo, useState } from "react";
import {
  CalendarDays,
  Database,
  MessageCircle,
  Network,
  ShoppingBag,
} from "lucide-react";

import { IntegrationCard } from "@/components/dashboard/integrations/IntegrationCard";
import GoogleCalendarIntegration from "@/components/dashboard/integrations/GoogleCalendarIntegration";
import GoogleSheetsIntegration from "@/components/dashboard/integrations/GoogleSheetsIntegration";
import CRMIntegration from "@/components/dashboard/integrations/CRMIntegration";
import ShopifyIntegration from "@/components/dashboard/integrations/ShopifyIntegration";
import WhatsAppConfiguration from "@/components/dashboard/settings/WhatsAppConfiguration";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { INTEGRATION_IDS } from "@/constants/integrations";
import { useIntegrationStatuses } from "@/hooks/useIntegrationStatuses";
import { useOrganizationInfo } from "@/hooks/useOrganizationInfo";

interface AutomationConnectionsProps {
  automationCount?: number;
  compact?: boolean;
}

export function AutomationConnections({
  automationCount = 0,
  compact = false,
}: AutomationConnectionsProps) {
  const { statuses } = useIntegrationStatuses();
  const { organizationInfo } = useOrganizationInfo();
  const [openIntegration, setOpenIntegration] = useState<string | null>(null);
  const [organizationPhone, setOrganizationPhone] = useState(
    organizationInfo?.organization.contact_phone ?? "",
  );

  const setOpen = useCallback((id: string, open: boolean) => {
    setOpenIntegration(open ? id : null);
  }, []);

  const connections = useMemo(
    () => [
      {
        id: INTEGRATION_IDS.GOOGLE,
        title: "Google Workspace",
        description: "Calendar and Sheets capabilities",
        type: "MCP adapter",
        icon: CalendarDays,
        iconColor: "text-blue-600",
        iconBgColor: "bg-blue-50",
        hoverBorderColor: "border-blue-400",
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
        description: "Zoho, HubSpot, Salesforce or Pipedrive",
        type: "MCP adapter",
        icon: Database,
        iconColor: "text-violet-600",
        iconBgColor: "bg-violet-50",
        hoverBorderColor: "border-violet-400",
        component: <CRMIntegration />,
      },
      {
        id: INTEGRATION_IDS.SHOPIFY,
        title: "Shopify",
        description: "Storefront and order capabilities",
        type: "Direct API",
        icon: ShoppingBag,
        iconColor: "text-emerald-600",
        iconBgColor: "bg-emerald-50",
        hoverBorderColor: "border-emerald-400",
        component: <ShopifyIntegration />,
      },
      {
        id: INTEGRATION_IDS.WHATSAPP,
        title: "WhatsApp",
        description: "Customer messaging through Twilio",
        type: "Messaging channel",
        icon: MessageCircle,
        iconColor: "text-green-600",
        iconBgColor: "bg-green-50",
        hoverBorderColor: "border-green-400",
        component: (
          <WhatsAppConfiguration
            organizationPhone={organizationPhone}
            onPhoneNumberChange={setOrganizationPhone}
          />
        ),
      },
    ],
    [organizationPhone],
  );

  if (compact) {
    return (
      <div className="divide-y divide-slate-100">
        {connections.map((connection) => {
          const status = statuses[connection.id]?.status ?? "not-configured";
          return (
            <button
              key={connection.id}
              type="button"
              onClick={() => setOpen(connection.id, true)}
              className="flex w-full items-center gap-3 px-5 py-3 text-left transition-colors hover:bg-slate-50"
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${connection.iconBgColor}`}>
                <connection.icon className={`h-4 w-4 ${connection.iconColor}`} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-slate-900">{connection.title}</span>
                <span className="block truncate text-xs text-slate-500">{connection.type}</span>
              </span>
              <ConnectionStatus status={status} />
            </button>
          );
        })}
        <div className="flex items-center gap-3 px-5 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50">
            <Network className="h-4 w-4 text-rose-600" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium text-slate-900">n8n</span>
            <span className="block text-xs text-slate-500">Workflow engine · platform managed</span>
          </span>
          <ConnectionStatus status={automationCount > 0 ? "connected" : "not-configured"} />
        </div>
        {connections.map((connection) => (
          <div key={`${connection.id}-dialog`} className="hidden">
            <IntegrationCard
              id={connection.id}
              title={connection.title}
              description={connection.description}
              icon={connection.icon}
              iconColor={connection.iconColor}
              iconBgColor={connection.iconBgColor}
              hoverBorderColor={connection.hoverBorderColor}
              connectionStatus={statuses[connection.id]?.status ?? "not-configured"}
              isOpen={openIntegration === connection.id}
              onOpenChange={(open) => setOpen(connection.id, open)}
            >
              {connection.component}
            </IntegrationCard>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {connections.map((connection) => (
        <IntegrationCard
          key={connection.id}
          id={connection.id}
          title={connection.title}
          description={`${connection.type} · ${connection.description}`}
          icon={connection.icon}
          iconColor={connection.iconColor}
          iconBgColor={connection.iconBgColor}
          hoverBorderColor={connection.hoverBorderColor}
          connectionStatus={statuses[connection.id]?.status ?? "not-configured"}
          isOpen={openIntegration === connection.id}
          onOpenChange={(open) => setOpen(connection.id, open)}
        >
          {connection.component}
        </IntegrationCard>
      ))}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50">
                <Network className="h-5 w-5 text-rose-600" />
              </span>
              <div>
                <CardTitle className="text-base">n8n</CardTitle>
                <CardDescription>Workflow engine · platform managed</CardDescription>
              </div>
            </div>
            <Badge variant="outline">{automationCount > 0 ? "Available" : "Not configured"}</Badge>
          </div>
        </CardHeader>
        <CardContent className="text-sm leading-6 text-slate-600">
          Runtime URLs, signing credentials and workflow versions are managed by Zaakiy administrators. Tenant users bind reviewed workflows without seeing provider secrets.
        </CardContent>
      </Card>
    </div>
  );
}

function ConnectionStatus({ status }: { status: string }) {
  const connected = status === "connected";
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium ${connected ? "text-emerald-700" : "text-slate-500"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${connected ? "bg-emerald-500" : "bg-slate-400"}`} />
      {connected ? "Connected" : "Not configured"}
    </span>
  );
}
