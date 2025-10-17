(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IngestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/zaakiy/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)");
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
function IngestPage() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pdf");
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploads, setUploads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deleteStatus, setDeleteStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingUploads, setIsLoadingUploads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Loading uploads...");
    const API_BASE = ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001";
    const getAuthHeaders = async ()=>{
        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
        if (!(session === null || session === void 0 ? void 0 : session.access_token)) {
            throw new Error("Not authenticated. Please log in again.");
        }
        return {
            Authorization: "Bearer ".concat(session.access_token)
        };
    };
    const handleSubmit = async ()=>{
        if (isUploading) return;
        setIsUploading(true);
        setStatus("Processing...");
        try {
            const headers = await getAuthHeaders();
            if (tab === "pdf" || tab === "json") {
                if (!file) {
                    setStatus("No file selected");
                    return;
                }
                // Validate file size (10MB limit)
                const maxSize = 10 * 1024 * 1024; // 10MB in bytes
                if (file.size > maxSize) {
                    setStatus("File size exceeds 10MB limit");
                    return;
                }
                // Validate file type
                const allowedTypes = {
                    pdf: [
                        "application/pdf"
                    ],
                    json: [
                        "application/json",
                        "text/json"
                    ]
                };
                if (!allowedTypes[tab].includes(file.type)) {
                    setStatus("Invalid file type. Please select a ".concat(tab.toUpperCase(), " file."));
                    return;
                }
                console.log("Uploading file:", file.name, "Size:", file.size, "Type:", file.type);
                const formData = new FormData();
                formData.append("file", file);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_BASE, "/api/uploads/").concat(tab), formData, {
                    headers: {
                        ...headers
                    },
                    timeout: 60000,
                    onUploadProgress: (progressEvent)=>{
                        const percentCompleted = Math.round(progressEvent.loaded * 100 / (progressEvent.total || 1));
                        setStatus("Uploading... ".concat(percentCompleted, "%"));
                    }
                });
                console.log("Upload response:", response.data);
                setStatus("".concat(tab.toUpperCase(), " uploaded successfully! Upload ID: ").concat(response.data.upload_id || response.data.id));
            } else if (tab === "url") {
                if (!url.trim()) {
                    setStatus("URL required");
                    return;
                }
                // Basic URL validation
                try {
                    new URL(url);
                } catch (e) {
                    setStatus("Please enter a valid URL");
                    return;
                }
                console.log("Submitting URL:", url);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_BASE, "/api/uploads/url"), {
                    url: url.trim()
                }, {
                    headers,
                    timeout: 30000
                });
                console.log("URL response:", response.data);
                setStatus("URL registered for ingestion! Upload ID: ".concat(response.data.upload_id || response.data.id));
            }
            // Clear form
            setFile(null);
            setUrl("");
            // Reset file input
            const fileInput = document.getElementById("file-upload");
            if (fileInput) fileInput.value = "";
            // Refresh uploads list after a short delay
            setTimeout(()=>{
                fetchUploads();
            }, 1000);
        } catch (error) {
            console.error("Upload error:", error);
            let errorMessage = "Unknown error occurred";
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                const axiosError = error;
                if (axiosError.response) {
                    var _axiosError_response_data, _axiosError_response_data1;
                    console.log("Response status:", axiosError.response.status);
                    console.log("Response data:", axiosError.response.data);
                    if ((_axiosError_response_data = axiosError.response.data) === null || _axiosError_response_data === void 0 ? void 0 : _axiosError_response_data.detail) {
                        errorMessage = axiosError.response.data.detail;
                    } else if ((_axiosError_response_data1 = axiosError.response.data) === null || _axiosError_response_data1 === void 0 ? void 0 : _axiosError_response_data1.message) {
                        errorMessage = axiosError.response.data.message;
                    } else if (typeof axiosError.response.data === "string") {
                        errorMessage = axiosError.response.data;
                    } else {
                        errorMessage = "Server error (".concat(axiosError.response.status, ")");
                    }
                } else if (axiosError.request) {
                    errorMessage = "Cannot connect to server - check if backend is running";
                } else if (axiosError.message) {
                    errorMessage = axiosError.message;
                }
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            setStatus("Error: ".concat(errorMessage));
        } finally{
            setIsUploading(false);
        }
    };
    const handleDelete = async (uploadId)=>{
        if (!window.confirm("Are you sure you want to delete this upload? This will also remove all associated vectors from the knowledge base.")) {
            return;
        }
        setDeleteStatus((prev)=>({
                ...prev,
                [uploadId]: "Deleting..."
            }));
        try {
            const headers = await getAuthHeaders();
            console.log("Deleting upload:", uploadId);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/api/uploads/").concat(uploadId), {
                headers,
                timeout: 30000
            });
            console.log("Delete response:", response.data);
            setDeleteStatus((prev)=>({
                    ...prev,
                    [uploadId]: "Deleted successfully!"
                }));
            // Remove the deleted item from the local state
            setUploads((prev)=>prev.filter((upload)=>upload.id !== uploadId));
            // Clear the delete status after a short delay
            setTimeout(()=>{
                setDeleteStatus((prev)=>{
                    const newStatus = {
                        ...prev
                    };
                    delete newStatus[uploadId];
                    return newStatus;
                });
            }, 2000);
        } catch (error) {
            console.error("Delete error:", error);
            let errorMessage = "Failed to delete upload";
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                const axiosError = error;
                if (axiosError.response) {
                    var _axiosError_response_data, _axiosError_response_data1;
                    if ((_axiosError_response_data = axiosError.response.data) === null || _axiosError_response_data === void 0 ? void 0 : _axiosError_response_data.detail) {
                        errorMessage = axiosError.response.data.detail;
                    } else if ((_axiosError_response_data1 = axiosError.response.data) === null || _axiosError_response_data1 === void 0 ? void 0 : _axiosError_response_data1.message) {
                        errorMessage = axiosError.response.data.message;
                    } else if (typeof axiosError.response.data === "string") {
                        errorMessage = axiosError.response.data;
                    } else {
                        errorMessage = "Delete failed (".concat(axiosError.response.status, ")");
                    }
                } else if (axiosError.request) {
                    errorMessage = "Cannot connect to server - check if backend is running";
                } else if (axiosError.message) {
                    errorMessage = axiosError.message;
                }
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            setDeleteStatus((prev)=>({
                    ...prev,
                    [uploadId]: "Error: ".concat(errorMessage)
                }));
            // Clear the error status after a delay
            setTimeout(()=>{
                setDeleteStatus((prev)=>{
                    const newStatus = {
                        ...prev
                    };
                    delete newStatus[uploadId];
                    return newStatus;
                });
            }, 5000);
        }
    };
    const fetchUploads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IngestPage.useCallback[fetchUploads]": async ()=>{
            setIsLoadingUploads(true);
            setLoadingMessage("Loading uploads...");
            try {
                const headers = await getAuthHeaders();
                console.log("Fetching uploads...");
                // Retry logic with exponential backoff and progressive timeouts
                const maxRetries = 3;
                let lastError = null;
                for(let attempt = 0; attempt < maxRetries; attempt++){
                    try {
                        // Progressive timeout: 30s, 45s, 60s
                        const timeout = 30000 + attempt * 15000;
                        console.log("Attempt ".concat(attempt + 1, "/").concat(maxRetries, " with ").concat(timeout / 1000, "s timeout"));
                        setLoadingMessage("Loading uploads... (attempt ".concat(attempt + 1, "/").concat(maxRetries, ")"));
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/api/uploads"), {
                            headers,
                            timeout: timeout
                        });
                        console.log("Uploads response:", response.data);
                        const uploadsData = response.data.uploads || response.data || [];
                        setUploads(Array.isArray(uploadsData) ? uploadsData : []);
                        setStatus(""); // Clear any previous error status
                        setLoadingMessage("Loading uploads...");
                        return; // Success, exit retry loop
                    } catch (error) {
                        console.error("Failed to fetch uploads (attempt ".concat(attempt + 1, "/").concat(maxRetries, "):"), error);
                        lastError = error;
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                            // Don't retry if it's a 4xx error (client error)
                            if (error.response && error.response.status >= 400 && error.response.status < 500) {
                                console.log("Client error detected, stopping retries");
                                break;
                            }
                            // For network errors or 5xx errors, wait before retrying
                            if (attempt < maxRetries - 1) {
                                const delay = Math.min(2000 * Math.pow(2, attempt), 8000); // Longer delays: 2s, 4s, 8s
                                console.log("Waiting ".concat(delay / 1000, "s before retry..."));
                                setStatus("Request timed out, retrying in ".concat(delay / 1000, " seconds..."));
                                setLoadingMessage("Request timed out, retrying in ".concat(delay / 1000, " seconds..."));
                                await new Promise({
                                    "IngestPage.useCallback[fetchUploads]": (resolve)=>setTimeout(resolve, delay)
                                }["IngestPage.useCallback[fetchUploads]"]);
                                continue;
                            }
                        }
                        break;
                    }
                }
                // If we get here, all retries failed
                if (lastError) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(lastError)) {
                        const axiosError = lastError;
                        if (axiosError.code === "ECONNABORTED") {
                            setStatus("⚠️ Server is taking longer than expected to respond. This might be due to a large amount of data or server load. You can try refreshing the page or contact support if this persists.");
                            // Set uploads to empty array so UI doesn't stay in loading state
                            setUploads([]);
                        } else {
                            var _axiosError_response_data, _axiosError_response;
                            const errorMsg = ((_axiosError_response = axiosError.response) === null || _axiosError_response === void 0 ? void 0 : (_axiosError_response_data = _axiosError_response.data) === null || _axiosError_response_data === void 0 ? void 0 : _axiosError_response_data.detail) || axiosError.message;
                            setStatus("Error fetching uploads: ".concat(errorMsg));
                        }
                    } else if (lastError instanceof Error) {
                        setStatus("Error fetching uploads: ".concat(lastError.message));
                    }
                }
            } catch (error) {
                console.error("Failed to fetch uploads:", error);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                    var _axiosError_response_data1, _axiosError_response1;
                    const axiosError = error;
                    const errorMsg = ((_axiosError_response1 = axiosError.response) === null || _axiosError_response1 === void 0 ? void 0 : (_axiosError_response_data1 = _axiosError_response1.data) === null || _axiosError_response_data1 === void 0 ? void 0 : _axiosError_response_data1.detail) || axiosError.message;
                    setStatus("Error fetching uploads: ".concat(errorMsg));
                } else if (error instanceof Error) {
                    setStatus("Error fetching uploads: ".concat(error.message));
                }
            } finally{
                setIsLoadingUploads(false);
            }
        }
    }["IngestPage.useCallback[fetchUploads]"], [
        API_BASE
    ]);
    const getStatusIcon = (status)=>{
        switch(status){
            case "completed":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-4 w-4 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                    lineNumber: 415,
                    columnNumber: 16
                }, this);
            case "failed":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-4 w-4 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                    lineNumber: 417,
                    columnNumber: 16
                }, this);
            case "processing":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-4 w-4 text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                    lineNumber: 419,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-4 w-4 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                    lineNumber: 421,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusBadgeColor = (status)=>{
        switch(status){
            case "completed":
                return "bg-green-100 text-green-800 border-green-200";
            case "failed":
                return "bg-red-100 text-red-800 border-red-200";
            case "processing":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    // Load uploads on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IngestPage.useEffect": ()=>{
            fetchUploads();
        }
    }["IngestPage.useEffect"], [
        fetchUploads
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto ml-[4.5vw] bg-white rounded-3xl p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 xl:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "xl:col-span-2 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this),
                                            "Data Ingestion"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                {
                                                    key: "pdf",
                                                    label: "PDF"
                                                },
                                                {
                                                    key: "url",
                                                    label: "URL"
                                                },
                                                {
                                                    key: "json",
                                                    label: "JSON"
                                                }
                                            ].map((tabOption)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: tab === tabOption.key ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>setTab(tabOption.key),
                                                    children: tabOption.label
                                                }, tabOption.key, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        tab === "pdf" || tab === "json" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            id: "file-upload",
                                                            accept: tab === "pdf" ? ".pdf" : ".json",
                                                            onChange: (e)=>{
                                                                var _e_target_files;
                                                                return setFile(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);
                                                            },
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "file-upload",
                                                            className: "cursor-pointer flex flex-col items-center justify-center space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    className: "h-12 w-12 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-gray-900",
                                                                            children: [
                                                                                "Click to upload ",
                                                                                tab.toUpperCase(),
                                                                                " files"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                            lineNumber: 494,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: "Max file size: 10MB"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 19
                                                }, this),
                                                file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-blue-50 border border-blue-200 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-blue-900",
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                        lineNumber: 508,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-blue-600",
                                                                        children: [
                                                                            (file.size / 1024 / 1024).toFixed(2),
                                                                            " MB"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                        lineNumber: 511,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                onClick: ()=>{
                                                                    setFile(null);
                                                                    const input = document.getElementById("file-upload");
                                                                    if (input) input.value = "";
                                                                },
                                                                children: "Remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Website URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                    placeholder: "https://example.com/content",
                                                    value: url,
                                                    onChange: (e)=>setUrl(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSubmit,
                                            disabled: isUploading || !file && tab !== "url" || !url && tab === "url",
                                            className: "w-full",
                                            size: "lg",
                                            children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "h-4 w-4 mr-2 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Submit"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                            lineNumber: 548,
                                            columnNumber: 15
                                        }, this),
                                        status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-lg text-sm ".concat(status.includes("Error") ? "bg-red-50 text-red-800 border border-red-200" : status.includes("successfully") ? "bg-green-50 text-green-800 border border-green-200" : "bg-blue-50 text-blue-800 border border-blue-200"),
                                            children: status
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Recent Uploads"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: fetchUploads,
                                                disabled: isLoadingUploads,
                                                variant: "outline",
                                                size: "sm",
                                                children: [
                                                    isLoadingUploads ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Refresh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 591,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: isLoadingUploads ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-6 w-6 animate-spin mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 19
                                            }, this),
                                            loadingMessage
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 17
                                    }, this) : uploads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "h-12 w-12 mx-auto mb-4 text-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 616,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No uploads found."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Upload some files to get started!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-3 px-4 font-medium",
                                                                children: "Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-3 px-4 font-medium",
                                                                children: "Source"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-3 px-4 font-medium",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-3 px-4 font-medium",
                                                                children: "Created"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-3 px-4 font-medium",
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 637,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: uploads.map((upload)=>{
                                                        var _deleteStatus_upload_id, _deleteStatus_upload_id1;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 px-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: "font-mono",
                                                                        children: upload.type.toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 px-4 max-w-xs",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "truncate",
                                                                        title: upload.source,
                                                                        children: upload.source
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                        lineNumber: 654,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 653,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 px-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                getStatusIcon(upload.status),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    className: getStatusBadgeColor(upload.status),
                                                                                    children: upload.status
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                                    lineNumber: 661,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        upload.status === "failed" && upload.error_message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-red-600 mt-1",
                                                                            title: upload.error_message,
                                                                            children: upload.error_message.length > 50 ? upload.error_message.substring(0, 50) + "..." : upload.error_message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                            lineNumber: 670,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 658,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 px-4 text-sm text-gray-600",
                                                                    children: new Date(upload.created_at).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 681,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 px-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                onClick: ()=>handleDelete(upload.id),
                                                                                disabled: (_deleteStatus_upload_id = deleteStatus[upload.id]) === null || _deleteStatus_upload_id === void 0 ? void 0 : _deleteStatus_upload_id.includes("Deleting"),
                                                                                variant: "destructive",
                                                                                size: "sm",
                                                                                children: ((_deleteStatus_upload_id1 = deleteStatus[upload.id]) === null || _deleteStatus_upload_id1 === void 0 ? void 0 : _deleteStatus_upload_id1.includes("Deleting")) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                                    className: "h-3 w-3 animate-spin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                                    lineNumber: 697,
                                                                                    columnNumber: 35
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                                    lineNumber: 699,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                                lineNumber: 686,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                            lineNumber: 685,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        deleteStatus[upload.id] && !deleteStatus[upload.id].includes("Deleting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs mt-1 ".concat(deleteStatus[upload.id].includes("Error") ? "text-red-600" : "text-green-600"),
                                                                            children: deleteStatus[upload.id]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                            lineNumber: 705,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, upload.id, true, {
                                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 621,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg flex items-center gap-2",
                                        children: "🎨 Customization Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 729,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-sm text-gray-600 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-600",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Match your brand colors"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 736,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-600",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Set appropriate welcome messages"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 740,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-600",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Configure widget position"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-600",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Enable/disable features as needed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 734,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg flex items-center gap-2",
                                        children: "📊 Upload Guidelines"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 758,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 757,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-800",
                                                        children: "Supported Formats:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-1 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• PDF documents"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• JSON data files"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Website URLs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 771,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 764,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-800",
                                                        children: "Best Practices:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 775,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-1 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Keep files under 10MB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 777,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Use clear, structured content"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$zaakiy$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Test with sample questions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                                lineNumber: 779,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                                lineNumber: 774,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                        lineNumber: 763,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                                    lineNumber: 762,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                            lineNumber: 756,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
                    lineNumber: 727,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
            lineNumber: 445,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/zaakiy/frontend/src/app/dashboard/[userId]/train/page.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_s(IngestPage, "khO30OlF1AHkwNncLleE1wo2JJE=");
_c = IngestPage;
var _c;
__turbopack_context__.k.register(_c, "IngestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_zaakiy_frontend_src_app_dashboard_%5BuserId%5D_train_page_tsx_eedcfe5c._.js.map