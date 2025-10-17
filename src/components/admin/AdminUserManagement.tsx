"use client";

import React, { useState } from "react";
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
import { subscriptionApi } from "@/app/api/subscription";
import { toast } from "sonner";
import { Users, Building, Plus } from "lucide-react";
import type {
  OrganizationSignupRequest,
  SignupRequest,
} from "@/types/subscription";

// interface User {
//   id: string;
//   full_name: string;
//   email: string;
//   entity_type: "user" | "organization";
//   organization_name?: string;
//   plan: string;
//   created_at: string;
//   status: "active" | "inactive";
// }

export const AdminUserManagement = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState<Partial<SignupRequest>>({
    entity_type: "user",
    selected_plan: "basic",
  });

  const handleCreateUser = async () => {
    if (!formData.full_name || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
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
      let signupData: SignupRequest;

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
        };
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

      setShowCreateForm(false);
      setFormData({
        entity_type: "user",
        selected_plan: "basic",
      });

      // Refresh users list
      // await loadUsers();
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
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-gray-600">Manage users and organizations</p>
        </div>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create User
        </Button>
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
                    <SelectItem value="user">Individual User</SelectItem>
                    <SelectItem value="organization">Organization</SelectItem>
                  </SelectContent>
                </Select>
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
          <CardTitle>All Users & Organizations</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>
                  No users found. Create your first user or organization above.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No individual users found.</p>
              </div>
            </TabsContent>

            <TabsContent value="organizations" className="space-y-4">
              <div className="text-center py-8 text-gray-500">
                <Building className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No organizations found.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
