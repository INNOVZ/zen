"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { subscriptionApi } from "@/app/api/subscription";
import { toast } from "sonner";
import { Users, Building, Plus, RefreshCw, Info, Building2, Database } from "lucide-react";
import type {
  OrganizationSignupRequest,
  SignupRequest,
} from "@/app/api/types/subscription";

type RecentOnboardingRecord = {
  subscription_id: string;
  entity_id: string;
  entity_type: "user" | "organization";
  display_name: string;
  email: string;
  organization_name?: string | null;
  plan: string;
  status: string;
  created_at: string;
  billing_cycle_end?: string | null;
  tokens_used_this_month: number;
  monthly_token_limit: number;
  usage_percentage: number;
  contact_phone?: string | null;
  business_type?: string | null;
  last_login?: string | null;
};

interface AdminUserManagementProps {
  recentOnboarding: RecentOnboardingRecord[];
  isRefreshing: boolean;
  onRefresh: () => Promise<void>;
}

const formatDate = (value?: string | null) => {
  if (!value) return "Never";

  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
};

const statusVariantClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-50 text-green-700 border-green-200";
    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    case "past_due":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

export const AdminUserManagement = ({
  recentOnboarding,
  isRefreshing,
  onRefresh,
}: AdminUserManagementProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const [formData, setFormData] = useState<Partial<SignupRequest | OrganizationSignupRequest>>({
    entity_type: "organization",
    selected_plan: "basic",
  });
  const [selectedPlans, setSelectedPlans] = useState<Record<string, "basic" | "professional" | "enterprise">>({});
  const [actionLoading, setActionLoading] = useState<Record<string, string | null>>({});

  const userRecords = recentOnboarding.filter((record) => record.entity_type === "user");
  const organizationRecords = recentOnboarding.filter(
    (record) => record.entity_type === "organization"
  );

  const resolveSelectedPlan = (record: RecentOnboardingRecord) =>
    selectedPlans[record.subscription_id] ||
    (record.plan as "basic" | "professional" | "enterprise");

  const getActiveAction = (subscriptionId: string) =>
    actionLoading[subscriptionId] ?? null;

  const runSubscriptionAction = async (
    subscriptionId: string,
    action: string,
    handler: () => Promise<unknown>,
    successMessage: string
  ) => {
    setActionLoading((current) => ({ ...current, [subscriptionId]: action }));
    try {
      await handler();
      toast.success(successMessage);
      await onRefresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Subscription action failed.";
      toast.error(message);
    } finally {
      setActionLoading((current) => ({ ...current, [subscriptionId]: null }));
    }
  };

  const handleCreateUser = async () => {
    if (!formData.full_name || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (
      formData.entity_type === "organization" &&
      !(formData as Partial<OrganizationSignupRequest>).organization_name?.trim()
    ) {
      toast.error("Organization name is required for organization onboarding");
      return;
    }

    // Validate password strength
    const password = formData.password!;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);

    if (!hasLowercase || !hasUppercase || !hasNumbers || password.length < 8) {
      toast.error(
        "Password must be at least 8 characters and contain uppercase, lowercase, and numbers"
      );
      return;
    }

    // Validate email format - more strict validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email!)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Additional validation for common invalid domains
    const invalidDomains = ["example.com", "test.com", "localhost"];
    const emailDomain = formData.email!.split("@")[1]?.toLowerCase();
    if (invalidDomains.includes(emailDomain)) {
      toast.error(
        "Please use a real email address (not example.com, test.com, etc.)"
      );
      return;
    }

    setIsCreating(true);
    try {
      let signupData: SignupRequest | OrganizationSignupRequest;

      if (formData.entity_type === "organization") {
        signupData = {
          entity_type: "organization",
          full_name: formData.full_name!,
          email: formData.email!,
          organization_name: (formData as Partial<OrganizationSignupRequest>)
            .organization_name!,
          contact_phone: (formData as Partial<OrganizationSignupRequest>)
            .contact_phone,
          business_type: (formData as Partial<OrganizationSignupRequest>)
            .business_type,
          selected_plan: formData.selected_plan as
            | "basic"
            | "professional"
            | "enterprise",
          password: formData.password!,
        } as OrganizationSignupRequest;
      } else {
        signupData = {
          entity_type: "user",
          full_name: formData.full_name!,
          email: formData.email!,
          selected_plan: formData.selected_plan as
            | "basic"
            | "professional"
            | "enterprise",
          password: formData.password!,
        };
      }

      const response = await subscriptionApi.signup(signupData);

      if (response.email_confirmation_required) {
        toast.success(
          `Successfully created ${formData.entity_type} account! A confirmation email has been sent to ${response.email_sent_to}. The user must confirm their email before they can login.`,
          { duration: 8000 }
        );
      } else {
        toast.success(`Successfully created ${formData.entity_type} account!`);
      }

      setFormData({
        entity_type: "organization",
        selected_plan: "basic",
      });

      await onRefresh();
    } catch (error) {
      console.error("Failed to create user:", error);

      // Extract specific error message from the error
      let errorMessage = "Failed to create user account";

      if (error instanceof Error) {
        const errorText = error.message;

        // Handle specific error cases
        if (
          errorText.includes("Request timed out") ||
          errorText.includes("timeout")
        ) {
          errorMessage =
            "Request timed out. Please check if the backend server is running.";
        } else if (
          errorText.includes("Failed to fetch") ||
          errorText.includes("NetworkError")
        ) {
          errorMessage =
            "Cannot connect to server. Please check if the backend is running on port 8001.";
        } else if (
          errorText.includes("Email address") &&
          errorText.includes("invalid")
        ) {
          errorMessage = "Please enter a valid email address";
        } else if (
          errorText.includes("Password should contain") ||
          errorText.includes("Password must be")
        ) {
          errorMessage =
            "Password must be at least 8 characters and contain uppercase, lowercase, and numbers";
        } else if (
          errorText.includes("User already registered") ||
          errorText.includes("already registered")
        ) {
          errorMessage = "This email address is already registered";
        } else if (errorText.includes("Onboarding process failed")) {
          errorMessage =
            "Account creation failed. Please check your information and try again.";
        } else if (errorText.includes("Failed to create user account")) {
          errorMessage = "Failed to create user account. Please try again.";
        } else {
          // Use the specific error message if available
          errorMessage = errorText;
        }
      }

      toast.error(errorMessage);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Onboarding Operations</h1>
          <p className="text-gray-600">
            Create new accounts and review the most recent user, organization, and subscription records.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Info className="mr-1 h-3.5 w-3.5" />
              Admin-only onboarding
            </Badge>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              <Building2 className="mr-1 h-3.5 w-3.5" />
              Organization profile stored
            </Badge>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
              <Database className="mr-1 h-3.5 w-3.5" />
              Feeds chatbot and dashboard data
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onRefresh} disabled={isRefreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button
            onClick={() => setShowCreateForm((current) => !current)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            {showCreateForm ? "Hide Form" : "Open Onboarding Form"}
          </Button>
        </div>
      </div>

      {/* Create User Form Modal */}
      {showCreateForm && (
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle>Create New User/Organization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="entity_type">Account Type</Label>
                <Select
                  value={formData.entity_type}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      entity_type: value as "user" | "organization",
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="user">Individual User</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">
                  Organization onboarding includes the business profile used across the dashboard and chatbot setup.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="selected_plan">Subscription Plan</Label>
                <Select
                  value={formData.selected_plan}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      selected_plan: value as
                        | "basic"
                        | "professional"
                        | "enterprise",
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Plan</SelectItem>
                    <SelectItem value="professional">
                      Professional Plan
                    </SelectItem>
                    <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  value={formData.full_name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  placeholder="Enter full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password || ""}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter password for login"
              />
              <p className="text-xs text-gray-500">
                Must be at least 8 characters with uppercase, lowercase, and
                numbers
              </p>
            </div>

            {formData.entity_type === "organization" && (
              <>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Organization name, contact number, and business type are stored with the organization record and reused by downstream chatbot and dashboard views.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization_name">
                      Organization Name *
                    </Label>
                    <Input
                      id="organization_name"
                      value={
                        (formData as Partial<OrganizationSignupRequest>)
                          .organization_name || ""
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization_name: e.target.value,
                        })
                      }
                      placeholder="Enter organization name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact_phone">Contact Phone</Label>
                    <Input
                      id="contact_phone"
                      value={
                        (formData as Partial<OrganizationSignupRequest>)
                          .contact_phone || ""
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_phone: e.target.value,
                        })
                      }
                      placeholder="Enter contact phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business_type">Business Type</Label>
                  <Input
                    id="business_type"
                    value={
                      (formData as Partial<OrganizationSignupRequest>)
                        .business_type || ""
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        business_type: e.target.value,
                      })
                    }
                    placeholder="e.g., Technology, Healthcare, Finance"
                  />
                </div>
              </>
            )}

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowCreateForm(false)}
                disabled={isCreating}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateUser}
                disabled={isCreating}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isCreating ? "Creating..." : "Create Account"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Onboarding Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {recentOnboarding.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>
                    No onboarding records yet. Create your first user or organization above.
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Usage</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOnboarding.map((record) => (
                      <TableRow key={record.subscription_id}>
                        <TableCell>
                          <div className="font-medium">{record.display_name}</div>
                          <div className="text-xs text-gray-500">{record.email}</div>
                          {record.organization_name ? (
                            <div className="text-xs text-gray-500">
                              Org: {record.organization_name}
                            </div>
                          ) : null}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {record.entity_type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="capitalize">{record.plan}</div>
                          {record.business_type ? (
                            <div className="text-xs text-gray-500">{record.business_type}</div>
                          ) : null}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusVariantClass(record.status)}>
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {record.tokens_used_this_month.toLocaleString()} /{" "}
                            {record.monthly_token_limit.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            {record.usage_percentage}% used
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>{formatDate(record.created_at)}</div>
                          {record.last_login ? (
                            <div className="text-xs text-gray-500">
                              Last login {formatDate(record.last_login)}
                            </div>
                          ) : null}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Select
                              value={resolveSelectedPlan(record)}
                              onValueChange={(value) =>
                                setSelectedPlans((current) => ({
                                  ...current,
                                  [record.subscription_id]: value as
                                    | "basic"
                                    | "professional"
                                    | "enterprise",
                                }))
                              }
                            >
                              <SelectTrigger size="sm" className="w-[136px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                                <SelectItem value="professional">Professional</SelectItem>
                                <SelectItem value="enterprise">Enterprise</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={getActiveAction(record.subscription_id) !== null}
                              onClick={() =>
                                runSubscriptionAction(
                                  record.subscription_id,
                                  "plan",
                                  () =>
                                    subscriptionApi.adminChangeSubscriptionPlan(
                                      record.subscription_id,
                                      resolveSelectedPlan(record)
                                    ),
                                  `Plan updated for ${record.display_name}.`
                                )
                              }
                            >
                              Apply
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={getActiveAction(record.subscription_id) !== null}
                              onClick={() =>
                                runSubscriptionAction(
                                  record.subscription_id,
                                  "reset",
                                  () =>
                                    subscriptionApi.adminResetSubscriptionCycle(
                                      record.subscription_id
                                    ),
                                  `Billing cycle reset for ${record.display_name}.`
                                )
                              }
                            >
                              Reset
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              disabled={
                                getActiveAction(record.subscription_id) !== null ||
                                record.status.toLowerCase() === "cancelled"
                              }
                              onClick={() =>
                                runSubscriptionAction(
                                  record.subscription_id,
                                  "cancel",
                                  () =>
                                    subscriptionApi.adminCancelSubscription(
                                      record.subscription_id
                                    ),
                                  `Subscription cancelled for ${record.display_name}.`
                                )
                              }
                            >
                              Cancel
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              {userRecords.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No individual users found.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userRecords.map((record) => (
                      <TableRow key={record.subscription_id}>
                        <TableCell>
                          <div className="font-medium">{record.display_name}</div>
                          <div className="text-xs text-gray-500">{record.email}</div>
                        </TableCell>
                        <TableCell className="capitalize">{record.plan}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusVariantClass(record.status)}>
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(record.last_login)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>

            <TabsContent value="organizations" className="space-y-4">
              {organizationRecords.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Building className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No organizations found.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Organization</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {organizationRecords.map((record) => (
                      <TableRow key={record.subscription_id}>
                        <TableCell>
                          <div className="font-medium">{record.display_name}</div>
                          <div className="text-xs text-gray-500">{record.email}</div>
                        </TableCell>
                        <TableCell>
                          <div>{record.contact_phone || "No phone"}</div>
                          <div className="text-xs text-gray-500">
                            {record.business_type || "No business type"}
                          </div>
                        </TableCell>
                        <TableCell className="capitalize">{record.plan}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusVariantClass(record.status)}>
                            {record.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUserManagement;
