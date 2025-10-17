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
]);

//# sourceMappingURL=Desktop_zaakiy_frontend_src_5903ef42._.js.map