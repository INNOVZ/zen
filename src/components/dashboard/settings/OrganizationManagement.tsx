"use client";

import { useState, useEffect } from "react";
import {
  organizationApi,
  type UpdateOrganizationRequest,
} from "@/app/api/routes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { chatbotApi, conversationApi } from "@/app/api/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import {
  RefreshCw,
  Phone,
  Mail,
  Briefcase,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface OrganizationInfo {
  user: {
    email: string;
  };
  organization: {
    name: string;
    email: string;
    plan_id: string | null;
    contact_phone?: string;
    business_type?: string;
  };
}
const supabase = createClient();

export default function OrganizationManagement() {
  const [formData, setFormData] = useState<UpdateOrganizationRequest>({
    name: "",
    email: "",
    contact_phone: "",
    business_type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRAGLoading, setIsRAGLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingInfo, setIsLoadingInfo] = useState(true);
  const [organizationInfo, setOrganizationInfo] =
    useState<OrganizationInfo | null>(null);

  const [testStatus, setTestStatus] = useState<{
    auth: boolean;
    chatbots: boolean;
    vectors: boolean;
    message?: string;
  }>({
    auth: false,
    chatbots: false,
    vectors: false,
  });

  // Load current organization info
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        await loadOrganizationInfo();
      } catch (error) {
        if (mounted) {
          console.error("Error loading organization info:", error);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const loadOrganizationInfo = async () => {
    try {
      setIsLoadingInfo(true);
      const info = await organizationApi.getOrganizationInfo();
      setOrganizationInfo(info);

      // Populate form with current data
      setFormData({
        name: info.organization.name || "",
        email: info.organization.email || info.user.email || "", // Use organization email, fallback to user email
        contact_phone: info.organization.contact_phone || "",
        business_type: info.organization.business_type || "",
      });
    } catch (error) {
      console.error("Failed to load organization info:", error);
      toast.error("Failed to load organization information");
    } finally {
      setIsLoadingInfo(false);
    }
  };

  const testConnections = async () => {
    setIsRAGLoading(true);
    setError(null);

    try {
      // Test 1: Authentication - Use Supabase token
      const token = await getSupabaseToken();

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      console.log("Testing with token:", token.substring(0, 20) + "...");

      const authTest = await fetch("http://localhost:8001/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const authStatus = authTest.ok;
      console.log("Auth test result:", authStatus);

      // Test 2: Chatbots available
      let chatbotsStatus = false;
      let chatbots: unknown[] = [];

      if (authStatus) {
        try {
          console.log("Testing chatbots endpoint...");
          chatbots = await chatbotApi.getChatbots();
          console.log("Chatbots response:", chatbots);
          chatbotsStatus = Array.isArray(chatbots) && chatbots.length > 0;
        } catch (e) {
          console.error("Chatbot test error:", e);
          // Don't fail the entire test - continue with vector test
        }
      }

      // Test 3: Vector search (send a test message)
      let vectorStatus = false;
      if (authStatus) {
        // Test vector even if no chatbots configured
        try {
          console.log("Testing vector search...");
          const testResponse = await conversationApi.sendMessage(
            "Test message to check if vectors are working"
          );
          console.log("Vector test response:", testResponse);
          vectorStatus = !!testResponse.response;
        } catch (e) {
          console.error("Vector test error:", e);
        }
      }

      setTestStatus({
        auth: authStatus,
        chatbots: chatbotsStatus,
        vectors: vectorStatus,
        message: vectorStatus
          ? "All systems operational!"
          : authStatus
          ? "Authentication successful, but some services need attention."
          : "Authentication failed. Please check your login status.",
      });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Error connecting to the backend. Please check the server is running."
      );
      console.error("Test connections error:", err);
    } finally {
      setIsRAGLoading(false); // ✅ Fixed: This should be false
    }
  };

  // Helper function to get Supabase token
  const getSupabaseToken = async (): Promise<string | null> => {
    const { data } = await supabase.auth.getSession();
    return data.session?.access_token || null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await organizationApi.updateOrganization(formData);
      toast.success(response.message);
      console.log("Organization updated:", response);

      // Reload organization info to get updated data
      await loadOrganizationInfo();
    } catch (error) {
      console.error("Failed to update organization:", error);
      toast.error("Failed to update organization. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingInfo) {
    return (
      <div className="space-y-6 h-full w-full">
        <div className="bg-color-gradient p-8 rounded-t-xl">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded w-64 mb-2"></div>
            <div className="h-4 bg-white/20 rounded w-32"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 h-full w-full">
      {/* Current Organization Info */}
      <header className="w-full bg-color-gradient p-8 rounded-t-xl">
        {organizationInfo ? (
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl text-white font-bold">
                {organizationInfo.organization.name || "No Organization"}
              </h1>
              <p className="text-white mt-1 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {organizationInfo.organization.business_type ||
                  "No business type set"}
              </p>
            </div>
            <div
              className="flex gap-2"
              role="group"
              aria-label="Primary actions"
            >
              <Button variant="outline">
                <Mail className="h-4 w-4" />
                {organizationInfo.organization.email}
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4" />
                {organizationInfo.organization.contact_phone}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-white">
            <h1 className="text-3xl font-bold">Organization Management</h1>
            <p className="mt-1">Unable to load organization information</p>
          </div>
        )}
      </header>

      {/* Update Organization Form */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Update Organization</CardTitle>
            <CardDescription>
              Update your organization details including name, email, contact
              phone, and business type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Organization Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter organization name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Organization Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter organization email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact_phone">Contact Phone</Label>
                <Input
                  id="contact_phone"
                  type="tel"
                  value={formData.contact_phone || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, contact_phone: e.target.value })
                  }
                  placeholder="Enter contact phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business_type">Business Type</Label>
                <Input
                  id="business_type"
                  type="text"
                  value={formData.business_type || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, business_type: e.target.value })
                  }
                  placeholder="Enter business type (e.g., SaaS, E-commerce, etc.)"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update Organization"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={loadOrganizationInfo}
                  disabled={isLoadingInfo}
                >
                  <RefreshCw
                    className={`h-4 w-4 mr-2 ${
                      isLoadingInfo ? "animate-spin" : ""
                    }`}
                  />
                  Refresh
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">RAG Pipeline Test</h2>

          {isRAGLoading ? (
            <div className="flex items-center justify-center p-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">Connection Error</p>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {testStatus.auth ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span className="font-medium">Authentication</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                    /api/auth/me
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {testStatus.chatbots ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span className="font-medium">Chatbot Configuration</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                    /api/chat/chatbots
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {testStatus.vectors ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span className="font-medium">Vector Search & RAG</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                    /api/chat/conversation
                  </span>
                </div>
              </div>

              <div
                className={`mt-6 p-3 rounded-md ${
                  testStatus.auth && testStatus.chatbots && testStatus.vectors
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-yellow-50 text-yellow-800 border border-yellow-200"
                }`}
              >
                <p className="font-medium">{testStatus.message}</p>
              </div>

              <div className="mt-6">
                <Button onClick={testConnections} size="sm">
                  Re-run Tests
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
