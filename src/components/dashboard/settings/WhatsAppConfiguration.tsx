"use client";

import { useState, useEffect } from "react";
import { whatsappApi, type WhatsAppConfig } from "@/app/api/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import {
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Send,
  Eye,
  EyeOff,
  Copy,
  ExternalLink,
  Edit2,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WhatsAppConfigurationProps {
  organizationPhone?: string;
  onPhoneNumberChange?: (phone: string) => void;
}

export default function WhatsAppConfiguration({
  organizationPhone,
  onPhoneNumberChange,
}: WhatsAppConfigurationProps) {
  const [config, setConfig] = useState<WhatsAppConfig>({
    twilio_account_sid: "",
    twilio_auth_token: "",
    twilio_phone_number: organizationPhone || "",
    webhook_url: "",
    is_active: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAuthToken, setShowAuthToken] = useState(false);
  const [validationStatus, setValidationStatus] = useState<{
    valid: boolean;
    message?: string;
  } | null>(null);
  const [testPhoneNumber, setTestPhoneNumber] = useState("");
  const [testMessage, setTestMessage] = useState(
    "Hello! This is a test message from ZaaKy AI."
  );
  const [isSendingTest, setIsSendingTest] = useState(false);

  // Load existing configuration
  useEffect(() => {
    loadConfig();
  }, []);

  // Sync phone number with organization contact_phone
  useEffect(() => {
    if (organizationPhone && !config.twilio_phone_number) {
      setConfig((prev) => ({
        ...prev,
        twilio_phone_number: organizationPhone,
      }));
    }
  }, [organizationPhone, config.twilio_phone_number]);

  const [isEditing, setIsEditing] = useState(false);

  const loadConfig = async () => {
    try {
      setIsLoading(true);
      const response = await whatsappApi.getConfig();
      if (response.success && response.config) {
        // Use masked values from backend
        setConfig({
          ...response.config,
          twilio_auth_token: response.config.twilio_auth_token || "",
        });
        setValidationStatus({
          valid: response.config.is_active,
          message: response.config.is_active
            ? "Configuration is active"
            : "Configuration is inactive",
        });
        // If config exists and is active, we're connected (not editing)
        setIsEditing(!response.config.is_active);
      } else {
        // No config exists yet
        setIsEditing(true);
      }
    } catch (error) {
      console.error("Failed to load WhatsApp configuration:", error);
      // Don't show error if config doesn't exist yet
      setIsEditing(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    // Validation
    if (!config.twilio_account_sid.trim()) {
      toast.error("Twilio Account SID is required");
      return;
    }

    // If editing and token is masked placeholder, don't require it (will keep existing)
    const tokenRequired = !isEditing || config.twilio_auth_token !== "••••••••••••";
    if (tokenRequired && !config.twilio_auth_token.trim()) {
      toast.error("Twilio Auth Token is required");
      return;
    }

    if (!config.twilio_phone_number.trim()) {
      toast.error("Twilio Phone Number is required");
      return;
    }

    // Validate phone number format (E.164)
    if (!config.twilio_phone_number.startsWith("+")) {
      toast.error("Phone number must be in E.164 format (e.g., +1234567890)");
      return;
    }

    try {
      setIsSaving(true);

      // If token is masked placeholder, don't send it (backend will keep existing)
      const configToSave = { ...config };
      if (configToSave.twilio_auth_token === "••••••••••••") {
        // Remove token from save request - backend will keep existing value
        delete (configToSave as Partial<WhatsAppConfig>).twilio_auth_token;
      }

      const response = await whatsappApi.updateConfig(configToSave);

      if (response.success) {
        toast.success("WhatsApp configuration saved successfully!");
        setValidationStatus({
          valid: config.is_active,
          message: "Configuration saved",
        });
        // Notify parent if phone number changed
        if (onPhoneNumberChange) {
          onPhoneNumberChange(config.twilio_phone_number);
        }
        // Reload to get updated config (with masked values)
        await loadConfig();
        setIsEditing(false);
      } else {
        toast.error(response.message || "Failed to save configuration");
      }
    } catch (error) {
      console.error("Error saving WhatsApp configuration:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Failed to save WhatsApp configuration";
      toast.error(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleValidate = async () => {
    try {
      setIsValidating(true);
      const response = await whatsappApi.validateConfig();

      if (response.success && response.validation) {
        if (response.validation.valid) {
          setValidationStatus({
            valid: true,
            message: `Connection successful! Account status: ${response.validation.account_status || "active"
              }`,
          });
          toast.success("Twilio connection validated successfully!");
        } else {
          setValidationStatus({
            valid: false,
            message: response.validation.error || "Validation failed",
          });
          toast.error(
            response.validation.error || "Failed to validate Twilio connection"
          );
        }
      } else {
        setValidationStatus({
          valid: false,
          message: "Validation failed",
        });
        toast.error("Failed to validate configuration");
      }
    } catch (error) {
      console.error("Error validating WhatsApp configuration:", error);
      const message =
        error instanceof Error ? error.message : "Validation error";
      setValidationStatus({
        valid: false,
        message,
      });
      toast.error(message || "Failed to validate configuration");
    } finally {
      setIsValidating(false);
    }
  };

  const handleSendTest = async () => {
    if (!testPhoneNumber.trim()) {
      toast.error("Please enter a test phone number");
      return;
    }
    if (!testPhoneNumber.startsWith("+")) {
      toast.error("Phone number must be in E.164 format (e.g., +1234567890)");
      return;
    }

    try {
      setIsSendingTest(true);
      const response = await whatsappApi.sendTestMessage(
        testPhoneNumber,
        testMessage
      );

      if (response.success) {
        toast.success(
          `Test message sent successfully! Message SID: ${response.message_sid}`
        );
        setTestPhoneNumber("");
      } else {
        toast.error(response.error || "Failed to send test message");
      }
    } catch (error) {
      console.error("Error sending test message:", error);
      const message =
        error instanceof Error ? error.message : "Failed to send test message";
      toast.error(message);
    } finally {
      setIsSendingTest(false);
    }
  };

  const handleUseOrganizationPhone = () => {
    if (organizationPhone) {
      setConfig((prev) => ({
        ...prev,
        twilio_phone_number: organizationPhone,
      }));
      toast.info("Phone number synced from organization contact phone");
    }
  };

  const copyWebhookUrl = () => {
    const webhookUrl = `${window.location.origin.replace(
      "localhost",
      "your-domain"
    )}/api/whatsapp/webhook`;
    navigator.clipboard.writeText(webhookUrl);
    toast.success("Webhook URL copied to clipboard");
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>WhatsApp Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">Loading configuration...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              WhatsApp Business Integration
            </CardTitle>
            <CardDescription>
              Configure Twilio credentials to enable WhatsApp messaging for your
              chatbots
            </CardDescription>
          </div>
          {validationStatus && (
            <div className="flex items-center gap-2">
              {validationStatus.valid ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Connection Status */}
        {validationStatus?.valid && !isEditing && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">WhatsApp integration is connected</p>
                  <p className="text-sm text-green-700 mt-1">
                    Your WhatsApp integration is active and ready to use.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit2 className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Validation Status */}
        {validationStatus && !validationStatus.valid && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{validationStatus.message}</AlertDescription>
          </Alert>
        )}

        {/* Show input fields only when editing or not connected */}
        {(!validationStatus?.valid || isEditing) && (
          <>
            {/* Twilio Account SID */}
            <div className="space-y-2">
              <Label htmlFor="twilio_account_sid">
                Twilio Account SID <span className="text-red-500">*</span>
              </Label>
              <Input
                id="twilio_account_sid"
                type="text"
                value={config.twilio_account_sid}
                onChange={(e) =>
                  setConfig({ ...config, twilio_account_sid: e.target.value })
                }
                placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                required
              />
              <p className="text-sm text-muted-foreground">
                Find this in your Twilio Console dashboard
              </p>
            </div>

            {/* Twilio Auth Token */}
            <div className="space-y-2">
              <Label htmlFor="twilio_auth_token">
                Twilio Auth Token <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="twilio_auth_token"
                  type={showAuthToken ? "text" : "password"}
                  value={config.twilio_auth_token}
                  onChange={(e) =>
                    setConfig({ ...config, twilio_auth_token: e.target.value })
                  }
                  placeholder={
                    isEditing && config.twilio_auth_token === "••••••••••••"
                      ? "Enter new token or leave unchanged"
                      : "Enter your Twilio Auth Token"
                  }
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowAuthToken(!showAuthToken)}
                >
                  {showAuthToken ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {isEditing && config.twilio_auth_token === "••••••••••••"
                  ? "Leave unchanged or enter a new token to update"
                  : "Keep this secure. Never share your auth token publicly."}
              </p>
            </div>

            {/* Twilio Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="twilio_phone_number">
                WhatsApp Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="twilio_phone_number"
                  type="tel"
                  value={config.twilio_phone_number}
                  onChange={(e) =>
                    setConfig({ ...config, twilio_phone_number: e.target.value })
                  }
                  placeholder="+1234567890 (E.164 format)"
                  required
                />
                {organizationPhone && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleUseOrganizationPhone}
                    title="Use organization contact phone"
                  >
                    Use Org Phone
                  </Button>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Your WhatsApp-enabled Twilio number. Format: +1234567890
                {organizationPhone && (
                  <span className="ml-2 text-blue-500">
                    (Organization phone: {organizationPhone})
                  </span>
                )}
              </p>
            </div>

            {/* Webhook URL */}
            <div className="space-y-2">
              <Label htmlFor="webhook_url">Webhook URL (Optional)</Label>
              <div className="flex gap-2">
                <Input
                  id="webhook_url"
                  type="url"
                  value={config.webhook_url || ""}
                  onChange={(e) =>
                    setConfig({ ...config, webhook_url: e.target.value })
                  }
                  placeholder="https://your-domain.com/api/whatsapp/webhook"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={copyWebhookUrl}
                  title="Copy default webhook URL"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Set this in your Twilio Console. For local testing, use ngrok URL.
                <a
                  href="https://www.twilio.com/docs/whatsapp/tutorial/connect-number-webhook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>

            {/* Active Toggle */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <Label htmlFor="is_active" className="text-base font-medium">
                  Enable WhatsApp Integration
                </Label>
                <p className="text-sm text-muted-foreground">
                  Activate WhatsApp messaging for your organization
                </p>
              </div>
              <Switch
                id="is_active"
                checked={config.is_active}
                onCheckedChange={(checked) =>
                  setConfig({ ...config, is_active: checked })
                }
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} disabled={isSaving} className="flex-1">
                {isSaving ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Configuration"
                )}
              </Button>
              <Button
                onClick={handleValidate}
                disabled={isValidating || !config.twilio_account_sid}
                variant="outline"
              >
                {isValidating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Validating...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Validate
                  </>
                )}
              </Button>
              {isEditing && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    loadConfig();
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </>
        )}

        {/* Test Message Section */}
        <div className="pt-6 border-t space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Send Test Message</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Test your WhatsApp configuration by sending a message
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="test_phone">Test Phone Number</Label>
            <Input
              id="test_phone"
              type="tel"
              value={testPhoneNumber}
              onChange={(e) => setTestPhoneNumber(e.target.value)}
              placeholder="+1234567890"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="test_message">Test Message</Label>
            <Input
              id="test_message"
              type="text"
              value={testMessage}
              onChange={(e) => setTestMessage(e.target.value)}
              placeholder="Enter test message"
            />
          </div>
          <Button
            onClick={handleSendTest}
            disabled={isSendingTest || !testPhoneNumber}
            variant="outline"
            className="w-full"
          >
            {isSendingTest ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Test Message
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
