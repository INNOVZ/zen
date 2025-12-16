"use client";

import { useState, useEffect } from "react";
import { mcpApi, type LeadCaptureConfig } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  Sheet,
  Loader2,
  Info,
} from "lucide-react";

export default function LeadCaptureSettings() {
  const [config, setConfig] = useState<LeadCaptureConfig>({
    enabled: false,
    google_sheets: {
      enabled: false,
    },
    crm: {
      enabled: false,
    },
    min_confidence: 0.4,
    require_contact: true,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      setIsLoading(true);
      const loadedConfig = await mcpApi.getLeadCaptureConfig();
      setConfig(loadedConfig);
    } catch (error) {
      console.error("Failed to load lead capture config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const success = await mcpApi.updateLeadCaptureConfig(config);
      if (success) {
        toast.success("Lead capture settings saved");
      } else {
        toast.error("Failed to save settings");
      }
    } catch (error) {
      console.error("Failed to save lead capture config:", error);
      toast.error("Failed to save settings");
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
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Sheet className="h-5 w-5 text-orange-600" />
        <Label className="text-base font-semibold">Lead Capture Settings</Label>
      </div>

      <div className="space-y-4">
        {/* Enable Lead Capture */}
        <div className="flex items-center justify-between">
          <div>
            <Label>Enable Lead Capture</Label>
            <p className="text-xs text-muted-foreground">
              Automatically detect and capture leads from chat conversations
            </p>
          </div>
          <Switch
            checked={config.enabled}
            onCheckedChange={(enabled) =>
              setConfig({ ...config, enabled })
            }
          />
        </div>

        {config.enabled && (
          <>
            {/* Google Sheets */}
            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Capture to Google Sheets</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically append leads to your Google Sheet
                  </p>
                </div>
                <Switch
                  checked={config.google_sheets?.enabled || false}
                  onCheckedChange={(enabled) =>
                    setConfig({
                      ...config,
                      google_sheets: {
                        ...config.google_sheets,
                        enabled,
                      },
                    })
                  }
                />
              </div>
            </div>

            {/* CRM */}
            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Capture to CRM</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically create leads in your CRM system
                  </p>
                </div>
                <Switch
                  checked={config.crm?.enabled || false}
                  onCheckedChange={(enabled) =>
                    setConfig({
                      ...config,
                      crm: {
                        ...config.crm,
                        enabled,
                      },
                    })
                  }
                />
              </div>
            </div>

            {/* Minimum Confidence */}
            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center justify-between">
                <Label>Minimum Confidence Threshold</Label>
                <span className="text-sm font-medium">
                  {(config.min_confidence || 0.4).toFixed(1)}
                </span>
              </div>
              <Slider
                value={[config.min_confidence || 0.4]}
                onValueChange={([value]) =>
                  setConfig({ ...config, min_confidence: value })
                }
                min={0}
                max={1}
                step={0.1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Higher values require stronger lead indicators (0.0 - 1.0)
              </p>
            </div>

            {/* Require Contact */}
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <Label>Require Contact Information</Label>
                <p className="text-xs text-muted-foreground">
                  Only capture leads with email or phone number
                </p>
              </div>
              <Switch
                checked={config.require_contact !== false}
                onCheckedChange={(require) =>
                  setConfig({ ...config, require_contact: require })
                }
              />
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Lead capture will automatically detect potential leads based on:
                interest keywords, purchase intent, contact information, and demo requests.
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
            "Save Settings"
          )}
        </Button>
      </div>
    </div>
  );
}

