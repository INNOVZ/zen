"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { mcpApi, type CRMConfig } from "@/app/api/mcp";
import type { CRMType } from "@/types/integration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Database,
  Loader2,
  TestTube,
  CheckCircle2,
  XCircle,
  Edit2,
  X,
} from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

const CRM_TYPES: { value: CRMType; label: string }[] = [
  { value: "hubspot", label: "HubSpot" },
  { value: "salesforce", label: "Salesforce" },
  { value: "pipedrive", label: "Pipedrive" },
  { value: "zoho", label: "Zoho CRM" },
];

export default function CRMIntegration() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [config, setConfig] = useState<CRMConfig>({
    enabled: false,
    crm_type: undefined,
    api_key: "",
    config: {},
  });

  // Separate state for credential inputs
  const [credentials, setCredentials] = useState({
    // HubSpot & Pipedrive
    api_key: "",
    // Salesforce
    username: "",
    password: "",
    security_token: "",
    domain: "login",
    // Zoho
    client_id: "",
    client_secret: "",
    refresh_token: "",
    api_domain: "https://www.zohoapis.com",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [zohoRegion, setZohoRegion] = useState("com");
  const [zohoOAuthAppConfigured, setZohoOAuthAppConfigured] = useState(false);
  const [zohoOAuthAppConfig, setZohoOAuthAppConfig] = useState<{
    configured: boolean;
    client_id?: string;
    redirect_uri?: string;
  } | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<{
    configured: boolean;
    testSuccess: boolean | null;
  }>({ configured: false, testSuccess: null });

  const checkConnectionStatus = useCallback(
    async (crmType?: CRMType) => {
      try {
        const typeToCheck = crmType || config.crm_type;
        if (!typeToCheck) {
          // No CRM type, reset connection status
          setIsConnected(false);
          setConnectionStatus({ configured: false, testSuccess: null });
          return;
        }

        const status = await mcpApi.getIntegrationStatus(typeToCheck);
        // A CRM is considered connected only if BOTH enabled AND configured
        const isConfigured = status.configured && status.enabled;

        // Only update if this is for the currently selected CRM type
        // This prevents stale state from previous CRM types
        const currentCrmType = config.crm_type;
        if (typeToCheck === currentCrmType || !currentCrmType) {
          setIsConnected(isConfigured);
          setConnectionStatus({
            configured: isConfigured,
            testSuccess: isConfigured ? true : null,
          });
        }
      } catch (error) {
        console.error("Failed to check CRM status:", error);
        // On error, reset connection status
        setIsConnected(false);
        setConnectionStatus({ configured: false, testSuccess: null });
      }
    },
    [config.crm_type]
  );

  const checkZohoOAuthConfig = useCallback(async (): Promise<boolean> => {
    try {
      const oauthConfig = await mcpApi.getZohoOAuthAppConfig();
      setZohoOAuthAppConfig(oauthConfig);
      // Check if actually configured (has valid client_id, not just "configured: true")
      const hasClientId =
        oauthConfig.client_id &&
        typeof oauthConfig.client_id === "string" &&
        oauthConfig.client_id.trim() !== "" &&
        oauthConfig.client_id !== "N/A";
      const isConfigured = Boolean(oauthConfig.configured && hasClientId);
      setZohoOAuthAppConfigured(isConfigured);
      return isConfigured;
    } catch {
      setZohoOAuthAppConfigured(false);
      setZohoOAuthAppConfig(null);
      return false;
    }
  }, []);

  const handleZohoOAuth = async () => {
    // Check if OAuth app is configured first
    const isConfigured = await checkZohoOAuthConfig();

    if (!isConfigured) {
      toast.error(
        t("integrations.configure_oauth_first")
      );
      return;
    }

    try {
      const response = await mcpApi.getZohoOAuthUrl(zohoRegion);
      if (response.auth_url) {
        // Redirect to Zoho authorization page
        window.location.href = response.auth_url;
      } else {
        throw new Error(t("integrations.no_auth_url"));
      }
    } catch (error) {
      console.error("Failed to initiate Zoho OAuth:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : t("integrations.failed_initiate_zoho");
      toast.error(errorMessage);
    }
  };

  const handleConfigureZohoOAuthApp = async () => {
    if (!credentials.client_id || !credentials.client_secret) {
      toast.error(t("integrations.enter_client_id_secret"));
      return;
    }

    try {
      setIsSaving(true);
      await mcpApi.configureZohoOAuthApp({
        client_id: credentials.client_id,
        client_secret: credentials.client_secret,
        redirect_uri: zohoOAuthAppConfig?.redirect_uri,
      });
      toast.success(t("integrations.zoho_app_configured"));
      await checkZohoOAuthConfig();
      // Clear client secret from input for security
      setCredentials({
        ...credentials,
        client_secret: "",
      });
    } catch (error) {
      console.error("Failed to configure Zoho OAuth app:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : t("integrations.failed_configure_zoho");
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  const loadConfig = useCallback(
    async (specificCrmType?: CRMType) => {
      try {
        setIsLoading(true);

        // If a specific CRM type is requested, check only that type
        const targetCrmType = specificCrmType || config.crm_type;

        // Load CRM config with masked credentials
        const crmConfig = await mcpApi.getCRMConfig();

        if (crmConfig.configured && crmConfig.crm_type) {
          const crmType = crmConfig.crm_type as CRMType;

          // Only set config if it matches the target type or no target specified
          if (!targetCrmType || crmType === targetCrmType) {
            // Check if this CRM is actually enabled before marking as connected
            const status = await mcpApi.getIntegrationStatus(crmType);
            const isActuallyEnabled = status.enabled && status.configured;

            setConfig({
              enabled: isActuallyEnabled,
              crm_type: crmType,
              api_key: "",
            });

            // Prefill credentials with masked values for editing
            if (crmConfig.credentials) {
              const creds = crmConfig.credentials;
              setCredentials({
                api_key: typeof creds.api_key === "string" ? creds.api_key : "",
                username:
                  typeof creds.username === "string" ? creds.username : "",
                password:
                  typeof creds.password === "string" ? creds.password : "",
                security_token:
                  typeof creds.security_token === "string"
                    ? creds.security_token
                    : "",
                domain:
                  typeof creds.domain === "string" ? creds.domain : "login",
                client_id:
                  typeof creds.client_id === "string" ? creds.client_id : "",
                client_secret:
                  typeof creds.client_secret === "string"
                    ? creds.client_secret
                    : "",
                refresh_token:
                  typeof creds.refresh_token === "string"
                    ? creds.refresh_token
                    : "",
                api_domain:
                  typeof creds.api_domain === "string"
                    ? creds.api_domain
                    : "https://www.zohoapis.com",
              });
            }

            // Check connection status after loading config
            await checkConnectionStatus(crmType);
          } else {
            // Different CRM type is configured, reset for the selected type
            setConfig({
              enabled: false,
              crm_type: targetCrmType,
              api_key: "",
              config: {},
            });
            await checkConnectionStatus(targetCrmType);
          }
        } else {
          // No CRM configured, check if we have a selected type
          if (targetCrmType) {
            setConfig({
              enabled: false,
              crm_type: targetCrmType,
              api_key: "",
              config: {},
            });
            await checkConnectionStatus(targetCrmType);
          } else {
            // Fallback to lead capture config if CRM config not available
            const leadConfig = await mcpApi.getLeadCaptureConfig();
            if (leadConfig.crm && leadConfig.crm.crm_type) {
              const crmType = leadConfig.crm.crm_type as CRMType;
              setConfig({
                enabled: leadConfig.crm.enabled || false,
                crm_type: crmType,
                api_key: "",
              });
              await checkConnectionStatus(crmType);
            }
          }
        }
      } catch (error) {
        console.error("Failed to load CRM config:", error);
        // On error, ensure we still check status for the current type
        const targetCrmType = specificCrmType || config.crm_type;
        if (targetCrmType) {
          await checkConnectionStatus(targetCrmType);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [config.crm_type, checkConnectionStatus]
  );

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  // Check Zoho OAuth app config when Zoho is selected
  useEffect(() => {
    if (config.crm_type === "zoho") {
      checkZohoOAuthConfig();
    } else {
      setZohoOAuthAppConfigured(false);
      setZohoOAuthAppConfig(null);
    }
  }, [config.crm_type, checkZohoOAuthConfig]);

  // Reset connection status and reload config when CRM type changes
  useEffect(() => {
    if (config.crm_type) {
      // Reset connection state when CRM type changes
      setIsConnected(false);
      setConnectionStatus({ configured: false, testSuccess: null });
      setIsEditing(false);

      // Small delay to ensure state is reset, then reload config
      const timer = setTimeout(() => {
        loadConfig(config.crm_type);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // No CRM type selected, reset everything
      setIsConnected(false);
      setConnectionStatus({ configured: false, testSuccess: null });
      setIsEditing(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.crm_type]); // Only depend on crm_type, not loadConfig to avoid loops

  // Handle OAuth callback - refresh status after Zoho OAuth success
  useEffect(() => {
    const success = searchParams?.get("success");
    const error = searchParams?.get("error");
    const zohoProcessedFlag = sessionStorage.getItem(
      "zoho_oauth_success_processed"
    );

    if (success === "zoho_connected" && !zohoProcessedFlag) {
      sessionStorage.setItem("zoho_oauth_success_processed", "true");
      toast.success(t("integrations.crm_saved"));

      // Refresh status with retries to ensure backend has processed
      const retryDelays = [1000, 2000, 4000];
      retryDelays.forEach((delay) => {
        setTimeout(() => {
          if (config.crm_type === "zoho") {
            checkConnectionStatus("zoho");
            loadConfig("zoho");
          }
        }, delay);
      });
    } else if (error === "zoho_connection_failed" && !zohoProcessedFlag) {
      sessionStorage.setItem("zoho_oauth_success_processed", "true");
      toast.error("Failed to connect Zoho CRM. Please try again.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSave = async () => {
    if (!config.crm_type) {
      toast.error(t("integrations.select_crm_first"));
      return;
    }

    // Validate credentials based on CRM type
    if (config.crm_type === "hubspot" && !credentials.api_key) {
      toast.error(t("integrations.enter_hubspot_key"));
      return;
    }
    if (config.crm_type === "pipedrive" && !credentials.api_key) {
      toast.error(t("integrations.enter_pipedrive_token"));
      return;
    }
    if (config.crm_type === "salesforce") {
      if (
        !credentials.username ||
        !credentials.password ||
        !credentials.security_token
      ) {
        toast.error(t("integrations.enter_salesforce_creds"));
        return;
      }
    }
    // For Zoho, we support both OAuth and manual setup
    // OAuth is preferred, but manual setup is still supported
    if (config.crm_type === "zoho") {
      // Check if using OAuth (no manual credentials needed)
      const hasOAuthCredentials = await checkZohoOAuthConfig();
      if (!hasOAuthCredentials) {
        // Fall back to manual setup validation
        if (
          !credentials.client_id ||
          !credentials.client_secret ||
          !credentials.refresh_token
        ) {
          toast.error(
            t("integrations.connect_zoho_error")
          );
          return;
        }
      }
    }

    try {
      setIsSaving(true);

      // Build config object based on CRM type
      const configToSave: CRMConfig = {
        enabled: true,
        crm_type: config.crm_type,
      };

      if (config.crm_type === "hubspot" || config.crm_type === "pipedrive") {
        configToSave.api_key = credentials.api_key;
      } else if (config.crm_type === "salesforce") {
        configToSave.config = {
          username: credentials.username,
          password: credentials.password,
          security_token: credentials.security_token,
          domain: credentials.domain || "login",
        };
      } else if (config.crm_type === "zoho") {
        // Zoho uses OAuth only - no manual config needed
        // The OAuth flow handles credential storage
        configToSave.config = {};
      }

      const success = await mcpApi.configureCRM(configToSave);
      if (success) {
        toast.success(t("integrations.crm_saved"));
        setIsEditing(false);
        setIsConnected(true);
        setConnectionStatus({ configured: true, testSuccess: null });
        // Reload config to get masked values
        await loadConfig();
        await checkConnectionStatus();
      } else {
        toast.error(t("integrations.sheets_config_failed"));
      }
    } catch (error) {
      console.error("Failed to save CRM config:", error);
      toast.error(t("integrations.sheets_config_failed"));
    } finally {
      setIsSaving(false);
    }
  };

  const handleTest = async () => {
    if (!config.crm_type) {
      toast.error(t("integrations.select_crm_first"));
      return;
    }

    // For Zoho, check if OAuth authorization is needed
    if (config.crm_type === "zoho") {
      const isOAuthConfigured = await checkZohoOAuthConfig();
      if (!isOAuthConfigured) {
        toast.error(t("integrations.zoho_oauth_creds_missing"));
        return;
      }

      // Check if user has completed OAuth authorization (has refresh_token)
      const status = await mcpApi.getIntegrationStatus("zoho");
      if (!status.configured) {
        toast.error(
          t("integrations.complete_oauth_first"),
          { duration: 5000 }
        );
        // Reset connection status
        setIsConnected(false);
        setConnectionStatus({ configured: false, testSuccess: null });
        return;
      }
    }

    try {
      setIsTesting(true);
      const success = await mcpApi.testCRMConnection(config.crm_type!);
      setConnectionStatus({
        configured: isConnected,
        testSuccess: success,
      });
      if (success) {
        toast.success(t("integrations.connection_test_success"));
        setIsConnected(true);
      } else {
        toast.error(t("integrations.connection_test_failed_toast"));
      }
    } catch (error) {
      console.error("Failed to test CRM connection:", error);
      const errorMessage =
        error instanceof Error ? error.message : t("integrations.connection_test_failed");

      // Provide helpful error message for Zoho OAuth
      if (config.crm_type === "zoho") {
        if (
          errorMessage.includes("refresh_token") ||
          errorMessage.includes("invalid") ||
          errorMessage.includes("expired")
        ) {
          toast.error(
            t("integrations.zoho_expired"),
            { duration: 6000 }
          );
          // Reset connection status since token is invalid
          setIsConnected(false);
          setConnectionStatus({ configured: false, testSuccess: false });
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error(errorMessage);
      }

      setConnectionStatus({
        configured: isConnected,
        testSuccess: false,
      });
    } finally {
      setIsTesting(false);
    }
  };

  const handleDisconnect = async () => {
    if (!config.crm_type) {
      toast.error(t("integrations.select_crm_first"));
      return;
    }

    if (!confirm(t("integrations.confirm_disconnect"))) {
      return;
    }

    try {
      const crmTypeToDisconnect = config.crm_type;

      // Immediately reset UI state to prevent stale display
      setIsConnected(false);
      setConnectionStatus({ configured: false, testSuccess: null });
      setIsEditing(false);

      // Disable the integration in backend
      await mcpApi.toggleIntegration(crmTypeToDisconnect, false);

      // Reset credentials
      setCredentials({
        api_key: "",
        username: "",
        password: "",
        security_token: "",
        domain: "login",
        client_id: "",
        client_secret: "",
        refresh_token: "",
        api_domain: "https://www.zohoapis.com",
      });

      // Keep the CRM type but mark as not enabled
      setConfig({
        enabled: false,
        crm_type: crmTypeToDisconnect,
        api_key: "",
        config: {},
      });

      // Wait a bit for backend to process, then re-check status
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Force a fresh status check
      const freshStatus = await mcpApi.getIntegrationStatus(
        crmTypeToDisconnect
      );
      const isActuallyConnected = freshStatus.configured && freshStatus.enabled;

      // Update state based on fresh check
      setIsConnected(isActuallyConnected);
      setConnectionStatus({
        configured: isActuallyConnected,
        testSuccess: isActuallyConnected ? true : null,
      });

      // Reload config to get fresh data
      await loadConfig(crmTypeToDisconnect);

      toast.success(t("integrations.disconnected"));
    } catch (error) {
      console.error("Failed to disconnect CRM:", error);
      toast.error(t("integrations.failed_disconnect"));
      // Even on error, reset local state
      setIsConnected(false);
      setConnectionStatus({ configured: false, testSuccess: null });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        {t("common.loading")}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-purple-600" />
          <Label className="text-base font-semibold">{t("integrations.crm_integration")}</Label>
        </div>
        {config.crm_type && (
          <div className="flex items-center gap-2">
            {isConnected ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  {t("integrations.connected")}
                </Badge>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-gray-400" />
                <Badge variant="outline" className="bg-gray-50 text-gray-600">
                  {t("integrations.not_connected")}
                </Badge>
              </>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="crm_type">{t("integrations.crm_type")}</Label>
          <Select
            value={config.crm_type || ""}
            onValueChange={(value) => {
              const newCrmType = value as CRMType;
              // Reset all state when CRM type changes
              setConfig({
                enabled: false,
                crm_type: newCrmType,
                api_key: "",
                config: {},
              });
              // Reset credentials when CRM type changes
              setCredentials({
                api_key: "",
                username: "",
                password: "",
                security_token: "",
                domain: "login",
                client_id: "",
                client_secret: "",
                refresh_token: "",
                api_domain: "https://www.zohoapis.com",
              });
              // Reset connection status
              setIsConnected(false);
              setConnectionStatus({ configured: false, testSuccess: null });
              setIsEditing(false);
            }}
          >
            <SelectTrigger id="crm_type">
              <SelectValue placeholder={t("integrations.select_crm")} />
            </SelectTrigger>
            <SelectContent>
              {CRM_TYPES.map((crm) => (
                <SelectItem key={crm.value} value={crm.value}>
                  {crm.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isConnected && !isEditing && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {config.crm_type === "zoho" && "Zoho CRM"}
                    {config.crm_type === "hubspot" && "HubSpot"}
                    {config.crm_type === "salesforce" && "Salesforce"}
                    {config.crm_type === "pipedrive" && "Pipedrive"} {t("integrations.is_connected")}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    {t("integrations.crm_active_desc")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit2 className="h-3 w-3 mr-1" />
                    {t("integrations.edit")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDisconnect}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-3 w-3 mr-1" />
                    {t("integrations.disconnect")}
                  </Button>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {config.crm_type && (!isConnected || isEditing) && (
          <div className="space-y-4">
            {isConnected && isEditing && (
              <Alert>
                <AlertDescription>
                  <p className="text-sm text-muted-foreground">
                    {t("integrations.editing_credentials_desc")}
                  </p>
                </AlertDescription>
              </Alert>
            )}
            <Alert>
              <AlertDescription>
                {config.crm_type === "hubspot" && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      HubSpot {t("integrations.setup_instructions")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("integrations.hubspot_instructions")}
                    </p>
                  </div>
                )}
                {config.crm_type === "salesforce" && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      Salesforce {t("integrations.setup_instructions")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("integrations.salesforce_instructions")}
                    </p>
                  </div>
                )}
                {config.crm_type === "pipedrive" && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      Pipedrive {t("integrations.setup_instructions")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("integrations.pipedrive_instructions")}
                    </p>
                  </div>
                )}
                {config.crm_type === "zoho" && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      Zoho CRM {t("integrations.setup_instructions")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("integrations.zoho_instructions")}
                    </p>
                  </div>
                )}
              </AlertDescription>
            </Alert>

            {/* HubSpot Credentials */}
            {config.crm_type === "hubspot" && (
              <div className="space-y-2">
                <Label htmlFor="hubspot_api_key">{t("integrations.api_key")}</Label>
                <Input
                  id="hubspot_api_key"
                  type="password"
                  placeholder="pat-na1-xxxxx"
                  value={credentials.api_key}
                  onChange={(e) =>
                    setCredentials({ ...credentials, api_key: e.target.value })
                  }
                />
              </div>
            )}

            {/* Salesforce Credentials */}
            {config.crm_type === "salesforce" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="salesforce_username">{t("integrations.username")}</Label>
                  <Input
                    id="salesforce_username"
                    type="text"
                    placeholder="your-email@example.com"
                    value={credentials.username}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salesforce_password">{t("integrations.password")}</Label>
                  <Input
                    id="salesforce_password"
                    type="password"
                    placeholder="Your Salesforce password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salesforce_security_token">
                    {t("integrations.security_token")}
                  </Label>
                  <Input
                    id="salesforce_security_token"
                    type="password"
                    placeholder="Your security token"
                    value={credentials.security_token}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        security_token: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salesforce_domain">{t("integrations.domain")}</Label>
                  <Select
                    value={credentials.domain}
                    onValueChange={(value) =>
                      setCredentials({ ...credentials, domain: value })
                    }
                  >
                    <SelectTrigger id="salesforce_domain">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="login">
                        Production (login.salesforce.com)
                      </SelectItem>
                      <SelectItem value="test">
                        Sandbox (test.salesforce.com)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Pipedrive Credentials */}
            {config.crm_type === "pipedrive" && (
              <div className="space-y-2">
                <Label htmlFor="pipedrive_api_token">{t("integrations.api_token")}</Label>
                <Input
                  id="pipedrive_api_token"
                  type="password"
                  placeholder="Your Pipedrive API token"
                  value={credentials.api_key}
                  onChange={(e) =>
                    setCredentials({ ...credentials, api_key: e.target.value })
                  }
                />
              </div>
            )}

            {/* Zoho CRM - OAuth Flow (Preferred) */}
            {config.crm_type === "zoho" && (
              <div className="space-y-4">
                {/* OAuth App Configuration Section */}
                {!zohoOAuthAppConfigured && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      <div className="space-y-3">
                        <p className="font-medium">
                          {t("integrations.zoho_oauth_not_configured")}
                        </p>
                        <p className="text-sm">
                          {t("integrations.zoho_configure_desc")}{" "}
                          <a
                            href="https://api-console.zoho.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {t("integrations.zoho_developer_console")}
                          </a>
                          .
                        </p>
                        <div className="space-y-2 pt-2">
                          <div className="space-y-2">
                            <Label htmlFor="zoho_oauth_client_id">
                              {t("integrations.oauth_client_id")}
                            </Label>
                            <Input
                              id="zoho_oauth_client_id"
                              type="text"
                              placeholder="1000.xxxxx"
                              value={credentials.client_id}
                              onChange={(e) =>
                                setCredentials({
                                  ...credentials,
                                  client_id: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zoho_oauth_client_secret">
                              {t("integrations.oauth_client_secret")}
                            </Label>
                            <Input
                              id="zoho_oauth_client_secret"
                              type="password"
                              placeholder="Your client secret"
                              value={credentials.client_secret}
                              onChange={(e) =>
                                setCredentials({
                                  ...credentials,
                                  client_secret: e.target.value,
                                })
                              }
                            />
                          </div>
                          <Button
                            onClick={handleConfigureZohoOAuthApp}
                            disabled={isSaving}
                            className="w-full"
                          >
                            {isSaving ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                {t("integrations.configuring")}
                              </>
                            ) : (
                              t("integrations.configure_oauth_app")
                            )}
                          </Button>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                {zohoOAuthAppConfigured && (
                  <>
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <p className="font-medium">{t("integrations.zoho_oauth_configured")}</p>
                        {zohoOAuthAppConfig?.client_id &&
                          zohoOAuthAppConfig.client_id !== "N/A" && (
                            <p className="text-sm text-green-700">
                              {t("integrations.client_id")} {zohoOAuthAppConfig.client_id}
                            </p>
                          )}
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-2">
                      <Label>{t("integrations.zoho_region")}</Label>
                      <Select value={zohoRegion} onValueChange={setZohoRegion}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("integrations.select_region")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="com">{t("integrations.region_us")}</SelectItem>
                          <SelectItem value="in">{t("integrations.region_in")}</SelectItem>
                          <SelectItem value="eu">{t("integrations.region_eu")}</SelectItem>
                          <SelectItem value="com.au">{t("integrations.region_au")}</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        {t("integrations.region_hint")}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Button
                        onClick={handleZohoOAuth}
                        className="w-full"
                        variant="default"
                      >
                        <Database className="h-4 w-4 mr-2" />
                        {t("integrations.connect_zoho")}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        {t("integrations.connect_zoho_hint")}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {(!isConnected || isEditing) && (
          <div className="flex gap-2">
            <Button
              onClick={handleTest}
              disabled={!config.crm_type || isTesting}
              variant="outline"
              className="flex-1"
            >
              {isTesting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("integrations.testing")}
                </>
              ) : (
                <>
                  <TestTube className="mr-2 h-4 w-4" />
                  {t("integrations.test_connection")}
                </>
              )}
            </Button>
            <Button onClick={handleSave} disabled={isSaving} className="flex-1">
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("common.saving")}
                </>
              ) : (
                t("integrations.save_configuration")
              )}
            </Button>
            {isEditing && (
              <Button
                variant="outline"
                onClick={async () => {
                  setIsEditing(false);
                  // Reload config to reset to masked values
                  await loadConfig();
                }}
              >
                {t("common.cancel")}
              </Button>
            )}
          </div>
        )}

        {connectionStatus.testSuccess === false && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>
              {t("integrations.connection_test_failed")}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
