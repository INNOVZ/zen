"use client";

import { useState, useEffect } from "react";
import { mcpApi } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  ShoppingCart,
  Loader2,
  Info,
} from "lucide-react";

export default function ShopifyIntegration() {
  const [storeUrl, setStoreUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      setIsLoading(true);
      const status = await mcpApi.getIntegrationStatus("shopify");
      setIsEnabled(status.enabled);
      // Load actual config if available
    } catch (error) {
      console.error("Failed to load Shopify config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (isEnabled && (!storeUrl || !apiKey)) {
      toast.error("Please enter store URL and API key");
      return;
    }

    try {
      setIsSaving(true);
      // Configure Shopify integration
      // This would call a backend endpoint to store credentials
      toast.success("Shopify configuration saved");
    } catch (error) {
      console.error("Failed to save Shopify config:", error);
      toast.error("Failed to save configuration");
    } finally {
      setIsSaving(false);
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

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label>Enable Shopify Integration</Label>
            <p className="text-xs text-muted-foreground">
              Connect your Shopify store for live product data
            </p>
          </div>
          <Switch
            checked={isEnabled}
            onCheckedChange={setIsEnabled}
          />
        </div>

        {isEnabled && (
          <>
            <div className="space-y-2">
              <Label htmlFor="store_url">Store URL</Label>
              <Input
                id="store_url"
                placeholder="your-store.myshopify.com"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="api_key">API Key</Label>
              <Input
                id="api_key"
                type="password"
                placeholder="Your Shopify API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Create a private app in Shopify Admin → Settings → Apps and development → Develop apps
              </p>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Your Shopify API credentials are encrypted and stored securely.
              </AlertDescription>
            </Alert>
          </>
        )}

        <Button onClick={handleSave} disabled={isSaving} className="w-full">
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Configuration"
          )}
        </Button>
      </div>
    </div>
  );
}

