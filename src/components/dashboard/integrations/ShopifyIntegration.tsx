"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { mcpApi } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  ShoppingCart,
  Loader2,
  Info,
  CheckCircle,
  XCircle,
  ExternalLink,
  Settings,
  Key,
  Package,
} from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

interface ShopifyCollection {
  id: string | number;
  title: string;
  handle: string;
  type: string;
  products_count?: number;
  url: string;
  image?: string | null;
}

export default function ShopifyIntegration() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [shopName, setShopName] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [connectedShop, setConnectedShop] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  // App credentials state (multi-tenant)
  const [showAppConfig, setShowAppConfig] = useState(false);
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [hasAppCredentials, setHasAppCredentials] = useState(false);
  const [isSavingCredentials, setIsSavingCredentials] = useState(false);

  // CTA Settings state
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [isLoadingCollections, setIsLoadingCollections] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    string | null
  >(null);
  const [selectedCollectionTitle, setSelectedCollectionTitle] = useState<
    string | null
  >(null);
  const [orderLookupEnabled, setOrderLookupEnabled] = useState(false);
  const [isSavingCtaSettings, setIsSavingCtaSettings] = useState(false);

  useEffect(() => {
    loadConfig();

    // Check for OAuth callback result
    const shopifyStatus = searchParams.get("shopify");
    if (shopifyStatus === "connected") {
      toast.success(t("integrations.shopify_connected_toast"));
      loadConfig();
    } else if (shopifyStatus === "error") {
      const message =
        searchParams.get("message") || "Failed to connect Shopify";
      toast.error(message);
    }
  }, [searchParams]);

  const loadConfig = async () => {
    try {
      setIsLoading(true);

      // Check app credentials first
      const appCreds = await mcpApi.getShopifyAppCredentials();
      setHasAppCredentials(appCreds.configured || false);

      // Then check store connection
      const config = await mcpApi.getShopifyConfig();
      if (config.success && config.configured && config.enabled) {
        setIsConnected(true);
        setConnectedShop(config.store_url || "");
        // Load CTA settings and collections when connected
        await loadCtaSettings();
        await loadCollections();
      } else {
        setIsConnected(false);
        setConnectedShop("");
      }
    } catch (error) {
      console.error("Failed to load Shopify config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCollections = async () => {
    try {
      setIsLoadingCollections(true);
      console.log("Loading Shopify collections...");
      const result = await mcpApi.getShopifyCollections();
      console.log("Collections API result:", result);
      if (result.success && result.collections) {
        setCollections(result.collections);
        console.log("Collections loaded:", result.collections.length);
      } else {
        console.warn("Failed to load collections:", result.error);
        toast.error(
          "Failed to load collections: " + (result.error || "Unknown error"),
        );
      }
    } catch (error) {
      console.error("Failed to load collections:", error);
      toast.error("Failed to load collections");
    } finally {
      setIsLoadingCollections(false);
    }
  };

  const loadCtaSettings = async () => {
    try {
      const result = await mcpApi.getShopifyCtaSettings();
      if (result.success) {
        setSelectedCollectionId(result.cta_collection_id || null);
        setSelectedCollectionTitle(result.cta_collection_title || null);
        setOrderLookupEnabled(result.cta_order_lookup_enabled || false);
      }
    } catch (error) {
      console.error("Failed to load CTA settings:", error);
    }
  };

  const handleSaveCtaSettings = async () => {
    try {
      setIsSavingCtaSettings(true);
      const result = await mcpApi.saveShopifyCtaSettings({
        collection_id: selectedCollectionId,
        collection_title: selectedCollectionTitle,
        order_lookup_enabled: orderLookupEnabled,
      });

      if (result.success) {
        toast.success(t("integrations.cta_settings_saved"));
      } else {
        toast.error(result.message || "Failed to save settings");
      }
    } catch (error) {
      console.error("Failed to save CTA settings:", error);
      toast.error("Failed to save CTA settings");
    } finally {
      setIsSavingCtaSettings(false);
    }
  };

  const handleCollectionChange = (value: string) => {
    if (value === "all") {
      setSelectedCollectionId(null);
      setSelectedCollectionTitle(null);
    } else {
      const collection = collections.find((c) => String(c.id) === value);
      if (collection) {
        setSelectedCollectionId(String(collection.id));
        setSelectedCollectionTitle(collection.title);
      }
    }
  };

  const handleSaveAppCredentials = async () => {
    if (!clientId || !clientSecret) {
      toast.error(t("integrations.enter_both_creds"));
      return;
    }

    try {
      setIsSavingCredentials(true);
      const result = await mcpApi.saveShopifyAppCredentials(
        clientId,
        clientSecret,
      );

      if (result.success) {
        toast.success(t("integrations.shopify_creds_saved"));
        setHasAppCredentials(true);
        setShowAppConfig(false);
        setClientId("");
        setClientSecret("");
      } else {
        toast.error(result.message || "Failed to save credentials");
      }
    } catch (error) {
      console.error("Failed to save app credentials:", error);
      toast.error("Failed to save credentials");
    } finally {
      setIsSavingCredentials(false);
    }
  };

  const handleConnect = async () => {
    if (!shopName) {
      toast.error(t("integrations.enter_store_name"));
      return;
    }

    try {
      setIsConnecting(true);
      const result = await mcpApi.initShopifyOAuth(shopName);

      if (result.success && result.auth_url) {
        // Redirect to Shopify OAuth
        window.location.href = result.auth_url;
      } else {
        toast.error(result.message || "Failed to start Shopify connection");
      }
    } catch (error) {
      console.error("Failed to connect Shopify:", error);
      toast.error(t("integrations.shopify_connect_fail"));
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      setIsDisconnecting(true);
      const result = await mcpApi.disconnectShopify();

      if (result.success) {
        toast.success(t("integrations.shopify_disconnected"));
        setIsConnected(false);
        setConnectedShop("");
        setShopName("");
      } else {
        toast.error(result.message || "Failed to disconnect");
      }
    } catch (error) {
      console.error("Failed to disconnect Shopify:", error);
      toast.error("Failed to disconnect Shopify store");
    } finally {
      setIsDisconnecting(false);
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
      <div className="flex items-center gap-2">
        <ShoppingCart className="h-5 w-5 text-green-600" />
        <Label className="text-base font-semibold">{t("integrations.shopify_integration")}</Label>
      </div>

      {isConnected ? (
        // Connected State
        <div className="space-y-4">
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{t("integrations.shopify_connected_desc")}</p>
                  <p className="text-sm">{connectedShop}</p>
                </div>
              </div>
            </AlertDescription>
          </Alert>

          <div className="text-sm text-muted-foreground">
            <p>{t("integrations.shopify_capabilities")}</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>{t("integrations.shopify_cap_1")}</li>
              <li>{t("integrations.shopify_cap_2")}</li>
              <li>{t("integrations.shopify_cap_3")}</li>
            </ul>
          </div>

          {/* CTA Button Settings */}
          <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <Label className="font-medium">{t("integrations.shopify_button_settings")}</Label>
            </div>

            <p className="text-xs text-muted-foreground">
              {t("integrations.shopify_button_settings_desc")}
            </p>

            {/* Collection Selector */}
            <div className="space-y-2">
              <Label htmlFor="collection_select">{t("integrations.product_collection_cta")}</Label>
              <Select
                value={selectedCollectionId || "all"}
                onValueChange={handleCollectionChange}
                disabled={isLoadingCollections}
              >
                <SelectTrigger id="collection_select">
                  <SelectValue placeholder={t("integrations.select_collection")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("integrations.all_products")}</SelectItem>
                  {collections.map((collection) => (
                    <SelectItem
                      key={collection.id}
                      value={String(collection.id)}
                    >
                      🛍️ {collection.title}
                      {collection.products_count !== undefined && (
                        <span className="text-muted-foreground ml-1">
                          ({collection.products_count})
                        </span>
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {t("integrations.collection_hint")}
              </p>
            </div>

            {/* Order Lookup Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="order_lookup">{t("integrations.order_tracking_btn")}</Label>
                <p className="text-xs text-muted-foreground">
                  {t("integrations.order_tracking_hint")}
                </p>
              </div>
              <Switch
                id="order_lookup"
                checked={orderLookupEnabled}
                onCheckedChange={setOrderLookupEnabled}
              />
            </div>

            <Button
              onClick={handleSaveCtaSettings}
              disabled={isSavingCtaSettings}
              className="w-full"
            >
              {isSavingCtaSettings ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("common.saving")}
                </>
              ) : (
                <>
                  <Settings className="mr-2 h-4 w-4" />
                  {t("integrations.save_button_settings")}
                </>
              )}
            </Button>
          </div>

          <Button
            variant="destructive"
            onClick={handleDisconnect}
            disabled={isDisconnecting}
            className="w-full"
          >
            {isDisconnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("integrations.disconnecting")}
              </>
            ) : (
              <>
                <XCircle className="mr-2 h-4 w-4" />
                {t("integrations.disconnect_shopify")}
              </>
            )}
          </Button>
        </div>
      ) : (
        // Not Connected State
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {t("integrations.shopify_connect_desc")}
          </p>

          {/* Step 1: App Credentials Configuration */}
          {!hasAppCredentials || showAppConfig ? (
            <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                <Label className="font-medium">
                  {t("integrations.step_1_config")}
                </Label>
              </div>

              <p className="text-xs text-muted-foreground">
                {t("integrations.step_1_desc")}
              </p>

              <div className="space-y-2">
                <Label htmlFor="client_id">{t("integrations.shopify_client_id")}</Label>
                <Input
                  id="client_id"
                  placeholder={t("integrations.shopify_client_id_placeholder")}
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client_secret">{t("integrations.shopify_client_secret")}</Label>
                <Input
                  id="client_secret"
                  type="password"
                  placeholder={t("integrations.shopify_client_secret_placeholder")}
                  value={clientSecret}
                  onChange={(e) => setClientSecret(e.target.value)}
                />
              </div>

              <Button
                onClick={handleSaveAppCredentials}
                disabled={isSavingCredentials || !clientId || !clientSecret}
                className="w-full"
              >
                {isSavingCredentials ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("common.saving")}
                  </>
                ) : (
                  <>
                    <Settings className="mr-2 h-4 w-4" />
                    {t("integrations.save_app_creds")}
                  </>
                )}
              </Button>
            </div>
          ) : (
            <>
              {/* Step 2: Connect Store */}
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <Label className="font-medium">
                      {t("integrations.step_1_configured")}
                    </Label>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAppConfig(true)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shop_name">{t("integrations.step_2_store")}</Label>
                  <Input
                    id="shop_name"
                    placeholder={t("integrations.step_2_placeholder")}
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    {t("integrations.step_2_hint")}
                  </p>
                </div>

                <Button
                  onClick={handleConnect}
                  disabled={isConnecting || !shopName}
                  className="w-full"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("integrations.connecting")}
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("integrations.connect_shopify")}
                    </>
                  )}
                </Button>
              </div>
            </>
          )}

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              {t("integrations.shopify_redirect_info")}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
