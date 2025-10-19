"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import axios, { AxiosError } from "axios";
import {
  Upload,
  RefreshCw,
  Trash2,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type UploadItem = {
  id: string;
  type: string;
  source: string;
  status: string;
  created_at: string;
  error_message?: string;
};

export default function IngestPage() {
  const [tab, setTab] = useState<"pdf" | "url" | "json">("pdf");
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [deleteStatus, setDeleteStatus] = useState<{ [key: string]: string }>(
    {}
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isLoadingUploads, setIsLoadingUploads] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading uploads...");

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://zaakiy-production.up.railway.app";

  const getAuthHeaders = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      throw new Error("Not authenticated. Please log in again.");
    }

    return {
      Authorization: `Bearer ${session.access_token}`,
    };
  };

  const handleSubmit = async () => {
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
          pdf: ["application/pdf"],
          json: ["application/json", "text/json"],
        };

        if (!allowedTypes[tab].includes(file.type)) {
          setStatus(
            `Invalid file type. Please select a ${tab.toUpperCase()} file.`
          );
          return;
        }

        console.log(
          "Uploading file:",
          file.name,
          "Size:",
          file.size,
          "Type:",
          file.type
        );

        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          `${API_BASE}/api/uploads/${tab}`,
          formData,
          {
            headers: {
              ...headers,
              // Don't set Content-Type for FormData, let browser handle it
            },
            timeout: 60000, // Increased timeout for large files
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / (progressEvent.total || 1)
              );
              setStatus(`Uploading... ${percentCompleted}%`);
            },
          }
        );

        console.log("Upload response:", response.data);
        setStatus(
          `${tab.toUpperCase()} uploaded successfully! Upload ID: ${
            response.data.upload_id || response.data.id
          }`
        );
      } else if (tab === "url") {
        if (!url.trim()) {
          setStatus("URL required");
          return;
        }

        // Basic URL validation
        try {
          new URL(url);
        } catch {
          setStatus("Please enter a valid URL");
          return;
        }

        console.log("Submitting URL:", url);

        const response = await axios.post(
          `${API_BASE}/api/uploads/url`,
          { url: url.trim() },
          {
            headers,
            timeout: 30000,
          }
        );

        console.log("URL response:", response.data);
        setStatus(
          `URL registered for ingestion! Upload ID: ${
            response.data.upload_id || response.data.id
          }`
        );
      }

      // Clear form
      setFile(null);
      setUrl("");

      // Reset file input
      const fileInput = document.getElementById(
        "file-upload"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      // Refresh uploads list after a short delay
      setTimeout(() => {
        fetchUploads();
      }, 1000);
    } catch (error) {
      console.error("Upload error:", error);

      let errorMessage = "Unknown error occurred";

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          detail?: string;
          message?: string;
        }>;

        if (axiosError.response) {
          console.log("Response status:", axiosError.response.status);
          console.log("Response data:", axiosError.response.data);

          if (axiosError.response.data?.detail) {
            errorMessage = axiosError.response.data.detail;
          } else if (axiosError.response.data?.message) {
            errorMessage = axiosError.response.data.message;
          } else if (typeof axiosError.response.data === "string") {
            errorMessage = axiosError.response.data;
          } else {
            errorMessage = `Server error (${axiosError.response.status})`;
          }
        } else if (axiosError.request) {
          errorMessage =
            "Cannot connect to server - check if backend is running";
        } else if (axiosError.message) {
          errorMessage = axiosError.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setStatus(`Error: ${errorMessage}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (uploadId: string) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this upload? This will also remove all associated vectors from the knowledge base."
      )
    ) {
      return;
    }

    setDeleteStatus((prev) => ({ ...prev, [uploadId]: "Deleting..." }));

    try {
      const headers = await getAuthHeaders();
      console.log("Deleting upload:", uploadId);

      const response = await axios.delete(
        `${API_BASE}/api/uploads/${uploadId}`,
        {
          headers,
          timeout: 30000,
        }
      );

      console.log("Delete response:", response.data);

      setDeleteStatus((prev) => ({
        ...prev,
        [uploadId]: "Deleted successfully!",
      }));

      // Remove the deleted item from the local state
      setUploads((prev) => prev.filter((upload) => upload.id !== uploadId));

      // Clear the delete status after a short delay
      setTimeout(() => {
        setDeleteStatus((prev) => {
          const newStatus = { ...prev };
          delete newStatus[uploadId];
          return newStatus;
        });
      }, 2000);
    } catch (error) {
      console.error("Delete error:", error);

      let errorMessage = "Failed to delete upload";

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          detail?: string;
          message?: string;
        }>;

        if (axiosError.response) {
          if (axiosError.response.data?.detail) {
            errorMessage = axiosError.response.data.detail;
          } else if (axiosError.response.data?.message) {
            errorMessage = axiosError.response.data.message;
          } else if (typeof axiosError.response.data === "string") {
            errorMessage = axiosError.response.data;
          } else {
            errorMessage = `Delete failed (${axiosError.response.status})`;
          }
        } else if (axiosError.request) {
          errorMessage =
            "Cannot connect to server - check if backend is running";
        } else if (axiosError.message) {
          errorMessage = axiosError.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setDeleteStatus((prev) => ({
        ...prev,
        [uploadId]: `Error: ${errorMessage}`,
      }));

      // Clear the error status after a delay
      setTimeout(() => {
        setDeleteStatus((prev) => {
          const newStatus = { ...prev };
          delete newStatus[uploadId];
          return newStatus;
        });
      }, 5000);
    }
  };

  const fetchUploads = useCallback(async () => {
    setIsLoadingUploads(true);
    setLoadingMessage("Loading uploads...");
    try {
      const headers = await getAuthHeaders();
      console.log("Fetching uploads...");

      // Retry logic with exponential backoff and progressive timeouts
      const maxRetries = 3;
      let lastError = null;

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          // Progressive timeout: 30s, 45s, 60s
          const timeout = 30000 + attempt * 15000;
          console.log(
            `Attempt ${attempt + 1}/${maxRetries} with ${
              timeout / 1000
            }s timeout`
          );

          setLoadingMessage(
            `Loading uploads... (attempt ${attempt + 1}/${maxRetries})`
          );

          const response = await axios.get(`${API_BASE}/api/uploads`, {
            headers,
            timeout: timeout,
          });

          console.log("Uploads response:", response.data);

          const uploadsData = response.data.uploads || response.data || [];
          setUploads(Array.isArray(uploadsData) ? uploadsData : []);
          setStatus(""); // Clear any previous error status
          setLoadingMessage("Loading uploads...");
          return; // Success, exit retry loop
        } catch (error) {
          console.error(
            `Failed to fetch uploads (attempt ${attempt + 1}/${maxRetries}):`,
            error
          );
          lastError = error;

          if (axios.isAxiosError(error)) {
            // Don't retry if it's a 4xx error (client error)
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status < 500
            ) {
              console.log("Client error detected, stopping retries");
              break;
            }

            // For network errors or 5xx errors, wait before retrying
            if (attempt < maxRetries - 1) {
              const delay = Math.min(2000 * Math.pow(2, attempt), 8000); // Longer delays: 2s, 4s, 8s
              console.log(`Waiting ${delay / 1000}s before retry...`);
              setStatus(
                `Request timed out, retrying in ${delay / 1000} seconds...`
              );
              setLoadingMessage(
                `Request timed out, retrying in ${delay / 1000} seconds...`
              );
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }
          }

          // For non-Axios errors, don't retry
          break;
        }
      }

      // If we get here, all retries failed
      if (lastError) {
        if (axios.isAxiosError(lastError)) {
          const axiosError = lastError as AxiosError<{ detail?: string }>;

          if (axiosError.code === "ECONNABORTED") {
            setStatus(
              "⚠️ Server is taking longer than expected to respond. This might be due to a large amount of data or server load. You can try refreshing the page or contact support if this persists."
            );
            // Set uploads to empty array so UI doesn't stay in loading state
            setUploads([]);
          } else {
            const errorMsg =
              axiosError.response?.data?.detail || axiosError.message;
            setStatus(`Error fetching uploads: ${errorMsg}`);
          }
        } else if (lastError instanceof Error) {
          setStatus(`Error fetching uploads: ${lastError.message}`);
        }
      }
    } catch (error) {
      console.error("Failed to fetch uploads:", error);

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ detail?: string }>;
        const errorMsg =
          axiosError.response?.data?.detail || axiosError.message;
        setStatus(`Error fetching uploads: ${errorMsg}`);
      } else if (error instanceof Error) {
        setStatus(`Error fetching uploads: ${error.message}`);
      }
    } finally {
      setIsLoadingUploads(false);
    }
  }, [API_BASE]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
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
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        await fetchUploads();
      } catch (error) {
        if (mounted) {
          console.error("Error fetching uploads:", error);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [fetchUploads]);

  return (
    <div className="mx-auto ml-[4.5vw] bg-white rounded-3xl p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-6">
          {/* Upload Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Data Ingestion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tab Selection */}
              <div className="flex gap-2">
                {[
                  { key: "pdf", label: "PDF" },
                  { key: "url", label: "URL" },
                  { key: "json", label: "JSON" },
                ].map((tabOption) => (
                  <Button
                    key={tabOption.key}
                    variant={tab === tabOption.key ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setTab(tabOption.key as "pdf" | "url" | "json")
                    }
                  >
                    {tabOption.label}
                  </Button>
                ))}
              </div>

              {/* File Upload Area */}
              {tab === "pdf" || tab === "json" ? (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      id="file-upload"
                      accept={tab === "pdf" ? ".pdf" : ".json"}
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center space-y-3"
                    >
                      <Upload className="h-12 w-12 text-gray-400" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-900">
                          Click to upload {tab.toUpperCase()} files
                        </p>
                        <p className="text-xs text-gray-500">
                          Max file size: 10MB
                        </p>
                      </div>
                    </label>
                  </div>

                  {file && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-blue-900">
                            {file.name}
                          </p>
                          <p className="text-xs text-blue-600">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setFile(null);
                            const input = document.getElementById(
                              "file-upload"
                            ) as HTMLInputElement;
                            if (input) input.value = "";
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Website URL
                  </label>
                  <input
                    type="url"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/content"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              )}

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={
                  isUploading ||
                  (!file && tab !== "url") ||
                  (!url && tab === "url")
                }
                className="w-full"
                size="lg"
              >
                {isUploading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Submit
                  </>
                )}
              </Button>

              {/* Status Message */}
              {status && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    status.includes("Error")
                      ? "bg-red-50 text-red-800 border border-red-200"
                      : status.includes("successfully")
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-blue-50 text-blue-800 border border-blue-200"
                  }`}
                >
                  {status}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Uploads List */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Uploads</CardTitle>
                <Button
                  onClick={fetchUploads}
                  disabled={isLoadingUploads}
                  variant="outline"
                  size="sm"
                >
                  {isLoadingUploads ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4" />
                  )}
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {isLoadingUploads ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="h-6 w-6 animate-spin mr-2" />
                  {loadingMessage}
                </div>
              ) : uploads.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No uploads found.</p>
                  <p className="text-sm">Upload some files to get started!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">
                          Type
                        </th>
                        <th className="text-left py-3 px-4 font-medium">
                          Source
                        </th>
                        <th className="text-left py-3 px-4 font-medium">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 font-medium">
                          Created
                        </th>
                        <th className="text-left py-3 px-4 font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploads.map((upload) => (
                        <tr
                          key={upload.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="font-mono">
                              {upload.type.toUpperCase()}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 max-w-xs">
                            <div className="truncate" title={upload.source}>
                              {upload.source}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(upload.status)}
                              <Badge
                                variant="outline"
                                className={getStatusBadgeColor(upload.status)}
                              >
                                {upload.status}
                              </Badge>
                            </div>
                            {upload.status === "failed" &&
                              upload.error_message && (
                                <div
                                  className="text-xs text-red-600 mt-1"
                                  title={upload.error_message}
                                >
                                  {upload.error_message.length > 50
                                    ? upload.error_message.substring(0, 50) +
                                      "..."
                                    : upload.error_message}
                                </div>
                              )}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {new Date(upload.created_at).toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button
                                onClick={() => handleDelete(upload.id)}
                                disabled={deleteStatus[upload.id]?.includes(
                                  "Deleting"
                                )}
                                variant="destructive"
                                size="sm"
                              >
                                {deleteStatus[upload.id]?.includes(
                                  "Deleting"
                                ) ? (
                                  <RefreshCw className="h-3 w-3 animate-spin" />
                                ) : (
                                  <Trash2 className="h-3 w-3" />
                                )}
                              </Button>
                            </div>
                            {deleteStatus[upload.id] &&
                              !deleteStatus[upload.id].includes("Deleting") && (
                                <div
                                  className={`text-xs mt-1 ${
                                    deleteStatus[upload.id].includes("Error")
                                      ? "text-red-600"
                                      : "text-green-600"
                                  }`}
                                >
                                  {deleteStatus[upload.id]}
                                </div>
                              )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                🎨 Customization Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  Match your brand colors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  Set appropriate welcome messages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  Configure widget position
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>
                  Enable/disable features as needed
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                📊 Upload Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  <p className="font-medium text-gray-800">
                    Supported Formats:
                  </p>
                  <ul className="mt-1 space-y-1">
                    <li>• PDF documents</li>
                    <li>• JSON data files</li>
                    <li>• Website URLs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Best Practices:</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Keep files under 10MB</li>
                    <li>• Use clear, structured content</li>
                    <li>• Test with sample questions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
