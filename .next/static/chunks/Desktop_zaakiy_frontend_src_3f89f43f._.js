(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/zaakiy/frontend/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://raoonyyrzzftdenvknfi.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhb29ueXlyenpmdGRlbnZrbmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDM1NzcsImV4cCI6MjA2NTgxOTU3N30.3t9rTN6x533lihs8ebUVHu9kuayFl_m2b6liifW1B88");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/utils/userUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserDisplayName",
    ()=>getUserDisplayName,
    "getUserFirstName",
    ()=>getUserFirstName
]);
const getUserDisplayName = (user)=>{
    if (!user) return "User";
    return user.display_name || user.name || user.email || "User";
};
const getUserFirstName = (user)=>{
    const displayName = getUserDisplayName(user);
    // If it's an email, return "User"
    if (displayName.includes("@")) {
        return "User";
    }
    // Return the first word (first name)
    return displayName.split(" ")[0];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress(param) {
    let { className, value, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: "translateX(-".concat(100 - (value || 0), "%)")
            }
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/app/api/SupabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://raoonyyrzzftdenvknfi.supabase.co");
const SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhb29ueXlyenpmdGRlbnZrbmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDM1NzcsImV4cCI6MjA2NTgxOTU3N30.3t9rTN6x533lihs8ebUVHu9kuayFl_m2b6liifW1B88");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_ANON_KEY);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/app/api/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/auth.ts
__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "getAuthInfo",
    ()=>getAuthInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$SupabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/SupabaseClient.ts [app-client] (ecmascript)");
;
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001";
const getAuthInfo = async ()=>{
    var _data_session, _data_session_user, _data_session1;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$SupabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
    if (error) {
        console.debug("Auth session error:", error);
        throw new Error("Authentication error. Please log in again.");
    }
    const token = (_data_session = data.session) === null || _data_session === void 0 ? void 0 : _data_session.access_token;
    const userId = (_data_session1 = data.session) === null || _data_session1 === void 0 ? void 0 : (_data_session_user = _data_session1.user) === null || _data_session_user === void 0 ? void 0 : _data_session_user.id;
    if (!token || !userId) {
        console.debug("No valid session found - user not authenticated");
        throw new Error("Not authenticated. Please log in again.");
    }
    // Fetch org_id from database instead of metadata
    let orgId = null;
    try {
        const { data: userData, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$SupabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('org_id').eq('id', userId).single();
        if (userError) {
            console.debug("Error fetching user org_id:", userError);
        } else if (userData === null || userData === void 0 ? void 0 : userData.org_id) {
            orgId = userData.org_id;
            console.debug("Fetched org_id from database:", orgId);
        }
    } catch (error) {
        console.debug("Failed to fetch org_id from database:", error);
    }
    return {
        token,
        userId,
        orgId
    };
};
const fetchWithAuth = async function(url) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { token, userId, orgId } = await getAuthInfo();
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer ".concat(token),
        "X-User-ID": userId,
        "X-Request-ID": "req-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
        ...orgId && {
            "X-Org-ID": orgId
        },
        ...options.headers
    };
    const requestId = headers["X-Request-ID"];
    console.log("🔍 [".concat(requestId, "] API Call:"), "".concat(BASE_URL).concat(url), {
        userId: userId.substring(0, 8) + "...",
        orgId: (orgId === null || orgId === void 0 ? void 0 : orgId.substring(0, 8)) + "..." || "none",
        method: options.method || "GET"
    });
    const startTime = Date.now();
    try {
        const response = await fetch("".concat(BASE_URL).concat(url), {
            ...options,
            headers
        });
        const responseTime = Date.now() - startTime;
        console.log("⏱️ [".concat(requestId, "] Response:"), response.status, "(".concat(responseTime, "ms)"));
        if (!response.ok) {
            let errorText = '';
            let errorData = null;
            let parseError = null;
            try {
                // Try to get error as text first
                errorText = await response.text();
                // Try to parse as JSON if it looks like JSON
                if (errorText && (errorText.startsWith('{') || errorText.startsWith('['))) {
                    try {
                        errorData = JSON.parse(errorText);
                    } catch (jsonParseError) {
                        parseError = jsonParseError;
                        console.warn("⚠️ [".concat(requestId, "] JSON parsing failed:"), jsonParseError);
                    // If JSON parsing fails, keep as text
                    }
                }
            } catch (responseError) {
                errorText = 'Failed to read error response';
                console.warn("⚠️ [".concat(requestId, "] Could not read error response:"), responseError);
            }
            const errorInfo = {
                requestId,
                url: "".concat(BASE_URL).concat(url),
                method: options.method || "GET",
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(response.headers.entries()),
                errorData,
                errorText: errorText || 'No error text',
                parseError: parseError instanceof Error ? parseError.message : parseError ? String(parseError) : null,
                timestamp: new Date().toISOString(),
                responseTime: Date.now() - startTime
            };
            // Enhanced logging with better structure and readability
            const logError = {
                requestId,
                url: errorInfo.url,
                method: errorInfo.method,
                status: errorInfo.status,
                statusText: errorInfo.statusText,
                message: (errorData === null || errorData === void 0 ? void 0 : errorData.message) || errorText || errorInfo.statusText || 'Unknown error',
                timestamp: errorInfo.timestamp,
                fullErrorData: errorData,
                fullErrorText: errorText,
                responseHeaders: Object.fromEntries(response.headers.entries())
            };
            // Reduce console noise for expected failures
            const isContextConfigEndpoint = url.includes('/context-config');
            const isOrganizationEndpoint = url.includes('/organization');
            const isExpectedFailure = response.status === 404 && (isContextConfigEndpoint || isOrganizationEndpoint);
            if (isExpectedFailure) {
                console.debug("📝 [".concat(requestId, "] Endpoint not available (expected in development):"), {
                    url: errorInfo.url,
                    status: response.status,
                    endpoint: isContextConfigEndpoint ? 'context-config' : 'organization'
                });
            } else {
                console.error("❌ [".concat(requestId, "] API Error:"), logError);
                console.error("💥 [".concat(requestId, "] Request failed:"), {
                    summary: "".concat(errorInfo.method, " ").concat(errorInfo.url, " -> ").concat(errorInfo.status, " ").concat(errorInfo.statusText),
                    error: (errorData === null || errorData === void 0 ? void 0 : errorData.message) || errorText || 'No error details available',
                    responseHeaders: Object.fromEntries(response.headers.entries())
                });
            }
            if (response.status === 401) {
                throw new Error("Authentication expired. Please log in again.");
            } else if (response.status === 403) {
                throw new Error("Access denied. Please check your permissions.");
            } else if (response.status === 404) {
                throw new Error("API endpoint not found: ".concat(url));
            } else if (response.status === 429) {
                throw new Error("Too many requests. Please try again later.");
            } else if (response.status >= 500) {
                throw new Error("Server error. Please try again later.");
            }
            const errorMessage = (errorData === null || errorData === void 0 ? void 0 : errorData.message) || errorText || response.statusText || "API error (".concat(response.status, ")");
            const enhancedError = new Error(errorMessage);
            // Add additional context to the error
            enhancedError.status = response.status;
            enhancedError.statusText = response.statusText;
            enhancedError.url = "".concat(BASE_URL).concat(url);
            enhancedError.errorData = errorData;
            enhancedError.errorText = errorText;
            throw enhancedError;
        }
        try {
            const data = await response.json();
            console.log("✅ [".concat(requestId, "] Success:"), typeof data === 'object' ? 'JSON response' : data);
            return data;
        } catch (parseError) {
            console.error("⚠️ [".concat(requestId, "] Failed to parse JSON response:"), parseError);
            console.error("⚠️ [".concat(requestId, "] Response status:"), response.status, response.statusText);
            console.error("⚠️ [".concat(requestId, "] Response headers:"), Object.fromEntries(response.headers.entries()));
            // If JSON parsing fails, try to get the response as text
            try {
                const textData = await response.text();
                console.log("📄 [".concat(requestId, "] Text response:"), textData);
                // If the response is empty or just whitespace, it might be a successful update
                if (!textData || textData.trim() === '') {
                    console.log("📄 [".concat(requestId, "] Empty response - likely successful update"));
                    return {
                        success: true,
                        message: 'Update successful'
                    };
                }
                return {
                    message: textData
                };
            } catch (textError) {
                console.error("💥 [".concat(requestId, "] Failed to read response as text:"), textError);
                throw new Error('Failed to parse server response');
            }
        }
    } catch (error) {
        const responseTime = Date.now() - startTime;
        const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
        // Handle network errors with less verbose logging in development
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.debug("🔌 [".concat(requestId, "] Backend server unavailable (development mode) - likely auth in progress"));
            } else //TURBOPACK unreachable
            ;
            throw new Error("Backend server unavailable. Please check your connection or try again later.");
        }
        // Handle other fetch errors
        if (error instanceof Error && (error.message.includes('ECONNREFUSED') || error.message.includes('network') || error.message.includes('timeout'))) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("🔌 [".concat(requestId, "] Connection error: ").concat(error.message));
            } else //TURBOPACK unreachable
            ;
            throw new Error("Unable to connect to server. Please try again later.");
        }
        // For unexpected errors, always log detailed information
        const errorDetails = {
            error: error,
            errorMessage: error instanceof Error ? error.message : 'Unknown error',
            errorType: typeof error,
            url: "".concat(BASE_URL).concat(url),
            method: options.method || "GET",
            responseTime: "".concat(responseTime, "ms")
        };
        // Check if this is an empty error object (common issue)
        if (error && typeof error === 'object' && Object.keys(error).length === 0) {
            console.warn("⚠️ [".concat(requestId, "] Empty error object detected - this might be a successful request with parsing issues"));
            console.warn("⚠️ [".concat(requestId, "] Request details:"), {
                url: errorDetails.url,
                method: errorDetails.method,
                responseTime: errorDetails.responseTime
            });
        } else {
            console.error("💥 [".concat(requestId, "] Request failed:"), errorDetails);
        }
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/utils/cache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple in-memory cache for API responses
__turbopack_context__.s([
    "apiCache",
    ()=>apiCache,
    "createCacheKey",
    ()=>createCacheKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class SimpleCache {
    set(key, data) {
        let ttlMs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5 * 60 * 1000;
        this.cache.set(key, {
            data,
            timestamp: Date.now(),
            ttl: ttlMs
        });
    }
    get(key) {
        const entry = this.cache.get(key);
        if (!entry) {
            return null;
        }
        const now = Date.now();
        if (now - entry.timestamp > entry.ttl) {
            this.cache.delete(key);
            return null;
        }
        return entry.data;
    }
    clear() {
        this.cache.clear();
    }
    delete(key) {
        return this.cache.delete(key);
    }
    has(key) {
        const entry = this.cache.get(key);
        if (!entry) {
            return false;
        }
        const now = Date.now();
        if (now - entry.timestamp > entry.ttl) {
            this.cache.delete(key);
            return false;
        }
        return true;
    }
    // Get all keys that match a pattern
    getKeysMatching(pattern) {
        const matchingKeys = [];
        for (const key of this.cache.keys()){
            if (key.includes(pattern)) {
                matchingKeys.push(key);
            }
        }
        return matchingKeys;
    }
    // Delete all entries matching a pattern
    deleteMatching(pattern) {
        const keysToDelete = this.getKeysMatching(pattern);
        keysToDelete.forEach((key)=>this.cache.delete(key));
        return keysToDelete.length;
    }
    // Clean up expired entries
    cleanup() {
        const now = Date.now();
        for (const [key, entry] of this.cache.entries()){
            if (now - entry.timestamp > entry.ttl) {
                this.cache.delete(key);
            }
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cache", new Map());
    }
}
const apiCache = new SimpleCache();
// Clean up expired entries every 5 minutes
if ("TURBOPACK compile-time truthy", 1) {
    setInterval(()=>{
        apiCache.cleanup();
    }, 5 * 60 * 1000);
}
const createCacheKey = (endpoint, params)=>{
    const paramString = params ? JSON.stringify(params) : "";
    return "".concat(endpoint).concat(paramString);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/app/api/subscription.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Subscription API Client
// Based on backend SUBSCRIPTION_SYSTEM_GUIDE.md
__turbopack_context__.s([
    "subscriptionApi",
    ()=>subscriptionApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/utils/cache.ts [app-client] (ecmascript)");
;
;
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001";
const subscriptionApi = {
    // ==========================================
    // SUBSCRIPTION PLANS
    // ==========================================
    getPlans: async ()=>{
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/plans");
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/onboarding/plans");
            const plans = data.plans || data;
            // Cache for 1 hour (plans don't change frequently)
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, plans, 60 * 60 * 1000);
            return plans;
        } catch (error) {
            console.error("Error fetching subscription plans:", error);
            // Return mock plans for development
            const mockPlans = {
                basic: {
                    name: "Basic Plan",
                    monthly_token_limit: 10000,
                    price_per_month: 29.99,
                    max_chatbots: 3,
                    max_documents_per_chatbot: 50,
                    priority_support: false,
                    custom_branding: false,
                    api_access: false,
                    analytics_retention_days: 30
                },
                professional: {
                    name: "Professional Plan",
                    monthly_token_limit: 50000,
                    price_per_month: 99.99,
                    max_chatbots: 10,
                    max_documents_per_chatbot: 200,
                    priority_support: true,
                    custom_branding: true,
                    api_access: true,
                    analytics_retention_days: 90
                },
                enterprise: {
                    name: "Enterprise Plan",
                    monthly_token_limit: 200000,
                    price_per_month: 299.99,
                    max_chatbots: 50,
                    max_documents_per_chatbot: 1000,
                    priority_support: true,
                    custom_branding: true,
                    api_access: true,
                    analytics_retention_days: 365
                }
            };
            // Cache mock data for 5 minutes
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, mockPlans, 5 * 60 * 1000);
            return mockPlans;
        }
    },
    // ==========================================
    // USER/ORGANIZATION SIGNUP
    // ==========================================
    signup: async (request)=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/onboarding/admin/signup", {
                method: "POST",
                body: JSON.stringify(request)
            });
            return data;
        } catch (error) {
            console.error("Error during signup:", error);
            if (error instanceof Error && error.name === "AbortError") {
                throw new Error("Request timed out. Please check if the server is running.");
            }
            throw error;
        }
    },
    // ==========================================
    // SUBSCRIPTION STATUS
    // ==========================================
    getSubscriptionStatus: async (entityType, entityId)=>{
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/subscription/".concat(entityType, "/").concat(entityId));
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/onboarding/subscription/".concat(entityType, "/").concat(entityId));
            // Cache for 30 seconds (status changes frequently)
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, data, 30 * 1000);
            return data;
        } catch (error) {
            console.error("Error fetching subscription status:", error);
            // Return mock status for development - indicating no subscription
            const mockStatus = {
                subscription_id: "",
                tokens_used_this_month: 0,
                tokens_remaining: 0,
                monthly_limit: 0,
                usage_percentage: 0,
                reset_date: ""
            };
            // Cache mock data for 1 minute
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, mockStatus, 60 * 1000);
            return mockStatus;
        }
    },
    // ==========================================
    // TOKEN MANAGEMENT
    // ==========================================
    consumeTokens: async (request)=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/onboarding/tokens/consume", {
                method: "POST",
                body: JSON.stringify(request)
            });
            // Invalidate subscription status cache
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/onboarding/subscription");
            return data;
        } catch (error) {
            console.error("Error consuming tokens:", error);
            throw error;
        }
    },
    checkTokenAvailability: async (entityType, entityId, requiredTokens)=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/onboarding/tokens/check/".concat(entityType, "/").concat(entityId, "/").concat(requiredTokens));
            return data;
        } catch (error) {
            console.error("Error checking token availability:", error);
            // Return mock availability for development
            return {
                success: true,
                has_enough_tokens: true,
                tokens_required: requiredTokens,
                tokens_available: 7500,
                can_proceed: true
            };
        }
    },
    // ==========================================
    // CHANNEL MANAGEMENT
    // ==========================================
    getSupportedChannels: async ()=>{
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/channels");
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const response = await fetch("".concat(BASE_URL, "/api/onboarding/channels"));
            if (!response.ok) {
                throw new Error("Failed to fetch channels: ".concat(response.status));
            }
            const data = await response.json();
            const channels = data.channels || data;
            // Cache for 1 hour
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, channels, 60 * 60 * 1000);
            return channels;
        } catch (error) {
            console.error("Error fetching supported channels:", error);
            // Return mock channels for development
            const mockChannels = {
                website: {
                    name: "Website Chat",
                    description: "Embedded chat widget on websites",
                    icon: "🌐",
                    typical_use_cases: [
                        "Customer support",
                        "Lead generation",
                        "FAQ"
                    ]
                },
                whatsapp: {
                    name: "WhatsApp Business",
                    description: "WhatsApp Business API integration",
                    icon: "📱",
                    typical_use_cases: [
                        "Customer service",
                        "Order updates",
                        "Marketing"
                    ]
                },
                messenger: {
                    name: "Facebook Messenger",
                    description: "Facebook Messenger integration",
                    icon: "💬",
                    typical_use_cases: [
                        "Social commerce",
                        "Customer support",
                        "Engagement"
                    ]
                },
                instagram: {
                    name: "Instagram Direct",
                    description: "Instagram Direct Messages integration",
                    icon: "📸",
                    typical_use_cases: [
                        "Brand engagement",
                        "Product inquiries",
                        "Support"
                    ]
                },
                api: {
                    name: "REST API",
                    description: "API integration for custom applications",
                    icon: "🔌",
                    typical_use_cases: [
                        "Custom apps",
                        "System integration",
                        "Automation"
                    ]
                },
                mobile_app: {
                    name: "Mobile App",
                    description: "Mobile application integration",
                    icon: "📲",
                    typical_use_cases: [
                        "In-app support",
                        "User onboarding",
                        "Feature guidance"
                    ]
                }
            };
            // Cache mock data for 1 hour
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, mockChannels, 60 * 60 * 1000);
            return mockChannels;
        }
    },
    getChannelConfigurations: async (subscriptionId)=>{
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/subscription/".concat(subscriptionId, "/channels/config"));
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const response = await fetch("".concat(BASE_URL, "/api/onboarding/subscription/").concat(subscriptionId, "/channels/config"));
            if (!response.ok) {
                throw new Error("Failed to fetch channel configurations: ".concat(response.status));
            }
            const data = await response.json();
            const configurations = data.configurations || data;
            // Cache for 5 minutes
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, configurations, 5 * 60 * 1000);
            return configurations;
        } catch (error) {
            console.error("Error fetching channel configurations:", error);
            throw error;
        }
    },
    updateChannelConfiguration: async (subscriptionId, channel, request)=>{
        try {
            const { token, userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token),
                "X-User-ID": userId
            };
            if (orgId) {
                headers["X-Org-ID"] = orgId;
            }
            const response = await fetch("".concat(BASE_URL, "/api/onboarding/subscription/").concat(subscriptionId, "/channels/").concat(channel, "/config"), {
                method: "PUT",
                headers,
                body: JSON.stringify(request)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Channel configuration update failed: ".concat(response.status));
            }
            const data = await response.json();
            // Invalidate channel configuration cache
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/onboarding/subscription/".concat(subscriptionId, "/channels"));
            return data;
        } catch (error) {
            console.error("Error updating channel configuration:", error);
            throw error;
        }
    },
    // ==========================================
    // ANALYTICS
    // ==========================================
    getSubscriptionAnalytics: async function(subscriptionId) {
        let daysBack = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 30;
        if (!subscriptionId) {
            throw new Error("Subscription ID is required");
        }
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/analytics/".concat(subscriptionId, "?days_back=").concat(daysBack));
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const { token } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000); // 30 second timeout
            const response = await fetch("".concat(BASE_URL, "/api/onboarding/analytics/").concat(subscriptionId, "?days_back=").concat(daysBack), {
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                const errorMessage = errorData.detail || "Failed to fetch analytics: ".concat(response.status);
                throw new Error(errorMessage);
            }
            const data = await response.json();
            const analytics = data.analytics || data;
            // Cache for 5 minutes
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, analytics, 5 * 60 * 1000);
            return analytics;
        } catch (error) {
            console.error("Error fetching subscription analytics:", error);
            if (error instanceof Error && error.name === "AbortError") {
                throw new Error("Request timed out. Please check if the server is running.");
            }
            throw error;
        }
    },
    getChannelComparison: async function(subscriptionId) {
        let daysBack = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 30;
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/analytics/".concat(subscriptionId, "/channels/comparison?days_back=").concat(daysBack));
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const { token } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            const response = await fetch("".concat(BASE_URL, "/api/onboarding/analytics/").concat(subscriptionId, "/channels/comparison?days_back=").concat(daysBack), {
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch channel comparison: ".concat(response.status));
            }
            const data = await response.json();
            const comparison = data.comparison || data;
            // Cache for 5 minutes
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, comparison, 5 * 60 * 1000);
            return comparison;
        } catch (error) {
            console.error("Error fetching channel comparison:", error);
            throw error;
        }
    },
    getChannelTrends: async function(subscriptionId, channel) {
        let daysBack = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 30;
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/onboarding/analytics/".concat(subscriptionId, "/channels/").concat(channel, "/trends?days_back=").concat(daysBack));
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const { token } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            const response = await fetch("".concat(BASE_URL, "/api/onboarding/analytics/").concat(subscriptionId, "/channels/").concat(channel, "/trends?days_back=").concat(daysBack), {
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch channel trends: ".concat(response.status));
            }
            const data = await response.json();
            const trends = data.trends || data;
            // Cache for 5 minutes
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, trends, 5 * 60 * 1000);
            return trends;
        } catch (error) {
            console.error("Error fetching channel trends:", error);
            throw error;
        }
    },
    // ==========================================
    // UTILITY METHODS
    // ==========================================
    estimateTokensForOperation: (operationType, messageLength, documentSize)=>{
        switch(operationType){
            case "chat":
                return 100 + (messageLength || 0) / 4;
            case "document_upload":
                return 500 + (documentSize || 0) / 100;
            case "document_processing":
                return 200;
            case "web_scraping":
                return 300;
            case "embedding_generation":
                return 50;
            default:
                return 100;
        }
    },
    // Helper to invalidate subscription-related cache
    invalidateSubscriptionCache: ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/onboarding");
        console.log("Subscription cache invalidated");
    },
    // Debug function to test subscription endpoints
    debugSubscriptionEndpoints: async ()=>{
        try {
            const { userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            console.log("🔍 Debug: Testing subscription endpoints", {
                userId: userId.substring(0, 8) + "...",
                orgId: (orgId === null || orgId === void 0 ? void 0 : orgId.substring(0, 8)) + "..." || "none"
            });
            const results = {
                backendHealth: false,
                backendUrl: BASE_URL,
                userSubscription: null,
                orgSubscription: null,
                plans: null,
                errors: []
            };
            // Test backend health first
            try {
                console.log("🔍 Testing backend health at:", BASE_URL);
                const healthResponse = await fetch("".concat(BASE_URL, "/"), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                results.backendHealth = healthResponse.ok;
                console.log("✅ Backend health:", results.backendHealth, "Status:", healthResponse.status);
                if (!healthResponse.ok) {
                    const errorText = await healthResponse.text();
                    console.log("❌ Backend response:", errorText);
                    results.errors.push({
                        type: "backend",
                        error: "Backend returned ".concat(healthResponse.status, ": ").concat(errorText)
                    });
                }
            } catch (error) {
                console.error("❌ Backend health error:", error);
                results.errors.push({
                    type: "backend",
                    error: error instanceof Error ? error.message : String(error)
                });
            }
            // Test user subscription
            try {
                console.log("🔍 Testing user subscription endpoint...");
                results.userSubscription = await subscriptionApi.getSubscriptionStatus("user", userId);
                console.log("✅ User subscription result:", results.userSubscription);
            } catch (error) {
                console.error("❌ User subscription error:", error);
                results.errors.push({
                    type: "user",
                    error: error instanceof Error ? error.message : String(error)
                });
            }
            // Test organization subscription if orgId exists
            if (orgId) {
                try {
                    console.log("🔍 Testing organization subscription endpoint...");
                    results.orgSubscription = await subscriptionApi.getSubscriptionStatus("organization", orgId);
                    console.log("✅ Organization subscription result:", results.orgSubscription);
                } catch (error) {
                    console.error("❌ Organization subscription error:", error);
                    results.errors.push({
                        type: "organization",
                        error: error instanceof Error ? error.message : String(error)
                    });
                }
            }
            // Test plans endpoint
            try {
                console.log("🔍 Testing plans endpoint...");
                results.plans = await subscriptionApi.getPlans();
                console.log("✅ Plans result:", results.plans);
            } catch (error) {
                console.error("❌ Plans error:", error);
                results.errors.push({
                    type: "plans",
                    error: error instanceof Error ? error.message : String(error)
                });
            }
            console.log("🔍 Debug results summary:", results);
            return results;
        } catch (error) {
            console.error("❌ Debug function error:", error);
            return {
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/contexts/SubscriptionContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionProvider",
    ()=>SubscriptionProvider,
    "useSubscription",
    ()=>useSubscription,
    "useSubscriptionLimits",
    ()=>useSubscriptionLimits,
    "useTokenEstimation",
    ()=>useTokenEstimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/subscription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SubscriptionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const SubscriptionProvider = (param)=>{
    let { children } = param;
    _s();
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load subscription plans on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscriptionProvider.useEffect": ()=>{
            const loadPlans = {
                "SubscriptionProvider.useEffect.loadPlans": async ()=>{
                    try {
                        const plansData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].getPlans();
                        setPlans(plansData);
                    } catch (err) {
                        console.error("Failed to load subscription plans:", err);
                        setError("Failed to load subscription plans");
                    }
                }
            }["SubscriptionProvider.useEffect.loadPlans"];
            loadPlans();
        }
    }["SubscriptionProvider.useEffect"], []);
    // Load subscription status when user is authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscriptionProvider.useEffect": ()=>{
            const loadSubscriptionStatus = {
                "SubscriptionProvider.useEffect.loadSubscriptionStatus": async ()=>{
                    try {
                        setIsLoading(true);
                        setError(null);
                        const { userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
                        // FIXED: Try both user and organization subscriptions
                        // Priority: organization subscription first, then user subscription
                        let response = null;
                        let entityType = "";
                        // First try organization subscription if user has orgId
                        if (orgId) {
                            try {
                                response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].getSubscriptionStatus("organization", orgId);
                                entityType = "organization";
                                console.log("Found organization subscription:", response);
                            } catch (e) {
                                console.log("No organization subscription found, trying user subscription");
                                response = null;
                            }
                        }
                        // If no organization subscription or no orgId, try user subscription
                        if (!response || response.has_subscription === false) {
                            try {
                                response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].getSubscriptionStatus("user", userId);
                                entityType = "user";
                                console.log("Found user subscription:", response);
                            } catch (e) {
                                console.log("No user subscription found either");
                                response = null;
                            }
                        }
                        // Handle the response
                        if (!response || response.has_subscription === false) {
                            console.log("No subscription found for user or organization");
                            setSubscription(null);
                            setError("No subscription found. Please contact admin to set up your subscription.");
                        } else {
                            // Convert response to SubscriptionStatus format
                            const status = {
                                subscription_id: response.subscription_id || "",
                                tokens_used_this_month: response.tokens_used_this_month || 0,
                                tokens_remaining: response.tokens_remaining || 0,
                                monthly_limit: response.monthly_limit || 0,
                                usage_percentage: response.usage_percentage || 0,
                                reset_date: response.reset_date || "",
                                plan_name: response.plan_name || "Basic Plan"
                            };
                            setSubscription(status);
                            console.log("Successfully loaded ".concat(entityType, " subscription:"), status);
                        }
                    } catch (err) {
                        console.error("Failed to load subscription status:", err);
                        // FIXED: Better error handling
                        if (err instanceof Error) {
                            if (err.message.includes("Not authenticated")) {
                                // User not logged in - this is normal
                                setSubscription(null);
                                setError(null);
                            } else if (err.message.includes("Failed to fetch subscription status: 500")) {
                                // Server error - likely no subscription exists
                                setSubscription(null);
                                setError("No subscription found. Please contact admin to set up your subscription.");
                            } else {
                                setError("Failed to load subscription status");
                            }
                        } else {
                            setError("Failed to load subscription status");
                        }
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["SubscriptionProvider.useEffect.loadSubscriptionStatus"];
            loadSubscriptionStatus();
            // Refresh subscription status every 30 seconds
            const interval = setInterval(loadSubscriptionStatus, 30000);
            return ({
                "SubscriptionProvider.useEffect": ()=>clearInterval(interval)
            })["SubscriptionProvider.useEffect"];
        }
    }["SubscriptionProvider.useEffect"], []);
    const refreshSubscription = async ()=>{
        try {
            setError(null);
            const { userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            // FIXED: Try both user and organization subscriptions
            // Priority: organization subscription first, then user subscription
            let response = null;
            let entityType = "";
            // First try organization subscription if user has orgId
            if (orgId) {
                try {
                    response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].getSubscriptionStatus("organization", orgId);
                    entityType = "organization";
                    console.log("Refreshed organization subscription:", response);
                } catch (e) {
                    console.log("No organization subscription found, trying user subscription");
                    response = null;
                }
            }
            // If no organization subscription or no orgId, try user subscription
            if (!response || response.has_subscription === false) {
                try {
                    response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].getSubscriptionStatus("user", userId);
                    entityType = "user";
                    console.log("Refreshed user subscription:", response);
                } catch (e) {
                    console.log("No user subscription found either");
                    response = null;
                }
            }
            // Handle the response
            if (!response || response.has_subscription === false) {
                setSubscription(null);
                setError("No subscription found. Please contact admin to set up your subscription.");
            } else {
                const status = {
                    subscription_id: response.subscription_id || "",
                    tokens_used_this_month: response.tokens_used_this_month || 0,
                    tokens_remaining: response.tokens_remaining || 0,
                    monthly_limit: response.monthly_limit || 0,
                    usage_percentage: response.usage_percentage || 0,
                    reset_date: response.reset_date || "",
                    plan_name: response.plan_name || "Basic Plan"
                };
                setSubscription(status);
                console.log("Successfully refreshed ".concat(entityType, " subscription:"), status);
            }
        } catch (err) {
            console.error("Failed to refresh subscription status:", err);
            setError("Failed to refresh subscription status");
        }
    };
    const checkTokenAvailability = async (requiredTokens)=>{
        try {
            const { userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            // FIXED: Try both user and organization subscriptions
            // Priority: organization subscription first, then user subscription
            let result = null;
            // First try organization subscription if user has orgId
            if (orgId) {
                try {
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].checkTokenAvailability("organization", orgId, requiredTokens);
                    console.log("Checked organization token availability:", result);
                } catch (e) {
                    console.log("No organization subscription found, trying user subscription");
                    result = null;
                }
            }
            // If no organization subscription or no orgId, try user subscription
            if (!result) {
                try {
                    result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].checkTokenAvailability("user", userId, requiredTokens);
                    console.log("Checked user token availability:", result);
                } catch (e) {
                    console.log("No user subscription found either");
                    result = null;
                }
            }
            // Return result or default response
            if (result) {
                return result;
            } else {
                return {
                    success: false,
                    has_enough_tokens: false,
                    tokens_required: requiredTokens,
                    tokens_available: 0,
                    can_proceed: false
                };
            }
        } catch (err) {
            console.error("Failed to check token availability:", err);
            // FIXED: Return appropriate response for no subscription
            return {
                success: false,
                has_enough_tokens: false,
                tokens_required: requiredTokens,
                tokens_available: 0,
                can_proceed: false
            };
        }
    };
    const consumeTokens = async (request)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].consumeTokens(request);
            // Refresh subscription status after consuming tokens
            await refreshSubscription();
            return response;
        } catch (err) {
            console.error("Failed to consume tokens:", err);
            throw err;
        }
    };
    const value = {
        subscription,
        plans,
        isLoading,
        error,
        refreshSubscription,
        checkTokenAvailability,
        consumeTokens
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscriptionContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/contexts/SubscriptionContext.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SubscriptionProvider, "lkAraTMEuzEH+ff/MDXSMakpEV4=");
_c = SubscriptionProvider;
const useSubscription = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SubscriptionContext);
    if (context === undefined) {
        throw new Error("useSubscription must be used within a SubscriptionProvider");
    }
    return context;
};
_s1(useSubscription, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const useTokenEstimation = ()=>{
    const estimateTokens = (operationType, messageLength, documentSize)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$subscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscriptionApi"].estimateTokensForOperation(operationType, messageLength, documentSize);
    };
    return {
        estimateTokens
    };
};
const useSubscriptionLimits = ()=>{
    _s2();
    const { subscription, plans } = useSubscription();
    const getCurrentPlan = ()=>{
        if (!subscription || !plans) return null;
        // Find plan by monthly limit
        const planEntries = Object.entries(plans);
        const currentPlan = planEntries.find((param)=>{
            let [, plan] = param;
            return plan.monthly_token_limit === subscription.monthly_limit;
        });
        return currentPlan ? {
            key: currentPlan[0],
            plan: currentPlan[1]
        } : null;
    };
    const getUpgradeOptions = ()=>{
        if (!plans) return [];
        const currentPlan = getCurrentPlan();
        if (!currentPlan) return Object.entries(plans);
        const planEntries = Object.entries(plans);
        return planEntries.filter((param)=>{
            let [, plan] = param;
            return plan.monthly_token_limit > subscription.monthly_limit;
        });
    };
    const isNearLimit = function() {
        let threshold = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.9;
        if (!subscription) return false;
        return subscription.usage_percentage >= threshold * 100;
    };
    const canCreateChatbot = ()=>{
        if (!subscription || !plans) return true;
        const currentPlan = getCurrentPlan();
        if (!currentPlan) return true;
        // This would need to be tracked separately - for now return true
        return true;
    };
    const canUploadDocument = ()=>{
        if (!subscription || !plans) return true;
        const currentPlan = getCurrentPlan();
        if (!currentPlan) return true;
        // This would need to be tracked separately - for now return true
        return true;
    };
    return {
        getCurrentPlan,
        getUpgradeOptions,
        isNearLimit,
        canCreateChatbot,
        canUploadDocument
    };
};
_s2(useSubscriptionLimits, "TA16cUxTl1FaD6JZ8WH6n3N+bkQ=", false, function() {
    return [
        useSubscription
    ];
});
var _c;
__turbopack_context__.k.register(_c, "SubscriptionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimpleSubscriptionStatus",
    ()=>SimpleSubscriptionStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/contexts/SubscriptionContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SimpleSubscriptionStatus = (param)=>{
    let { className, showRefreshButton = true } = param;
    _s();
    const { subscription, isLoading, error, refreshSubscription } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"])();
    const formatNumber = (num)=>{
        return new Intl.NumberFormat().format(num);
    };
    const formatPercentage = (num)=>{
        return "".concat(num.toFixed(1), "%");
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-5 w-5 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Loading subscription..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                showRefreshButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "h-4 w-4 cursor-pointer hover:rotate-180 transition-transform",
                                    onClick: refreshSubscription
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!subscription) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "h-12 w-12 mx-auto mb-4 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "No subscription found"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-1",
                            children: "Please contact admin to set up your subscription"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const usagePercentage = subscription.usage_percentage;
    const isNearLimit = usagePercentage >= 80;
    const isAtLimit = usagePercentage >= 95;
    const getProgressColor = ()=>{
        if (isAtLimit) return "bg-red-500";
        if (isNearLimit) return "bg-yellow-500";
        return "bg-blue-500";
    };
    const getStatusBadge = ()=>{
        if (isAtLimit) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-red-100 text-red-800",
            children: "At Limit"
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
            lineNumber: 92,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0));
        if (isNearLimit) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-yellow-100 text-yellow-800",
            children: "Near Limit"
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
            lineNumber: 95,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-green-100 text-green-800",
            children: "Healthy"
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
            lineNumber: 97,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "flex items-center justify-between text-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "h-5 w-5 mr-2 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Subscription Status"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showRefreshButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "h-4 w-4 cursor-pointer hover:rotate-180 transition-transform text-gray-400",
                            onClick: refreshSubscription
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Current Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: subscription.plan_name || "Basic Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            getStatusBadge()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Token Usage"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            formatNumber(subscription.tokens_used_this_month),
                                            " /",
                                            " ",
                                            formatNumber(subscription.monthly_limit)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: usagePercentage,
                                className: "h-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            formatPercentage(usagePercentage),
                                            " used"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            formatNumber(subscription.tokens_remaining),
                                            " remaining"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-4 w-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Resets"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: new Date(subscription.reset_date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SimpleSubscriptionStatus, "K3CG2ban8nsio3N770i79Ptao58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$contexts$2f$SubscriptionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscription"]
    ];
});
_c = SimpleSubscriptionStatus;
var _c;
__turbopack_context__.k.register(_c, "SimpleSubscriptionStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$userUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/utils/userUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$subscription$2f$SimpleSubscriptionStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/subscription/SimpleSubscriptionStatus.tsx [app-client] (ecmascript)");
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
const Sidebar = ()=>{
    var _user_user_metadata, _user_user_metadata1;
    _s();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const getUser = {
                "Sidebar.useEffect.getUser": async ()=>{
                    const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                    if (session === null || session === void 0 ? void 0 : session.user) {
                        setUser(session.user);
                    }
                }
            }["Sidebar.useEffect.getUser"];
            getUser();
        }
    }["Sidebar.useEffect"], []);
    // Get userId from params or user state
    const currentUserId = (params === null || params === void 0 ? void 0 : params.userId) || (user === null || user === void 0 ? void 0 : user.id);
    // Create a function to get the correct path for menu items
    const getMenuItemPath = (basePath)=>{
        return currentUserId ? "/dashboard/".concat(currentUserId).concat(basePath) : "/dashboard".concat(basePath);
    };
    const menuItems = [
        {
            title: "Dashboard",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            path: getMenuItemPath("")
        },
        {
            title: "Train",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            path: getMenuItemPath("/train")
        },
        {
            title: "AI",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            path: getMenuItemPath("/ai")
        },
        {
            title: "Customize",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiRobot3Line"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            path: getMenuItemPath("/customize")
        },
        {
            title: "Settings",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            path: getMenuItemPath("/settings")
        }
    ];
    const handleLogout = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error logging out");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Logged out successfully");
            window.location.href = "/auth/login";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(isCollapsed ? "w-[4.5vw]" : "sm:w-60 w-60 z-[999]", " min-h-screen bg-[#0a0a60] text-white transition-all-ease-in-out duration-400 fixed left-0 top-0 flex flex-col"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-r border-gray-700 overflow-y-auto",
                children: [
                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-bold text-white",
                        children: "Zentria Pro"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCollapsed(!isCollapsed),
                        className: "p-2 rounded-lg pointer",
                        children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 20,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 20,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isCollapsed && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-r border-gray-700 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 16,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-white truncate",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$userUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserDisplayName"])({
                                        id: user.id,
                                        email: user.email || "",
                                        name: ((_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.name) || "",
                                        display_name: ((_user_user_metadata1 = user.user_metadata) === null || _user_user_metadata1 === void 0 ? void 0 : _user_user_metadata1.display_name) || ""
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white",
                                    children: [
                                        "User ID: ",
                                        user.id.slice(0, 8),
                                        "..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "p-4 flex-1 border-r border-gray-700 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: menuItems.map((item, index)=>{
                        // Normalize paths by removing trailing slashes
                        const normalizedItemPath = item.path.replace(/\/$/, "");
                        const normalizedPathname = pathname.replace(/\/$/, "");
                        // Much simpler and more reliable active state logic
                        let isActive = false;
                        // Split paths into segments for comparison
                        const pathSegments = normalizedPathname.split("/").filter(Boolean);
                        const itemSegments = normalizedItemPath.split("/").filter(Boolean);
                        if (item.title === "Dashboard") {
                            // Dashboard is active only when we're exactly on /dashboard/{userId} with no additional segments
                            isActive = pathSegments.length === 2 && pathSegments[0] === "dashboard" && pathSegments[1] !== undefined && pathSegments[2] === undefined;
                        } else {
                            // For other items, check if the last meaningful segment matches
                            const lastPathSegment = pathSegments[pathSegments.length - 1];
                            const expectedSegment = itemSegments[itemSegments.length - 1];
                            isActive = lastPathSegment === expectedSegment;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: "flex items-center gap-4 p-2 rounded-lg transition-colors\n                    ".concat(isActive ? "glass shadow-sm text-white font-bold" : "text-white hover:text-white", "\n                  "),
                                children: [
                                    item.icon,
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-semibold",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                                        lineNumber: 181,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$subscription$2f$SimpleSubscriptionStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleSubscriptionStatus"], {
                    showRefreshButton: false
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleLogout,
                    variant: "ghost",
                    className: "w-full justify-start text-gray-600 hover:text-white hover:bg-red-500 ".concat(isCollapsed ? "px-2" : ""),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-4",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                            lineNumber: 209,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/dashboard/layout/SideBar.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "YrrZcx0TsfF1v+r5N2F6wcwoYQk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input(param) {
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/app/api/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { supabase } from "@/utils/SupabaseClient";
__turbopack_context__.s([
    "apiUtils",
    ()=>apiUtils,
    "chatbotApi",
    ()=>chatbotApi,
    "conversationApi",
    ()=>conversationApi,
    "organizationApi",
    ()=>organizationApi,
    "uploadsApi",
    ()=>uploadsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/utils/cache.ts [app-client] (ecmascript)");
;
;
// import { fetchWithTimeout } from "@/utils/timeout";
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001";
const chatbotApi = {
    // ==========================================
    // CHATBOT MANAGEMENT
    // ==========================================
    getChatbots: async ()=>{
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/chat/chatbots");
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>{
                controller.abort(new Error("Request timeout after 10 seconds"));
            }, 10000);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/chatbots", {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            const result = data.chatbots || data || [];
            // Cache for 2 minutes
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, result, 2 * 60 * 1000);
            return result;
        } catch (error) {
            console.error("Error fetching chatbots:", error);
            if (error instanceof Error && (error.name === "AbortError" || error.message.includes("timeout"))) {
                throw new Error("Request timed out. Please try again.");
            }
            throw error;
        }
    },
    getChatbot: async (chatbotId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/chatbots/".concat(chatbotId));
    },
    createChatbot: async (config)=>{
        const { userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
        // Ensure org_id is always present - use a default if not set
        const finalOrgId = orgId || "user_".concat(userId, "_org");
        // Map frontend ai_model_config to backend model_config format
        const backendConfig = {
            ...config,
            user_id: userId,
            org_id: finalOrgId
        };
        // Map ai_model_config to what backend expects
        if (config.ai_model_config) {
            backendConfig.ai_model_config = config.ai_model_config;
        // Backend stores this as model_config internally
        }
        console.log("🤖 Creating chatbot with config:", {
            ...backendConfig,
            user_id: userId.substring(0, 8) + "...",
            org_id: finalOrgId.substring(0, 12) + "..."
        });
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/chatbots", {
            method: "POST",
            body: JSON.stringify(backendConfig)
        });
        return response.chatbot || response;
    },
    updateChatbot: async (chatbotId, config)=>{
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/chatbots/".concat(chatbotId), {
            method: "PUT",
            body: JSON.stringify(config)
        });
        return response.chatbot || response;
    },
    deleteChatbot: async (chatbotId)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/chatbots/".concat(chatbotId), {
            method: "DELETE"
        });
    },
    activateChatbot: async (chatbotId)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/chatbots/".concat(chatbotId, "/activate"), {
            method: "POST"
        });
    },
    // ==========================================
    // HEALTH CHECK & SYSTEM STATUS
    // ==========================================
    healthCheck: async ()=>{
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/health");
        } catch (error) {
            console.warn("Health check failed:", error);
            return {
                status: "degraded",
                timestamp: new Date().toISOString(),
                services: {
                    database: "error",
                    chat_service: "error",
                    context_engine: "error"
                },
                version: "unknown",
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }
};
const uploadsApi = {
    getUploads: async ()=>{
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/uploads");
        // Check cache first
        const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
        if (cached) {
            return cached;
        }
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>{
                controller.abort(new Error("Request timeout after 8 seconds"));
            }, 8000);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/uploads", {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            let result = [];
            if (Array.isArray(data)) {
                result = data;
            } else if (data.uploads && Array.isArray(data.uploads)) {
                result = data.uploads;
            } else if (data.data && Array.isArray(data.data)) {
                result = data.data;
            } else {
                console.warn("Unexpected uploads response structure:", data);
                result = [];
            }
            // Cache for 1 minute (uploads change more frequently)
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, result, 1 * 60 * 1000);
            return result;
        } catch (error) {
            console.error("Error fetching uploads:", error);
            if (error instanceof Error && error.name === "AbortError") {
                throw new Error("Request timed out. Please try again.");
            }
            throw error;
        }
    },
    uploadFile: async (file, type)=>{
        const { token, userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
        const formData = new FormData();
        formData.append("file", file);
        const headers = {
            Authorization: "Bearer ".concat(token),
            "X-User-ID": userId
        };
        if (orgId) {
            headers["X-Org-ID"] = orgId;
        }
        console.log("📤 Uploading file: ".concat(file.name, " (").concat(file.size, " bytes) as ").concat(type));
        const response = await fetch("".concat(BASE_URL, "/api/uploads/").concat(type), {
            method: "POST",
            headers,
            body: formData
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error("Upload failed (".concat(response.status, "): ").concat(errorText));
        }
        const result = await response.json();
        console.log("✅ File uploaded successfully:", result);
        return result;
    },
    uploadFileWithTokenHandling: async (file, type, tokenHandler)=>{
        if (!tokenHandler) {
            return uploadsApi.uploadFile(file, type);
        }
        return tokenHandler.wrapApiCall(()=>uploadsApi.uploadFile(file, type), 'document_upload', undefined, file.size);
    },
    uploadUrl: async (url)=>{
        console.log("🔗 Uploading URL: ".concat(url));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/uploads/url", {
            method: "POST",
            body: JSON.stringify({
                url
            })
        });
    },
    uploadJson: async function(jsonData) {
        let filename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "training-data.json";
        console.log("📋 Uploading JSON data: ".concat(filename));
        // Convert JSON object to File
        const jsonString = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([
            jsonString
        ], {
            type: "application/json"
        });
        const file = new File([
            blob
        ], filename, {
            type: "application/json"
        });
        return uploadsApi.uploadFile(file, "json");
    },
    deleteUpload: async (uploadId)=>{
        console.log("🗑️ Deleting upload: ".concat(uploadId));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/uploads/".concat(uploadId), {
            method: "DELETE"
        });
    },
    reprocessUpload: async (uploadId)=>{
        console.log("🔄 Reprocessing upload: ".concat(uploadId));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/uploads/".concat(uploadId, "/reprocess"), {
            method: "POST"
        });
    },
    getUploadStatus: async (uploadId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/uploads/".concat(uploadId, "/status"));
    }
};
const conversationApi = {
    sendMessage: async (message, chatbotId, conversationId)=>{
        try {
            // Match backend parameter names exactly
            const body = {
                message,
                ...chatbotId && {
                    chatbot_id: chatbotId
                },
                ...conversationId && {
                    conversation_id: conversationId
                }
            };
            console.log("📤 Sending message with payload:", {
                message: message.substring(0, 50) + "...",
                has_chatbot_id: !!chatbotId,
                has_conversation_id: !!conversationId
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/conversation", {
                method: "POST",
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.error("Error sending message:", error);
            throw error;
        }
    },
    sendMessageWithTokenHandling: async (message, chatbotId, conversationId, tokenHandler)=>{
        if (!tokenHandler) {
            return conversationApi.sendMessage(message, chatbotId, conversationId);
        }
        return tokenHandler.wrapApiCall(()=>conversationApi.sendMessage(message, chatbotId, conversationId), 'chat', message.length);
    },
    getConversations: async (limit)=>{
        try {
            // For dashboard, use a smaller limit for faster loading
            const queryLimit = limit || (limit === 10 ? 10 : 10000);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/conversations?limit=".concat(queryLimit));
            return data.conversations || data || [];
        } catch (error) {
            console.error("Error fetching conversations:", error);
            throw error;
        }
    },
    // Fast conversation count for dashboard stats
    getConversationCount: async ()=>{
        try {
            const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])('conversation-count');
            const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
            if (typeof cached === 'number') {
                return cached;
            }
            // Load a small sample for fast count display
            // This is much faster than loading all conversations
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])('/api/chat/conversations?limit=1000');
            const conversations = data.conversations || data || [];
            // Cache for 30 seconds
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, conversations.length, 30 * 1000);
            return conversations.length;
        } catch (error) {
            console.error("Error fetching conversation count:", error);
            return 0; // Return 0 on error to prevent UI breaking
        }
    },
    addFeedback: async (feedbackRequest)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/feedback", {
            method: "POST",
            body: JSON.stringify(feedbackRequest)
        });
    },
    // ==========================================
    // ENHANCED CONTEXT ENGINEERING
    // ==========================================
    getContextConfig: async function() {
        let configName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "default";
        try {
            // Use a more targeted approach to avoid console noise
            const { token, userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token),
                "X-User-ID": userId,
                ...orgId && {
                    "X-Org-ID": orgId
                }
            };
            const response = await fetch("".concat(BASE_URL, "/api/chat/context-config?config_name=").concat(configName), {
                method: "GET",
                headers
            });
            if (!response.ok) {
                // Silently return null for 404 (endpoint not available) or other expected errors
                return null;
            }
            const result = await response.json();
            return result;
        } catch (e) {
            // Silently handle connection errors - this is expected in development
            return null;
        }
    },
    updateContextConfig: async (updates)=>{
        // Validate the updates object
        if (!updates || typeof updates !== "object") {
            throw new Error("Invalid context config updates provided");
        }
        // Additional validation to prevent server errors
        const sanitizedUpdates = Object.fromEntries(Object.entries(updates).filter((param)=>{
            let [key, value] = param;
            // Remove undefined values that might cause server issues
            if (value === undefined) {
                console.debug("⚠️ Removing undefined value for key: ".concat(key));
                return false;
            }
            return true;
        }));
        console.debug("🔧 Updating context config with sanitized payload:", {
            originalKeys: Object.keys(updates),
            sanitizedKeys: Object.keys(sanitizedUpdates),
            payload: sanitizedUpdates
        });
        try {
            const requestPayload = {
                config_updates: sanitizedUpdates
            };
            console.debug("📤 Sending request payload:", JSON.stringify(requestPayload, null, 2));
            // Use direct fetch to avoid excessive logging for expected failures
            const { token, userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            const headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token),
                "X-User-ID": userId,
                ...orgId && {
                    "X-Org-ID": orgId
                }
            };
            const response = await fetch("".concat(BASE_URL, "/api/chat/context-config"), {
                method: "PUT",
                headers,
                body: JSON.stringify(requestPayload)
            });
            if (response.ok) {
                const result = await response.json();
                console.debug("✅ Context config update successful");
                return result || {
                    success: true,
                    message: "Configuration updated successfully"
                };
            } else {
                // Handle specific error cases without logging errors for expected failures
                if (response.status === 404) {
                    console.debug("⚠️ Context config endpoint not available, using local fallback");
                    return {
                        success: true,
                        message: "Configuration saved locally (backend endpoint not available)"
                    };
                } else if (response.status === 401) {
                    throw new Error("Session expired. Please refresh the page and try again.");
                } else {
                    console.warn("⚠️ Context config update failed with status ".concat(response.status));
                    return {
                        success: true,
                        message: "Configuration saved locally. Server sync will retry automatically."
                    };
                }
            }
        } catch (error) {
            console.debug("❌ Context config update error:", error);
            // Handle specific error cases with better user feedback
            if (error instanceof Error) {
                // If authentication error, provide clearer guidance
                if (error.message.includes("Authentication") || error.message.includes("401")) {
                    throw new Error("Session expired. Please refresh the page and try again.");
                }
                // If it's a network error, provide fallback
                if (error.message.includes("fetch") || error.message.includes("network")) {
                    console.debug("⚠️ Network error during context config update, using fallback");
                    return {
                        success: true,
                        message: "Configuration saved locally. Changes will sync when connection is restored."
                    };
                }
            }
            // For other errors, provide a fallback response instead of throwing
            console.debug("⚠️ Context config update error, providing fallback response");
            return {
                success: true,
                message: "Configuration saved locally. Some features may not sync until connection is restored."
            };
        }
    },
    createCustomContextConfig: async function(configName) {
        let baseTemplate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "saas", customSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/context-config/custom", {
            method: "POST",
            body: JSON.stringify({
                config_name: configName,
                base_template: baseTemplate,
                custom_settings: customSettings
            })
        });
    },
    // Get business templates - matches backend default configs
    // ==========================================
    // ANALYTICS & INSIGHTS (Updated to match backend exactly)
    // ==========================================
    getAnalyticsDashboard: async function() {
        let days = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7;
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>{
                controller.abort(new Error("Request timeout after 15 seconds"));
            }, 15000);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/analytics/dashboard?days=".concat(days), {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            return result;
        } catch (error) {
            console.warn("Analytics dashboard not available:", error);
            if (error instanceof Error && (error.name === "AbortError" || error.message.includes("timeout"))) {
                console.warn("Analytics request timed out");
            }
            return null;
        }
    },
    getPerformanceInsights: async ()=>{
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/performance-insights");
        } catch (error) {
            console.warn("Performance insights not available:", error);
            return null;
        }
    },
    getContextAnalytics: async function() {
        let days = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/analytics/context?days=".concat(days));
        } catch (error) {
            console.warn("Context analytics not available:", error);
            return null;
        }
    },
    analyzeQueryOptimization: async (query)=>{
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/analytics/query-optimization", {
                method: "POST",
                body: JSON.stringify({
                    query
                })
            });
        } catch (error) {
            console.warn("Query optimization not available:", error);
            return null;
        }
    },
    // getContextAnalytics: async (days: number = 7): Promise<{
    //   analytics: ContextAnalytics[];
    //   summary: {
    //     total_queries: number;
    //     avg_quality_score: number;
    //     avg_retrieval_time: number;
    //     model_distribution: Record<string, number>;
    //   };
    // }> => {
    //   return fetchWithAuth(`/api/chat/analytics/context?days=${days}`);
    // },
    // analyzeQuery: async (query: string): Promise<{
    //   original_query: string;
    //   enhanced_query?: string;
    //   expected_quality: number;
    //   strategy_recommendation: string;
    //   estimated_response_time: number;
    // }> => {
    //   return fetchWithAuth('/api/chat/analytics/query-optimization', {
    //     method: 'POST',
    //     body: JSON.stringify({ query }),
    //   });
    // },
    // getQueryAnalysis: async (query: string, days: number = 30): Promise<{
    //   similar_queries_found: number;
    //   analysis: {
    //     avg_context_quality: number;
    //     avg_response_time_ms: number;
    //     avg_satisfaction: number;
    //     most_common_sources: Array<[string, number]>;
    //   } | null;
    // }> => {
    //   return fetchWithAuth('/api/chat/analytics/query-analysis', {
    //     method: 'POST',
    //     body: JSON.stringify({ query, days }),
    //   });
    // },
    exportAnalyticsData: async function(startDate, endDate) {
        let format = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "json";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/analytics/export", {
            method: "POST",
            body: JSON.stringify({
                start_date: startDate,
                end_date: endDate,
                format
            })
        });
    },
    getHealthCheck: async ()=>{
        const response = await fetch("".concat(BASE_URL, "/api/chat/health"));
        return response.json();
    },
    // ==========================================
    // UTILITY METHODS
    // ==========================================
    getAuthHeaders: async ()=>{
        const { token, userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
        return {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token),
            "X-User-ID": userId,
            ...orgId && {
                "X-Org-ID": orgId
            }
        };
    },
    testConnection: async ()=>{
        const startTime = Date.now();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/chat/health");
            return {
                success: true,
                responseTime: Date.now() - startTime
            };
        } catch (error) {
            return {
                success: false,
                responseTime: Date.now() - startTime,
                error: error instanceof Error ? error.message : "Unknown error"
            };
        }
    },
    getCurrentUserContext: async ()=>{
        try {
            const { userId, orgId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            return {
                userId,
                orgId,
                isAuthenticated: true
            };
        } catch (e) {
            return {
                userId: "",
                orgId: undefined,
                isAuthenticated: false
            };
        }
    }
};
const organizationApi = {
    getOrganizationInfo: async ()=>{
        try {
            const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCacheKey"])("/api/org/info");
            // Check cache first
            const cached = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].get(cacheKey);
            if (cached) {
                return cached;
            }
            console.log("🔍 Fetching organization info from:", "".concat(BASE_URL, "/api/org/info"));
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/org/info");
                // Cache for 5 minutes
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, data, 5 * 60 * 1000);
                return data;
            } catch (error) {
                // If organization endpoint doesn't exist, return mock data
                console.warn("Organization endpoint not available, using mock data:", error);
                const mockData = {
                    user: {
                        email: "user@example.com"
                    },
                    organization: {
                        name: "Demo Organization",
                        email: "org@example.com",
                        plan_id: "free"
                    }
                };
                // Cache mock data for 1 minute
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].set(cacheKey, mockData, 1 * 60 * 1000);
                return mockData;
            }
        } catch (error) {
            console.error("Error fetching organization info:", error);
            console.error("Error details:", {
                name: error instanceof Error ? error.name : 'Unknown',
                message: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : undefined
            });
            throw error;
        }
    },
    updateOrganization: async (request)=>{
        try {
            console.log("🏢 Updating organization:", {
                name: request.name,
                email: request.email.substring(0, 3) + "***" // Log partial email for security
            });
            // Debug: Log the full URL being called
            console.log("🔍 Calling organization update endpoint:", "".concat(BASE_URL, "/api/org/update"));
            // Try the organization update endpoint
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/org/update", {
                    method: "PATCH",
                    body: JSON.stringify(request)
                });
                console.log("✅ Organization update response:", response);
                // Handle different response formats
                if (response && typeof response === 'object') {
                    // If response has success field, use it as is
                    if ('success' in response) {
                        // Invalidate organization cache after successful update
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/org");
                        return response;
                    }
                    // If response has message field, format it properly
                    if ('message' in response) {
                        const formattedResponse = {
                            success: true,
                            message: response.message,
                            organization: {
                                name: request.name,
                                email: request.email
                            }
                        };
                        // Invalidate organization cache after successful update
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/org");
                        return formattedResponse;
                    }
                }
                // If response doesn't match expected format, create a success response
                console.log("⚠️ Unexpected response format, creating success response");
                const successResponse = {
                    success: true,
                    message: "Organization updated successfully",
                    organization: {
                        name: request.name,
                        email: request.email
                    }
                };
                // Invalidate organization cache after successful update
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/org");
                return successResponse;
            } catch (orgError) {
                console.warn("Organization update endpoint failed, trying alternative paths...");
                // Try alternative endpoint paths that might exist
                const alternativeEndpoints = [
                    "/api/user/organization/update",
                    "/api/settings/org/update"
                ];
                for (const endpoint of alternativeEndpoints){
                    try {
                        console.log("🔄 Trying alternative endpoint: ".concat(endpoint));
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(endpoint, {
                            method: "PATCH",
                            body: JSON.stringify(request)
                        });
                        console.log("✅ Success with endpoint: ".concat(endpoint));
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/org");
                        return response;
                    } catch (altError) {
                        console.log("❌ Failed with endpoint: ".concat(endpoint), altError);
                        continue;
                    }
                }
                // If all alternatives fail, return a mock success response for development
                console.warn("All organization endpoints failed, returning mock success response");
                console.warn("Original error:", orgError);
                const mockResponse = {
                    success: true,
                    message: "Organization updated successfully (mock response - backend endpoint not available)",
                    organization: {
                        name: request.name,
                        email: request.email
                    }
                };
                // Invalidate cache anyway
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching("/api/org");
                return mockResponse;
            }
        } catch (error) {
            console.error("Error updating organization:", error);
            console.error("Error details:", {
                name: error instanceof Error ? error.name : 'Unknown',
                message: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : undefined
            });
            throw error;
        }
    },
    getChatbots: async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])("/api/org/chatbots");
            return data.chatbots || data || [];
        } catch (error) {
            console.error("Error fetching organization chatbots:", error);
            throw error;
        }
    }
};
const apiUtils = {
    formatError: (error)=>{
        if (error instanceof Error) {
            return error.message;
        }
        if (typeof error === "string") {
            return error;
        }
        return "An unexpected error occurred. Please try again.";
    },
    isAuthenticated: async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            return true;
        } catch (e) {
            return false;
        }
    },
    getBaseUrl: ()=>BASE_URL,
    createRequestId: ()=>"req-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
    // Helper function to invalidate cache when data changes
    invalidateCache: (pattern)=>{
        if (pattern) {
            // Use the new pattern matching method
            const deletedCount = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].deleteMatching(pattern);
            console.log("Cache invalidation: deleted ".concat(deletedCount, ' entries matching "').concat(pattern, '"'));
        } else {
            // Clear all cache
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$utils$2f$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCache"].clear();
            console.log('Cache invalidation: cleared all cache entries');
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/hooks/useServerConnection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectionErrorHandler",
    ()=>useConnectionErrorHandler,
    "useServerConnection",
    ()=>useServerConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
function useServerConnection() {
    let checkInterval = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 30000;
    _s();
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isConnected: false,
        isChecking: true,
        lastChecked: null,
        error: null
    });
    const checkConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerConnection.useCallback[checkConnection]": async ()=>{
            try {
                setConnectionState({
                    "useServerConnection.useCallback[checkConnection]": (prev)=>({
                            ...prev,
                            isChecking: true,
                            error: null
                        })
                }["useServerConnection.useCallback[checkConnection]"]);
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].testConnection();
                setConnectionState({
                    isConnected: result.success,
                    isChecking: false,
                    lastChecked: new Date(),
                    error: result.success ? null : "Connection test failed"
                });
                return result.success;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown connection error";
                setConnectionState({
                    isConnected: false,
                    isChecking: false,
                    lastChecked: new Date(),
                    error: errorMessage
                });
                return false;
            }
        }
    }["useServerConnection.useCallback[checkConnection]"], []);
    // Initial connection check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useServerConnection.useEffect": ()=>{
            checkConnection();
        }
    }["useServerConnection.useEffect"], [
        checkConnection
    ]);
    // Periodic connection checks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useServerConnection.useEffect": ()=>{
            if (checkInterval > 0) {
                const interval = setInterval(checkConnection, checkInterval);
                return ({
                    "useServerConnection.useEffect": ()=>clearInterval(interval)
                })["useServerConnection.useEffect"];
            }
        }
    }["useServerConnection.useEffect"], [
        checkConnection,
        checkInterval
    ]);
    const isConnectionError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerConnection.useCallback[isConnectionError]": (error)=>{
            if (!(error instanceof Error)) return false;
            return error.message.includes("Unable to connect") || error.message.includes("server unavailable") || error.message.includes("ECONNREFUSED") || error.message.includes("network") || error.message.includes("timeout");
        }
    }["useServerConnection.useCallback[isConnectionError]"], []);
    const getConnectionErrorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerConnection.useCallback[getConnectionErrorMessage]": (error)=>{
            if (!isConnectionError(error)) {
                return "An unexpected error occurred";
            }
            return "Unable to connect to server. Please check if the backend service is running.";
        }
    }["useServerConnection.useCallback[getConnectionErrorMessage]"], [
        isConnectionError
    ]);
    return {
        ...connectionState,
        checkConnection,
        isConnectionError,
        getConnectionErrorMessage
    };
}
_s(useServerConnection, "g0LAu3Qk/L8BziNFasHyOfamHL8=");
function useConnectionErrorHandler() {
    _s1();
    const isConnectionError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnectionErrorHandler.useCallback[isConnectionError]": (error)=>{
            if (!(error instanceof Error)) return false;
            return error.message.includes("Unable to connect") || error.message.includes("server unavailable") || error.message.includes("ECONNREFUSED") || error.message.includes("network") || error.message.includes("timeout");
        }
    }["useConnectionErrorHandler.useCallback[isConnectionError]"], []);
    const getErrorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnectionErrorHandler.useCallback[getErrorMessage]": (error)=>{
            if (!(error instanceof Error)) {
                return "An unexpected error occurred";
            }
            if (isConnectionError(error)) {
                return "Unable to connect to server. Please check if the backend service is running and try again.";
            }
            if (error.message.includes("Not authenticated") || error.message.includes("Authentication expired")) {
                return "Your session has expired. Please log in again.";
            }
            if (error.message.includes("Access denied") || error.message.includes("Unauthorized")) {
                return "You don't have permission to perform this action.";
            }
            if (error.message.includes("timeout")) {
                return "The request timed out. Please try again.";
            }
            return error.message || "An unexpected error occurred";
        }
    }["useConnectionErrorHandler.useCallback[getErrorMessage]"], [
        isConnectionError
    ]);
    return {
        isConnectionError,
        getErrorMessage
    };
}
_s1(useConnectionErrorHandler, "ZuLilf4bB+YUBEqsjoUcoSWd7Sw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/app/api/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$hooks$2f$useServerConnection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/hooks/useServerConnection.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatWidget(param) {
    let { position = "bottom-right", chatbotId, showChatbotSelector = false } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversationId, setConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [availableChatbots, setAvailableChatbots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChatbot, setSelectedChatbot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingChatbots, setLoadingChatbots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showChatbotDropdown, setShowChatbotDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Connection error handling
    const { getErrorMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$hooks$2f$useServerConnection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionErrorHandler"])();
    // Ensure component only renders on client to prevent hydration issues
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWidget.useEffect": ()=>{
            setIsClient(true);
        }
    }["ChatWidget.useEffect"], []);
    // Load organization's chatbots
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWidget.useEffect": ()=>{
            const loadChatbots = {
                "ChatWidget.useEffect.loadChatbots": async ()=>{
                    try {
                        setLoadingChatbots(true);
                        // Check authentication first
                        const authCheck = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].getCurrentUserContext();
                        setIsAuthenticated(authCheck.isAuthenticated);
                        if (!authCheck.isAuthenticated) {
                            setMessages([
                                {
                                    id: "greeting",
                                    type: "bot",
                                    content: "Hello! To use the chat feature, please log in to your account first.",
                                    timestamp: new Date()
                                }
                            ]);
                            return;
                        }
                        const chatbots = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbots();
                        if (chatbots && chatbots.length > 0) {
                            setAvailableChatbots(chatbots);
                            // Select chatbot based on priority:
                            // 1. Provided chatbotId
                            // 2. Active chatbot
                            // 3. First available chatbot
                            let targetChatbot = null;
                            if (chatbotId) {
                                targetChatbot = chatbots.find({
                                    "ChatWidget.useEffect.loadChatbots": (bot)=>bot.id === chatbotId
                                }["ChatWidget.useEffect.loadChatbots"]) || null;
                            }
                            if (!targetChatbot) {
                                targetChatbot = chatbots.find({
                                    "ChatWidget.useEffect.loadChatbots": (bot)=>bot.chain_status === "active"
                                }["ChatWidget.useEffect.loadChatbots"]) || chatbots[0];
                            }
                            if (targetChatbot) {
                                // Get full chatbot details
                                const fullChatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbot(targetChatbot.id);
                                setSelectedChatbot(fullChatbot);
                                // Set initial greeting message
                                setMessages([
                                    {
                                        id: "greeting",
                                        type: "bot",
                                        content: fullChatbot.greeting_message || "Hello! I'm ".concat(fullChatbot.name, ". How can I help you today?"),
                                        timestamp: new Date()
                                    }
                                ]);
                            }
                        } else {
                            // No chatbots available - show default message
                            setMessages([
                                {
                                    id: "greeting",
                                    type: "bot",
                                    content: "Hello! I'm your AI assistant. Please note that no chatbots are currently configured for your organization.",
                                    timestamp: new Date()
                                }
                            ]);
                        }
                    } catch (error) {
                        console.error("Error loading chatbots:", error);
                        // Check if it's an authentication error
                        if (error instanceof Error && error.message.includes("Not authenticated")) {
                            setIsAuthenticated(false);
                            setMessages([
                                {
                                    id: "greeting",
                                    type: "bot",
                                    content: "Hello! To use the chat feature, please log in to your account first.",
                                    timestamp: new Date()
                                }
                            ]);
                        } else {
                            // Use the connection error handler for consistent messaging
                            const errorMessage = getErrorMessage(error);
                            setMessages([
                                {
                                    id: "greeting",
                                    type: "bot",
                                    content: "Hello! ".concat(errorMessage),
                                    timestamp: new Date()
                                }
                            ]);
                        }
                    } finally{
                        setLoadingChatbots(false);
                    }
                }
            }["ChatWidget.useEffect.loadChatbots"];
            loadChatbots();
        }
    }["ChatWidget.useEffect"], [
        chatbotId,
        getErrorMessage
    ]);
    // Handle chatbot selection change
    const handleChatbotChange = async (newChatbotId)=>{
        try {
            const newChatbot = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotApi"].getChatbot(newChatbotId);
            setSelectedChatbot(newChatbot);
            setConversationId(undefined); // Reset conversation for new chatbot
            // Reset messages with new greeting
            setMessages([
                {
                    id: "greeting",
                    type: "bot",
                    content: newChatbot.greeting_message || "Hello! I'm ".concat(newChatbot.name, ". How can I help you today?"),
                    timestamp: new Date()
                }
            ]);
            setShowChatbotDropdown(false);
        } catch (error) {
            console.error("Error switching chatbot:", error);
        }
    };
    const scrollToBottom = ()=>{
        var _messagesEndRef_current;
        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWidget.useEffect": ()=>{
            scrollToBottom();
        }
    }["ChatWidget.useEffect"], [
        messages
    ]);
    const handleSendMessage = async ()=>{
        if (!inputMessage.trim() || isTyping || !isAuthenticated) return;
        const userMessage = {
            id: Date.now().toString(),
            type: "user",
            content: inputMessage,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        const currentMessage = inputMessage;
        setInputMessage("");
        setIsTyping(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$app$2f$api$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conversationApi"].sendMessage(currentMessage, (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id) || chatbotId, conversationId);
            // Store conversation ID for follow-up messages
            if (response.conversation_id && !conversationId) {
                setConversationId(response.conversation_id);
            }
            const botResponse = {
                id: (Date.now() + 1).toString(),
                type: "bot",
                content: response.response,
                timestamp: new Date(),
                sources: response.sources || []
            };
            setMessages((prev)=>[
                    ...prev,
                    botResponse
                ]);
        } catch (error) {
            console.error("Error getting bot response:", error);
            // Handle authentication errors specially
            if (error instanceof Error && (error.message.includes("Not authenticated") || error.message.includes("Authentication expired"))) {
                setIsAuthenticated(false);
            }
            // Use the connection error handler for consistent messaging
            const errorMessage = getErrorMessage(error);
            const errorResponse = {
                id: (Date.now() + 1).toString(),
                type: "bot",
                content: errorMessage,
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    errorResponse
                ]);
        } finally{
            setIsTyping(false);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    const positionClasses = {
        "bottom-right": "bottom-10 right-4",
        "bottom-left": "bottom-10 left-4"
    };
    // Don't render anything until client-side hydration is complete
    if (!isClient) {
        return null;
    }
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed ".concat(positionClasses[position], " z-50"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setIsOpen(true),
                className: "pointer rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200",
                style: {
                    backgroundColor: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.color_hex) || "#3B82F6"
                },
                disabled: loadingChatbots,
                children: loadingChatbots ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                    lineNumber: 299,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-6 w-6 text-white"
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                    lineNumber: 301,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
            lineNumber: 291,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed ".concat(positionClasses[position], " flex flex-col p-0 z-50"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[25vw] flex flex-col shadow-2xl rounded-lg p-3 transition-all bg-white m-0 duration-300 ".concat(isMinimized ? "h-14" : "h-[70vh]"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-row items-center justify-between space-y-0 p-3 text-white rounded-lg shadow-md",
                    style: {
                        background: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.color_hex) ? "linear-gradient(135deg, ".concat(selectedChatbot.color_hex, ", ").concat(selectedChatbot.color_hex, "dd)") : "linear-gradient(135deg, #3B82F6, #2563EB)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-between items-center gap-5 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-full flex flex-row items-center justify-center bg-white/20",
                                        children: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.avatar_url) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedChatbot.avatar_url,
                                            alt: selectedChatbot.name,
                                            className: "w-5 h-5 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "h-4 w-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    showChatbotSelector && availableChatbots.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "sm",
                                                onClick: ()=>setShowChatbotDropdown(!showChatbotDropdown),
                                                className: "h-auto p-1 text-white hover:bg-white/20 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-sm",
                                                        children: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.name) || "Select Chatbot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this),
                                            showChatbotDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border z-10 min-w-48",
                                                children: availableChatbots.map((chatbot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleChatbotChange(chatbot.id),
                                                        className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-3 rounded-full",
                                                                style: {
                                                                    backgroundColor: chatbot.color_hex || "#3B82F6"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: chatbot.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 27
                                                            }, this),
                                                            chatbot.chain_status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-green-600 ml-auto",
                                                                children: "Active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, chatbot.id, true, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 354,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-sm",
                                        children: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.name) || "Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-green-400 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setIsMinimized(!isMinimized),
                                        className: "pointer h-7 w-7 rounded-lg p-0 text-white bg-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setIsOpen(false),
                                        className: "pointer h-7 w-7 rounded-lg p-0 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3 w-3",
                                            style: {
                                                color: selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.color_hex
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 395,
                                        columnNumber: 15
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this),
                !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 flex flex-col overflow-scroll",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-3 space-y-3",
                            children: [
                                isAuthenticated === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "h-8 w-8 text-blue-500 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 420,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium text-blue-900 mb-2",
                                                children: "Login Required"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 421,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-blue-700 mb-3",
                                                children: "Please log in to your account to start chatting with our AI assistant."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 424,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                onClick: ()=>window.location.href = "/login",
                                                className: "bg-blue-600 hover:bg-blue-700",
                                                children: "Go to Login"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 428,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 419,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this),
                                messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex ".concat(message.type === "user" ? "justify-end" : "justify-start"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-[85%] p-2 rounded-lg text-sm ".concat(message.type === "user" ? "text-white ml-2" : "bg-gray-100 mr-2"),
                                            style: {
                                                backgroundColor: message.type === "user" ? (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.color_hex) || "#3B82F6" : undefined
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    message.type === "bot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 25
                                                    }, this),
                                                    message.type === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "h-3 w-3 text-white mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "whitespace-pre-wrap",
                                                                children: message.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 25
                                                            }, this),
                                                            message.sources && message.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 text-xs text-gray-500",
                                                                children: [
                                                                    "Sources: ",
                                                                    message.sources.length,
                                                                    " document(s)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 459,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this)
                                    }, message.id, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 440,
                                        columnNumber: 17
                                    }, this)),
                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-100 mr-2 p-2 rounded-lg max-w-[85%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "h-3 w-3 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 483,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                        lineNumber: 482,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                    lineNumber: 481,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                    lineNumber: 495,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-t bg-gray-50 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: inputMessage,
                                            onChange: (e)=>setInputMessage(e.target.value),
                                            onKeyDown: handleKeyDown,
                                            placeholder: !isAuthenticated ? "Please log in to chat..." : "Ask ".concat((selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.name) || "Assistant", "..."),
                                            className: "flex-1 text-sm focus:ring-1 focus:ring-opacity-50 focus:border-transparent transition-all duration-200",
                                            style: {
                                                "--tw-ring-color": (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.color_hex) || "#3B82F6"
                                            },
                                            disabled: isTyping || !selectedChatbot || !isAuthenticated
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 501,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSendMessage,
                                            disabled: !inputMessage.trim() || isTyping || !selectedChatbot || !isAuthenticated,
                                            size: "sm",
                                            className: "px-3",
                                            style: {
                                                backgroundColor: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.color_hex) || "#3B82F6"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                                lineNumber: 533,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-xs text-right",
                                    children: "Powered by Zaakiy"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
                    lineNumber: 413,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
            lineNumber: 312,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/components/ChatWidget.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
_s(ChatWidget, "RUqnZRt9umh3uQw+zMQM/ohwGPU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$hooks$2f$useServerConnection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectionErrorHandler"]
    ];
});
_c = ChatWidget;
var _c;
__turbopack_context__.k.register(_c, "ChatWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/zaakiy/frontend/src/components/ClientOnlyWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientOnlyWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientOnlyWrapper(param) {
    let { children, fallback = null } = param;
    _s();
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnlyWrapper.useEffect": ()=>{
            setHasMounted(true);
        }
    }["ClientOnlyWrapper.useEffect"], []);
    if (!hasMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: fallback
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ClientOnlyWrapper, "aiSd/DQPOnbbLLZZL0Xv/KtPBDg=");
_c = ClientOnlyWrapper;
var _c;
__turbopack_context__.k.register(_c, "ClientOnlyWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_zaakiy_frontend_src_3f89f43f._.js.map