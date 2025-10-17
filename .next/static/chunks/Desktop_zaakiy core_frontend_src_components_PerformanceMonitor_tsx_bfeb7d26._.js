(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/zaakiy core/frontend/src/components/PerformanceMonitor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerformanceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PerformanceMonitor(param) {
    let { name, onMeasure } = param;
    _s();
    const [startTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PerformanceMonitor.useState": ()=>performance.now()
    }["PerformanceMonitor.useState"]);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceMonitor.useEffect": ()=>{
            const endTime = performance.now();
            const measureDuration = endTime - startTime;
            setDuration(measureDuration);
            if (onMeasure) {
                onMeasure(measureDuration);
            }
            // Log performance in development
            if ("TURBOPACK compile-time truthy", 1) {
                console.log("⏱️ ".concat(name, ": ").concat(measureDuration.toFixed(2), "ms"));
            }
        }
    }["PerformanceMonitor.useEffect"], [
        name,
        startTime,
        onMeasure
    ]);
    // Only show in development
    if (("TURBOPACK compile-time value", "development") !== "development" || duration === null) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy__core$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded z-50",
        children: [
            name,
            ": ",
            duration.toFixed(2),
            "ms"
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/zaakiy core/frontend/src/components/PerformanceMonitor.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(PerformanceMonitor, "+buTtIK5K9VLJSO3UTlAZSiztNQ=");
_c = PerformanceMonitor;
var _c;
__turbopack_context__.k.register(_c, "PerformanceMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy core/frontend/src/components/PerformanceMonitor.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/zaakiy core/frontend/src/components/PerformanceMonitor.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_zaakiy%20core_frontend_src_components_PerformanceMonitor_tsx_bfeb7d26._.js.map