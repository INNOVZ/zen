"use client";
import React, { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import type { ChatbotInfo } from "@/types";
import { useCustomizeStore } from "@/stores/customizeStore";
import { getApiBaseUrl } from "@/config/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { chatbotApi } from "@/app/api/routes";
import {
  Bot,
  CheckCircle,
  Save,
  AlertTriangle,
  Upload,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/contexts/I18nContext";

const debounce = <T extends (...args: never[]) => void>(
  func: T,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const TONE_OPTIONS = [
  { value: "professional", label: "Professional", icon: "👔" },
  { value: "friendly", label: "Friendly", icon: "😊" },
  { value: "helpful", label: "Helpful", icon: "🤝" },
  { value: "technical", label: "Technical", icon: "🔧" },
  { value: "casual", label: "Casual", icon: "💬" },
];

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English", icon: "🇬🇧" },
  { value: "es", label: "Spanish", icon: "🇪🇸" },
  { value: "de", label: "German", icon: "🇩🇪" },
  { value: "it", label: "Italian", icon: "🇮🇹" },
  { value: "ar", label: "Arabic", icon: "🇸🇦" },
];

const COLOR_PRESETS = [
  "#6a8fff",
  "#10B981",
  "#8B5CF6",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
  "#84CC16",
  "#EC4899",
  "#6366F1",
  "#14B8A6",
  "#F97316",
  "#8B5A2B",
];

export default function ChatbotConfiguration() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const chatbotId = searchParams?.get("id") ?? null;

  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const {
    saving,
    currentUser,
    selectedChatbot,
    isEditMode,
    config,
    setSaving,
    setOrgChatbots,
    setSelectedChatbot,
    setIsEditMode,
    setShowCreateForm,
    setConfig,
    updateConfig,
  } = useCustomizeStore();

  const validateConfig = useCallback((config: ChatbotInfo): string[] => {
    const errors: string[] = [];
    if (!config.name?.trim()) errors.push("Chatbot name is required");
    if (config.name && config.name.length > 50)
      errors.push("Name must be under 50 characters");
    if (!config.greeting_message?.trim())
      errors.push("Greeting message is required");
    if (config.greeting_message && config.greeting_message.length > 200)
      errors.push("Greeting message must be under 200 characters");
    if (!config.fallback_message?.trim())
      errors.push("Fallback message is required");
    return errors;
  }, []);

  const [inputValues, setInputValues] = useState({
    name: config.name || "",
    description: config.description || "",
    greeting_message: config.greeting_message || "",
    fallback_message: config.fallback_message || "",
    behavior: config.behavior || "",
    system_prompt: config.system_prompt || "",
    color_hex: config.color_hex || "#3B82F6",
    avatar_url: config.avatar_url || "",
    language: config.language || "en",
  });

  const loadConfigFromChatbot = useCallback(
    (chatbot: ChatbotInfo) => {
      setConfig({
        ...chatbot,
        description: chatbot.description || "",
        color_hex: chatbot.color_hex || "#6a8fff",
        tone: chatbot.tone || "helpful",
        language: chatbot.language || "en",
        behavior: chatbot.behavior || "Be helpful and informative",
        system_prompt: chatbot.system_prompt || "",
        greeting_message:
          chatbot.greeting_message || "Hello! How can I help you today?",
        fallback_message:
          chatbot.fallback_message ||
          "I'm sorry, I don't have information about that. Could you please rephrase your question?",
        ai_model_config: {
          model: "gpt-3.5-turbo",
          temperature: 0.7,
          max_tokens: 1000,
        },
        is_active: chatbot.is_active ?? (chatbot.status === "active"),
      } satisfies ChatbotInfo);
      setUnsavedChanges(false);
      setValidationErrors([]);
    },
    [setConfig]
  );

  const loadOrgChatbots = useCallback(async () => {
    try {
      const chatbots = await chatbotApi.getChatbots();
      setOrgChatbots(chatbots);

      if (chatbotId) {
        const targetChatbot = chatbots.find((bot) => bot.id === chatbotId);
        if (targetChatbot) {
          setSelectedChatbot(targetChatbot);
          loadConfigFromChatbot(targetChatbot);
          setIsEditMode(true);
          setShowCreateForm(false);
        } else {
          toast.error("Chatbot not found");
          router.push(`/dashboard/customize`);
        }
      } else if (chatbots.length > 0) {
        setSelectedChatbot(chatbots[0]);
        loadConfigFromChatbot(chatbots[0]);
        setIsEditMode(false);
        setShowCreateForm(true);
      } else {
        setShowCreateForm(true);
        setIsEditMode(false);
      }
    } catch (error) {
      console.error("Error loading organization chatbots:", error);
      toast.error("Failed to load chatbots");
    }
  }, [
    chatbotId,
    setOrgChatbots,
    setSelectedChatbot,
    setIsEditMode,
    setShowCreateForm,
    router,
    loadConfigFromChatbot,
  ]);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        await loadOrgChatbots();
      } catch (error) {
        if (mounted)
          console.error("Error loading organization chatbots:", error);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [loadOrgChatbots]);

  useEffect(() => {
    setInputValues({
      name: config.name || "",
      description: config.description || "",
      greeting_message: config.greeting_message || "",
      fallback_message: config.fallback_message || "",
      behavior: config.behavior || "",
      system_prompt: config.system_prompt || "",
      color_hex: config.color_hex || "#3B82F6",
      avatar_url: config.avatar_url || "",
      language: config.language || "en",
    });
  }, [config, config.id, isEditMode, chatbotId]);

  const createDebouncedUpdate = useCallback(
    (field: keyof ChatbotInfo) => {
      return debounce((value: string | boolean) => {
        updateConfig({ [field]: value } as Partial<ChatbotInfo>);
        setUnsavedChanges(true);
        const currentConfig = useCustomizeStore.getState().config;
        const newConfig = { ...currentConfig, [field]: value };
        const errors = validateConfig(newConfig);
        setValidationErrors(errors);
      }, 300);
    },
    [updateConfig, validateConfig]
  );

  const debouncedUpdates = React.useMemo(
    () => ({
      name: createDebouncedUpdate("name"),
      description: createDebouncedUpdate("description"),
      greeting_message: createDebouncedUpdate("greeting_message"),
      fallback_message: createDebouncedUpdate("fallback_message"),
      behavior: createDebouncedUpdate("behavior"),
      system_prompt: createDebouncedUpdate("system_prompt"),
      color_hex: createDebouncedUpdate("color_hex"),
      avatar_url: createDebouncedUpdate("avatar_url"),
      is_active: createDebouncedUpdate("is_active"),
      tone: createDebouncedUpdate("tone"),
      language: createDebouncedUpdate("language"),
    }),
    [createDebouncedUpdate]
  );

  const handleInputChange = useCallback(
    (field: keyof typeof inputValues, value: string) => {
      setInputValues((prev) => ({ ...prev, [field]: value }));
      debouncedUpdates[field]?.(value);
    },
    [debouncedUpdates]
  );

  const handleFieldChange = useCallback(
    (field: keyof ChatbotInfo, value: string | boolean) => {
      updateConfig({ [field]: value } as Partial<ChatbotInfo>);
      setUnsavedChanges(true);
      const newConfig = { ...config, [field]: value };
      const errors = validateConfig(newConfig);
      setValidationErrors(errors);
    },
    [updateConfig, validateConfig, config]
  );

  const handleAvatarUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const validTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/gif",
        "image/webp",
      ];
      if (!validTypes.includes(file.type)) {
        toast.error(
          "Please upload a valid image file (PNG, JPEG, GIF, or WebP)"
        );
        return;
      }

      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error("Image size must be less than 2MB");
        return;
      }

      try {
        const { uploadsApi } = await import("@/app/api/routes");
        const result = await uploadsApi.uploadFile(file, "image");
        if (result && result.url) {
          const baseUrl = getApiBaseUrl();
          const fullUrl = result.url.startsWith("http")
            ? result.url
            : `${baseUrl}${result.url}`;
          handleInputChange("avatar_url", fullUrl);
          toast.success("Avatar image uploaded successfully!");
        } else {
          throw new Error("Upload failed - no URL returned");
        }
      } catch (error) {
        console.error("Avatar upload error:", error);
        toast.error(
          `Failed to upload image: ${error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    },
    [handleInputChange]
  );

  const convertLegacyUrl = useCallback((url: string): string => {
    if (url.includes("storage/v1/object/uploads/")) {
      const pathParts = url.split("storage/v1/object/uploads/");
      if (pathParts.length > 1) {
        const filePath = pathParts[1];
        const baseUrl = getApiBaseUrl();
        return `${baseUrl}/api/uploads/avatar/legacy/${filePath}`;
      }
    }
    return url;
  }, []);

  const handleClearAvatar = useCallback(() => {
    handleInputChange("avatar_url", "");
    toast.success("Avatar cleared");
  }, [handleInputChange]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const errors = validateConfig(config);
      if (errors.length > 0) {
        toast.error(`Please fix validation errors: ${errors.join(", ")}`);
        setValidationErrors(errors);
        return;
      }

      const chatbotData: ChatbotInfo = {
        id: selectedChatbot?.id || "",
        name: config.name,
        description: config.description,
        color_hex: config.color_hex,
        tone: config.tone,
        language: config.language,
        behavior: config.behavior,
        greeting_message: config.greeting_message,
        status: config.is_active ? "active" : "inactive",
        user_id: currentUser?.id || "",
        org_id: currentUser?.user_metadata?.org_id,
        system_prompt: config.system_prompt,
        fallback_message: config.fallback_message,
        avatar_url: config.avatar_url,
        chain_status: selectedChatbot?.chain_status || "pending",
        trainer_at: selectedChatbot?.trainer_at || new Date().toISOString(),
        created_at: selectedChatbot?.created_at || new Date().toISOString(),
        ai_model_config: config.ai_model_config || {
          model: "gpt-3.5-turbo",
          temperature: 0.7,
          max_tokens: 1000,
        },
        deployment_config: selectedChatbot?.deployment_config || {
          url: "",
          headers: {},
          method: "",
        },
        is_active: config.is_active,
      };

      let savedChatbot: ChatbotInfo;
      if (isEditMode && selectedChatbot?.id) {
        savedChatbot = await chatbotApi.updateChatbot(
          selectedChatbot.id,
          chatbotData
        );
        toast.success("Chatbot updated successfully!");
      } else {
        savedChatbot = await chatbotApi.createChatbot(chatbotData);
        toast.success("Chatbot created successfully!");
        setIsEditMode(true);
        setShowCreateForm(false);
        setSelectedChatbot(savedChatbot);
        router.push(`/dashboard/customize?id=${savedChatbot.id}`);
      }

      setUnsavedChanges(false);
      setValidationErrors([]);
      await loadOrgChatbots();
    } catch (error) {
      console.error("Error saving chatbot:", error);
      let errorMessage = "Failed to save chatbot configuration";
      if (error instanceof Error) {
        if (
          error.message.includes("401") ||
          error.message.includes("Authentication")
        ) {
          errorMessage = "Authentication failed. Please log in again.";
        } else if (error.message.includes("403")) {
          errorMessage = "Permission denied. Check your access rights.";
        } else if (
          error.message.includes("Network") ||
          error.message.includes("fetch")
        ) {
          errorMessage = "Cannot connect to server. Is the backend running?";
        } else {
          errorMessage = `Save failed: ${error.message}`;
        }
      }
      toast.error(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            {t("chatbot_config.advanced_config_title")}
            {unsavedChanges && (
              <Badge variant="secondary" className="ml-2">
                {t("common.unsaved_changes")}
              </Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Switch
              checked={config.is_active}
              onCheckedChange={(checked) =>
                handleFieldChange("is_active", checked)
              }
            />
            <Label className="text-sm">{t("common.active")}</Label>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {validationErrors.length > 0 && (
          <Alert className="mb-4 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription>
              <strong>{t("common.validation_errors_heading")}</strong>
              <ul className="mt-2 list-disc list-inside">
                {validationErrors.map((error, index) => (
                  <li key={index} className="text-sm text-red-700">
                    {error}
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        <div className="w-full">
          <div className="space-y-4">
            <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">{t("chatbot_config.name_label")}</Label>
                <Input
                  id="name"
                  value={inputValues.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder={t("chatbot_config.name_placeholder")}
                  className="mt-4"
                />
              </div>
            </div>

            <div className="my-7">
              <Label>{t("chatbot_config.avatar_label")}</Label>
              <div className="mt-4 space-y-4">
                {inputValues.avatar_url && (
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={convertLegacyUrl(inputValues.avatar_url)}
                        alt="Avatar preview"
                        width={80}
                        height={80}
                        className="rounded-full object-cover border-2 border-gray-200"
                        unoptimized={true}
                      />
                      <button
                        type="button"
                        onClick={handleClearAvatar}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        title={t("chatbot_config.remove_avatar_tooltip")}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      {inputValues.avatar_url.includes(
                        "/api/uploads/avatar/"
                      ) ||
                        inputValues.avatar_url.includes(
                          "storage/v1/object/uploads"
                        )
                        ? t("chatbot_config.uploaded_image")
                        : t("chatbot_config.external_url")}
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="avatar-url" className="text-sm text-gray-600">
                    {t("chatbot_config.enter_image_url_label")}
                  </Label>
                  <Input
                    id="avatar-url"
                    value={inputValues.avatar_url}
                    onChange={(e) =>
                      handleInputChange("avatar_url", e.target.value)
                    }
                    placeholder="https://example.com/avatar.png"
                    className="w-full"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="text-sm text-gray-500">{t("common.or")}</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="avatar-file"
                    className="text-sm text-gray-600"
                  >
                    {t("chatbot_config.upload_image_file_label")}
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="avatar-file"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("avatar-file")?.click()
                      }
                      className="flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      {t("chatbot_config.choose_image_button")}
                    </Button>
                    <p className="text-xs text-gray-500">
                      {t("chatbot_config.image_file_types_size")}
                    </p>
                  </div>
                </div>

                {!inputValues.avatar_url && (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      {t("chatbot_config.no_avatar_set_message")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="my-7">
              <Label htmlFor="description">{t("chatbot_config.desc_label")}</Label>
              <Textarea
                id="description"
                value={inputValues.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder={t("chatbot_config.desc_placeholder")}
                className="mt-4"
                rows={3}
              />
            </div>

            <div className="my-7">
              <Label>{t("chatbot_config.personality_tone_label")}</Label>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {TONE_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className={`p-2 border rounded-lg cursor-pointer transition-all ${config.tone === option.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                      }`}
                    onClick={() => handleFieldChange("tone", option.value)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{option.icon}</span>
                      <div>
                        <div className="font-medium">{option.label}</div>
                      </div>
                      {config.tone === option.value && (
                        <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-9">
              <Label>{t("chatbot_config.primary_color_label")}</Label>
              <div className="mt-2">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {COLOR_PRESETS.map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 ${config.color_hex === color
                        ? "border-gray-900 scale-110"
                        : "border-gray-200 hover:border-gray-400"
                        } transition-all`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleFieldChange("color_hex", color)}
                    />
                  ))}
                </div>
                <Input
                  type="color"
                  value={inputValues.color_hex}
                  onChange={(e) =>
                    handleInputChange("color_hex", e.target.value)
                  }
                  className="w-20 h-10"
                />
              </div>
            </div>

            <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="greeting">{t("chatbot_config.greeting_label")}</Label>
                <Textarea
                  id="greeting"
                  value={inputValues.greeting_message}
                  onChange={(e) =>
                    handleInputChange("greeting_message", e.target.value)
                  }
                  placeholder={t("chatbot_config.greeting_placeholder")}
                  className="mt-4"
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="fallback">{t("chatbot_config.fallback_label")}</Label>
                <Textarea
                  id="fallback"
                  value={inputValues.fallback_message}
                  onChange={(e) =>
                    handleInputChange("fallback_message", e.target.value)
                  }
                  placeholder={t("chatbot_config.fallback_placeholder")}
                  className="mt-4"
                  rows={2}
                />
              </div>
            </div>

            <div className="my-9">
              <Label htmlFor="behavior">{t("chatbot_config.behavior_label")}</Label>
              <Textarea
                id="behavior"
                value={inputValues.behavior}
                onChange={(e) => handleInputChange("behavior", e.target.value)}
                placeholder={t("chatbot_config.behavior_placeholder")}
                className="mt-4"
                rows={4}
              />
            </div>

            <div className="my-9">
              <Label htmlFor="system-prompt">System Prompt (Advanced)</Label>
              <Textarea
                id="system-prompt"
                value={inputValues.system_prompt}
                onChange={(e) =>
                  handleInputChange("system_prompt", e.target.value)
                }
                placeholder="You are a helpful assistant that..."
                className="mt-1"
                rows={6}
              />
              <p className="text-sm text-gray-500 mt-4">
                Define specific instructions for the AI. This overrides default
                behavior settings.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6 pt-6 border-t">
          <Button
            onClick={handleSave}
            disabled={saving || validationErrors.length > 0}
            className="pointer flex items-center gap-2 min-w-[150px]"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                {isEditMode ? "Update Chatbot" : "Create Chatbot"}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
