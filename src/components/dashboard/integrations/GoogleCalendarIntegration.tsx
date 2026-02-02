"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { mcpApi } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  Calendar,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";
import GoogleOAuthAppConfig from "./GoogleOAuthAppConfig";
import CalendarSettings from "./CalendarSettings";
import { useTranslation } from "@/contexts/I18nContext";

export default function GoogleCalendarIntegration() {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const searchParams = useSearchParams();
  const hasLoaded = useRef(false);

  const checkAuthStatus = useCallback(async () => {
    try {
      // Only show loading on first check, not on refreshes
      if (!hasLoaded.current) {
        setIsLoading(true);
      }
      console.log("🔍 Checking Google Calendar connection status...");
      const status = await mcpApi.getIntegrationStatus("google");
      console.log("📊 Google Calendar status:", {
        provider: status.provider,
        enabled: status.enabled,
        configured: status.configured,
        fullStatus: status,
      });

      const wasAuthenticated = isAuthenticated;
      setIsAuthenticated(status.configured);

      if (status.configured) {
        console.log("✅ Google Calendar is connected!");
        if (!wasAuthenticated && hasLoaded.current) {
          // Only show toast if status changed from disconnected to connected (and not first load)
          toast.success(t("integrations.google_connected_success"));
        }
      } else {
        console.log("❌ Google Calendar is not connected");
        console.log("📊 Status details:", {
          enabled: status.enabled,
          configured: status.configured,
          provider: status.provider,
        });

        // Provide helpful error messages
        if (!status.enabled && !status.configured) {
          console.log(
            "💡 OAuth app may not be configured. Please configure Google OAuth app first."
          );
        } else if (status.enabled && !status.configured) {
          console.log(
            "💡 Integration is enabled but credentials are missing. Try connecting again."
          );
        } else {
          console.log(
            "💡 This might be a timing issue. Credentials may still be processing."
          );
        }
      }
    } catch (error) {
      console.error("❌ Failed to check Google auth status:", error);
      const errorObj = error as { message?: string; status?: number };
      if (errorObj?.status === 500) {
        console.error("💡 Backend error - check backend logs for details");
      } else if (errorObj?.status === 401) {
        console.error("💡 Authentication error - please log in again");
      }
    } finally {
      setIsLoading(false);
      hasLoaded.current = true;
    }
  }, [isAuthenticated, t]);

  // Initial load - check status once, but allow refresh on OAuth success
  useEffect(() => {
    // Check for OAuth success (always check this, even on revisit)
    const success = searchParams?.get("success");
    const localStorageFlag = localStorage.getItem(
      "google_oauth_just_connected"
    );
    const sessionProcessedFlag = sessionStorage.getItem(
      "google_oauth_success_processed"
    );

    if (
      (success === "google_connected" || localStorageFlag === "true") &&
      !sessionProcessedFlag
    ) {
      console.log("✅ Detected Google OAuth success, refreshing status...");
      // toast handled by checkAuthStatus transition
      localStorage.removeItem("google_oauth_just_connected");
      sessionStorage.setItem("google_oauth_success_processed", "true");

      // Retry status checks with delays
      const retryDelays = [1000, 2000, 4000, 6000, 10000];
      retryDelays.forEach((delay) => {
        setTimeout(() => {
          checkAuthStatus();
        }, delay);
      });
    } else if (!hasLoaded.current) {
      // Normal load - only on first mount
      checkAuthStatus();
      hasLoaded.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Separate effect for visibility change (doesn't cause reloads)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTimeout(() => {
          checkAuthStatus();
        }, 500);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [checkAuthStatus]);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      // Get OAuth URL with Calendar and Sheets scopes
      const response = await mcpApi.getGoogleOAuthUrl([
        "https://www.googleapis.com/auth/calendar",
        "https://www.googleapis.com/auth/spreadsheets",
      ]);

      // Validate response
      if (!response.auth_url || !response.state) {
        throw new Error(
          "Invalid response from server: missing auth_url or state"
        );
      }

      // Store state in sessionStorage for callback verification
      sessionStorage.setItem("google_oauth_state", response.state);

      // Set flag in localStorage to detect OAuth completion even if query param is lost
      localStorage.setItem("google_oauth_just_connected", "true");

      // Redirect to Google OAuth
      window.location.href = response.auth_url;
    } catch (error: unknown) {
      // Log detailed error information
      const errorObj = error as {
        message?: string;
        status?: number;
        statusText?: string;
        url?: string;
        errorData?: { detail?: string; message?: string };
        errorText?: string;
        stack?: string;
      };

      console.error("❌ Google OAuth Connection Failed:", {
        error,
        message: errorObj?.message,
        status: errorObj?.status,
        statusText: errorObj?.statusText,
        url: errorObj?.url,
        errorData: errorObj?.errorData,
        errorText: errorObj?.errorText,
        stack: errorObj?.stack,
      });

      // Extract detailed error information
      let errorMessage = "Failed to connect to Google";
      let errorType = "";

      // Try to get error from different sources
      if (errorObj?.errorData?.detail) {
        errorMessage = errorObj.errorData.detail;
      } else if (errorObj?.message) {
        errorMessage = errorObj.message;
      } else if (errorObj?.errorText) {
        errorMessage = errorObj.errorText;
      }

      // Determine error type
      if (errorObj?.status === 400) {
        errorType = "Configuration Error";
      } else if (errorObj?.status === 401) {
        errorType = "Authentication Error";
      } else if (errorObj?.status === 403) {
        errorType = "Permission Error";
      } else if (errorObj?.status === 404) {
        errorType = "Endpoint Not Found";
      } else if (errorObj?.status === 500) {
        errorType = "Server Error";
      } else if (errorObj?.status) {
        errorType = `HTTP ${errorObj.status} Error`;
      }

      // Show detailed error toast
      const fullMessage = errorType
        ? `${errorType}: ${errorMessage}`
        : errorMessage;
      toast.error(fullMessage, {
        duration: 15000, // Show for 15 seconds
        description: errorObj?.status
          ? `Status: ${errorObj.status} | Check console (F12) for full details`
          : "Check browser console (F12) for full error details",
      });

      setIsConnecting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        {t("common.checking_connection")}
      </div>
    );
  }

  return (
    <div className="space-y-4 border-t pt-4">
      {/* OAuth App Configuration */}
      <GoogleOAuthAppConfig />

      {/* Connection Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <Label className="text-base font-semibold">{t("integrations.google_calendar")}</Label>
        </div>
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600">{t("integrations.connected")}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <XCircle className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">{t("integrations.not_connected")}</span>
          </div>
        )}
      </div>

      {!isAuthenticated && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {t("integrations.google_calendar_desc")}
          </p>
          <Button
            onClick={handleConnect}
            disabled={isConnecting}
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
                {t("integrations.connect_google_calendar")}
              </>
            )}
          </Button>
        </div>
      )}

      {isAuthenticated && (
        <div className="space-y-3">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              {t("integrations.google_calendar_connected_desc")}
            </AlertDescription>
          </Alert>

          {/* Calendar Settings - appointment durations, business hours, etc. */}
          <CalendarSettings />

          {/* Reconnect button - allows reconnecting to get fresh tokens */}
          <Button
            onClick={handleConnect}
            disabled={isConnecting}
            variant="outline"
            className="w-full"
          >
            {isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("integrations.reconnecting")}
              </>
            ) : (
              <>
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("integrations.reconnect_google_calendar")}
              </>
            )}
          </Button>
        </div>
      )}

      {/* Manual refresh button for debugging */}
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={checkAuthStatus}
          disabled={isLoading}
          className="text-xs"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-1 h-3 w-3 animate-spin" />
              {t("common.checking")}
            </>
          ) : (
            t("common.refresh_status")
          )}
        </Button>
      </div>
    </div>
  );
}
