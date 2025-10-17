(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/zaakiy core/frontend/src/stores/customizeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomizeActions",
    ()=>useCustomizeActions,
    "useCustomizeActiveTab",
    ()=>useCustomizeActiveTab,
    "useCustomizeConfig",
    ()=>useCustomizeConfig,
    "useCustomizeConnectionStatus",
    ()=>useCustomizeConnectionStatus,
    "useCustomizeContextConfig",
    ()=>useCustomizeContextConfig,
    "useCustomizeCurrentUser",
    ()=>useCustomizeCurrentUser,
    "useCustomizeLoading",
    ()=>useCustomizeLoading,
    "useCustomizeOrgChatbots",
    ()=>useCustomizeOrgChatbots,
    "useCustomizePerformanceMetrics",
    ()=>useCustomizePerformanceMetrics,
    "useCustomizeSaving",
    ()=>useCustomizeSaving,
    "useCustomizeSelectedChatbot",
    ()=>useCustomizeSelectedChatbot,
    "useCustomizeStore",
    ()=>useCustomizeStore,
    "useCustomizeUIState",
    ()=>useCustomizeUIState,
    "useCustomizeUploads",
    ()=>useCustomizeUploads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature();
;
;
;
;
// Default context configuration
const defaultContextConfig = {
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
    updated_at: ""
};
// Default chatbot configuration
const defaultConfig = {
    id: "",
    name: "",
    description: "",
    color_hex: "#6a8fff",
    tone: "helpful",
    behavior: "Be helpful and informative while maintaining professionalism",
    system_prompt: "",
    greeting_message: "Hello! I'm your INNOVZ AI Assistant. How can I help you today?",
    fallback_message: "I apologize, but I don't have enough information to answer that accurately. Could you please rephrase or provide more context?",
    ai_model_config: {
        model: "gpt-4",
        temperature: 0.7,
        max_tokens: 1000
    },
    is_active: true,
    chain_status: "ready",
    trainer_at: "",
    created_at: "",
    status: "active",
    deployment_config: {
        url: "",
        headers: {},
        method: "POST"
    },
    avatar_url: ""
};
const useCustomizeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
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
        setLoading: (loading)=>set({
                loading
            }, false, "setLoading"),
        setSaving: (saving)=>set({
                saving
            }, false, "setSaving"),
        setActiveTab: (activeTab)=>set({
                activeTab
            }, false, "setActiveTab"),
        setShowCreateForm: (showCreateForm)=>set({
                showCreateForm
            }, false, "setShowCreateForm"),
        setShowEmbedModal: (showEmbedModal)=>set({
                showEmbedModal
            }, false, "setShowEmbedModal"),
        setIsEditMode: (isEditMode)=>set({
                isEditMode
            }, false, "setIsEditMode"),
        setAnalyticsLoading: (analyticsLoading)=>set({
                analyticsLoading
            }, false, "setAnalyticsLoading"),
        setUploading: (uploading)=>set({
                uploading
            }, false, "setUploading"),
        setCurrentUser: (currentUser)=>set({
                currentUser
            }, false, "setCurrentUser"),
        setError: (error)=>set({
                error
            }, false, "setError"),
        setConnectionStatus: (connectionStatus)=>set({
                connectionStatus
            }, false, "setConnectionStatus"),
        // Data Actions
        setOrgChatbots: (orgChatbots)=>set({
                orgChatbots
            }, false, "setOrgChatbots"),
        setSelectedChatbot: (selectedChatbot)=>set({
                selectedChatbot
            }, false, "setSelectedChatbot"),
        setUploads: (uploads)=>set({
                uploads
            }, false, "setUploads"),
        setEmbedCode: (embedCode)=>set({
                embedCode
            }, false, "setEmbedCode"),
        setPerformanceMetrics: (performanceMetrics)=>set({
                performanceMetrics
            }, false, "setPerformanceMetrics"),
        setDeletingChatbotId: (deletingChatbotId)=>set({
                deletingChatbotId
            }, false, "setDeletingChatbotId"),
        setConversations: (conversations)=>set({
                conversations
            }, false, "setConversations"),
        setChatMessages: (chatMessages)=>set({
                chatMessages
            }, false, "setChatMessages"),
        setCurrentConversationId: (currentConversationId)=>set({
                currentConversationId
            }, false, "setCurrentConversationId"),
        // Configuration Actions
        setContextConfig: (contextConfig)=>set({
                contextConfig
            }, false, "setContextConfig"),
        updateContextConfig: (updates)=>set((state)=>({
                    contextConfig: {
                        ...state.contextConfig,
                        ...updates
                    }
                }), false, "updateContextConfig"),
        setConfig: (config)=>set({
                config
            }, false, "setConfig"),
        updateConfig: (updates)=>set((state)=>({
                    config: {
                        ...state.config,
                        ...updates
                    }
                }), false, "updateConfig"),
        // Enhanced Async Actions with better error handling
        loadChatbots: async ()=>{
            try {
                set({
                    loading: true,
                    error: null
                });
                const chatbots = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbots();
                set({
                    orgChatbots: chatbots,
                    loading: false,
                    connectionStatus: "connected"
                });
            } catch (error) {
                const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
                const isConnectionError = error instanceof Error && (error.message.includes("Unable to connect") || error.message.includes("Backend server unavailable") || error.message.includes("ECONNREFUSED") || error.message.includes("Not authenticated"));
                // Check if this is likely an initial load error (no chatbots loaded yet)
                const currentState = get();
                const isInitialLoad = !currentState.orgChatbots || currentState.orgChatbots.length === 0;
                if (isDevelopment && isConnectionError && isInitialLoad) {
                    // In development, suppress error messages during initial load
                    console.debug("Initial load - chatbots loading failed (likely auth in progress)");
                    set({
                        loading: false,
                        connectionStatus: "disconnected"
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
                    connectionStatus: "disconnected"
                });
                // Only show toast for unexpected errors, not connection issues in development
                if (!isDevelopment || !isConnectionError) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load chatbots. Please check your connection.");
                }
            }
        },
        loadUploads: async ()=>{
            try {
                const uploads = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadsApi"].getUploads();
                set({
                    uploads,
                    connectionStatus: "connected"
                });
            } catch (error) {
                const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
                const isConnectionError = error instanceof Error && (error.message.includes("Unable to connect") || error.message.includes("Backend server unavailable") || error.message.includes("ECONNREFUSED"));
                if (isDevelopment && isConnectionError) {
                    console.warn("Uploads loading failed - backend server not available");
                } else {
                    console.error("Error loading uploads:", error);
                }
                set({
                    error: isConnectionError ? "Backend server unavailable" : "Failed to load uploads",
                    connectionStatus: "disconnected"
                });
                if (!isDevelopment || !isConnectionError) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load knowledge base files.");
                }
            }
        },
        loadContextConfig: async ()=>{
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getContextConfig();
                if (response && response.success) {
                    set({
                        contextConfig: response.config,
                        connectionStatus: "connected"
                    });
                }
            } catch (error) {
                console.error("Error loading context config:", error);
                set({
                    error: "Failed to load context configuration",
                    connectionStatus: "disconnected"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load AI configuration.");
            }
        },
        loadPerformanceMetrics: async function() {
            let days = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7;
            try {
                set({
                    analyticsLoading: true
                });
                const metrics = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getAnalyticsDashboard(days);
                set({
                    performanceMetrics: metrics,
                    analyticsLoading: false,
                    connectionStatus: "connected"
                });
            } catch (error) {
                console.error("Error loading performance metrics:", error);
                set({
                    performanceMetrics: null,
                    analyticsLoading: false,
                    error: "Failed to load analytics",
                    connectionStatus: "disconnected"
                });
            // Don't show error toast for analytics as it's not critical
            }
        },
        createChatbot: async (config)=>{
            try {
                set({
                    saving: true,
                    error: null
                });
                const chatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].createChatbot(config);
                set((state)=>({
                        orgChatbots: [
                            ...state.orgChatbots,
                            chatbot
                        ],
                        selectedChatbot: chatbot,
                        saving: false,
                        showCreateForm: false,
                        isEditMode: true,
                        connectionStatus: "connected"
                    }));
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot created successfully!");
                return chatbot;
            } catch (error) {
                console.error("Error creating chatbot:", error);
                set({
                    saving: false,
                    error: "Failed to create chatbot",
                    connectionStatus: "disconnected"
                });
                const errorMessage = error instanceof Error ? error.message : "Failed to create chatbot. Please try again.";
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
                return null;
            }
        },
        updateChatbot: async (chatbotId, config)=>{
            try {
                set({
                    saving: true,
                    error: null
                });
                const updatedChatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].updateChatbot(chatbotId, config);
                set((state)=>({
                        orgChatbots: state.orgChatbots.map((bot)=>bot.id === chatbotId ? updatedChatbot : bot),
                        selectedChatbot: updatedChatbot,
                        saving: false,
                        connectionStatus: "connected"
                    }));
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot updated successfully!");
                return updatedChatbot;
            } catch (error) {
                console.error("Error updating chatbot:", error);
                set({
                    saving: false,
                    error: "Failed to update chatbot",
                    connectionStatus: "disconnected"
                });
                const errorMessage = error instanceof Error ? error.message : "Failed to update chatbot. Please try again.";
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
                return null;
            }
        },
        deleteChatbot: async (chatbotId)=>{
            try {
                set({
                    deletingChatbotId: chatbotId,
                    error: null
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].deleteChatbot(chatbotId);
                set((state)=>{
                    var _state_selectedChatbot;
                    return {
                        orgChatbots: state.orgChatbots.filter((bot)=>bot.id !== chatbotId),
                        selectedChatbot: ((_state_selectedChatbot = state.selectedChatbot) === null || _state_selectedChatbot === void 0 ? void 0 : _state_selectedChatbot.id) === chatbotId ? null : state.selectedChatbot,
                        deletingChatbotId: null,
                        connectionStatus: "connected"
                    };
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot deleted successfully!");
            } catch (error) {
                console.error("Error deleting chatbot:", error);
                set({
                    deletingChatbotId: null,
                    error: "Failed to delete chatbot",
                    connectionStatus: "disconnected"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete chatbot. Please try again.");
            }
        },
        saveContextConfig: async (updates)=>{
            try {
                set({
                    saving: true,
                    error: null
                });
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].updateContextConfig(updates);
                if (response && response.success) {
                    set((state)=>({
                            contextConfig: {
                                ...state.contextConfig,
                                ...updates
                            },
                            saving: false,
                            connectionStatus: "connected"
                        }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Context configuration updated successfully!");
                } else {
                    throw new Error((response === null || response === void 0 ? void 0 : response.message) || "Save failed");
                }
            } catch (error) {
                console.error("Error saving context config:", error);
                set({
                    saving: false,
                    error: "Failed to update context configuration",
                    connectionStatus: "disconnected"
                });
                const errorMessage = error instanceof Error ? "Failed to save: ".concat(error.message) : "Failed to update context configuration. Please try again.";
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
            }
        },
        uploadFile: async (file, type)=>{
            try {
                set({
                    uploading: true,
                    error: null
                });
                const uploadResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadsApi"].uploadFile(file, type);
                set((state)=>({
                        uploads: [
                            ...state.uploads,
                            uploadResult
                        ],
                        uploading: false,
                        connectionStatus: "connected"
                    }));
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("File uploaded successfully!");
                return uploadResult;
            } catch (error) {
                console.error("Error uploading file:", error);
                set({
                    uploading: false,
                    error: "Failed to upload file",
                    connectionStatus: "disconnected"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to upload file. Please try again.");
                return null;
            }
        },
        testConnection: async ()=>{
            try {
                set({
                    connectionStatus: "checking"
                });
                // First try a simple health check without auth
                try {
                    const healthResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getHealthCheck();
                    if (healthResponse) {
                        // If basic health check passes, try authenticated connection
                        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].testConnection();
                        const isConnected = result.success;
                        set({
                            connectionStatus: isConnected ? "connected" : "disconnected"
                        });
                        return isConnected;
                    }
                } catch (healthError) {
                    console.warn("Health check failed, trying direct connection test:", healthError);
                }
                // Fall back to direct authenticated test
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].testConnection();
                const isConnected = result.success;
                set({
                    connectionStatus: isConnected ? "connected" : "disconnected"
                });
                return isConnected;
            } catch (error) {
                console.error("Connection test failed:", error);
                set({
                    connectionStatus: "disconnected"
                });
                return false;
            }
        },
        generateEmbedCode: (chatbotId)=>{
            const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001";
            const embedScript = "<script>\n  (function() {\n    var script = document.createElement('script');\n    script.src = '".concat(window.location.origin, "/chatbot-widget.js';\n    script.setAttribute('data-chatbot-id', '").concat(chatbotId, "');\n    script.setAttribute('data-api-url', '").concat(API_BASE, "');\n    document.head.appendChild(script);\n  })();\n</script>");
            set({
                embedCode: embedScript,
                showEmbedModal: true
            });
            return embedScript;
        },
        initializeStore: async function() {
            let retryCount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            const maxRetries = 3;
            try {
                set({
                    loading: true,
                    error: null,
                    connectionStatus: "checking"
                });
                // Test connection first with timeout and retry logic
                let connectionResult;
                try {
                    connectionResult = await get().testConnection();
                } catch (connectionError) {
                    console.warn("Initial connection test failed, attempting to continue:", connectionError);
                    // Continue with initialization even if connection test fails
                    connectionResult = false;
                }
                // Load all data in parallel with individual error handling
                const results = await Promise.allSettled([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbots(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadsApi"].getUploads(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getContextConfig()
                ]);
                let hasAnySuccess = false;
                let criticalFailures = 0;
                // Handle chatbots result (critical for basic functionality)
                if (results[0].status === "fulfilled") {
                    set({
                        orgChatbots: results[0].value
                    });
                    hasAnySuccess = true;
                } else {
                    console.error("Failed to load chatbots:", results[0].reason);
                    criticalFailures++;
                }
                // Handle uploads result (non-critical)
                if (results[1].status === "fulfilled") {
                    set({
                        uploads: results[1].value
                    });
                    hasAnySuccess = true;
                } else {
                    console.warn("Failed to load uploads (non-critical):", results[1].reason);
                }
                // Handle context config result (non-critical, has defaults)
                if (results[2].status === "fulfilled" && results[2].value && results[2].value.success) {
                    // Ensure loaded config has proper org_id
                    const loadedConfig = {
                        ...results[2].value.config,
                        org_id: results[2].value.config.org_id || "user_".concat(Date.now(), "_org")
                    };
                    set({
                        contextConfig: loadedConfig
                    });
                    console.debug("✅ Context config loaded successfully");
                    hasAnySuccess = true;
                } else {
                    // Context config failed to load - this is expected if backend is not available
                    console.debug("🔧 Context config not available, using built-in defaults");
                    // Ensure default config has proper org_id
                    const defaultConfigWithOrgId = {
                        ...defaultContextConfig,
                        org_id: "user_".concat(Date.now(), "_org")
                    };
                    set({
                        contextConfig: defaultConfigWithOrgId
                    });
                }
                // Determine if initialization was successful enough
                if (hasAnySuccess && criticalFailures === 0) {
                    set({
                        loading: false,
                        connectionStatus: connectionResult ? "connected" : "partial",
                        error: null
                    });
                    if (!connectionResult) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("Some features may be limited due to connectivity issues");
                    }
                } else if (hasAnySuccess && criticalFailures > 0 && retryCount < maxRetries) {
                    // Partial success but critical failures - retry
                    console.log("Retrying initialization (".concat(retryCount + 1, "/").concat(maxRetries, ") due to critical failures"));
                    await new Promise((resolve)=>setTimeout(resolve, Math.pow(2, retryCount) * 1000));
                    return get().initializeStore(retryCount + 1);
                } else if (!hasAnySuccess && retryCount < maxRetries) {
                    // Complete failure - retry
                    console.log("Retrying initialization (".concat(retryCount + 1, "/").concat(maxRetries, ") due to complete failure"));
                    await new Promise((resolve)=>setTimeout(resolve, Math.pow(2, retryCount) * 1000));
                    return get().initializeStore(retryCount + 1);
                } else {
                    // Final failure after retries
                    throw new Error("Failed to load critical application data after ".concat(retryCount + 1, " attempts"));
                }
            } catch (error) {
                console.error("Error initializing store:", error);
                const isRetryable = retryCount < maxRetries && error instanceof Error && (error.message.includes("network") || error.message.includes("timeout") || error.message.includes("fetch"));
                if (isRetryable) {
                    console.log("Retrying initialization (".concat(retryCount + 1, "/").concat(maxRetries, ") after error:"), error.message);
                    await new Promise((resolve)=>setTimeout(resolve, Math.pow(2, retryCount) * 1500));
                    return get().initializeStore(retryCount + 1);
                } else {
                    set({
                        loading: false,
                        error: "Failed to initialize application".concat(retryCount > 0 ? " after ".concat(retryCount + 1, " attempts") : ""),
                        connectionStatus: "disconnected"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to initialize application. Please check your connection and try refreshing the page.");
                }
            }
        },
        resetState: ()=>set({
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
                currentConversationId: null
            }, false, "resetState")
    }), {
    name: "customize-store"
}));
const useCustomizeLoading = ()=>{
    _s();
    return useCustomizeStore({
        "useCustomizeLoading.useCustomizeStore": (state)=>state.loading
    }["useCustomizeLoading.useCustomizeStore"]);
};
_s(useCustomizeLoading, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeSaving = ()=>{
    _s1();
    return useCustomizeStore({
        "useCustomizeSaving.useCustomizeStore": (state)=>state.saving
    }["useCustomizeSaving.useCustomizeStore"]);
};
_s1(useCustomizeSaving, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeActiveTab = ()=>{
    _s2();
    return useCustomizeStore({
        "useCustomizeActiveTab.useCustomizeStore": (state)=>state.activeTab
    }["useCustomizeActiveTab.useCustomizeStore"]);
};
_s2(useCustomizeActiveTab, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeCurrentUser = ()=>{
    _s3();
    return useCustomizeStore({
        "useCustomizeCurrentUser.useCustomizeStore": (state)=>state.currentUser
    }["useCustomizeCurrentUser.useCustomizeStore"]);
};
_s3(useCustomizeCurrentUser, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeOrgChatbots = ()=>{
    _s4();
    return useCustomizeStore({
        "useCustomizeOrgChatbots.useCustomizeStore": (state)=>state.orgChatbots
    }["useCustomizeOrgChatbots.useCustomizeStore"]);
};
_s4(useCustomizeOrgChatbots, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeSelectedChatbot = ()=>{
    _s5();
    return useCustomizeStore({
        "useCustomizeSelectedChatbot.useCustomizeStore": (state)=>state.selectedChatbot
    }["useCustomizeSelectedChatbot.useCustomizeStore"]);
};
_s5(useCustomizeSelectedChatbot, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeUploads = ()=>{
    _s6();
    return useCustomizeStore({
        "useCustomizeUploads.useCustomizeStore": (state)=>state.uploads
    }["useCustomizeUploads.useCustomizeStore"]);
};
_s6(useCustomizeUploads, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeContextConfig = ()=>{
    _s7();
    return useCustomizeStore({
        "useCustomizeContextConfig.useCustomizeStore": (state)=>state.contextConfig
    }["useCustomizeContextConfig.useCustomizeStore"]);
};
_s7(useCustomizeContextConfig, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeConfig = ()=>{
    _s8();
    return useCustomizeStore({
        "useCustomizeConfig.useCustomizeStore": (state)=>state.config
    }["useCustomizeConfig.useCustomizeStore"]);
};
_s8(useCustomizeConfig, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizePerformanceMetrics = ()=>{
    _s9();
    return useCustomizeStore({
        "useCustomizePerformanceMetrics.useCustomizeStore": (state)=>state.performanceMetrics
    }["useCustomizePerformanceMetrics.useCustomizeStore"]);
};
_s9(useCustomizePerformanceMetrics, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeConnectionStatus = ()=>{
    _s10();
    return useCustomizeStore({
        "useCustomizeConnectionStatus.useCustomizeStore": (state)=>state.connectionStatus
    }["useCustomizeConnectionStatus.useCustomizeStore"]);
};
_s10(useCustomizeConnectionStatus, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeActions = ()=>{
    _s11();
    return useCustomizeStore({
        "useCustomizeActions.useCustomizeStore": (state)=>({
                setLoading: state.setLoading,
                setSaving: state.setSaving,
                setActiveTab: state.setActiveTab,
                updateConfig: state.updateConfig,
                updateContextConfig: state.updateContextConfig,
                testConnection: state.testConnection
            })
    }["useCustomizeActions.useCustomizeStore"]);
};
_s11(useCustomizeActions, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
const useCustomizeUIState = ()=>{
    _s12();
    return useCustomizeStore({
        "useCustomizeUIState.useCustomizeStore": (state)=>({
                loading: state.loading,
                saving: state.saving,
                activeTab: state.activeTab,
                showCreateForm: state.showCreateForm,
                showEmbedModal: state.showEmbedModal,
                isEditMode: state.isEditMode,
                analyticsLoading: state.analyticsLoading,
                connectionStatus: state.connectionStatus
            })
    }["useCustomizeUIState.useCustomizeStore"]);
};
_s12(useCustomizeUIState, "YW07qHoRjaf+anQE6Bq5mLmcrRM=", false, function() {
    return [
        useCustomizeStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, thumbClassName, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0", thumbClassName)
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/ui/switch.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/ui/switch.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatbotConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/stores/customizeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// import dynamic from "next/dynamic";
// Custom debounce function to avoid lodash dependency
const debounce = (func, delay)=>{
    let timeoutId;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>func(...args), delay);
    };
};
const TONE_OPTIONS = [
    {
        value: "professional",
        label: "Professional",
        icon: "👔"
    },
    {
        value: "friendly",
        label: "Friendly",
        icon: "😊"
    },
    {
        value: "helpful",
        label: "Helpful",
        icon: "🤝"
    },
    {
        value: "technical",
        label: "Technical",
        icon: "🔧"
    },
    {
        value: "casual",
        label: "Casual",
        icon: "💬"
    }
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
    "#8B5A2B"
];
function ChatbotConfiguration(param) {
    let {} = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const chatbotId = searchParams.get("id");
    // Local state for validation and preview
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unsavedChanges, setUnsavedChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { // State
    saving, currentUser, selectedChatbot, isEditMode, config, // Actions
    setSaving, setOrgChatbots, setSelectedChatbot, setIsEditMode, setShowCreateForm, setConfig, updateConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"])();
    // Enhanced validation function
    const validateConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[validateConfig]": (config)=>{
            var _config_name, _config_greeting_message, _config_fallback_message;
            const errors = [];
            if (!((_config_name = config.name) === null || _config_name === void 0 ? void 0 : _config_name.trim())) errors.push("Chatbot name is required");
            if (config.name && config.name.length > 50) errors.push("Name must be under 50 characters");
            if (!((_config_greeting_message = config.greeting_message) === null || _config_greeting_message === void 0 ? void 0 : _config_greeting_message.trim())) errors.push("Greeting message is required");
            if (config.greeting_message && config.greeting_message.length > 200) {
                errors.push("Greeting message must be under 200 characters");
            }
            if (!((_config_fallback_message = config.fallback_message) === null || _config_fallback_message === void 0 ? void 0 : _config_fallback_message.trim())) errors.push("Fallback message is required");
            return errors;
        }
    }["ChatbotConfiguration.useCallback[validateConfig]"], []);
    // Individual input states for immediate UI feedback
    const [inputValues, setInputValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: config.name || "",
        description: config.description || "",
        greeting_message: config.greeting_message || "",
        fallback_message: config.fallback_message || "",
        behavior: config.behavior || "",
        system_prompt: config.system_prompt || "",
        color_hex: config.color_hex || "#3B82F6",
        avatar_url: config.avatar_url || ""
    });
    // Load configuration from chatbot
    const loadConfigFromChatbot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[loadConfigFromChatbot]": (chatbot)=>{
            setConfig({
                ...chatbot,
                description: chatbot.description || "",
                color_hex: chatbot.color_hex || "#6a8fff",
                tone: chatbot.tone || "helpful",
                behavior: chatbot.behavior || "Be helpful and informative",
                system_prompt: chatbot.system_prompt || "",
                greeting_message: chatbot.greeting_message || "Hello! How can I help you today?",
                fallback_message: chatbot.fallback_message || "I'm sorry, I don't have information about that. Could you please rephrase your question?",
                ai_model_config: {
                    model: "gpt-3.5-turbo",
                    temperature: 0.7,
                    max_tokens: 1000
                },
                is_active: chatbot.status === "active"
            });
            // Clear unsaved changes when loading from existing chatbot
            setUnsavedChanges(false);
            setValidationErrors([]);
        }
    }["ChatbotConfiguration.useCallback[loadConfigFromChatbot]"], [
        setConfig,
        setUnsavedChanges,
        setValidationErrors
    ]);
    // Load organization chatbots
    const loadOrgChatbots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[loadOrgChatbots]": async ()=>{
            try {
                const chatbots = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbots();
                setOrgChatbots(chatbots);
                if (chatbotId) {
                    // Edit mode: load the specific chatbot
                    const targetChatbot = chatbots.find({
                        "ChatbotConfiguration.useCallback[loadOrgChatbots].targetChatbot": (bot)=>bot.id === chatbotId
                    }["ChatbotConfiguration.useCallback[loadOrgChatbots].targetChatbot"]);
                    if (targetChatbot) {
                        setSelectedChatbot(targetChatbot);
                        loadConfigFromChatbot(targetChatbot);
                        setIsEditMode(true);
                        setShowCreateForm(false);
                    } else {
                        // Chatbot not found, redirect to create mode
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Chatbot not found");
                        router.push("/dashboard/".concat(userId, "/customize"));
                    }
                } else if (chatbots.length > 0) {
                    // Create mode: load first chatbot as template
                    setSelectedChatbot(chatbots[0]);
                    loadConfigFromChatbot(chatbots[0]);
                    setIsEditMode(false);
                    setShowCreateForm(true);
                } else {
                    // No chatbots exist, show create form
                    setShowCreateForm(true);
                    setIsEditMode(false);
                }
            } catch (error) {
                console.error("Error loading organization chatbots:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load chatbots");
            }
        }
    }["ChatbotConfiguration.useCallback[loadOrgChatbots]"], [
        chatbotId,
        setOrgChatbots,
        setSelectedChatbot,
        setIsEditMode,
        setShowCreateForm,
        router,
        userId,
        loadConfigFromChatbot
    ]);
    // Load chatbots when component mounts or chatbotId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatbotConfiguration.useEffect": ()=>{
            loadOrgChatbots();
        }
    }["ChatbotConfiguration.useEffect"], [
        loadOrgChatbots
    ]);
    // Update input values when config changes from store
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ChatbotConfiguration.useEffect": ()=>{
            console.log("🔄 Updating input values from config:", {
                configId: config.id,
                configName: config.name,
                isEditMode,
                chatbotId
            });
            setInputValues({
                name: config.name || "",
                description: config.description || "",
                greeting_message: config.greeting_message || "",
                fallback_message: config.fallback_message || "",
                behavior: config.behavior || "",
                system_prompt: config.system_prompt || "",
                color_hex: config.color_hex || "#3B82F6",
                avatar_url: config.avatar_url || ""
            });
        }
    }["ChatbotConfiguration.useEffect"], [
        config,
        config.id,
        isEditMode,
        chatbotId
    ]);
    // Create individual debounced update functions
    const createDebouncedUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[createDebouncedUpdate]": (field)=>{
            return debounce({
                "ChatbotConfiguration.useCallback[createDebouncedUpdate]": (value)=>{
                    updateConfig({
                        [field]: value
                    });
                    setUnsavedChanges(true);
                    // Validate
                    const newConfig = {
                        ...config,
                        [field]: value
                    };
                    const errors = validateConfig(newConfig);
                    setValidationErrors(errors);
                }
            }["ChatbotConfiguration.useCallback[createDebouncedUpdate]"], 300);
        }
    }["ChatbotConfiguration.useCallback[createDebouncedUpdate]"], [
        updateConfig,
        validateConfig,
        config
    ]);
    // Individual debounced functions for each field
    const debouncedUpdates = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ChatbotConfiguration.useMemo[debouncedUpdates]": ()=>({
                name: createDebouncedUpdate("name"),
                description: createDebouncedUpdate("description"),
                greeting_message: createDebouncedUpdate("greeting_message"),
                fallback_message: createDebouncedUpdate("fallback_message"),
                behavior: createDebouncedUpdate("behavior"),
                system_prompt: createDebouncedUpdate("system_prompt"),
                color_hex: createDebouncedUpdate("color_hex"),
                avatar_url: createDebouncedUpdate("avatar_url"),
                is_active: createDebouncedUpdate("is_active"),
                tone: createDebouncedUpdate("tone")
            })
    }["ChatbotConfiguration.useMemo[debouncedUpdates]"], [
        createDebouncedUpdate
    ]);
    // Handle input changes
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[handleInputChange]": (field, value)=>{
            var // Debounce the store update
            _debouncedUpdates_field;
            // Update local input state immediately
            setInputValues({
                "ChatbotConfiguration.useCallback[handleInputChange]": (prev)=>({
                        ...prev,
                        [field]: value
                    })
            }["ChatbotConfiguration.useCallback[handleInputChange]"]);
            (_debouncedUpdates_field = debouncedUpdates[field]) === null || _debouncedUpdates_field === void 0 ? void 0 : _debouncedUpdates_field.call(debouncedUpdates, value);
        }
    }["ChatbotConfiguration.useCallback[handleInputChange]"], [
        debouncedUpdates
    ]);
    // Handle non-text field changes (switches, selects)
    const handleFieldChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[handleFieldChange]": (field, value)=>{
            updateConfig({
                [field]: value
            });
            setUnsavedChanges(true);
            const newConfig = {
                ...config,
                [field]: value
            };
            const errors = validateConfig(newConfig);
            setValidationErrors(errors);
        }
    }["ChatbotConfiguration.useCallback[handleFieldChange]"], [
        updateConfig,
        validateConfig,
        config
    ]);
    // Handle avatar image file upload
    const handleAvatarUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[handleAvatarUpload]": async (event)=>{
            var _event_target_files;
            const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
            if (!file) return;
            // Validate file type
            const validTypes = [
                "image/png",
                "image/jpeg",
                "image/jpg",
                "image/gif",
                "image/webp"
            ];
            if (!validTypes.includes(file.type)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please upload a valid image file (PNG, JPEG, GIF, or WebP)");
                return;
            }
            // Validate file size (max 2MB)
            const maxSize = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSize) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Image size must be less than 2MB");
                return;
            }
            try {
                // Use the existing uploads API pattern
                const { uploadsApi } = await __turbopack_context__.A("[project]/Desktop/zaakiy core/frontend/src/app/api/routes.ts [app-client] (ecmascript, async loader)");
                const result = await uploadsApi.uploadFile(file, "image");
                if (result && result.url) {
                    // Convert relative URL to absolute URL
                    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8001";
                    const fullUrl = result.url.startsWith("http") ? result.url : "".concat(baseUrl).concat(result.url);
                    handleInputChange("avatar_url", fullUrl);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Avatar image uploaded successfully!");
                } else {
                    throw new Error("Upload failed - no URL returned");
                }
            } catch (error) {
                console.error("Avatar upload error:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to upload image: ".concat(error instanceof Error ? error.message : "Unknown error"));
            }
        }
    }["ChatbotConfiguration.useCallback[handleAvatarUpload]"], [
        handleInputChange
    ]);
    // Convert legacy Supabase URLs to proxy URLs
    const convertLegacyUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[convertLegacyUrl]": (url)=>{
            if (url.includes("storage/v1/object/uploads/")) {
                // Extract the path after "uploads/"
                const pathParts = url.split("storage/v1/object/uploads/");
                if (pathParts.length > 1) {
                    const filePath = pathParts[1];
                    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8001";
                    return "".concat(baseUrl, "/api/uploads/avatar/legacy/").concat(filePath);
                }
            }
            return url;
        }
    }["ChatbotConfiguration.useCallback[convertLegacyUrl]"], []);
    // Clear avatar
    const handleClearAvatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotConfiguration.useCallback[handleClearAvatar]": ()=>{
            handleInputChange("avatar_url", "");
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Avatar cleared");
        }
    }["ChatbotConfiguration.useCallback[handleClearAvatar]"], [
        handleInputChange
    ]);
    // Enhanced save function with better error handling
    const handleSave = async ()=>{
        try {
            var _currentUser_user_metadata, _currentUser_user_metadata1;
            setSaving(true);
            // Validate configuration first
            const errors = validateConfig(config);
            if (errors.length > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fix validation errors: ".concat(errors.join(", ")));
                setValidationErrors(errors);
                return;
            }
            const chatbotData = {
                id: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id) || "",
                name: config.name,
                description: config.description,
                color_hex: config.color_hex,
                tone: config.tone,
                behavior: config.behavior,
                greeting_message: config.greeting_message,
                status: config.is_active ? "active" : "inactive",
                user_id: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) || "",
                org_id: currentUser === null || currentUser === void 0 ? void 0 : (_currentUser_user_metadata = currentUser.user_metadata) === null || _currentUser_user_metadata === void 0 ? void 0 : _currentUser_user_metadata.org_id,
                system_prompt: config.system_prompt,
                fallback_message: config.fallback_message,
                avatar_url: config.avatar_url,
                chain_status: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.chain_status) || "pending",
                trainer_at: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.trainer_at) || new Date().toISOString(),
                created_at: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.created_at) || new Date().toISOString(),
                ai_model_config: config.ai_model_config || {
                    model: "gpt-3.5-turbo",
                    temperature: 0.7,
                    max_tokens: 1000
                },
                deployment_config: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.deployment_config) || {
                    url: "",
                    headers: {},
                    method: ""
                },
                is_active: config.is_active
            };
            console.log("💾 Attempting to save chatbot:", {
                isEditMode,
                chatbotId: selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id,
                chatbotData,
                currentUser: currentUser ? {
                    id: currentUser.id,
                    org_id: (_currentUser_user_metadata1 = currentUser.user_metadata) === null || _currentUser_user_metadata1 === void 0 ? void 0 : _currentUser_user_metadata1.org_id
                } : null
            });
            let savedChatbot;
            if (isEditMode && (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id)) {
                console.log("🔄 Updating existing chatbot:", selectedChatbot.id);
                savedChatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].updateChatbot(selectedChatbot.id, chatbotData);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot updated successfully!");
            } else {
                console.log("✨ Creating new chatbot");
                savedChatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].createChatbot(chatbotData);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot created successfully!");
                setIsEditMode(true);
                setShowCreateForm(false);
                setSelectedChatbot(savedChatbot);
                router.push("/dashboard/".concat(userId, "/customize?id=").concat(savedChatbot.id));
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
                    name: error.name
                });
                if (error.message.includes("401") || error.message.includes("Authentication")) {
                    errorMessage = "Authentication failed. Please log in again.";
                } else if (error.message.includes("403")) {
                    errorMessage = "Permission denied. Check your access rights.";
                } else if (error.message.includes("404")) {
                    errorMessage = "Backend endpoint not found. Check if server is running on http://localhost:8001";
                } else if (error.message.includes("500")) {
                    errorMessage = "Server error. Please try again later.";
                } else if (error.message.includes("Network") || error.message.includes("fetch") || error.message.includes("Failed to fetch")) {
                    errorMessage = "Cannot connect to server. Is the backend running on http://localhost:8001?";
                } else {
                    errorMessage = "Save failed: ".concat(error.message);
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
        } finally{
            setSaving(false);
        }
    };
    // Enhanced preview functionality
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                "Advanced Chatbot Configuration",
                                unsavedChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "ml-2",
                                    children: "Unsaved Changes"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                    checked: config.is_active,
                                    onCheckedChange: (checked)=>handleFieldChange("is_active", checked)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-sm",
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                            lineNumber: 515,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    validationErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                        className: "mb-4 border-red-200 bg-red-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 text-red-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                lineNumber: 531,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Please fix the following errors:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 list-disc list-inside",
                                        children: validationErrors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-red-700",
                                                children: error
                                            }, index, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                lineNumber: 536,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                        lineNumber: 530,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-7 grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "name",
                                                children: "Chatbot Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                value: inputValues.name,
                                                onChange: (e)=>handleInputChange("name", e.target.value),
                                                placeholder: "Enter chatbot name...",
                                                className: "mt-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Chatbot Avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-4",
                                            children: [
                                                inputValues.avatar_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-20 h-20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: convertLegacyUrl(inputValues.avatar_url),
                                                                    alt: "Avatar preview",
                                                                    width: 80,
                                                                    height: 80,
                                                                    className: "rounded-full object-cover border-2 border-gray-200",
                                                                    unoptimized: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleClearAvatar,
                                                                    className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",
                                                                    title: "Remove avatar",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                        lineNumber: 584,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: inputValues.avatar_url.includes("/api/uploads/avatar/") || inputValues.avatar_url.includes("storage/v1/object/uploads") ? "Uploaded image" : "External URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "avatar-url",
                                                            className: "text-sm text-gray-600",
                                                            children: "Enter Image URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "avatar-url",
                                                            value: inputValues.avatar_url,
                                                            onChange: (e)=>handleInputChange("avatar_url", e.target.value),
                                                            placeholder: "https://example.com/avatar.png",
                                                            className: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 border-t border-gray-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: "OR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 border-t border-gray-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "avatar-file",
                                                            className: "text-sm text-gray-600",
                                                            children: "Upload Image File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "avatar-file",
                                                                    type: "file",
                                                                    accept: "image/png,image/jpeg,image/jpg,image/gif,image/webp",
                                                                    onChange: handleAvatarUpload,
                                                                    className: "hidden"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                    lineNumber: 631,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    type: "button",
                                                                    variant: "outline",
                                                                    onClick: ()=>{
                                                                        var _document_getElementById;
                                                                        return (_document_getElementById = document.getElementById("avatar-file")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                                                                    },
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                            lineNumber: 646,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Choose Image"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                    lineNumber: 638,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "PNG, JPEG, GIF, WebP (max 1.5MB)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 17
                                                }, this),
                                                !inputValues.avatar_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 p-3 bg-gray-50 rounded-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            className: "w-5 h-5 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "No avatar set. Upload an image or enter a URL."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "description",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 667,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "description",
                                            value: inputValues.description,
                                            onChange: (e)=>handleInputChange("description", e.target.value),
                                            placeholder: "Describe what this chatbot does and its purpose...",
                                            className: "mt-4",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 668,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 666,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Personality & Tone"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid grid-cols-5 gap-3",
                                            children: TONE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 border rounded-lg cursor-pointer transition-all ".concat(config.tone === option.value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"),
                                                    onClick: ()=>handleFieldChange("tone", option.value),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                children: option.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: option.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                    lineNumber: 696,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 23
                                                            }, this),
                                                            config.tone === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "h-5 w-5 text-green-600 ml-auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                        lineNumber: 693,
                                                        columnNumber: 21
                                                    }, this)
                                                }, option.value, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 682,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 680,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Primary Color"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 708,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 mb-3 flex-wrap",
                                                    children: COLOR_PRESETS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-6 h-6 rounded-full border-2 ".concat(config.color_hex === color ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400", " transition-all"),
                                                            style: {
                                                                backgroundColor: color
                                                            },
                                                            onClick: ()=>handleFieldChange("color_hex", color)
                                                        }, color, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "color",
                                                    value: inputValues.color_hex,
                                                    onChange: (e)=>handleInputChange("color_hex", e.target.value),
                                                    className: "w-20 h-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 709,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-7 grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "greeting",
                                                    children: "Greeting Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "greeting",
                                                    value: inputValues.greeting_message,
                                                    onChange: (e)=>handleInputChange("greeting_message", e.target.value),
                                                    placeholder: "Hello! How can I help you today?",
                                                    className: "mt-4",
                                                    rows: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 736,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "fallback",
                                                    children: "Fallback Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "fallback",
                                                    value: inputValues.fallback_message,
                                                    onChange: (e)=>handleInputChange("fallback_message", e.target.value),
                                                    placeholder: "I'm sorry, I don't have information about that...",
                                                    className: "mt-4",
                                                    rows: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "behavior",
                                            children: "Behavior & Personality"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 765,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "behavior",
                                            value: inputValues.behavior,
                                            onChange: (e)=>handleInputChange("behavior", e.target.value),
                                            placeholder: "Describe how the chatbot should behave, its personality, and interaction style...",
                                            className: "mt-4",
                                            rows: 4
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 766,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 764,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "system-prompt",
                                            children: "System Prompt (Advanced)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 777,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "system-prompt",
                                            value: inputValues.system_prompt,
                                            onChange: (e)=>handleInputChange("system_prompt", e.target.value),
                                            placeholder: "You are a helpful assistant that...",
                                            className: "mt-1",
                                            rows: 6
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 778,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-4",
                                            children: "Define specific instructions for the AI. This overrides default behavior settings."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                            lineNumber: 788,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mt-6 pt-6 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSave,
                            disabled: saving || validationErrors.length > 0,
                            className: "pointer flex items-center gap-2 min-w-[150px]",
                            children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                        lineNumber: 805,
                                        columnNumber: 17
                                    }, this),
                                    "Saving..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                                        lineNumber: 810,
                                        columnNumber: 17
                                    }, this),
                                    isEditMode ? "Update Chatbot" : "Create Chatbot"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                            lineNumber: 798,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                        lineNumber: 797,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx",
        lineNumber: 503,
        columnNumber: 5
    }, this);
}
_s(ChatbotConfiguration, "bkAmz4Wqao3AnhtUSxw0SA7iUoU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"]
    ];
});
_c = ChatbotConfiguration;
var _c;
__turbopack_context__.k.register(_c, "ChatbotConfiguration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnhancedCustomizePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/stores/customizeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$dashboard$2f$customize$2f$ChatbotConfiguration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/dashboard/customize/ChatbotConfiguration.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function EnhancedCustomizePage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const chatbotId = searchParams.get("id");
    // Local state for advanced features
    const [retryCount, setRetryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastConnectionCheck, setLastConnectionCheck] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Zustand store
    const { loading, orgChatbots, selectedChatbot, showCreateForm, uploads, embedCode, showEmbedModal, deletingChatbotId, contextConfig, connectionStatus, error, // Actions
    setCurrentUser, setSelectedChatbot, setIsEditMode, setShowCreateForm, setActiveTab, setShowEmbedModal, deleteChatbot: deleteChatbotFromStore, generateEmbedCode: generateEmbedCodeFromStore, initializeStore, testConnection, setError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"])();
    const loadSpecificChatbot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EnhancedCustomizePage.useCallback[loadSpecificChatbot]": async (chatbotId)=>{
            try {
                const chatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbot(chatbotId);
                setSelectedChatbot(chatbot);
            } catch (error) {
                console.error("Error loading specific chatbot:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load chatbot configuration");
            }
        }
    }["EnhancedCustomizePage.useCallback[loadSpecificChatbot]"], [
        setSelectedChatbot
    ]);
    // Enhanced connection testing
    const checkConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EnhancedCustomizePage.useCallback[checkConnection]": async ()=>{
            try {
                const isConnected = await testConnection();
                setLastConnectionCheck(new Date());
                if (!isConnected && retryCount < 3) {
                    setRetryCount({
                        "EnhancedCustomizePage.useCallback[checkConnection]": (prev)=>prev + 1
                    }["EnhancedCustomizePage.useCallback[checkConnection]"]);
                    // Auto-retry after a delay
                    setTimeout({
                        "EnhancedCustomizePage.useCallback[checkConnection]": ()=>{
                            checkConnection();
                        }
                    }["EnhancedCustomizePage.useCallback[checkConnection]"], 2000 * Math.pow(2, retryCount)); // Exponential backoff
                } else if (isConnected) {
                    setRetryCount(0);
                    setError(null);
                }
            } catch (error) {
                console.error("Connection check failed:", error);
            }
        }
    }["EnhancedCustomizePage.useCallback[checkConnection]"], [
        testConnection,
        retryCount,
        setError
    ]);
    const initializePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EnhancedCustomizePage.useCallback[initializePage]": async ()=>{
            try {
                // Get current user session
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (!(session === null || session === void 0 ? void 0 : session.user)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please log in to access this page");
                    router.push("/auth/login");
                    return;
                }
                setCurrentUser(session.user);
                // Initialize store with all data
                try {
                    await initializeStore();
                    console.debug("✅ Application initialized successfully");
                } catch (storeError) {
                    console.warn("⚠️ Some features may not be available:", storeError);
                // Don't show error to user since the app can work with defaults
                }
                // If chatbotId in URL, load that specific chatbot
                if (chatbotId) {
                    await loadSpecificChatbot(chatbotId);
                    setIsEditMode(true);
                }
            } catch (error) {
                console.error("Error initializing page:", error);
                setError("Failed to initialize the application. Please refresh the page.");
            }
        }
    }["EnhancedCustomizePage.useCallback[initializePage]"], [
        initializeStore,
        setCurrentUser,
        setIsEditMode,
        chatbotId,
        router,
        loadSpecificChatbot,
        setError
    ]);
    // Load initial data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedCustomizePage.useEffect": ()=>{
            initializePage();
        }
    }["EnhancedCustomizePage.useEffect"], [
        initializePage
    ]);
    // Periodic connection check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedCustomizePage.useEffect": ()=>{
            if (connectionStatus === "disconnected") {
                const interval = setInterval(checkConnection, 30000); // Check every 30 seconds
                return ({
                    "EnhancedCustomizePage.useEffect": ()=>clearInterval(interval)
                })["EnhancedCustomizePage.useEffect"];
            }
        }
    }["EnhancedCustomizePage.useEffect"], [
        connectionStatus,
        checkConnection
    ]);
    // Handle chatbot selection
    const handleChatbotSelect = (chatbot)=>{
        setSelectedChatbot(chatbot);
        setIsEditMode(true);
        setShowCreateForm(false);
        router.push("/dashboard/".concat(userId, "/customize?id=").concat(chatbot.id));
    };
    // Handle create new chatbot
    const handleCreateNew = ()=>{
        setSelectedChatbot(null);
        setIsEditMode(false);
        setShowCreateForm(true);
        router.push("/dashboard/".concat(userId, "/customize"));
    };
    const handleDeleteChatbot = async (chatbotId, chatbotName)=>{
        if (!confirm('Are you sure you want to delete "'.concat(chatbotName, '"? This action cannot be undone.'))) {
            return;
        }
        await deleteChatbotFromStore(chatbotId);
        // If the deleted chatbot was selected, clear selection
        if ((selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id) === chatbotId) {
            setSelectedChatbot(null);
            setIsEditMode(false);
            setShowCreateForm(false);
            router.push("/dashboard/".concat(userId, "/customize"));
        }
    };
    const handleGenerateEmbedCode = ()=>{
        if (!(selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please save the chatbot first");
            return;
        }
        generateEmbedCodeFromStore(selectedChatbot.id);
    };
    const copyEmbedCode = ()=>{
        navigator.clipboard.writeText(embedCode);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Embed code copied to clipboard!");
    };
    // Enhanced retry mechanism
    const handleRetryConnection = async ()=>{
        setRetryCount(0);
        await checkConnection();
        if (connectionStatus === "disconnected") {
            await initializePage();
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto w-full max-w-7xl px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 bg-gray-200 rounded w-1/3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-96 bg-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto ml-[4.5vw] h-[98vh] overflow-y-scroll bg-white rounded-3xl p-8 ",
        children: [
            connectionStatus === "disconnected" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "mb-6 border-red-200 bg-red-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                        className: "h-4 w-4 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Connection Lost:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    " Unable to connect to the backend services.",
                                    lastConnectionCheck && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-red-600 ml-2",
                                        children: [
                                            "Last checked: ",
                                            lastConnectionCheck.toLocaleTimeString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                onClick: handleRetryConnection,
                                className: "ml-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    "Retry (",
                                    retryCount,
                                    "/3)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "mb-6 border-orange-200 bg-orange-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4 text-orange-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Error:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        error,
                                        error.includes("Failed to initialize application") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-sm text-orange-700",
                                            children: "This may be due to network issues or server problems. Try the actions below:"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this),
                                error.includes("Failed to initialize application") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: ()=>initializeStore(),
                                            className: "text-orange-700 border-orange-300 hover:bg-orange-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this),
                                                "Retry Initialize"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: ()=>{
                                                setError(null);
                                                window.location.reload();
                                            },
                                            className: "text-orange-700 border-orange-300 hover:bg-orange-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this),
                                                "Refresh Page"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex pb-3 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font text-3xl font-bold",
                                                children: "AI Chatbot Management"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this),
                                            connectionStatus === "connected" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-green-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "Connected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            connectionStatus === "checking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-yellow-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-4 h-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "Checking..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mt-1",
                                        children: "Create, configure, optimize, and monitor your AI assistants"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleCreateNew,
                                className: "flex items-center gap-2",
                                disabled: connectionStatus === "disconnected",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this),
                                    "Create New Chatbot"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    orgChatbots.length > 0 && !showCreateForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 border-1 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "font text-lg flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "font w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this),
                                        "Your Organization's Chatbots"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: orgChatbots.map((chatbot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ".concat((selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id) === chatbot.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"),
                                            onClick: ()=>handleChatbotSelect(chatbot),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium truncate",
                                                            children: chatbot.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: chatbot.status === "active" ? "default" : "secondary",
                                                            className: "ml-2",
                                                            children: chatbot.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mb-3 line-clamp-2",
                                                    children: chatbot.description || "No description"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 rounded-full",
                                                                    style: {
                                                                        backgroundColor: chatbot.color_hex || "#3B82F6"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500 capitalize",
                                                                    children: chatbot.tone || "helpful"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "ghost",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        window.open("/dashboard/chat?chatbot=".concat(chatbot.id), "_blank");
                                                                    },
                                                                    title: "Test Chatbot",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 394,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "ghost",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleDeleteChatbot(chatbot.id, chatbot.name);
                                                                    },
                                                                    disabled: deletingChatbotId === chatbot.id,
                                                                    className: "text-red-600 hover:text-red-700 hover:bg-red-50",
                                                                    title: "Delete Chatbot",
                                                                    children: deletingChatbotId === chatbot.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 animate-spin rounded-full border-2 border-red-600 border-t-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, chatbot.id, true, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    orgChatbots.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 border-dashed border-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium mb-2",
                                    children: "No Chatbots Yet"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font mb-4",
                                    children: "Create your first chatbot to get started with AI-powered customer support."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleCreateNew,
                                    className: "flex items-center gap-2",
                                    disabled: connectionStatus === "disconnected",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this),
                                        "Create Your First Chatbot"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            (selectedChatbot || showCreateForm) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    !showCreateForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>{
                                            setSelectedChatbot(null);
                                            setIsEditMode(false);
                                            router.push("/dashboard/".concat(userId, "/customize"));
                                        },
                                        className: "pointer flex items-center gap-2 hover:bg-[#5D7DDE] hover:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 19
                                            }, this),
                                            "Back to List"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold",
                                        children: showCreateForm ? "Create New Chatbot" : "Edit: ".concat(selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.name)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            selectedChatbot && !showCreateForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>window.open("/dashboard/chat?chatbot=".concat(selectedChatbot.id), "_blank"),
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 19
                                            }, this),
                                            "Test Chatbot"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>handleDeleteChatbot(selectedChatbot.id, selectedChatbot.name),
                                        disabled: deletingChatbotId === selectedChatbot.id,
                                        className: "flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hover:border-red-300",
                                        children: [
                                            deletingChatbotId === selectedChatbot.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 animate-spin rounded-full border-2 border-red-600 border-t-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 21
                                            }, this),
                                            "Delete Chatbot"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xl:grid-cols-4 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "xl:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$dashboard$2f$customize$2f$ChatbotConfiguration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg flex items-center gap-2",
                                                    children: "📊 Knowledge Base"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Total documents:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    children: uploads.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 540,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Active sources:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "bg-green-50 text-green-700",
                                                                    children: uploads.filter((u)=>u.status === "completed").length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Processing:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 554,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "bg-orange-50 text-orange-700",
                                                                    children: uploads.filter((u)=>u.status === "processing").length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                                value: uploads.filter((u)=>u.status === "completed").length / Math.max(uploads.length, 1) * 100,
                                                                className: "mb-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            className: "w-full",
                                                            onClick: ()=>router.push("/dashboard/".concat(userId, "/train")),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    className: "w-4 h-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Manage Knowledge Base"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg flex items-center gap-2",
                                                    children: "🧠 Context Engine Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Model Tier:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "capitalize",
                                                                    children: contextConfig.model_tier
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Strategy:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 607,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "capitalize",
                                                                    children: contextConfig.retrieval_strategy
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 606,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Quality Checks:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: contextConfig.enable_hallucination_check ? "default" : "secondary",
                                                                    children: contextConfig.enable_hallucination_check ? "Enabled" : "Disabled"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            className: "w-full",
                                                            onClick: ()=>setActiveTab("context"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                    className: "w-4 h-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Configure Engine"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 598,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg flex items-center gap-2",
                                                    children: "🚀 Deployment"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mb-3",
                                                        children: "Your chatbot is optimized and ready for deployment. Generate embed code for websites or integrate via API."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                className: "w-full",
                                                                onClick: handleGenerateEmbedCode,
                                                                disabled: !(selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id),
                                                                children: "Generate Embed Code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                lineNumber: 654,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                className: "w-full",
                                                                onClick: ()=>setActiveTab("analytics"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                        className: "w-4 h-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                        lineNumber: 668,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "View Analytics"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                lineNumber: 459,
                columnNumber: 9
            }, this),
            showEmbedModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 max-w-2xl w-full mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Embed Code"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-3",
                            children: "Copy this code and paste it into your website where you want the chatbot to appear:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                            lineNumber: 684,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 p-4 rounded-lg mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-sm overflow-x-auto whitespace-pre-wrap",
                                children: embedCode
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                lineNumber: 689,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                            lineNumber: 688,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowEmbedModal(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: copyEmbedCode,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 17
                                        }, this),
                                        "Copy Code"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                                    lineNumber: 700,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                            lineNumber: 693,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                    lineNumber: 682,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
                lineNumber: 681,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/app/dashboard/[userId]/customize/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s(EnhancedCustomizePage, "jOshKPP3hL19qII4UuaiO4KcS3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"]
    ];
});
_c = EnhancedCustomizePage;
var _c;
__turbopack_context__.k.register(_c, "EnhancedCustomizePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_zaakiy%20core_frontend_src_5aae087d._.js.map