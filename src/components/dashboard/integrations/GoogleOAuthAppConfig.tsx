"use client";

import { useState, useEffect, useRef } from "react";
import { mcpApi } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  Settings,
  CheckCircle2,
  Loader2,
  Info,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GoogleOAuthAppConfig {
  configured: boolean;
  client_id?: string;
  redirect_uri?: string;
}

export default function GoogleOAuthAppConfig() {
  const [config, setConfig] = useState<GoogleOAuthAppConfig>({
    configured: false,
  });
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  // Determine default redirect URI based on environment
  const getDefaultRedirectUri = () => {
    if (typeof window !== 'undefined') {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (apiUrl && !apiUrl.includes('localhost')) {
        return `${apiUrl}/api/auth/google/callback`;
      }
    }
    return "http://localhost:8001/api/auth/google/callback";
  };

  const [redirectUri, setRedirectUri] = useState(getDefaultRedirectUri());
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Only load if we haven't loaded yet (prevents reload on revisit)
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      loadConfig();
    }
  }, []);

  const loadConfig = async () => {
    try {
      setIsLoading(true);
      const appConfig = await mcpApi.getGoogleOAuthAppConfig();
      setConfig(appConfig);

      // CRITICAL FIX: Populate form fields from loaded config
      if (appConfig.client_id) {
        setClientId(appConfig.client_id);
      }
      if (appConfig.redirect_uri) {
        setRedirectUri(appConfig.redirect_uri);
      } else {
        // Use production default if no stored redirect_uri
        setRedirectUri(getDefaultRedirectUri());
      }
    } catch (error) {
      console.error("Failed to load Google OAuth app config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    // When already configured, only require client_id and secret if they're being changed
    if (!config.configured) {
      if (!clientId || !clientSecret) {
        toast.error("Please enter both Client ID and Client Secret");
        return;
      }
    }

    try {
      setIsSaving(true);

      // Build the config object - only include fields that are set
      const configToSave: {
        client_id?: string;
        client_secret?: string;
        redirect_uri?: string;
      } = {
        redirect_uri: redirectUri,
      };

      // Only include client credentials if they're provided
      if (clientId && !clientId.includes("...")) {
        configToSave.client_id = clientId;
      }
      if (clientSecret) {
        configToSave.client_secret = clientSecret;
      }

      // For new configurations, both are required
      if (!config.configured && (!configToSave.client_id || !configToSave.client_secret)) {
        toast.error("Please enter both Client ID and Client Secret");
        setIsSaving(false);
        return;
      }

      await mcpApi.configureGoogleOAuthApp(configToSave as {
        client_id: string;
        client_secret: string;
        redirect_uri?: string;
      });
      toast.success("Google OAuth app configured successfully!");
      await loadConfig();
      // Clear sensitive fields
      setClientSecret("");
    } catch (error: unknown) {
      console.error("Failed to save Google OAuth app config:", error);
      const errorObj = error as { message?: string };
      const errorMessage =
        errorObj?.message || "Failed to configure Google OAuth app";
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateRedirectUri = async () => {
    try {
      setIsSaving(true);
      // Call a dedicated endpoint to update just the redirect URI
      await mcpApi.configureGoogleOAuthApp({
        client_id: "", // Backend should handle empty values as "don't update"
        client_secret: "",
        redirect_uri: redirectUri,
      });
      toast.success("Redirect URI updated successfully!");
      await loadConfig();
    } catch (error: unknown) {
      console.error("Failed to update redirect URI:", error);
      const errorObj = error as { message?: string };
      const errorMessage = errorObj?.message || "Failed to update redirect URI";
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading configuration...
      </div>
    );
  }

  return (
    <Card className="border-t-2 border-t-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-blue-600" />
          Google OAuth App Configuration
        </CardTitle>
        <CardDescription>
          Configure your own Google OAuth app for complete tenant isolation.
          Each tenant can use their own Google Cloud project.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {config.configured && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your tenant-specific Google OAuth app is configured. You can now
              connect your Google account.
            </AlertDescription>
          </Alert>
        )}

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>How to get your credentials:</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
              <li>
                Go to{" "}
                <a
                  href="https://console.cloud.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Google Cloud Console
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>Create or select a project</li>
              <li>Enable Calendar API and Sheets API</li>
              <li>Create OAuth 2.0 Client ID (Web application)</li>
              <li>Add redirect URI: {redirectUri}</li>
              <li>Copy Client ID and Client Secret</li>
            </ol>
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="client_id">Google Client ID *</Label>
            <Input
              id="client_id"
              type="text"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="123456789-abc...apps.googleusercontent.com"
              disabled={isSaving}
            />
            <p className="text-xs text-muted-foreground">
              Your Google OAuth 2.0 Client ID from Google Cloud Console
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="client_secret">Google Client Secret *</Label>
            <Input
              id="client_secret"
              type="password"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder="GOCSPX-abc123..."
              disabled={isSaving}
            />
            <p className="text-xs text-muted-foreground">
              Your Google OAuth 2.0 Client Secret (will be encrypted)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="redirect_uri">Redirect URI</Label>
            <Input
              id="redirect_uri"
              type="text"
              value={redirectUri}
              onChange={(e) => setRedirectUri(e.target.value)}
              placeholder="http://localhost:8000/api/auth/google/callback"
              disabled={isSaving}
            />
            <p className="text-xs text-muted-foreground">
              Must match the redirect URI configured in Google Cloud Console
            </p>
          </div>

          <Button
            onClick={handleSave}
            disabled={isSaving || (!config.configured && (!clientId || !clientSecret))}
            className="w-full"
          >
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : config.configured ? (
              "Update Full Configuration"
            ) : (
              "Save Configuration"
            )}
          </Button>

          {config.configured && (
            <Button
              onClick={handleUpdateRedirectUri}
              disabled={isSaving}
              variant="outline"
              className="w-full"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Redirect URI Only"
              )}
            </Button>
          )}

          {config.configured && (
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                <strong>Status:</strong> Configured
                {config.client_id && (
                  <span className="ml-2 text-xs">
                    (Client ID: {config.client_id})
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
