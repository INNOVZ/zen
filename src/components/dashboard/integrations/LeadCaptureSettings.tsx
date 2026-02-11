"use client";

import { useState, useEffect } from "react";
import { mcpApi, type LeadCaptureConfig } from "@/app/api/mcp";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import { Sheet, Loader2, Info } from "lucide-react";
import { useTranslation } from "@/contexts/I18nContext";

export default function LeadCaptureSettings() {
  const { t } = useTranslation();
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
        toast.success(t("integrations.lead_settings_saved"));
      } else {
        toast.error(t("integrations.lead_settings_failed"));
      }
    } catch (error) {
      console.error("Failed to save lead capture config:", error);
      toast.error(t("integrations.lead_settings_failed"));
    } finally {
      setIsSaving(false);
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
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Sheet className="h-5 w-5 text-orange-600" />
        <Label className="text-base font-semibold">
          {t("integrations.lead_capture_settings")}
        </Label>
      </div>

      <div className="space-y-4">
        {/* Enable Lead Capture */}
        <div className="flex items-center justify-between">
          <div>
            <Label>{t("integrations.enable_lead_capture")}</Label>
            <p className="text-xs text-muted-foreground">
              {t("integrations.enable_lead_capture_desc")}
            </p>
          </div>
          <Switch
            checked={config.enabled}
            onCheckedChange={(enabled) => setConfig({ ...config, enabled })}
          />
        </div>

        {config.enabled && (
          <>
            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t("integrations.capture_sheets")}</Label>
                  <p className="text-xs text-muted-foreground">
                    {t("integrations.capture_sheets_desc")}
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

            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t("integrations.capture_crm")}</Label>
                  <p className="text-xs text-muted-foreground">
                    {t("integrations.capture_crm_desc")}
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

            <div className="space-y-2 border-t pt-4">
              <div className="flex items-center justify-between">
                <Label>{t("integrations.min_confidence")}</Label>
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
                {t("integrations.min_confidence_desc")}
              </p>
            </div>

            {/* Require Contact */}
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <Label>{t("integrations.require_contact")}</Label>
                <p className="text-xs text-muted-foreground">
                  {t("integrations.require_contact_desc")}
                </p>
              </div>
              <Switch
                checked={config.require_contact !== false}
                onCheckedChange={(require) =>
                  setConfig({ ...config, require_contact: require })
                }
              />
            </div>

            {/* CTA Visibility Settings */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center gap-2">
                <Label className="text-sm font-semibold">
                  {t("integrations.cta_visibility")}
                </Label>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("integrations.cta_visibility_desc")}
              </p>

              {/* Show Enquiry CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t("integrations.show_enquiry_cta")}</Label>
                  <p className="text-xs text-muted-foreground">
                    {t("integrations.show_enquiry_cta_desc")}
                  </p>
                </div>
                <Switch
                  checked={config.cta_visibility?.show_enquiry_cta === true}
                  onCheckedChange={(enabled) =>
                    setConfig({
                      ...config,
                      cta_visibility: {
                        ...config.cta_visibility,
                        show_enquiry_cta: enabled,
                      },
                    })
                  }
                />
              </div>

              {/* Show Booking CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t("integrations.show_booking_cta")}</Label>
                  <p className="text-xs text-muted-foreground">
                    {t("integrations.show_booking_cta_desc")}
                  </p>
                </div>
                <Switch
                  checked={config.cta_visibility?.show_booking_cta !== false}
                  onCheckedChange={(enabled) =>
                    setConfig({
                      ...config,
                      cta_visibility: {
                        ...config.cta_visibility,
                        show_booking_cta: enabled,
                      },
                    })
                  }
                />
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                {t("integrations.lead_capture_info")}
              </AlertDescription>
            </Alert>
          </>
        )}

        <Button onClick={handleSave} disabled={isSaving} className="w-full">
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("common.saving")}
            </>
          ) : (
            t("integrations.save_settings")
          )}
        </Button>
      </div>
    </div>
  );
}
