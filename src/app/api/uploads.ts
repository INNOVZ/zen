// Knowledge Base Management API
import { UploadFile } from "@/types/schemaTypes";
import { fetchWithAuth, getAuthInfo } from "@/app/api/auth";
import { apiCache, createCacheKey } from "@/utils/cache";
import { TokenHandler, RetrainResponse } from "./types";
import { API_BASE_URL } from "@/config/api";

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
        console.warn("Unexpected uploads response structure:", data);
        result = [];
      }

      // Cache for 1 minute (uploads change more frequently)
      apiCache.set(cacheKey, result, 1 * 60 * 1000);

      return result;
    } catch (error) {
      console.error("Error fetching uploads:", error);
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

    console.log(
      `📤 Uploading file: ${file.name} (${file.size} bytes) as ${type}`
    );

    const response = await fetch(`${API_BASE_URL}/api/uploads/${type}`, {
      method: "POST",
      headers,
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed (${response.status}): ${errorText}`);
    }

    const result = await response.json();
    console.log(`✅ File uploaded successfully:`, result);
    return result;
  },

  uploadFileWithTokenHandling: async (
    file: File,
    type: string,
    tokenHandler?: TokenHandler
  ): Promise<UploadFile | null> => {
    if (!tokenHandler) {
      return uploadsApi.uploadFile(file, type);
    }

    return tokenHandler.wrapApiCall(
      () => uploadsApi.uploadFile(file, type),
      'document_upload',
      undefined,
      file.size
    );
  },

  uploadUrl: async (url: string): Promise<UploadFile> => {
    console.log(`🔗 Uploading URL: ${url}`);
    return fetchWithAuth("/api/uploads/url", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
  },

  uploadJson: async (
    jsonData: object,
    filename: string = "training-data.json"
  ): Promise<UploadFile> => {
    console.log(`📋 Uploading JSON data: ${filename}`);

    // Convert JSON object to File
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const file = new File([blob], filename, { type: "application/json" });

    return uploadsApi.uploadFile(file, "json");
  },

  deleteUpload: async (uploadId: string): Promise<void> => {
    console.log(`🗑️ Deleting upload: ${uploadId}`);
    await fetchWithAuth(`/api/uploads/${uploadId}`, {
      method: "DELETE",
    });
  },

  reprocessUpload: async (uploadId: string): Promise<RetrainResponse> => {
    console.log(`🔄 Reprocessing upload: ${uploadId}`);
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
