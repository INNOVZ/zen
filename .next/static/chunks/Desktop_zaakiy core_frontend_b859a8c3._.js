(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bolt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bolt$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/bolt.js [app-client] (ecmascript) <export default as Bolt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
"use client";
;
;
;
;
;
;
;
function AnalyticsDashboard(param) {
    let { metrics, onRefresh, loading } = param;
    var _performance_satisfaction, _performance_satisfaction1, _performance_satisfaction2, _performance_response_time;
    // Fixed to 30 days - no timeframe selection needed
    // Helper functions
    const getTrendIcon = (change)=>{
        if (!change || change === 0) return null;
        if (change > 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
            lineNumber: 41,
            columnNumber: 28
        }, this);
        if (change < 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
            lineNumber: 42,
            columnNumber: 28
        }, this);
        return null;
    };
    const getTrendColor = function(change) {
        let isPositive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (!change || change === 0) return "text-gray-500";
        const isGood = isPositive ? change > 0 : change < 0;
        return isGood ? "text-green-600" : "text-red-600";
    };
    const formatNumber = function(value) {
        let decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (value === undefined || value === null || isNaN(value)) return "0";
        return value.toFixed(decimals);
    };
    const formatPercentage = (value)=>{
        if (value === undefined || value === null || isNaN(value)) return "0%";
        return "".concat((value * 100).toFixed(0), "%");
    };
    const formatResponseTime = (ms)=>{
        if (!ms) return "0ms";
        if (ms < 1000) return "".concat(ms.toFixed(0), "ms");
        return "".concat((ms / 1000).toFixed(1), "s");
    };
    // Render distribution charts
    const renderDistribution = (distribution, totalQueries, title)=>{
        if (!distribution || typeof distribution !== "object") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4 text-gray-500 text-sm",
                children: "No data available"
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this);
        }
        const entries = Object.entries(distribution);
        if (entries.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4 text-gray-500 text-sm",
                children: "No distribution data"
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-medium text-sm text-gray-700",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                entries.map((param)=>{
                    let [range, count] = param;
                    const percentage = totalQueries > 0 ? count / totalQueries * 100 : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: range
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            count,
                                            " (",
                                            percentage.toFixed(1),
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: percentage,
                                className: "h-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, range, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this);
    };
    // Render insights
    const renderInsights = (insights)=>{
        if (!insights || insights.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 text-gray-500 border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No insights available yet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 border",
            children: insights.map((insight, index)=>{
                const getIcon = ()=>{
                    switch(insight.type){
                        case "warning":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 136,
                                columnNumber: 24
                            }, this);
                        case "success":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 138,
                                columnNumber: 24
                            }, this);
                        case "info":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 140,
                                columnNumber: 24
                            }, this);
                        default:
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 142,
                                columnNumber: 24
                            }, this);
                    }
                };
                const getVariant = ()=>{
                    switch(insight.type){
                        case "warning":
                            return "destructive";
                        case "success":
                            return "default";
                        case "info":
                            return "default";
                        default:
                            return "default";
                    }
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: getVariant(),
                    children: [
                        getIcon(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: insight.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        children: insight.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium",
                                        children: [
                                            "💡 ",
                                            insight.recommendation
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 162,
                            columnNumber: 15
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                    lineNumber: 160,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    };
    // Handle missing or malformed metrics
    if (!metrics || typeof metrics !== "object") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 bg-[#e0e7ff] border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Analytics Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onRefresh,
                            disabled: loading,
                            variant: "outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "h-4 w-4 mr-2 ".concat(loading ? "animate-spin" : "")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                "Refresh"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                            className: "h-16 w-16 mx-auto mb-4 text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "No Analytics Data"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mb-4",
                            children: "Analytics data will appear here once your chatbot starts receiving queries."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onRefresh,
                            disabled: loading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "h-4 w-4 mr-2 ".concat(loading ? "animate-spin" : "")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                "Check for Data"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this);
    }
    const { summary, performance, usage_patterns, trends, insights } = metrics;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 mt-8 border-[#f0f9ff] rounded-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: "Analytics"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Performance insights for the last 30 days"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onRefresh,
                            disabled: loading,
                            variant: "outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "h-4 w-4 mr-2 ".concat(loading ? "animate-spin" : "")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                "Refresh"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "pointer bg-white p-4 shadow-md border hover:-translate-y-1 duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-600",
                                                        children: "Total Queries"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: formatNumber(summary === null || summary === void 0 ? void 0 : summary.total_queries)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    (trends === null || trends === void 0 ? void 0 : trends.volume_change) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-xs ".concat(getTrendColor(trends.volume_change, true)),
                                                        children: [
                                                            getTrendIcon(trends.volume_change),
                                                            Math.abs(trends.volume_change).toFixed(1),
                                                            "% from last period"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                size: 28,
                                                color: "#5D7DDE"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "pointer bg-white p-4 hover:-translate-y-1 duration-500 border shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-600",
                                                        children: "Avg Response Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: formatResponseTime(summary === null || summary === void 0 ? void 0 : summary.avg_response_time_ms)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this),
                                                    (trends === null || trends === void 0 ? void 0 : trends.response_time_change) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-xs ".concat(getTrendColor(trends.response_time_change, false)),
                                                        children: [
                                                            getTrendIcon(trends.response_time_change),
                                                            Math.abs(trends.response_time_change).toFixed(1),
                                                            "% from last period"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 28,
                                                color: "#5D7DDE"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "pointer bg-white p-4 hover:-translate-y-1 duration-500 border shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-600",
                                                        children: "Context Quality"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: formatPercentage(summary === null || summary === void 0 ? void 0 : summary.avg_context_quality)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this),
                                                    (trends === null || trends === void 0 ? void 0 : trends.quality_change) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-xs ".concat(getTrendColor(trends.quality_change, true)),
                                                        children: [
                                                            getTrendIcon(trends.quality_change),
                                                            Math.abs(trends.quality_change).toFixed(1),
                                                            "% from last period"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bolt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bolt$3e$__["Bolt"], {
                                                className: "h-8 w-8 text-[#5D7DDE]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "pointer bg-white p-4 hover:-translate-y-1 duration-500 border shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-600",
                                                        children: "User Satisfaction"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        children: (performance === null || performance === void 0 ? void 0 : (_performance_satisfaction = performance.satisfaction) === null || _performance_satisfaction === void 0 ? void 0 : _performance_satisfaction.total_feedback) === 0 ? "No Data" : formatPercentage(summary === null || summary === void 0 ? void 0 : summary.avg_satisfaction)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: (performance === null || performance === void 0 ? void 0 : (_performance_satisfaction1 = performance.satisfaction) === null || _performance_satisfaction1 === void 0 ? void 0 : _performance_satisfaction1.total_feedback) === 0 ? "Enable feedback collection" : "".concat((performance === null || performance === void 0 ? void 0 : (_performance_satisfaction2 = performance.satisfaction) === null || _performance_satisfaction2 === void 0 ? void 0 : _performance_satisfaction2.total_feedback) || 0, " responses")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                size: 28,
                                                color: "#5D7DDE"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: usage_patterns && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "pointer border hover:scale-[1.02] duration-500 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this),
                                            "Usage Patterns"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center p-3 bg-gray-50 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Queries/Day"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold",
                                                                children: formatNumber(usage_patterns.queries_per_day, 1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center p-3 bg-gray-50 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Avg Sources"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold",
                                                                children: formatNumber(usage_patterns.avg_sources_per_query, 1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 360,
                                                columnNumber: 19
                                            }, this),
                                            usage_patterns.model_usage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-sm text-gray-700 mb-2",
                                                        children: "Model Usage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: Object.entries(usage_patterns.model_usage).map((param)=>{
                                                            let [model, usage] = param;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: model
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "secondary",
                                                                        children: [
                                                                            formatNumber(usage),
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, model, true, {
                                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                                lineNumber: 375,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-7",
                children: [
                    (performance === null || performance === void 0 ? void 0 : (_performance_response_time = performance.response_time) === null || _performance_response_time === void 0 ? void 0 : _performance_response_time.distribution) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "pointer border hover:scale-[1.02] duration-500 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        "Response Time Distribution"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: renderDistribution(performance.response_time.distribution, (summary === null || summary === void 0 ? void 0 : summary.total_queries) || 0, "Response Time Ranges")
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "pointer hover:scale-[1.02] duration-500 border shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        "Insights & Recommendations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: renderInsights(insights)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    (!summary || summary.total_queries === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "pointer hover:scale-[1.02] duration-500 border shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "h-16 w-16 mx-auto mb-4 text-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 437,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-gray-900 mb-2",
                                        children: "No Query Data Yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 438,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 mb-4",
                                        children: "Your analytics will appear here once users start chatting with your bot."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 441,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: "Try testing your chatbot to generate some initial data."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_c = AnalyticsDashboard;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/dashboard/home/AnalyticsDashboard.tsx [app-client] (ecmascript)"));
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChartColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
];
const ChartColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chart-column", __iconNode);
;
 //# sourceMappingURL=chart-column.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "polyline",
        {
            points: "22 17 13.5 8.5 8.5 13.5 2 7",
            key: "1r2t7k"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 22 17 22 11",
            key: "11uiuu"
        }
    ]
];
const TrendingDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trending-down", __iconNode);
;
 //# sourceMappingURL=trending-down.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/bolt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bolt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            key: "yt0hxn"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ]
];
const Bolt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bolt", __iconNode);
;
 //# sourceMappingURL=bolt.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/bolt.js [app-client] (ecmascript) <export default as Bolt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bolt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bolt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bolt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/bolt.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Info
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
];
const Info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("info", __iconNode);
;
 //# sourceMappingURL=info.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ThumbsUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7 10v12",
            key: "1qc93n"
        }
    ],
    [
        "path",
        {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
            key: "emmmcr"
        }
    ]
];
const ThumbsUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("thumbs-up", __iconNode);
;
 //# sourceMappingURL=thumbs-up.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbsUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript)");
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Activity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
];
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("activity", __iconNode);
;
 //# sourceMappingURL=activity.js.map
}),
"[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_zaakiy%20core_frontend_b859a8c3._.js.map