"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import axios, { AxiosError } from "axios";
import { getApiBaseUrl } from "@/config/api";
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
import { useAuth } from "@/hooks/useAuthGuard";

type UploadItem = {
  id: string;
  type: string;
  source: string;
  status: string;
  created_at: string;
  error_message?: string;
};

export default function IngestPage() {
  const { isLoading: isAuthLoading } = useAuth();
  const [tab, setTab] = useState<"pdf" | "url" | "json">("pdf");
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [recursive, setRecursive] = useState(false);
  const [maxPages, setMaxPages] = useState<number | null>(null);
  const [maxDepth, setMaxDepth] = useState<number | null>(null);
  const [status, setStatus] = useState("");
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [deleteStatus, setDeleteStatus] = useState<{ [key: string]: string }>(
    {}
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isLoadingUploads, setIsLoadingUploads] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading uploads...");

  const getAuthHeaders = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.access_token) {
      throw new Error("Not authenticated. Please log in again.");
    }
    return { Authorization: `Bearer ${session.access_token}` };
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

        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
          setStatus("File size exceeds 10MB limit");
          return;
        }

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

        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          `${getApiBaseUrl()}/api/uploads/${tab}`,
          formData,
          {
            headers: { ...headers },
            timeout: 60000,
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / (progressEvent.total || 1)
              );
              setStatus(`Uploading... ${percentCompleted}%`);
            },
          }
        );

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

        try {
          new URL(url);
        } catch {
          setStatus("Please enter a valid URL");
          return;
        }

        const payload: {
          url: string;
          recursive?: boolean;
          max_pages?: number;
          max_depth?: number;
        } = { url: url.trim() };
        if (recursive) {
          payload.recursive = true;
          if (maxPages) payload.max_pages = maxPages;
          if (maxDepth) payload.max_depth = maxDepth;
        }

        const response = await axios.post(
          `${getApiBaseUrl()}/api/uploads/url`,
          payload,
          { headers, timeout: 30000 }
        );
        setStatus(
          `URL registered for ingestion! Upload ID: ${
            response.data.upload_id || response.data.id
          }`
        );
      }

      setFile(null);
      setUrl("");
      setRecursive(false);
      setMaxPages(null);
      setMaxDepth(null);

      const fileInput = document.getElementById(
        "file-upload"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      setTimeout(() => fetchUploads(), 1000);
    } catch (error) {
      let errorMessage = "Unknown error occurred";
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          detail?: string;
          message?: string;
        }>;
        if (axiosError.response?.data?.detail) {
          errorMessage = axiosError.response.data.detail;
        } else if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
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
    if (!window.confirm("Are you sure you want to delete this upload?")) return;

    setDeleteStatus((prev) => ({ ...prev, [uploadId]: "Deleting..." }));

    try {
      const headers = await getAuthHeaders();
      await axios.delete(`${getApiBaseUrl()}/api/uploads/${uploadId}`, {
        headers,
        timeout: 30000,
      });
      setDeleteStatus((prev) => ({
        ...prev,
        [uploadId]: "Deleted successfully!",
      }));
      setUploads((prev) => prev.filter((upload) => upload.id !== uploadId));
      setTimeout(() => {
        setDeleteStatus((prev) => {
          const newStatus = { ...prev };
          delete newStatus[uploadId];
          return newStatus;
        });
      }, 2000);
    } catch (error) {
      let errorMessage = "Failed to delete upload";
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ detail?: string }>;
        errorMessage =
          axiosError.response?.data?.detail ||
          axiosError.message ||
          errorMessage;
      }
      setDeleteStatus((prev) => ({
        ...prev,
        [uploadId]: `Error: ${errorMessage}`,
      }));
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
      const response = await axios.get(`${getApiBaseUrl()}/api/uploads/`, {
        headers,
        timeout: 30000,
      });
      const uploadsData = response.data.uploads || response.data || [];
      setUploads(Array.isArray(uploadsData) ? uploadsData : []);
      setStatus("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ detail?: string }>;
        setStatus(
          `Error fetching uploads: ${
            axiosError.response?.data?.detail || axiosError.message
          }`
        );
      }
    } finally {
      setIsLoadingUploads(false);
    }
  }, []);

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

  useEffect(() => {
    if (isAuthLoading) return;
    fetchUploads();
  }, [fetchUploads, isAuthLoading]);

  if (isAuthLoading) {
    return (
      <div className="mx-auto ml-[5.3vw] bg-white/80 rounded-xl p-8">
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="h-6 w-6 animate-spin mr-2" />
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto ml-[5.3vw] bg-white/80 rounded-xl p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Data Ingestion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                <div className="space-y-4">
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
                  <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="recursive-scrape"
                        checked={recursive}
                        onChange={(e) => setRecursive(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="recursive-scrape"
                        className="text-sm font-medium text-gray-700 cursor-pointer"
                      >
                        Scrape all sub-links (recursive)
                      </label>
                    </div>
                    {recursive && (
                      <div className="ml-6 space-y-3 pt-2 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label
                              htmlFor="max-pages"
                              className="text-xs font-medium text-gray-600"
                            >
                              Max Pages (1-1000)
                            </label>
                            <input
                              type="number"
                              id="max-pages"
                              min="1"
                              max="1000"
                              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                              placeholder="100 (default)"
                              value={maxPages || ""}
                              onChange={(e) =>
                                setMaxPages(
                                  e.target.value
                                    ? parseInt(e.target.value, 10)
                                    : null
                                )
                              }
                            />
                          </div>
                          <div className="space-y-1">
                            <label
                              htmlFor="max-depth"
                              className="text-xs font-medium text-gray-600"
                            >
                              Max Depth (1-10)
                            </label>
                            <input
                              type="number"
                              id="max-depth"
                              min="1"
                              max="10"
                              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                              placeholder="5 (default)"
                              value={maxDepth || ""}
                              onChange={(e) =>
                                setMaxDepth(
                                  e.target.value
                                    ? parseInt(e.target.value, 10)
                                    : null
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

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
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {new Date(upload.created_at).toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <Button
                              onClick={() => handleDelete(upload.id)}
                              disabled={deleteStatus[upload.id]?.includes(
                                "Deleting"
                              )}
                              variant="destructive"
                              size="sm"
                            >
                              {deleteStatus[upload.id]?.includes("Deleting") ? (
                                <RefreshCw className="h-3 w-3 animate-spin" />
                              ) : (
                                <Trash2 className="h-3 w-3" />
                              )}
                            </Button>
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

        <div className="space-y-6">
          <Card className="bg-linear-to-r/shorter from-indigo-100 to-blue-100 py-4">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                📊 Upload Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>PDF files up to 10MB
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>JSON files for
                  structured data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>URLs for web content
                  scraping
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600">•</span>Recursive scraping
                  available
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
