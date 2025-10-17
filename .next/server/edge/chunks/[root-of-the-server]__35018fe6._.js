(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__35018fe6._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Documents/07:30:15/frontend/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/07:30:15/frontend/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
;
;
async function middleware(req) {
    let response = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: req.headers
        }
    });
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://raoonyyrzzftdenvknfi.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhb29ueXlyenpmdGRlbnZrbmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDM1NzcsImV4cCI6MjA2NTgxOTU3N30.3t9rTN6x533lihs8ebUVHu9kuayFl_m2b6liifW1B88"), {
        cookies: {
            get (name) {
                return req.cookies.get(name)?.value;
            },
            set (name, value, options) {
                req.cookies.set({
                    name,
                    value,
                    ...options
                });
                response = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request: {
                        headers: req.headers
                    }
                });
                response.cookies.set({
                    name,
                    value,
                    ...options
                });
            },
            remove (name, options) {
                req.cookies.set({
                    name,
                    value: '',
                    ...options
                });
                response = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request: {
                        headers: req.headers
                    }
                });
                response.cookies.set({
                    name,
                    value: '',
                    ...options
                });
            }
        }
    });
    // Get the session
    const { data: { session } } = await supabase.auth.getSession();
    const isAuth = !!session?.user;
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    const isDashboard = req.nextUrl.pathname.startsWith('/dashboard');
    // Redirect unauthenticated users to login
    if (!isAuth && isDashboard) {
        const loginUrl = req.nextUrl.clone();
        loginUrl.pathname = '/auth/login';
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // Redirect authenticated users away from auth pages
    if (isAuth && isAuthPage) {
        const dashboardUrl = req.nextUrl.clone();
        dashboardUrl.pathname = `/dashboard/${session.user.id}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(dashboardUrl);
    }
    // Redirect /dashboard to user-specific dashboard
    if (isDashboard && req.nextUrl.pathname === '/dashboard' && isAuth) {
        const userDashboardUrl = req.nextUrl.clone();
        userDashboardUrl.pathname = `/dashboard/${session.user.id}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$07$3a$30$3a$15$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(userDashboardUrl);
    }
    return response;
}
const config = {
    matcher: [
        '/dashboard/:path*',
        '/auth/:path*'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__35018fe6._.js.map