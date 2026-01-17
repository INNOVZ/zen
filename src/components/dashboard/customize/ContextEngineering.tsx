"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useCustomizeStore } from "@/stores/customizeStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContextConfig, conversationApi } from "@/app/api/routes";
import { Save } from "lucide-react";
import { toast } from "sonner";

interface ContextEngineeringProps {
  className?: string;
}

export default function ContextEngineering({
  className,
}: ContextEngineeringProps) {
  const { saving, contextConfig, updateContextConfig, setSaving } =
    useCustomizeStore();

  // Individual input states for text fields that need debouncing
  const [textInputs, setTextInputs] = useState({
    business_context: contextConfig.business_context || "",
    specialized_instructions: contextConfig.specialized_instructions || "",
  });

  // Update text inputs when store config changes
  useEffect(() => {
    setTextInputs({
      business_context: contextConfig.business_context || "",
      specialized_instructions: contextConfig.specialized_instructions || "",
    });
  }, [contextConfig]);

  // Debounce function
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

  // Debounced update for text fields
  const debouncedTextUpdate = React.useMemo(() => {
    return debounce((field: string, value: string) => {
      updateContextConfig({ [field]: value } as Partial<ContextConfig>);
    }, 300);
  }, [updateContextConfig]);

  // Handle text input changes with debouncing
  const handleTextInputChange = useCallback(
    (field: keyof typeof textInputs, value: string) => {
      // Update local state immediately
      setTextInputs((prev) => ({ ...prev, [field]: value }));
      // Debounce the store update
      debouncedTextUpdate(field, value);
    },
    [debouncedTextUpdate]
  );

  // Handle immediate config changes (numbers, booleans, selects)
  const handleConfigChange = useCallback(
    (updates: Partial<ContextConfig>) => {
      updateContextConfig(updates);
    },
    [updateContextConfig]
  );

  // Validate context config
  const validateContextConfig = (config: ContextConfig): string[] => {
    const errors: string[] = [];

    // Only require org_id if it's truly empty after fallback attempts
    if (!config.org_id || config.org_id.trim() === "") {
      errors.push(
        "Organization ID could not be determined. Please try refreshing the page."
      );
    }
    const confidence = config.confidence_threshold ?? 0.7;
    if (confidence < 0.3 || confidence > 0.9) {
      errors.push("Confidence threshold must be between 30% and 90%");
    }

    const chunks = config.final_context_chunks ?? 5;
    if (chunks < 1 || chunks > 10) {
      errors.push("Context chunks must be between 1 and 10");
    }

    return errors;
  };

  // Remove the old updateContextConfigLocal function - replaced with handleConfigChange

  // Enhanced context config save with proper error handling
  const saveContextConfig = async (
    updates: Partial<ContextConfig>,
    showToast: boolean = true
  ) => {
    try {
      setSaving(true);

      // Validate updates first
      const mergedConfig = { ...contextConfig, ...updates };
      const validationErrors = validateContextConfig(mergedConfig);

      if (validationErrors.length > 0) {
        throw new Error(`Validation failed: ${validationErrors.join(", ")}`);
      }

      console.debug("Saving context config with updates:", updates);

      // Save to backend first
      const response = await conversationApi.updateContextConfig(updates);
      console.debug(
        "Context config update response:",
        JSON.stringify(response, null, 2)
      );

      if (response && response.success) {
        // Only update local state after successful backend save
        updateContextConfig(updates);

        if (showToast) {
          // Show different messages based on response
          if (response.message.includes("locally")) {
            toast.success("Context configuration saved locally!");
          } else {
            toast.success("Context configuration saved successfully!");
          }
        }
      } else {
        throw new Error(response?.message || "Save failed");
      }
    } catch (error) {
      console.debug("Error saving context config:", error);

      if (showToast) {
        let errorMessage = "Failed to save context configuration.";

        if (error instanceof Error) {
          if (
            error.message.includes("404") ||
            error.message.includes("not found")
          ) {
            errorMessage += " Backend endpoint not available.";
          } else if (
            error.message.includes("401") ||
            error.message.includes("Authentication")
          ) {
            errorMessage += " Please log in again.";
          } else if (
            error.message.includes("Network") ||
            error.message.includes("fetch")
          ) {
            errorMessage += " Check your connection.";
          } else {
            errorMessage += ` Error: ${error.message}`;
          }
        }

        toast.error(errorMessage);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🔧</span>
          Advanced AI Configuration
        </CardTitle>
        <p className="text-gray-600">
          Fine-tune how your AI processes and retrieves information to improve
          response quality and accuracy.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Model and Performance Settings */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h4 className="text-md font-semibold text-blue-900 mb-4">
            Model & Performance Settings
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="model-tier">AI Model Tier</Label>
              <Select
                value={contextConfig.model_tier || "balanced"}
                onValueChange={(value) =>
                  handleConfigChange({
                    model_tier: value as
                      | "fast"
                      | "balanced"
                      | "premium"
                      | "enterprise",
                  })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fast">
                    <div className="flex items-center gap-2">
                      <span>⚡</span>
                      <div>
                        <div className="font-medium">Fast</div>
                        <div className="text-xs text-gray-500">
                          Quick responses, basic quality
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="balanced">
                    <div className="flex items-center gap-2">
                      <span>⚖️</span>
                      <div>
                        <div className="font-medium">Balanced</div>
                        <div className="text-xs text-gray-500">
                          Good speed and quality balance
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="premium">
                    <div className="flex items-center gap-2">
                      <span>💎</span>
                      <div>
                        <div className="font-medium">Premium</div>
                        <div className="text-xs text-gray-500">
                          High quality, slower responses
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="enterprise">
                    <div className="flex items-center gap-2">
                      <span>🏢</span>
                      <div>
                        <div className="font-medium">Enterprise</div>
                        <div className="text-xs text-gray-500">
                          Maximum quality and features
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Maximum Response Time</Label>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>3s</span>
                  <span>
                    {((contextConfig.max_response_time_ms ?? 10000) / 1000).toFixed(1)}s
                  </span>
                  <span>30s</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="30000"
                  step="1000"
                  value={contextConfig.max_response_time_ms ?? 10000}
                  onChange={(e) =>
                    handleConfigChange({
                      max_response_time_ms: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Retrieval Strategy Settings */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <h4 className="text-md font-semibold text-green-900 mb-4">
            Information Retrieval Strategy
          </h4>
          <div className="space-y-4">
            <div>
              <Label htmlFor="retrieval-strategy">Retrieval Method</Label>
              <Select
                value={contextConfig.retrieval_strategy || "hybrid"}
                onValueChange={(value) =>
                  handleConfigChange({
                    retrieval_strategy: value as
                      | "semantic_only"
                      | "hybrid"
                      | "keyword_boost"
                      | "keyword_only"
                      | "domain_specific",
                  })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semantic_only">
                    <div>
                      <div className="font-medium">Semantic Only</div>
                      <div className="text-xs text-gray-500">
                        AI-powered meaning-based search
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="hybrid">
                    <div>
                      <div className="font-medium">Hybrid</div>
                      <div className="text-xs text-gray-500">
                        Combines semantic + keyword search
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="keyword_boost">
                    <div>
                      <div className="font-medium">Keyword Boost (Recommended)</div>
                      <div className="text-xs text-gray-500">
                        Semantic search + intelligent topic boosting
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="keyword_only">
                    <div>
                      <div className="font-medium">Keyword Only</div>
                      <div className="text-xs text-gray-500">
                        Traditional keyword matching
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="domain_specific">
                    <div>
                      <div className="font-medium">Domain Specific</div>
                      <div className="text-xs text-gray-500">
                        Specialized for specific industries
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Initial Retrieval Count</Label>
                <Input
                  type="number"
                  min="10"
                  max="100"
                  value={contextConfig.initial_retrieval_count ?? 20}
                  onChange={(e) =>
                    handleConfigChange({
                      initial_retrieval_count: parseInt(e.target.value) || 20,
                    })
                  }
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Documents to retrieve initially
                </p>
              </div>

              <div>
                <Label>Semantic Rerank Count</Label>
                <Input
                  type="number"
                  min="5"
                  max="50"
                  value={contextConfig.semantic_rerank_count ?? 10}
                  onChange={(e) =>
                    handleConfigChange({
                      semantic_rerank_count: parseInt(e.target.value) || 10,
                    })
                  }
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Documents for AI reranking
                </p>
              </div>

              <div>
                <Label>Final Context Chunks</Label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={contextConfig.final_context_chunks ?? 5}
                  onChange={(e) =>
                    handleConfigChange({
                      final_context_chunks: parseInt(e.target.value) || 5,
                    })
                  }
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Final pieces used for response
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Control Settings */}
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
          <h4 className="text-md font-semibold text-purple-900 mb-4">
            Quality Control & Safety
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-3 bg-white rounded-md border">
                <div>
                  <Label>Hallucination Detection</Label>
                  <p className="text-xs text-gray-500">
                    Prevent AI from making up information
                  </p>
                </div>
                <Switch
                  checked={contextConfig.enable_hallucination_check}
                  onCheckedChange={(checked) =>
                    handleConfigChange({
                      enable_hallucination_check: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-md border">
                <div>
                  <Label>Source Verification</Label>
                  <p className="text-xs text-gray-500">
                    Verify information against knowledge base
                  </p>
                </div>
                <Switch
                  checked={contextConfig.enable_source_verification}
                  onCheckedChange={(checked) =>
                    handleConfigChange({
                      enable_source_verification: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-md border">
                <div>
                  <Label>Query Rewriting</Label>
                  <p className="text-xs text-gray-500">
                    Improve search queries automatically
                  </p>
                </div>
                <Switch
                  checked={contextConfig.enable_query_rewriting}
                  onCheckedChange={(checked) =>
                    handleConfigChange({
                      enable_query_rewriting: checked,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-md border">
                <div>
                  <Label>Semantic Re-ranking</Label>
                  <p className="text-xs text-gray-500">
                    AI-powered result relevance improvement
                  </p>
                </div>
                <Switch
                  checked={contextConfig.enable_semantic_rerank}
                  onCheckedChange={(checked) =>
                    handleConfigChange({
                      enable_semantic_rerank: checked,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <Label>Confidence Threshold</Label>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Permissive (30%)</span>
                  <span className="font-medium">
                    {Math.round((contextConfig.confidence_threshold ?? 0.7) * 100)}%
                  </span>
                  <span>Conservative (90%)</span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="0.9"
                  step="0.05"
                  value={contextConfig.confidence_threshold ?? 0.7}
                  onChange={(e) =>
                    handleConfigChange({
                      confidence_threshold: parseFloat(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <p className="text-xs text-gray-500">
                  Higher values make the AI more conservative about providing
                  answers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Context Settings */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
          <h4 className="text-md font-semibold text-orange-900 mb-4">
            Business Context & Instructions
          </h4>
          <div className="space-y-4">
            <div>
              <Label htmlFor="business-context">Business Context</Label>
              <Textarea
                id="business-context"
                value={textInputs.business_context}
                onChange={(e) =>
                  handleTextInputChange("business_context", e.target.value)
                }
                className="mt-2"
                rows={3}
                placeholder="Describe your business, industry, and key context the AI should understand..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Help the AI understand your business domain and context
              </p>
            </div>

            <div>
              <Label htmlFor="specialized-instructions">
                Specialized Instructions
              </Label>
              <Textarea
                id="specialized-instructions"
                value={textInputs.specialized_instructions}
                onChange={(e) =>
                  handleTextInputChange(
                    "specialized_instructions",
                    e.target.value
                  )
                }
                className="mt-2"
                rows={3}
                placeholder="Any specific instructions for how the AI should behave or respond..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Specific behavioral guidelines and response patterns
              </p>
            </div>
          </div>
        </div>

        {/* Configuration Summary */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="text-md font-semibold text-gray-900 mb-3">
            Current Configuration Summary
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Model Tier:</span>
              <div className="font-medium capitalize">
                {contextConfig.model_tier}
              </div>
            </div>
            <div>
              <span className="text-gray-600">Strategy:</span>
              <div className="font-medium">
                {(contextConfig.retrieval_strategy || "hybrid").replace("_", " ")}
              </div>
            </div>
            <div>
              <span className="text-gray-600">Context Chunks:</span>
              <div className="font-medium">
                {contextConfig.final_context_chunks ?? 5}
              </div>
            </div>
            <div>
              <span className="text-gray-600">Confidence:</span>
              <div className="font-medium">
                {Math.round((contextConfig.confidence_threshold ?? 0.7) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* Save Configuration Button */}
        <div className="pt-4 border-t">
          <Button
            onClick={() => saveContextConfig(contextConfig, true)}
            disabled={saving}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="lg"
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Saving Configuration..." : "Save Context Configuration"}
          </Button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Save your advanced AI configuration settings to the backend
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
