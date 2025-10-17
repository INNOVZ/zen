(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimpleErrorFallback",
    ()=>SimpleErrorFallback,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
"use client";
;
;
;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        var _this_props_onError, _this_props;
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        (_this_props_onError = (_this_props = this.props).onError) === null || _this_props_onError === void 0 ? void 0 : _this_props_onError.call(_this_props, error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            var _this_state_error;
            if (this.props.fallback) {
                const FallbackComponent = this.props.fallback;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallbackComponent, {
                    error: this.state.error,
                    retry: this.retry
                }, void 0, false, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-red-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2 text-red-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                "Something went wrong"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: ((_this_state_error = this.state.error) === null || _this_state_error === void 0 ? void 0 : _this_state_error.message) || "An unexpected error occurred"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: this.retry,
                                variant: "outline",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    "Try again"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "retry", ()=>{
            this.setState({
                hasError: false,
                error: undefined
            });
        });
        this.state = {
            hasError: false
        };
    }
}
const SimpleErrorFallback = (param)=>{
    let { error, retry } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border border-red-200 rounded-lg bg-red-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-red-600 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                        lineNumber: 86,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "Error loading component"
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                        lineNumber: 87,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-3",
                children: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong"
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: retry,
                variant: "outline",
                children: "Retry"
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
                lineNumber: 92,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SimpleErrorFallback;
const __TURBOPACK__default__export__ = ErrorBoundary;
var _c;
__turbopack_context__.k.register(_c, "SimpleErrorFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/stores/customizeStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
const useCustomizeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
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
                const chatbots = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbots();
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load chatbots. Please check your connection.");
                }
            }
        },
        loadUploads: async ()=>{
            try {
                const uploads = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadsApi"].getUploads();
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load knowledge base files.");
                }
            }
        },
        loadContextConfig: async ()=>{
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getContextConfig();
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load AI configuration.");
            }
        },
        loadPerformanceMetrics: async function() {
            let days = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7;
            try {
                set({
                    analyticsLoading: true
                });
                const metrics = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getAnalyticsDashboard(days);
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
                const chatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].createChatbot(config);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot created successfully!");
                return chatbot;
            } catch (error) {
                console.error("Error creating chatbot:", error);
                set({
                    saving: false,
                    error: "Failed to create chatbot",
                    connectionStatus: "disconnected"
                });
                const errorMessage = error instanceof Error ? error.message : "Failed to create chatbot. Please try again.";
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
                return null;
            }
        },
        updateChatbot: async (chatbotId, config)=>{
            try {
                set({
                    saving: true,
                    error: null
                });
                const updatedChatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].updateChatbot(chatbotId, config);
                set((state)=>({
                        orgChatbots: state.orgChatbots.map((bot)=>bot.id === chatbotId ? updatedChatbot : bot),
                        selectedChatbot: updatedChatbot,
                        saving: false,
                        connectionStatus: "connected"
                    }));
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot updated successfully!");
                return updatedChatbot;
            } catch (error) {
                console.error("Error updating chatbot:", error);
                set({
                    saving: false,
                    error: "Failed to update chatbot",
                    connectionStatus: "disconnected"
                });
                const errorMessage = error instanceof Error ? error.message : "Failed to update chatbot. Please try again.";
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
                return null;
            }
        },
        deleteChatbot: async (chatbotId)=>{
            try {
                set({
                    deletingChatbotId: chatbotId,
                    error: null
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].deleteChatbot(chatbotId);
                set((state)=>{
                    var _state_selectedChatbot;
                    return {
                        orgChatbots: state.orgChatbots.filter((bot)=>bot.id !== chatbotId),
                        selectedChatbot: ((_state_selectedChatbot = state.selectedChatbot) === null || _state_selectedChatbot === void 0 ? void 0 : _state_selectedChatbot.id) === chatbotId ? null : state.selectedChatbot,
                        deletingChatbotId: null,
                        connectionStatus: "connected"
                    };
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Chatbot deleted successfully!");
            } catch (error) {
                console.error("Error deleting chatbot:", error);
                set({
                    deletingChatbotId: null,
                    error: "Failed to delete chatbot",
                    connectionStatus: "disconnected"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete chatbot. Please try again.");
            }
        },
        saveContextConfig: async (updates)=>{
            try {
                set({
                    saving: true,
                    error: null
                });
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].updateContextConfig(updates);
                if (response && response.success) {
                    set((state)=>({
                            contextConfig: {
                                ...state.contextConfig,
                                ...updates
                            },
                            saving: false,
                            connectionStatus: "connected"
                        }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Context configuration updated successfully!");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
            }
        },
        uploadFile: async (file, type)=>{
            try {
                set({
                    uploading: true,
                    error: null
                });
                const uploadResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadsApi"].uploadFile(file, type);
                set((state)=>({
                        uploads: [
                            ...state.uploads,
                            uploadResult
                        ],
                        uploading: false,
                        connectionStatus: "connected"
                    }));
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("File uploaded successfully!");
                return uploadResult;
            } catch (error) {
                console.error("Error uploading file:", error);
                set({
                    uploading: false,
                    error: "Failed to upload file",
                    connectionStatus: "disconnected"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to upload file. Please try again.");
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
                    const healthResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getHealthCheck();
                    if (healthResponse) {
                        // If basic health check passes, try authenticated connection
                        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].testConnection();
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
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].testConnection();
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbots(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadsApi"].getUploads(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getContextConfig()
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
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning("Some features may be limited due to connectivity issues");
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to initialize application. Please check your connection and try refreshing the page.");
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
"[project]/Documents/07:30:15/frontend/src/utils/errorHandling.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility functions for consistent error handling across the application
 */ __turbopack_context__.s([
    "analyzeError",
    ()=>analyzeError,
    "getUserFriendlyErrorMessage",
    ()=>getUserFriendlyErrorMessage,
    "logError",
    ()=>logError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const analyzeError = (error)=>{
    const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    const isConnectionError = error instanceof Error && (error.message.includes("Unable to connect") || error.message.includes("Backend server unavailable") || error.message.includes("ECONNREFUSED") || error.message.includes("Failed to fetch") || error.message.includes("network") || error.message.includes("timeout"));
    return {
        isConnectionError,
        shouldShowToast: !isDevelopment || !isConnectionError,
        logLevel: isDevelopment && isConnectionError ? 'warn' : 'error',
        message: isConnectionError ? "Backend server unavailable" : "An unexpected error occurred"
    };
};
const logError = (error, context, info)=>{
    if (info.logLevel === 'warn') {
        console.warn("".concat(context, " - backend server not available"));
    } else {
        console.error("Error in ".concat(context, ":"), error);
    }
};
const getUserFriendlyErrorMessage = (error)=>{
    const info = analyzeError(error);
    if (info.isConnectionError) {
        return "Unable to connect to the server. Please check your connection and try again.";
    }
    if (error instanceof Error) {
        return error.message;
    }
    return "An unexpected error occurred. Please try again.";
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/hooks/useDashboardData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardData",
    ()=>useDashboardData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/stores/customizeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$errorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/utils/errorHandling.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useDashboardData = ()=>{
    _s();
    const { loading, analyticsLoading, orgChatbots: chatbots, uploads, conversations, performanceMetrics: analyticsMetrics, connectionStatus, loadChatbots, loadUploads, loadPerformanceMetrics, setConversations, testConnection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"])();
    // Fast conversation count for immediate display
    const [conversationCount, setConversationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [conversationCountLoading, setConversationCountLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fast conversation count loading
    const loadConversationCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardData.useCallback[loadConversationCount]": async ()=>{
            try {
                setConversationCountLoading(true);
                const count = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getConversationCount();
                setConversationCount(count);
            } catch (error) {
                console.error("Error loading conversation count:", error);
                setConversationCount(0);
            } finally{
                setConversationCountLoading(false);
            }
        }
    }["useDashboardData.useCallback[loadConversationCount]"], []);
    // Non-blocking data loading for better dashboard performance
    const loadDashboardData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardData.useCallback[loadDashboardData]": async ()=>{
            try {
                // Load critical data first (chatbots and uploads) for immediate UI display
                await Promise.allSettled([
                    loadChatbots(),
                    loadUploads(),
                    loadConversationCount()
                ]);
                // Load conversation details in background (much smaller sample)
                setTimeout({
                    "useDashboardData.useCallback[loadDashboardData]": async ()=>{
                        try {
                            const conversationPromise = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getConversations(10); // Only 10 for dashboard
                            const timeoutPromise = new Promise({
                                "useDashboardData.useCallback[loadDashboardData]": (_, reject)=>setTimeout({
                                        "useDashboardData.useCallback[loadDashboardData]": ()=>reject(new Error('Conversation loading timeout'))
                                    }["useDashboardData.useCallback[loadDashboardData]"], 1500)
                            }["useDashboardData.useCallback[loadDashboardData]"]);
                            const userConversations = await Promise.race([
                                conversationPromise,
                                timeoutPromise
                            ]);
                            setConversations(userConversations);
                        } catch (error) {
                            const errorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$errorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeError"])(error);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$errorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logError"])(error, "loading conversations", errorInfo);
                            setConversations([]);
                        }
                    }
                }["useDashboardData.useCallback[loadDashboardData]"], 100);
                // Load analytics data in background (use 30 days to capture more data)
                setTimeout({
                    "useDashboardData.useCallback[loadDashboardData]": ()=>{
                        loadPerformanceMetrics(30);
                    }
                }["useDashboardData.useCallback[loadDashboardData]"], 200);
            } catch (error) {
                const errorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$errorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeError"])(error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$errorHandling$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logError"])(error, "loading dashboard data", errorInfo);
            }
        }
    }["useDashboardData.useCallback[loadDashboardData]"], [
        loadChatbots,
        loadUploads,
        loadConversationCount,
        setConversations,
        loadPerformanceMetrics
    ]);
    const handleRefreshAnalytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardData.useCallback[handleRefreshAnalytics]": async ()=>{
            await loadPerformanceMetrics(30);
        }
    }["useDashboardData.useCallback[handleRefreshAnalytics]"], [
        loadPerformanceMetrics
    ]);
    const refreshConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardData.useCallback[refreshConnection]": ()=>{
            testConnection();
            loadDashboardData();
        }
    }["useDashboardData.useCallback[refreshConnection]"], [
        testConnection,
        loadDashboardData
    ]);
    return {
        // Data
        loading,
        analyticsLoading,
        chatbots,
        uploads,
        conversations,
        analyticsMetrics,
        isOffline: connectionStatus === 'disconnected',
        // Fast conversation data
        conversationCount,
        conversationCountLoading,
        // Actions
        loadDashboardData,
        handleRefreshAnalytics,
        refreshConnection
    };
};
_s(useDashboardData, "3lHTCzda59vbzhYHAEE5HI1DMIo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/hooks/useDashboardNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardNavigation",
    ()=>useDashboardNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useDashboardNavigation = (userId)=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Memoized navigation handlers
    const handleTrainClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardNavigation.useCallback[handleTrainClick]": ()=>{
            router.push("/dashboard/".concat(userId, "/train"));
        }
    }["useDashboardNavigation.useCallback[handleTrainClick]"], [
        router,
        userId
    ]);
    const handleCustomizeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardNavigation.useCallback[handleCustomizeClick]": ()=>{
            router.push("/dashboard/".concat(userId, "/customize"));
        }
    }["useDashboardNavigation.useCallback[handleCustomizeClick]"], [
        router,
        userId
    ]);
    const handleChatClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardNavigation.useCallback[handleChatClick]": ()=>{
            router.push("/dashboard/".concat(userId, "/chat"));
        }
    }["useDashboardNavigation.useCallback[handleChatClick]"], [
        router,
        userId
    ]);
    const handleSettingsClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardNavigation.useCallback[handleSettingsClick]": ()=>{
            router.push("/dashboard/".concat(userId, "/settings"));
        }
    }["useDashboardNavigation.useCallback[handleSettingsClick]"], [
        router,
        userId
    ]);
    // Configuration-driven quick actions
    const quickActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboardNavigation.useMemo[quickActions]": ()=>[
                {
                    id: "create-chatbot",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
                    title: "Create Chatbot",
                    onClick: handleCustomizeClick
                },
                {
                    id: "upload-data",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"],
                    title: "Upload Data",
                    onClick: handleTrainClick
                },
                {
                    id: "test-chat",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                    title: "Test Chat",
                    onClick: handleChatClick
                },
                {
                    id: "view-analytics",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                    title: "View Analytics",
                    onClick: handleSettingsClick
                }
            ]
    }["useDashboardNavigation.useMemo[quickActions]"], [
        handleCustomizeClick,
        handleTrainClick,
        handleChatClick,
        handleSettingsClick
    ]);
    return {
        handleTrainClick,
        handleCustomizeClick,
        handleChatClick,
        handleSettingsClick,
        quickActions
    };
};
_s(useDashboardNavigation, "vBKd2HF4b3dSPX5jUgUgYo/gqTs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/hooks/useDashboardStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardStats",
    ()=>useDashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useDashboardStats = (chatbots, uploads, conversations, conversationCount)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboardStats.useMemo": ()=>({
                totalChatbots: chatbots.length,
                totalUploads: uploads.length,
                totalConversations: conversationCount || conversations.length,
                activeUsers: 0
            })
    }["useDashboardStats.useMemo"], [
        chatbots.length,
        uploads.length,
        conversations.length,
        conversationCount
    ]);
};
_s(useDashboardStats, "nwk+m61qLgjDVUp4IGV/072DDN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/hooks/useUserAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserAuth",
    ()=>useUserAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useUserAuth = (userId, setCurrentUser)=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthLoading, setIsAuthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserAuth.useEffect": ()=>{
            let mounted = true;
            const checkUserAccess = {
                "useUserAuth.useEffect.checkUserAccess": async ()=>{
                    try {
                        var _session_user_user_metadata, _session_user_user_metadata1, _session_user_user_metadata2;
                        setIsAuthLoading(true);
                        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                        if (!mounted) return;
                        if (!(session === null || session === void 0 ? void 0 : session.user)) {
                            router.replace("/auth/login");
                            return;
                        }
                        // Check if the userId in URL matches the logged-in user
                        if (session.user.id !== userId) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unauthorized access");
                            router.replace("/dashboard/".concat(session.user.id));
                            return;
                        }
                        const userData = {
                            id: session.user.id,
                            email: session.user.email || "",
                            name: ((_session_user_user_metadata = session.user.user_metadata) === null || _session_user_user_metadata === void 0 ? void 0 : _session_user_user_metadata.name) || session.user.email || "",
                            display_name: ((_session_user_user_metadata1 = session.user.user_metadata) === null || _session_user_user_metadata1 === void 0 ? void 0 : _session_user_user_metadata1.display_name) || ((_session_user_user_metadata2 = session.user.user_metadata) === null || _session_user_user_metadata2 === void 0 ? void 0 : _session_user_user_metadata2.name) || session.user.email || ""
                        };
                        setUser(userData);
                        setCurrentUser(session.user);
                    } catch (error) {
                        console.error("Error checking user access:", error);
                        if (mounted) {
                            router.replace("/auth/login");
                        }
                    } finally{
                        if (mounted) {
                            setIsAuthLoading(false);
                        }
                    }
                }
            }["useUserAuth.useEffect.checkUserAccess"];
            checkUserAccess();
            return ({
                "useUserAuth.useEffect": ()=>{
                    mounted = false;
                }
            })["useUserAuth.useEffect"];
        }
    }["useUserAuth.useEffect"], [
        userId,
        router,
        setCurrentUser
    ]);
    return {
        user,
        isAuthLoading
    };
};
_s(useUserAuth, "jhD9Rn2ZlIDB/B7MvOCY9yHSss8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$userUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/utils/userUtils.ts [app-client] (ecmascript)");
;
;
;
;
;
const DashboardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = (param)=>{
    let { user, onTrainClick, onCustomizeClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex justify-between items-center bg-white p-8 rounded-t-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl text-[#0a0a60] font-bold",
                        children: [
                            "Welcome back, ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$utils$2f$userUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserFirstName"])(user),
                            "!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mt-1",
                        children: "Manage your AI chatbots and training data"
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                role: "group",
                "aria-label": "Primary actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onTrainClick,
                        variant: "outline",
                        className: "pointer flex items-center gap-2",
                        "aria-label": "Add training data",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-4 w-4",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Add Training Data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onCustomizeClick,
                        className: "pointer flex items-center gap-2",
                        "aria-label": "Create new chatbot",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Create Chatbot"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = DashboardHeader;
DashboardHeader.displayName = "DashboardHeader";
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardHeader$memo");
__turbopack_context__.k.register(_c1, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusCard",
    ()=>StatusCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const StatusCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = (param)=>{
    let { icon: Icon, title, value, isLoading = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 border shadow-sm",
        role: "article",
        "aria-label": "".concat(title, " statistics"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 22,
                            className: "text-[#020617]",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm font-medium text-[#0a0a60]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse bg-white/30 rounded-full w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm animate-pulse",
                                children: "Loading"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-label": "".concat(value, " ").concat(title.toLowerCase()),
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = StatusCard;
StatusCard.displayName = "StatCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusCard$memo");
__turbopack_context__.k.register(_c1, "StatusCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConversationsCard",
    ()=>ConversationsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
;
;
;
const ConversationsCard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = (param)=>{
    let { conversations, totalConversations, loading, conversationCount, conversationCountLoading } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 border shadow-sm",
        role: "article",
        "aria-label": "Conversations statistics",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                size: 20,
                                className: "text-[#020617]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm font-medium text-[#0a0a60]",
                                children: "Conversations"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white",
                        children: conversationCountLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-1",
                            role: "status",
                            "aria-label": "Loading conversation count",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse bg-white/30 rounded-full w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm animate-pulse",
                                    children: "0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : typeof conversationCount === "number" && conversationCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-label": "".concat(conversationCount, " conversations"),
                            children: conversationCount
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : conversations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-label": "".concat(totalConversations, " conversations"),
                            children: totalConversations
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-md",
                            "aria-label": "No conversations",
                            children: "0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && conversations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-center"
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ConversationsCard;
ConversationsCard.displayName = "ConversationsCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "ConversationsCard$memo");
__turbopack_context__.k.register(_c1, "ConversationsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenUsageCard",
    ()=>TokenUsageCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/contexts/SubscriptionContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const TokenUsageCard = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s((param)=>{
    let { className } = param;
    _s();
    const { subscription, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"])();
    const formatNumber = (num)=>{
        return new Intl.NumberFormat().format(num);
    };
    const getUsagePercentage = ()=>{
        if (!subscription) return 0;
        return subscription.usage_percentage;
    };
    const getStatusColor = ()=>{
        const percentage = getUsagePercentage();
        if (percentage >= 95) return "text-red-400";
        if (percentage >= 80) return "text-yellow-400";
        return "text-green-400";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-3 bg-white rounded-lg pointer hover:-translate-y-1 duration-500 border shadow-sm ".concat(className || ""),
        role: "article",
        "aria-label": "Token usage statistics",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                size: 20,
                                className: "text-gray-700",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm font-medium text-gray-700",
                                children: "Token Usage"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl glass shadow-xl font-bold px-4 py-1 rounded-lg text-white",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-1",
                            role: "status",
                            "aria-label": "Loading token usage",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse bg-white/30 rounded-full w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm animate-pulse",
                                    children: "0%"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : subscription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: getStatusColor(),
                            "aria-label": "".concat(getUsagePercentage().toFixed(1), "% token usage"),
                            children: [
                                getUsagePercentage().toFixed(1),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-md",
                            "aria-label": "No subscription",
                            children: "0%"
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subscription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-gray-700/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    formatNumber(subscription.tokens_used_this_month),
                                    " used"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    formatNumber(subscription.monthly_limit),
                                    " limit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs text-gray-700/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    formatNumber(subscription.tokens_remaining),
                                    " remaining"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: getStatusColor(),
                                children: getUsagePercentage() >= 95 ? "Critical" : getUsagePercentage() >= 80 ? "Warning" : "Healthy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "mF4zZnpOEpXSd3HGByw9oCguSLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"]
    ];
})), "mF4zZnpOEpXSd3HGByw9oCguSLQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"]
    ];
});
_c1 = TokenUsageCard;
TokenUsageCard.displayName = "TokenUsageCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "TokenUsageCard$memo");
__turbopack_context__.k.register(_c1, "TokenUsageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/types/dashboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DASHBOARD_CONFIG",
    ()=>DASHBOARD_CONFIG,
    "DashboardSection",
    ()=>DashboardSection
]);
const DASHBOARD_CONFIG = {
    SKELETON_ITEMS_COUNT: 4,
    STATS_GRID_CLASSES: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6",
    QUICK_ACTIONS_GRID_CLASSES: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
    CONTAINER_CLASSES: "mx-auto ml-[4.1vw] bg-white rounded-l-3xl space-y-6 shadow-lg"
};
var DashboardSection = /*#__PURE__*/ function(DashboardSection) {
    DashboardSection["HEADER"] = "header";
    DashboardSection["STATS"] = "stats";
    DashboardSection["ANALYTICS"] = "analytics";
    DashboardSection["QUICK_ACTIONS"] = "quickActions";
    return DashboardSection;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusGrid",
    ()=>StatusGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$StatusCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$ConversationsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/ConversationsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$TokenUsageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/TokenUsageCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/types/dashboard.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const StatusGrid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = (param)=>{
    let { stats, conversationsLoaded, conversations, loading, conversationCount, conversationCountLoading, onCreateConversation } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Dashboard Statistics",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_CONFIG"].STATS_GRID_CLASSES,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$StatusCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusCard"], {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiRobot3Line"],
                title: "Total Chatbots",
                value: stats.totalChatbots
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$StatusCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusCard"], {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
                title: "Training Files",
                value: stats.totalUploads,
                className: "glass-b text-white"
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$ConversationsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationsCard"], {
                conversationsLoaded: conversationsLoaded,
                conversations: conversations,
                totalConversations: stats.totalConversations,
                loading: loading,
                conversationCount: conversationCount,
                conversationCountLoading: conversationCountLoading,
                onCreateClick: onCreateConversation
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$TokenUsageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenUsageCard"], {}, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = StatusGrid;
StatusGrid.displayName = "StatusGrid";
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusGrid$memo");
__turbopack_context__.k.register(_c1, "StatusGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickActionsGrid",
    ()=>QuickActionsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/types/dashboard.ts [app-client] (ecmascript)");
;
;
;
;
;
const QuickActionButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((param)=>{
    let { icon: Icon, title, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "outline",
        className: "h-20 flex flex-col gap-2",
        onClick: onClick,
        "aria-label": title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "h-6 w-6",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c = QuickActionButton;
QuickActionButton.displayName = "QuickActionButton";
const QuickActionsGrid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c1 = (param)=>{
    let { actions } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Quick Actions"
                }, void 0, false, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                    lineNumber: 26,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Quick Actions",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_CONFIG"].QUICK_ACTIONS_GRID_CLASSES,
                    children: actions.map((param)=>{
                        let { id, icon, title, onClick } = param;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickActionButton, {
                            icon: icon,
                            title: title,
                            onClick: onClick
                        }, id, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c2 = QuickActionsGrid;
QuickActionsGrid.displayName = "QuickActionsGrid";
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "QuickActionButton");
__turbopack_context__.k.register(_c1, "QuickActionsGrid$memo");
__turbopack_context__.k.register(_c2, "QuickActionsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSkeleton",
    ()=>LoadingSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/types/dashboard.ts [app-client] (ecmascript)");
;
;
;
const LoadingSkeleton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_CONFIG"].CONTAINER_CLASSES,
        role: "status",
        "aria-label": "Loading dashboard",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 rounded w-64"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                                    lineNumber: 14,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-200 rounded w-48"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                                    lineNumber: 15,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                            lineNumber: 13,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 bg-gray-200 rounded w-32"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                                    lineNumber: 18,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 bg-gray-200 rounded w-32"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                                    lineNumber: 19,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                            lineNumber: 17,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                    lineNumber: 12,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_CONFIG"].STATS_GRID_CLASSES,
                    children: Array.from({
                        length: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_CONFIG"].SKELETON_ITEMS_COUNT
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-24 bg-gray-200 rounded-lg"
                        }, i, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-96 bg-gray-200 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                            lineNumber: 35,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-96 bg-gray-200 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                            lineNumber: 36,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = LoadingSkeleton;
LoadingSkeleton.displayName = "LoadingSkeleton";
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingSkeleton$memo");
__turbopack_context__.k.register(_c1, "LoadingSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/stores/customizeStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/hooks/useDashboardData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/hooks/useDashboardNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/hooks/useDashboardStats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useUserAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/hooks/useUserAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/DashboardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$StatusGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/StatusGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$QuickActionsGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/QuickActionsGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/LoadingSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/src/types/dashboard.ts [app-client] (ecmascript)");
;
;
;
;
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
;
;
const DevModeAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/07:30:15/frontend/src/components/DevModeAlert.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/07:30:15/frontend/src/components/DevModeAlert.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = DevModeAlert;
// Lazy load components with optimized loading states
const AnalyticsDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {}, void 0, false, {
            fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
            lineNumber: 29,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
_c1 = AnalyticsDashboard;
const PerformanceMonitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/07:30:15/frontend/src/components/PerformanceMonitor.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/07:30:15/frontend/src/components/PerformanceMonitor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = PerformanceMonitor;
const OfflineMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/07:30:15/frontend/src/components/dashboard/home/OfflineMode.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/07:30:15/frontend/src/components/dashboard/home/OfflineMode.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = OfflineMode;
function UserDashboard() {
    _s();
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const userIdString = userId;
    // Custom hooks for separation of concerns
    const { setCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"])();
    const { user, isAuthLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useUserAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserAuth"])(userIdString, setCurrentUser);
    const { quickActions, handleCustomizeClick, handleTrainClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardNavigation"])(userIdString);
    const { loading, analyticsLoading, chatbots, uploads, conversations, analyticsMetrics, isOffline, conversationCount, conversationCountLoading, loadDashboardData, handleRefreshAnalytics, refreshConnection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardData"])();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"])(chatbots, uploads, conversations, conversationCount);
    const [conversationsLoaded, setConversationsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load dashboard data after user authentication with a small delay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDashboard.useEffect": ()=>{
            if (user && !isAuthLoading) {
                // Add a small delay to ensure authentication is fully complete
                const timer = setTimeout({
                    "UserDashboard.useEffect.timer": ()=>{
                        loadDashboardData();
                    }
                }["UserDashboard.useEffect.timer"], 100);
                return ({
                    "UserDashboard.useEffect": ()=>clearTimeout(timer)
                })["UserDashboard.useEffect"];
            }
        }
    }["UserDashboard.useEffect"], [
        user,
        isAuthLoading,
        loadDashboardData
    ]);
    // Track conversation loading state for better UX
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDashboard.useEffect": ()=>{
            if (conversations.length > 0) {
                setConversationsLoaded(true);
            }
        }
    }["UserDashboard.useEffect"], [
        conversations.length
    ]);
    // Early returns for loading and authentication states
    if (isAuthLoading || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {}, void 0, false, {
            fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
            lineNumber: 102,
            columnNumber: 12
        }, this);
    }
    // Show offline mode if we can't connect to the server
    if (isOffline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfflineMode, {
            onRetry: refreshConnection,
            isRetrying: loading
        }, void 0, false, {
            fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
            lineNumber: 107,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$types$2f$dashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_CONFIG"].CONTAINER_CLASSES,
        role: "main",
        "aria-label": "User Dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PerformanceMonitor, {
                name: "Dashboard Render"
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DevModeAlert, {
                show: isOffline
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            isOffline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Unable to connect to server. Some features may not work properly."
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                onClick: refreshConnection,
                                className: "ml-4",
                                "aria-label": "Retry connection",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4 mr-1",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    "Retry"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeader"], {
                user: user,
                userId: userIdString,
                onTrainClick: handleTrainClick,
                onCustomizeClick: handleCustomizeClick
            }, void 0, false, {
                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$StatusGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusGrid"], {
                        stats: stats,
                        conversationsLoaded: conversationsLoaded,
                        conversations: conversations,
                        loading: loading,
                        conversationCount: conversationCount,
                        conversationCountLoading: conversationCountLoading,
                        onCreateConversation: handleCustomizeClick
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleErrorFallback"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {}, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 31
                            }, void 0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsDashboard, {
                                metrics: analyticsMetrics,
                                onRefresh: handleRefreshAnalytics,
                                loading: analyticsLoading
                            }, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleErrorFallback"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {}, void 0, false, {
                                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                                lineNumber: 175,
                                columnNumber: 31
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$components$2f$dashboard$2f$home$2f$QuickActionsGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickActionsGrid"], {
                        actions: quickActions
                    }, void 0, false, {
                        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/07:30:15/frontend/src/app/dashboard/[userId]/page.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(UserDashboard, "rD9VthrqpZu7RSYP/nXKJT/VZG0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$stores$2f$customizeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomizeStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useUserAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$src$2f$hooks$2f$useDashboardStats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardStats"]
    ];
});
_c4 = UserDashboard;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DevModeAlert");
__turbopack_context__.k.register(_c1, "AnalyticsDashboard");
__turbopack_context__.k.register(_c2, "PerformanceMonitor");
__turbopack_context__.k.register(_c3, "OfflineMode");
__turbopack_context__.k.register(_c4, "UserDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_07%3A30%3A15_frontend_src_0e1757b4._.js.map