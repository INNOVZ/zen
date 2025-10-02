/**
 * Uploads API Module
 * Handles all file upload and knowledge base management operations
 */

import { BASE_URL, fetchWithAuth, getAuthInfo, apiCache, createCacheKey } from "@/api/base";
import { createLogger } from "@/utils/logger";
import type { UploadFile, RetrainResponse } from "@/api/types/index";

const log = createLogger('UPLOADS_API');

export const uploadsApi = {
  getUploads: async (): Promise<UploadFile[]> => {
    const cacheKey = createCacheKey("/api/uploads");

    // Check cache first
    const cached = apiCache.get<UploadFile[]>(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort(new Error("Request timeout after 8 seconds"));
      }, 8000);

      const data = await fetchWithAuth("/api/uploads", {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let result: UploadFile[] = [];
      if (Array.isArray(data)) {
        result = data;
      } else if (data.uploads && Array.isArray(data.uploads)) {
        result = data.uploads;
      } else if (data.data && Array.isArray(data.data)) {
        result = data.data;
      } else {
        log.warn("Unexpected uploads response structure", { data });
        result = [];
      }

      // Cache for 1 minute (uploads change more frequently)
      apiCache.set(cacheKey, result, 1 * 60 * 1000);

      return result;
    } catch (error) {
      log.error("Error fetching uploads", error);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timed out. Please try again.");
      }
      throw error;
    }
  },

  uploadFile: async (file: File, type: string): Promise<UploadFile> => {
    const { token, userId, orgId } = await getAuthInfo();

    const formData = new FormData();
    formData.append("file", file);

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      "X-User-ID": userId,
    };

    if (orgId) {
      headers["X-Org-ID"] = orgId;
    }

    log.info("Uploading file", {
      filename: file.name,
      size: file.size,
      type,
    });

    const response = await fetch(`${BASE_URL}/api/uploads/${type}`, {
      method: "POST",
      headers,
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed (${response.status}): ${errorText}`);
    }

    const result = await response.json();
    log.info("File uploaded successfully", { result });
    return result;
  },

  uploadUrl: async (url: string): Promise<UploadFile> => {
    log.info("Uploading URL", { url });
    return fetchWithAuth("/api/uploads/url", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
  },

  uploadJson: async (
    jsonData: object,
    filename: string = "training-data.json"
  ): Promise<UploadFile> => {
    log.info("Uploading JSON data", { filename });

    // Convert JSON object to File
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const file = new File([blob], filename, { type: "application/json" });

    return uploadsApi.uploadFile(file, "json");
  },

  deleteUpload: async (uploadId: string): Promise<void> => {
    log.info("Deleting upload", { uploadId });
    await fetchWithAuth(`/api/uploads/${uploadId}`, {
      method: "DELETE",
    });
  },

  reprocessUpload: async (uploadId: string): Promise<RetrainResponse> => {
    log.info("Reprocessing upload", { uploadId });
    return fetchWithAuth(`/api/uploads/${uploadId}/reprocess`, {
      method: "POST",
    });
  },

  getUploadStatus: async (
    uploadId: string
  ): Promise<{
    id: string;
    status: string;
    progress?: number;
    error_message?: string;
    processed_at?: string;
  }> => {
    return fetchWithAuth(`/api/uploads/${uploadId}/status`);
  },
};
