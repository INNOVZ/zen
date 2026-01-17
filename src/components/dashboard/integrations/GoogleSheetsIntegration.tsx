"use client";

import { useState, useEffect } from "react";
import { mcpApi, type GoogleSheetsConfig } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  Sheet,
  Loader2,
  Info,
} from "lucide-react";

export default function GoogleSheetsIntegration() {
  const [config, setConfig] = useState<GoogleSheetsConfig>({
    spreadsheet_id: "",
    sheet_name: "Leads",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      setIsLoading(true);
      const status = await mcpApi.getIntegrationStatus("google");
      setIsAuthenticated(status.configured);

      // Load lead capture config to get spreadsheet ID
      const leadConfig = await mcpApi.getLeadCaptureConfig();
      if (leadConfig.google_sheets?.config) {
        setConfig({
          spreadsheet_id: leadConfig.google_sheets.config.spreadsheet_id || "",
          sheet_name: leadConfig.google_sheets.config.sheet_name || "Leads",
        });
      }
    } catch (error) {
      console.error("Failed to load Google Sheets config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!config.spreadsheet_id) {
      toast.error("Please enter a Google Sheets spreadsheet ID");
      return;
    }

    try {
      setIsSaving(true);
      const success = await mcpApi.configureGoogleSheets(config);
      if (success) {
        toast.success("Google Sheets configuration saved");
      } else {
        toast.error("Failed to save configuration");
      }
    } catch (error) {
      console.error("Failed to save Google Sheets config:", error);
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
    <div className="space-y-4 border-t pt-4">
      <div className="flex items-center gap-2">
        <Sheet className="h-5 w-5 text-green-600" />
        <Label className="text-base font-semibold">Google Sheets (Lead Capture)</Label>
      </div>

      {!isAuthenticated && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            Please connect Google Calendar first (it includes Sheets access).
          </AlertDescription>
        </Alert>
      )}

      {isAuthenticated && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="spreadsheet_id">Spreadsheet ID</Label>
            <Input
              id="spreadsheet_id"
              placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
              value={config.spreadsheet_id}
              onChange={(e) =>
                setConfig({ ...config, spreadsheet_id: e.target.value })
              }
            />
            <p className="text-xs text-muted-foreground">
              Get this from your Google Sheets URL:{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
              </code>
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sheet_name">Sheet Name</Label>
            <Input
              id="sheet_name"
              placeholder="Leads"
              value={config.sheet_name}
              onChange={(e) =>
                setConfig({ ...config, sheet_name: e.target.value })
              }
            />
            <p className="text-xs text-muted-foreground">
              Name of the sheet tab where leads will be captured (default: Leads)
            </p>
          </div>

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
      )}
    </div>
  );
}

