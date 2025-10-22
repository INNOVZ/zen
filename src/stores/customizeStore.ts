import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { API_BASE_URL } from "@/config/api";
import type {
  ChatbotInfo,
  UploadFile,
  ConversationInfo,
} from "@/types/schemaTypes";
import type {
  ContextConfig,
  PerformanceMetrics,
  ChatResponse,
} from "@/app/api/routes";
import type { User } from "@supabase/supabase-js";
import { chatbotApi, conversationApi, uploadsApi } from "@/app/api/routes";
import { toast } from "sonner";

// Define the store state interface
interface CustomizeState {
  // Loading states
  loading: boolean;
  saving: boolean;
  analyticsLoading: boolean;
  uploading: boolean;

  // UI state
  activeTab: string;
  showCreateForm: boolean;
  showEmbedModal: boolean;
  isEditMode: boolean;

  // User and organization data
  currentUser: User | null;
  orgChatbots: ChatbotInfo[];
  selectedChatbot: ChatbotInfo | null;

  // Upload and embed data
  uploads: UploadFile[];
  embedCode: string;

  // Analytics and performance
  performanceMetrics: PerformanceMetrics | null;
  conversations: ConversationInfo[];

  // Deletion state
  deletingChatbotId: string | null;

  // Configuration
  contextConfig: ContextConfig;
  config: ChatbotInfo;

  // Error states
  error: string | null;
  connectionStatus: "connected" | "disconnected" | "checking" | "partial";

  // Chat state
  chatMessages: ChatResponse[];
  currentConversationId: string | null;

  // Basic Actions
  setLoading: (loading: boolean) => void;
  setSaving: (saving: boolean) => void;
  setActiveTab: (activeTab: string) => void;
  setShowCreateForm: (showCreateForm: boolean) => void;
  setShowEmbedModal: (showEmbedModal: boolean) => void;
  setIsEditMode: (isEditMode: boolean) => void;
  setAnalyticsLoading: (analyticsLoading: boolean) => void;
  setUploading: (uploading: boolean) => void;
  setCurrentUser: (currentUser: User | null) => void;
  setError: (error: string | null) => void;
  setConnectionStatus: (
    status: "connected" | "disconnected" | "checking"
  ) => void;

  // Data Actions
  setOrgChatbots: (orgChatbots: ChatbotInfo[]) => void;
  setSelectedChatbot: (selectedChatbot: ChatbotInfo | null) => void;
  setUploads: (uploads: UploadFile[]) => void;
  setEmbedCode: (embedCode: string) => void;
  setPerformanceMetrics: (
    performanceMetrics: PerformanceMetrics | null
  ) => void;
  setDeletingChatbotId: (deletingChatbotId: string | null) => void;
  setConversations: (conversations: ConversationInfo[]) => void;
  setChatMessages: (messages: ChatResponse[]) => void;
  setCurrentConversationId: (id: string | null) => void;

  // Configuration Actions
  setContextConfig: (contextConfig: ContextConfig) => void;
  updateContextConfig: (updates: Partial<ContextConfig>) => void;
  setConfig: (config: ChatbotInfo) => void;
  updateConfig: (updates: Partial<ChatbotInfo>) => void;

  // Enhanced Async Actions
  loadChatbots: () => Promise<void>;
  loadUploads: () => Promise<void>;
  loadContextConfig: () => Promise<void>;
  loadPerformanceMetrics: (days?: number) => Promise<void>;
  createChatbot: (config: ChatbotInfo) => Promise<ChatbotInfo | null>;
  updateChatbot: (
    chatbotId: string,
    config: ChatbotInfo
  ) => Promise<ChatbotInfo | null>;
  deleteChatbot: (chatbotId: string) => Promise<void>;
  saveContextConfig: (updates: Partial<ContextConfig>) => Promise<void>;
  uploadFile: (file: File, type: string) => Promise<UploadFile | null>;
  generateEmbedCode: (chatbotId: string) => string;
  testConnection: () => Promise<boolean>;

  // Utility Actions
  resetState: () => void;
  initializeStore: (retryCount?: number) => Promise<void>;
}

// Default context configuration
const defaultContextConfig: ContextConfig = {
  org_id: "",
  config_name: "default",
  initial_retrieval_count: 20,
  semantic_rerank_count: 10,
  final_context_chunks: 5,
  max_context_length: 4000,
  enable_query_rewriting: true,
  max_query_variants: 3,
  conversation_context_turns: 3,
  retrieval_strategy: "hybrid",
  semantic_weight: 0.6,
  keyword_weight: 0.4,
  model_tier: "balanced",
  embedding_model: "text-embedding-3-small",
  rerank_model: "gpt-3.5-turbo",
  enable_semantic_rerank: true,
  enable_hallucination_check: true,
  enable_source_verification: true,
  confidence_threshold: 0.7,
  max_response_time_ms: 5000,
  enable_caching: true,
  cache_ttl_minutes: 60,
  domain_filters: {},
  business_context: "",
  specialized_instructions: "",
  enable_detailed_logging: true,
  log_user_queries: true,
  collect_feedback: true,
  created_at: "",
  updated_at: "",
};

// Default chatbot configuration
const defaultConfig: ChatbotInfo = {
  id: "",
  name: "",
  description: "",
  color_hex: "#6a8fff",
  tone: "helpful",
  behavior: "Be helpful and informative while maintaining professionalism",
  system_prompt: "",
  greeting_message:
    "Hello! I'm your INNOVZ AI Assistant. How can I help you today?",
  fallback_message:
    "I apologize, but I don't have enough information to answer that accurately. Could you please rephrase or provide more context?",
  ai_model_config: {
    model: "gpt-4",
    temperature: 0.7,
    max_tokens: 1000,
  },
  is_active: true,
  chain_status: "ready",
  trainer_at: "",
  created_at: "",
  status: "active",
  deployment_config: {
    url: "",
    headers: {},
    method: "POST",
  },
  avatar_url: "",
};

// Create the Zustand store
export const useCustomizeStore = create<CustomizeState>()(
  devtools(
    (set, get) => ({
      // Initial state
      loading: true,
      saving: false,
      activeTab: "basic",
      showCreateForm: false,
      showEmbedModal: false,
      isEditMode: false,
      analyticsLoading: false,
      uploading: false,

      currentUser: null,
      error: null,
      connectionStatus: "checking",

      orgChatbots: [],
      selectedChatbot: null,
      uploads: [],
      embedCode: "",
      performanceMetrics: null,
      conversations: [],
      deletingChatbotId: null,

      contextConfig: defaultContextConfig,
      config: defaultConfig,
      chatMessages: [],
      currentConversationId: null,

      // Basic Actions
      setLoading: (loading) => set({ loading }, false, "setLoading"),
      setSaving: (saving) => set({ saving }, false, "setSaving"),
      setActiveTab: (activeTab) => set({ activeTab }, false, "setActiveTab"),
      setShowCreateForm: (showCreateForm) =>
        set({ showCreateForm }, false, "setShowCreateForm"),
      setShowEmbedModal: (showEmbedModal) =>
        set({ showEmbedModal }, false, "setShowEmbedModal"),
      setIsEditMode: (isEditMode) =>
        set({ isEditMode }, false, "setIsEditMode"),
      setAnalyticsLoading: (analyticsLoading) =>
        set({ analyticsLoading }, false, "setAnalyticsLoading"),
      setUploading: (uploading) => set({ uploading }, false, "setUploading"),
      setCurrentUser: (currentUser) =>
        set({ currentUser }, false, "setCurrentUser"),
      setError: (error) => set({ error }, false, "setError"),
      setConnectionStatus: (connectionStatus) =>
        set({ connectionStatus }, false, "setConnectionStatus"),

      // Data Actions
      setOrgChatbots: (orgChatbots) =>
        set({ orgChatbots }, false, "setOrgChatbots"),
      setSelectedChatbot: (selectedChatbot) =>
        set({ selectedChatbot }, false, "setSelectedChatbot"),
      setUploads: (uploads) => set({ uploads }, false, "setUploads"),
      setEmbedCode: (embedCode) => set({ embedCode }, false, "setEmbedCode"),
      setPerformanceMetrics: (performanceMetrics) =>
        set({ performanceMetrics }, false, "setPerformanceMetrics"),
      setDeletingChatbotId: (deletingChatbotId) =>
        set({ deletingChatbotId }, false, "setDeletingChatbotId"),
      setConversations: (conversations) =>
        set({ conversations }, false, "setConversations"),
      setChatMessages: (chatMessages) =>
        set({ chatMessages }, false, "setChatMessages"),
      setCurrentConversationId: (currentConversationId) =>
        set({ currentConversationId }, false, "setCurrentConversationId"),

      // Configuration Actions
      setContextConfig: (contextConfig) =>
        set({ contextConfig }, false, "setContextConfig"),
      updateContextConfig: (updates) =>
        set(
          (state) => ({
            contextConfig: { ...state.contextConfig, ...updates },
          }),
          false,
          "updateContextConfig"
        ),

      setConfig: (config) => set({ config }, false, "setConfig"),
      updateConfig: (updates) =>
        set(
          (state) => ({
            config: { ...state.config, ...updates },
          }),
          false,
          "updateConfig"
        ),

      // Enhanced Async Actions with better error handling
      loadChatbots: async () => {
        try {
          set({ loading: true, error: null });
          const chatbots = await chatbotApi.getChatbots();
          set({
            orgChatbots: chatbots,
            loading: false,
            connectionStatus: "connected",
          });
        } catch (error) {
          const isDevelopment = process.env.NODE_ENV === 'development';
          const isConnectionError = error instanceof Error && (
            error.message.includes("Unable to connect") ||
            error.message.includes("Backend server unavailable") ||
            error.message.includes("ECONNREFUSED") ||
            error.message.includes("Not authenticated")
          );

          // Check if this is likely an initial load error (no chatbots loaded yet)
          const currentState = get();
          const isInitialLoad = !currentState.orgChatbots || currentState.orgChatbots.length === 0;

          if (isDevelopment && isConnectionError && isInitialLoad) {
            // In development, suppress error messages during initial load
            console.debug("Initial load - chatbots loading failed (likely auth in progress)");
            set({
              loading: false,
              connectionStatus: "disconnected",
            });
            return; // Don't set error state for initial load failures
          }

          if (isDevelopment && isConnectionError) {
            // In development, just log a warning for connection errors
            console.warn("Chatbots loading failed - backend server not available");
          } else {
            console.error("Error loading chatbots:", error);
          }

          set({
            error: isConnectionError ? "Backend server unavailable" : "Failed to load chatbots",
            loading: false,
            connectionStatus: "disconnected",
          });

          // Only show toast for unexpected errors, not connection issues in development
          if (!isDevelopment || !isConnectionError) {
            toast.error("Failed to load chatbots. Please check your connection.");
          }
        }
      },

      loadUploads: async () => {
        try {
          const uploads = await uploadsApi.getUploads();
          set({ uploads, connectionStatus: "connected" });
        } catch (error) {
          const isDevelopment = process.env.NODE_ENV === 'development';
          const isConnectionError = error instanceof Error && (
            error.message.includes("Unable to connect") ||
            error.message.includes("Backend server unavailable") ||
            error.message.includes("ECONNREFUSED")
          );

          if (isDevelopment && isConnectionError) {
            console.warn("Uploads loading failed - backend server not available");
          } else {
            console.error("Error loading uploads:", error);
          }

          set({
            error: isConnectionError ? "Backend server unavailable" : "Failed to load uploads",
            connectionStatus: "disconnected",
          });

          if (!isDevelopment || !isConnectionError) {
            toast.error("Failed to load knowledge base files.");
          }
        }
      },

      loadContextConfig: async () => {
        try {
          const response = await conversationApi.getContextConfig();
          if (response && response.success) {
            set({
              contextConfig: response.config,
              connectionStatus: "connected",
            });
          }
        } catch (error) {
          console.error("Error loading context config:", error);
          set({
            error: "Failed to load context configuration",
            connectionStatus: "disconnected",
          });
          toast.error("Failed to load AI configuration.");
        }
      },

      loadPerformanceMetrics: async (days = 7) => {
        try {
          set({ analyticsLoading: true });
          const metrics = await conversationApi.getAnalyticsDashboard(days);
          set({
            performanceMetrics: metrics,
            analyticsLoading: false,
            connectionStatus: "connected",
          });
        } catch (error) {
          console.error("Error loading performance metrics:", error);
          set({
            performanceMetrics: null,
            analyticsLoading: false,
            error: "Failed to load analytics",
            connectionStatus: "disconnected",
          });
          // Don't show error toast for analytics as it's not critical
        }
      },

      createChatbot: async (config) => {
        try {
          set({ saving: true, error: null });
          const chatbot = await chatbotApi.createChatbot(config);
          set((state) => ({
            orgChatbots: [...state.orgChatbots, chatbot],
            selectedChatbot: chatbot,
            saving: false,
            showCreateForm: false,
            isEditMode: true,
            connectionStatus: "connected",
          }));
          toast.success("Chatbot created successfully!");
          return chatbot;
        } catch (error) {
          console.error("Error creating chatbot:", error);
          set({
            saving: false,
            error: "Failed to create chatbot",
            connectionStatus: "disconnected",
          });

          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to create chatbot. Please try again.";
          toast.error(errorMessage);
          return null;
        }
      },

      updateChatbot: async (chatbotId, config) => {
        try {
          set({ saving: true, error: null });
          const updatedChatbot = await chatbotApi.updateChatbot(
            chatbotId,
            config
          );
          set((state) => ({
            orgChatbots: state.orgChatbots.map((bot) =>
              bot.id === chatbotId ? updatedChatbot : bot
            ),
            selectedChatbot: updatedChatbot,
            saving: false,
            connectionStatus: "connected",
          }));
          toast.success("Chatbot updated successfully!");
          return updatedChatbot;
        } catch (error) {
          console.error("Error updating chatbot:", error);
          set({
            saving: false,
            error: "Failed to update chatbot",
            connectionStatus: "disconnected",
          });

          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to update chatbot. Please try again.";
          toast.error(errorMessage);
          return null;
        }
      },

      deleteChatbot: async (chatbotId) => {
        try {
          set({ deletingChatbotId: chatbotId, error: null });
          await chatbotApi.deleteChatbot(chatbotId);
          set((state) => ({
            orgChatbots: state.orgChatbots.filter(
              (bot) => bot.id !== chatbotId
            ),
            selectedChatbot:
              state.selectedChatbot?.id === chatbotId
                ? null
                : state.selectedChatbot,
            deletingChatbotId: null,
            connectionStatus: "connected",
          }));
          toast.success("Chatbot deleted successfully!");
        } catch (error) {
          console.error("Error deleting chatbot:", error);
          set({
            deletingChatbotId: null,
            error: "Failed to delete chatbot",
            connectionStatus: "disconnected",
          });
          toast.error("Failed to delete chatbot. Please try again.");
        }
      },

      saveContextConfig: async (updates) => {
        try {
          set({ saving: true, error: null });
          const response = await conversationApi.updateContextConfig(updates);

          if (response && response.success) {
            set((state) => ({
              contextConfig: { ...state.contextConfig, ...updates },
              saving: false,
              connectionStatus: "connected",
            }));
            toast.success("Context configuration updated successfully!");
          } else {
            throw new Error(response?.message || "Save failed");
          }
        } catch (error) {
          console.error("Error saving context config:", error);
          set({
            saving: false,
            error: "Failed to update context configuration",
            connectionStatus: "disconnected",
          });

          const errorMessage =
            error instanceof Error
              ? `Failed to save: ${error.message}`
              : "Failed to update context configuration. Please try again.";
          toast.error(errorMessage);
        }
      },

      uploadFile: async (file, type) => {
        try {
          set({ uploading: true, error: null });
          const uploadResult = await uploadsApi.uploadFile(file, type);
          set((state) => ({
            uploads: [...state.uploads, uploadResult],
            uploading: false,
            connectionStatus: "connected",
          }));
          toast.success("File uploaded successfully!");
          return uploadResult;
        } catch (error) {
          console.error("Error uploading file:", error);
          set({
            uploading: false,
            error: "Failed to upload file",
            connectionStatus: "disconnected",
          });
          toast.error("Failed to upload file. Please try again.");
          return null;
        }
      },

      testConnection: async () => {
        try {
          set({ connectionStatus: "checking" });
          // First try a simple health check without auth
          try {
            const healthResponse = await conversationApi.getHealthCheck();
            if (healthResponse) {
              // If basic health check passes, try authenticated connection
              const result = await conversationApi.testConnection();
              const isConnected = result.success;
              set({
                connectionStatus: isConnected ? "connected" : "disconnected",
              });
              return isConnected;
            }
          } catch (healthError) {
            console.warn(
              "Health check failed, trying direct connection test:",
              healthError
            );
          }

          // Fall back to direct authenticated test
          const result = await conversationApi.testConnection();
          const isConnected = result.success;
          set({ connectionStatus: isConnected ? "connected" : "disconnected" });
          return isConnected;
        } catch (error) {
          console.error("Connection test failed:", error);
          set({ connectionStatus: "disconnected" });
          return false;
        }
      },

      generateEmbedCode: (chatbotId) => {
        const API_BASE =
          API_BASE_URL || "https://zaakiy-production.up.railway.app";
        const embedScript = `<script>
  (function() {
    var script = document.createElement('script');
    script.src = '${API_BASE}/api/public/chatbot/${chatbotId}/widget.js';
    script.setAttribute('data-chatbot-id', '${chatbotId}');
    script.setAttribute('data-api-url', '${API_BASE}');
    document.head.appendChild(script);
  })();
</script>`;
        set({ embedCode: embedScript, showEmbedModal: true });
        return embedScript;
      },

      initializeStore: async (retryCount = 0) => {
        const maxRetries = 3;
        try {
          set({ loading: true, error: null, connectionStatus: "checking" });

          // Test connection first with timeout and retry logic
          let connectionResult;
          try {
            connectionResult = await get().testConnection();
          } catch (connectionError) {
            console.warn(
              "Initial connection test failed, attempting to continue:",
              connectionError
            );
            // Continue with initialization even if connection test fails
            connectionResult = false;
          }

          // Load all data in parallel with individual error handling
          const results = await Promise.allSettled([
            chatbotApi.getChatbots(),
            uploadsApi.getUploads(),
            conversationApi.getContextConfig(),
          ]);

          let hasAnySuccess = false;
          let criticalFailures = 0;

          // Handle chatbots result (critical for basic functionality)
          if (results[0].status === "fulfilled") {
            set({ orgChatbots: results[0].value });
            hasAnySuccess = true;
          } else {
            console.error("Failed to load chatbots:", results[0].reason);
            criticalFailures++;
          }

          // Handle uploads result (non-critical)
          if (results[1].status === "fulfilled") {
            set({ uploads: results[1].value });
            hasAnySuccess = true;
          } else {
            console.warn(
              "Failed to load uploads (non-critical):",
              results[1].reason
            );
          }

          // Handle context config result (non-critical, has defaults)
          if (
            results[2].status === "fulfilled" &&
            results[2].value &&
            results[2].value.success
          ) {
            // Ensure loaded config has proper org_id
            const loadedConfig = {
              ...results[2].value.config,
              org_id:
                results[2].value.config.org_id || `user_${Date.now()}_org`,
            };
            set({ contextConfig: loadedConfig });
            console.debug("✅ Context config loaded successfully");
            hasAnySuccess = true;
          } else {
            // Context config failed to load - this is expected if backend is not available
            console.debug(
              "🔧 Context config not available, using built-in defaults"
            );
            // Ensure default config has proper org_id
            const defaultConfigWithOrgId = {
              ...defaultContextConfig,
              org_id: `user_${Date.now()}_org`,
            };
            set({ contextConfig: defaultConfigWithOrgId });
          }

          // Determine if initialization was successful enough
          if (hasAnySuccess && criticalFailures === 0) {
            set({
              loading: false,
              connectionStatus: connectionResult ? "connected" : "partial",
              error: null,
            });
            if (!connectionResult) {
              toast.warning(
                "Some features may be limited due to connectivity issues"
              );
            }
          } else if (
            hasAnySuccess &&
            criticalFailures > 0 &&
            retryCount < maxRetries
          ) {
            // Partial success but critical failures - retry
            console.log(
              `Retrying initialization (${
                retryCount + 1
              }/${maxRetries}) due to critical failures`
            );
            await new Promise((resolve) =>
              setTimeout(resolve, Math.pow(2, retryCount) * 1000)
            );
            return get().initializeStore(retryCount + 1);
          } else if (!hasAnySuccess && retryCount < maxRetries) {
            // Complete failure - retry
            console.log(
              `Retrying initialization (${
                retryCount + 1
              }/${maxRetries}) due to complete failure`
            );
            await new Promise((resolve) =>
              setTimeout(resolve, Math.pow(2, retryCount) * 1000)
            );
            return get().initializeStore(retryCount + 1);
          } else {
            // Final failure after retries
            throw new Error(
              `Failed to load critical application data after ${
                retryCount + 1
              } attempts`
            );
          }
        } catch (error) {
          console.error("Error initializing store:", error);
          const isRetryable =
            retryCount < maxRetries &&
            error instanceof Error &&
            (error.message.includes("network") ||
              error.message.includes("timeout") ||
              error.message.includes("fetch"));

          if (isRetryable) {
            console.log(
              `Retrying initialization (${
                retryCount + 1
              }/${maxRetries}) after error:`,
              error.message
            );
            await new Promise((resolve) =>
              setTimeout(resolve, Math.pow(2, retryCount) * 1500)
            );
            return get().initializeStore(retryCount + 1);
          } else {
            set({
              loading: false,
              error: `Failed to initialize application${
                retryCount > 0 ? ` after ${retryCount + 1} attempts` : ""
              }`,
              connectionStatus: "disconnected",
            });
            toast.error(
              "Failed to initialize application. Please check your connection and try refreshing the page."
            );
          }
        }
      },

      resetState: () =>
        set(
          {
            loading: true,
            saving: false,
            activeTab: "basic",
            showCreateForm: false,
            showEmbedModal: false,
            isEditMode: false,
            analyticsLoading: false,
            uploading: false,
            currentUser: null,
            error: null,
            connectionStatus: "checking",
            orgChatbots: [],
            selectedChatbot: null,
            uploads: [],
            embedCode: "",
            performanceMetrics: null,
            conversations: [],
            deletingChatbotId: null,
            contextConfig: defaultContextConfig,
            config: defaultConfig,
            chatMessages: [],
            currentConversationId: null,
          },
          false,
          "resetState"
        ),
    }),
    { name: "customize-store" }
  )
);

// Export convenience hooks for accessing specific parts of the store
export const useCustomizeLoading = () =>
  useCustomizeStore((state) => state.loading);
export const useCustomizeSaving = () =>
  useCustomizeStore((state) => state.saving);
export const useCustomizeActiveTab = () =>
  useCustomizeStore((state) => state.activeTab);
export const useCustomizeCurrentUser = () =>
  useCustomizeStore((state) => state.currentUser);
export const useCustomizeOrgChatbots = () =>
  useCustomizeStore((state) => state.orgChatbots);
export const useCustomizeSelectedChatbot = () =>
  useCustomizeStore((state) => state.selectedChatbot);
export const useCustomizeUploads = () =>
  useCustomizeStore((state) => state.uploads);
export const useCustomizeContextConfig = () =>
  useCustomizeStore((state) => state.contextConfig);
export const useCustomizeConfig = () =>
  useCustomizeStore((state) => state.config);
export const useCustomizePerformanceMetrics = () =>
  useCustomizeStore((state) => state.performanceMetrics);
export const useCustomizeConnectionStatus = () =>
  useCustomizeStore((state) => state.connectionStatus);

// Export compound selectors for common use cases
export const useCustomizeActions = () =>
  useCustomizeStore((state) => ({
    setLoading: state.setLoading,
    setSaving: state.setSaving,
    setActiveTab: state.setActiveTab,
    updateConfig: state.updateConfig,
    updateContextConfig: state.updateContextConfig,
    testConnection: state.testConnection,
  }));

export const useCustomizeUIState = () =>
  useCustomizeStore((state) => ({
    loading: state.loading,
    saving: state.saving,
    activeTab: state.activeTab,
    showCreateForm: state.showCreateForm,
    showEmbedModal: state.showEmbedModal,
    isEditMode: state.isEditMode,
    analyticsLoading: state.analyticsLoading,
    connectionStatus: state.connectionStatus,
  }));
