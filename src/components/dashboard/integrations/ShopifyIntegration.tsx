"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { mcpApi } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
} from "lucide-react";

export default function ShopifyIntegration() {
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

  useEffect(() => {
    loadConfig();

    // Check for OAuth callback result
    const shopifyStatus = searchParams.get("shopify");
    if (shopifyStatus === "connected") {
      toast.success("Shopify store connected successfully!");
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

  const handleSaveAppCredentials = async () => {
    if (!clientId || !clientSecret) {
      toast.error("Please enter both Client ID and Client Secret");
      return;
    }

    try {
      setIsSavingCredentials(true);
      const result = await mcpApi.saveShopifyAppCredentials(
        clientId,
        clientSecret,
      );

      if (result.success) {
        toast.success("Shopify app credentials saved");
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
      toast.error("Please enter your Shopify store name");
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
      toast.error("Failed to connect Shopify store");
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      setIsDisconnecting(true);
      const result = await mcpApi.disconnectShopify();

      if (result.success) {
        toast.success("Shopify store disconnected");
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
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <ShoppingCart className="h-5 w-5 text-green-600" />
        <Label className="text-base font-semibold">Shopify Integration</Label>
      </div>

      {isConnected ? (
        // Connected State
        <div className="space-y-4">
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Connected to Shopify</p>
                  <p className="text-sm">{connectedShop}</p>
                </div>
              </div>
            </AlertDescription>
          </Alert>

          <div className="text-sm text-muted-foreground">
            <p>Your chatbot can now:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Show live product information and prices</li>
              <li>Check order status for customers</li>
              <li>Display inventory availability</li>
            </ul>
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
                Disconnecting...
              </>
            ) : (
              <>
                <XCircle className="mr-2 h-4 w-4" />
                Disconnect Shopify
              </>
            )}
          </Button>
        </div>
      ) : (
        // Not Connected State
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Connect your Shopify store to enable live product data, pricing, and
            order tracking in your chatbot.
          </p>

          {/* Step 1: App Credentials Configuration */}
          {!hasAppCredentials || showAppConfig ? (
            <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                <Label className="font-medium">
                  Step 1: Configure Shopify App
                </Label>
              </div>

              <p className="text-xs text-muted-foreground">
                Create a custom app in your Shopify store and enter the
                credentials below. Go to Shopify Admin → Settings → Apps →
                Develop apps → Create an app.
              </p>

              <div className="space-y-2">
                <Label htmlFor="client_id">Client ID</Label>
                <Input
                  id="client_id"
                  placeholder="Your Shopify app Client ID"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client_secret">Client Secret</Label>
                <Input
                  id="client_secret"
                  type="password"
                  placeholder="Your Shopify app Client Secret"
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
                    Saving...
                  </>
                ) : (
                  <>
                    <Settings className="mr-2 h-4 w-4" />
                    Save App Credentials
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
                      Step 1: App Configured
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
                  <Label htmlFor="shop_name">Step 2: Enter Store Name</Label>
                  <Input
                    id="shop_name"
                    placeholder="your-store (without .myshopify.com)"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter your store name from your-store.myshopify.com
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
                      Connecting...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Connect with Shopify
                    </>
                  )}
                </Button>
              </div>
            </>
          )}

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              You&apos;ll be redirected to Shopify to authorize the connection.
              Your credentials are encrypted and stored securely.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
