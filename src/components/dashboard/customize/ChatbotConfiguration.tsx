"use client";
import React, { useCallback, useState, useEffect } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import type { ChatbotInfo } from "@/types/schemaTypes";
import { useCustomizeStore } from "@/stores/customizeStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { chatbotApi } from "@/api";
import { Bot, CheckCircle, Save, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
// import dynamic from "next/dynamic";

// Custom debounce function to avoid lodash dependency
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
  {
    value: "professional",
    label: "Professional",
    icon: "👔",
  },
  {
    value: "friendly",
    label: "Friendly",
    icon: "😊",
  },
  {
    value: "helpful",
    label: "Helpful",
    icon: "🤝",
  },
  {
    value: "technical",
    label: "Technical",
    icon: "🔧",
  },
  {
    value: "casual",
    label: "Casual",
    icon: "💬",
  },
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

interface ChatbotConfigurationProps {
  className?: string;
}

export default function ChatbotConfiguration({}: ChatbotConfigurationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userId } = useParams();
  const chatbotId = searchParams.get("id");

  // Local state for validation and preview
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const {
    // State
    saving,
    currentUser,
    selectedChatbot,
    isEditMode,
    config,

    // Actions
    setSaving,
    setOrgChatbots,
    setSelectedChatbot,
    setIsEditMode,
    setShowCreateForm,
    setConfig,
    updateConfig,
  } = useCustomizeStore();

  // Enhanced validation function
  const validateConfig = useCallback((config: ChatbotInfo): string[] => {
    const errors: string[] = [];

    if (!config.name?.trim()) errors.push("Chatbot name is required");
    if (config.name && config.name.length > 50)
      errors.push("Name must be under 50 characters");
    if (!config.greeting_message?.trim())
      errors.push("Greeting message is required");
    if (config.greeting_message && config.greeting_message.length > 200) {
      errors.push("Greeting message must be under 200 characters");
    }
    if (!config.fallback_message?.trim())
      errors.push("Fallback message is required");

    return errors;
  }, []);

  // Individual input states for immediate UI feedback
  const [inputValues, setInputValues] = useState({
    name: config.name || "",
    description: config.description || "",
    avatar_url: config.avatar_url || "",
    greeting_message: config.greeting_message || "",
    fallback_message: config.fallback_message || "",
    behavior: config.behavior || "",
    system_prompt: config.system_prompt || "",
    color_hex: config.color_hex || "#3B82F6",
  });

  // Load configuration from chatbot
  const loadConfigFromChatbot = useCallback(
    (chatbot: ChatbotInfo) => {
      setConfig({
        ...chatbot,
        description: chatbot.description || "",
        color_hex: chatbot.color_hex || "#6a8fff",
        tone: chatbot.tone || "helpful",
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
        is_active: true,
      } satisfies ChatbotInfo);

      // Clear unsaved changes when loading from existing chatbot
      setUnsavedChanges(false);
      setValidationErrors([]);
    },
    [setConfig, setUnsavedChanges, setValidationErrors]
  );

  // Load organization chatbots
  const loadOrgChatbots = useCallback(async () => {
    try {
      const chatbots = await chatbotApi.getChatbots();
      setOrgChatbots(chatbots);

      if (chatbotId) {
        // Edit mode: load the specific chatbot
        const targetChatbot = chatbots.find((bot) => bot.id === chatbotId);
        if (targetChatbot) {
          setSelectedChatbot(targetChatbot);
          loadConfigFromChatbot(targetChatbot);
          setIsEditMode(true);
          setShowCreateForm(false);
        } else {
          // Chatbot not found, redirect to create mode
          toast.error("Chatbot not found");
          router.push(`/dashboard/${userId}/customize`);
        }
      } else if (chatbots.length > 0) {
        // Create mode: load first chatbot as template
        const firstChatbot = chatbots[0];
        if (firstChatbot) {
          setSelectedChatbot(firstChatbot);
          loadConfigFromChatbot(firstChatbot);
        }
        setIsEditMode(false);
        setShowCreateForm(true);
      } else {
        // No chatbots exist, show create form
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
    userId,
    loadConfigFromChatbot,
  ]);

  // Load chatbots when component mounts or chatbotId changes
  useEffect(() => {
    loadOrgChatbots();
  }, [loadOrgChatbots]);

  // Update input values when config changes from store
  React.useEffect(() => {
    console.log("🔄 Updating input values from config:", {
      configId: config.id,
      configName: config.name,
      isEditMode,
      chatbotId,
    });

    setInputValues({
      name: config.name || "",
      description: config.description || "",
      avatar_url: config.avatar_url || "",
      greeting_message: config.greeting_message || "",
      fallback_message: config.fallback_message || "",
      behavior: config.behavior || "",
      system_prompt: config.system_prompt || "",
      color_hex: config.color_hex || "#3B82F6",
    });
  }, [config, config.id, isEditMode, chatbotId]);

  // Create individual debounced update functions
  const createDebouncedUpdate = useCallback(
    (field: keyof ChatbotInfo) => {
      return debounce((value: string | boolean) => {
        updateConfig({ [field]: value } as Partial<ChatbotInfo>);
        setUnsavedChanges(true);

        // Validate
        const newConfig = { ...config, [field]: value };
        const errors = validateConfig(newConfig);
        setValidationErrors(errors);
      }, 300);
    },
    [updateConfig, validateConfig, config]
  );

  // Individual debounced functions for each field
  const debouncedUpdates = React.useMemo(
    () => ({
      name: createDebouncedUpdate("name"),
      description: createDebouncedUpdate("description"),
      avatar_url: createDebouncedUpdate("avatar_url"),
      greeting_message: createDebouncedUpdate("greeting_message"),
      fallback_message: createDebouncedUpdate("fallback_message"),
      behavior: createDebouncedUpdate("behavior"),
      system_prompt: createDebouncedUpdate("system_prompt"),
      color_hex: createDebouncedUpdate("color_hex"),
      is_active: createDebouncedUpdate("is_active"),
      tone: createDebouncedUpdate("tone"),
    }),
    [createDebouncedUpdate]
  );

  // Handle input changes
  const handleInputChange = useCallback(
    (field: keyof typeof inputValues, value: string) => {
      // Update local input state immediately
      setInputValues((prev) => ({ ...prev, [field]: value }));
      // Debounce the store update
      debouncedUpdates[field]?.(value);
    },
    [debouncedUpdates]
  );

  // Handle non-text field changes (switches, selects)
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

  // Enhanced save function with better error handling
  const handleSave = async () => {
    try {
      setSaving(true);

      // Validate configuration first
      const errors = validateConfig(config);
      if (errors.length > 0) {
        toast.error(`Please fix validation errors: ${errors.join(", ")}`);
        setValidationErrors(errors);
        return;
      }

      const chatbotData: ChatbotInfo = {
        id: selectedChatbot?.id || "",
        name: config.name,
        description: config.description || "",
        avatar_url: config.avatar_url || "",
        color_hex: config.color_hex,
        tone: config.tone,
        behavior: config.behavior,
        greeting_message: config.greeting_message || "",
        status: config.is_active ? "active" : "inactive",
        user_id: currentUser?.id || "",
        org_id: currentUser?.user_metadata?.org_id || "",
        system_prompt: config.system_prompt || "",
        fallback_message: config.fallback_message || "",
        ai_model_config: config.ai_model_config || {
          model: "gpt-3.5-turbo",
          temperature: 0.7,
          max_tokens: 1000,
        },
        chain_status: "active",
        is_active: config.is_active,
      };

      console.log("💾 Attempting to save chatbot:", {
        isEditMode,
        chatbotId: selectedChatbot?.id,
        chatbotData,
        currentUser: currentUser
          ? { id: currentUser.id, org_id: currentUser.user_metadata?.org_id }
          : null,
      });

      let savedChatbot: ChatbotInfo;

      if (isEditMode && selectedChatbot?.id) {
        console.log("🔄 Updating existing chatbot:", selectedChatbot.id);
        savedChatbot = await chatbotApi.updateChatbot(
          selectedChatbot.id,
          chatbotData
        );
        toast.success("Chatbot updated successfully!");
      } else {
        console.log("✨ Creating new chatbot");
        savedChatbot = await chatbotApi.createChatbot(chatbotData);
        toast.success("Chatbot created successfully!");
        setIsEditMode(true);
        setShowCreateForm(false);
        setSelectedChatbot(savedChatbot);
        router.push(`/dashboard/${userId}/customize?id=${savedChatbot.id}`);
      }

      // Clear unsaved changes flag
      setUnsavedChanges(false);
      setValidationErrors([]);

      // After successful save, refresh the data
      await loadOrgChatbots();
    } catch (error) {
      console.error("❌ Error saving chatbot:", error);

      let errorMessage = "Failed to save chatbot configuration";

      if (error instanceof Error) {
        console.error("🔍 Error details:", {
          message: error.message,
          stack: error.stack,
          name: error.name,
        });

        if (
          error.message.includes("401") ||
          error.message.includes("Authentication")
        ) {
          errorMessage = "Authentication failed. Please log in again.";
        } else if (error.message.includes("403")) {
          errorMessage = "Permission denied. Check your access rights.";
        } else if (error.message.includes("404")) {
          errorMessage =
            "Backend endpoint not found. Check if server is running on http://localhost:8001";
        } else if (error.message.includes("500")) {
          errorMessage = "Server error. Please try again later.";
        } else if (
          error.message.includes("Network") ||
          error.message.includes("fetch") ||
          error.message.includes("Failed to fetch")
        ) {
          errorMessage =
            "Cannot connect to server. Is the backend running on http://localhost:8001?";
        } else {
          errorMessage = `Save failed: ${error.message}`;
        }
      }

      toast.error(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  // Enhanced preview functionality

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            Advanced Chatbot Configuration
            {unsavedChanges && (
              <Badge variant="secondary" className="ml-2">
                Unsaved Changes
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
            <Label className="text-sm">Active</Label>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <Alert className="mb-4 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription>
              <strong>Please fix the following errors:</strong>
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

        {/* Single tab for chatbot configuration - context engineering moved to separate AI page */}
        <div className="w-full">
          {/* Chatbot Configuration Form */}
          <div className="space-y-4">
            <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Chatbot Name</Label>
                <Input
                  id="name"
                  value={inputValues.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter chatbot name..."
                  className="mt-4"
                />
              </div>
            </div>

            <div className="my-7">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={inputValues.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Describe what this chatbot does and its purpose..."
                className="mt-4"
                rows={3}
              />
            </div>

            <div className="my-7">
              <Label htmlFor="avatar_url">Avatar URL</Label>
              <Input
                id="avatar_url"
                value={inputValues.avatar_url}
                onChange={(e) =>
                  handleInputChange("avatar_url", e.target.value)
                }
                placeholder="https://example.com/avatar.png"
                className="mt-4"
                type="url"
              />
              <p className="text-sm text-gray-500 mt-2">
                Optional: URL to an image that will be used as the
                chatbot&apos;s avatar in the chat widget.
              </p>
            </div>

            <div className="my-7">
              <Label>Personality & Tone</Label>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {TONE_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className={`p-2 border rounded-lg cursor-pointer transition-all ${
                      config.tone === option.value
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
              <Label>Primary Color</Label>
              <div className="mt-2">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {COLOR_PRESETS.map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 ${
                        config.color_hex === color
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
                <Label htmlFor="greeting">Greeting Message</Label>
                <Textarea
                  id="greeting"
                  value={inputValues.greeting_message}
                  onChange={(e) =>
                    handleInputChange("greeting_message", e.target.value)
                  }
                  placeholder="Hello! How can I help you today?"
                  className="mt-4"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="fallback">Fallback Message</Label>
                <Textarea
                  id="fallback"
                  value={inputValues.fallback_message}
                  onChange={(e) =>
                    handleInputChange("fallback_message", e.target.value)
                  }
                  placeholder="I'm sorry, I don't have information about that..."
                  className="mt-4"
                  rows={2}
                />
              </div>
            </div>
            <div className="my-9">
              <Label htmlFor="behavior">Behavior & Personality</Label>
              <Textarea
                id="behavior"
                value={inputValues.behavior}
                onChange={(e) => handleInputChange("behavior", e.target.value)}
                placeholder="Describe how the chatbot should behave, its personality, and interaction style..."
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

        {/* Enhanced Save Section */}
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
