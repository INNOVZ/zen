// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useSearchParams } from "next/navigation";
// import { DASHBOARD_CONFIG } from "@/types/dashboard";
// import { mcpApi, type IntegrationStatus } from "@/app/api/mcp";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { Calendar, Sheet, Database, ShoppingCart, Loader2 } from "lucide-react";
// import GoogleCalendarIntegration from "./GoogleCalendarIntegration";
// import GoogleSheetsIntegration from "./GoogleSheetsIntegration";
// import CRMIntegration from "./CRMIntegration";
// import ShopifyIntegration from "./ShopifyIntegration";
// import LeadCaptureSettings from "./LeadCaptureSettings";

// export default function MCPIntegrationsPage() {
//   const [integrations, setIntegrations] = useState<
//     Record<string, IntegrationStatus>
//   >({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedIntegration, setExpandedIntegration] = useState<string | null>(
//     null
//   );
//   const searchParams = useSearchParams();
//   const hasLoaded = useRef(false);

//   useEffect(() => {
//     // Check for OAuth success (always check this, even on revisit)
//     const success = searchParams?.get("success");
//     const error = searchParams?.get("error");
//     const googleProcessedFlag = sessionStorage.getItem(
//       "google_oauth_success_processed"
//     );
//     const zohoProcessedFlag = sessionStorage.getItem(
//       "zoho_oauth_success_processed"
//     );
    
//     if (success === "google_connected" && !googleProcessedFlag) {
//       sessionStorage.setItem("google_oauth_success_processed", "true");
//       // Load integrations with delay to ensure backend has processed
//       setTimeout(() => {
//         loadIntegrations();
//       }, 1000);
//     } else if (success === "zoho_connected" && !zohoProcessedFlag) {
//       sessionStorage.setItem("zoho_oauth_success_processed", "true");
//       // Load integrations with delay to ensure backend has processed
//       setTimeout(() => {
//         loadIntegrations();
//       }, 1000);
//     } else if (error) {
//       // Handle OAuth errors
//       console.error("OAuth error:", error);
//     } else if (!hasLoaded.current) {
//       // Normal load - only on first mount
//       loadIntegrations();
//       hasLoaded.current = true;
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // Empty deps - only run on mount

//   const loadIntegrations = async () => {
//     try {
//       // Only show loading on first load
//       if (!hasLoaded.current) {
//         setIsLoading(true);
//       }
//       // Use batch endpoint to get all statuses at once
//       const response = await mcpApi.getAllIntegrationStatuses();
//       const statuses: Record<string, IntegrationStatus> = {};

//       // Convert array to object for easier access
//       response.statuses.forEach((status) => {
//         statuses[status.provider] = status;
//       });

//       setIntegrations(statuses);
//     } catch (error) {
//       console.error("Failed to load integrations:", error);
//       // Don't show toast for expected errors (backend might not be running)
//       // toast.error("Failed to load integrations");
//     } finally {
//       setIsLoading(false);
//       hasLoaded.current = true;
//     }
//   };

//   const toggleIntegration = async (provider: string, enabled: boolean) => {
//     try {
//       const success = await mcpApi.toggleIntegration(provider, enabled);
//       if (success) {
//         setIntegrations((prev) => ({
//           ...prev,
//           [provider]: {
//             ...prev[provider],
//             enabled,
//           },
//         }));
//         toast.success(
//           `${provider} integration ${enabled ? "enabled" : "disabled"}`
//         );
//       } else {
//         toast.error(`Failed to ${enabled ? "enable" : "disable"} ${provider}`);
//       }
//     } catch (error) {
//       console.error(`Failed to toggle ${provider}:`, error);
//       toast.error(`Failed to toggle ${provider} integration`);
//     }
//   };

//   const integrationCards = [
//     {
//       id: "google",
//       name: "Google Services",
//       description: "Google Calendar and Google Sheets integration",
//       icon: Calendar,
//       category: "calendar",
//       providers: ["google"],
//     },
//     {
//       id: "crm",
//       name: "CRM Integration",
//       description: "Connect with HubSpot, Salesforce, Pipedrive, or Zoho CRM",
//       icon: Database,
//       category: "crm",
//       providers: ["hubspot", "salesforce", "pipedrive", "zoho"],
//     },
//     {
//       id: "shopify",
//       name: "Shopify",
//       description: "Connect your Shopify store for live product data",
//       icon: ShoppingCart,
//       category: "ecommerce",
//       providers: ["shopify"],
//     },
//     {
//       id: "lead-capture",
//       name: "Lead Capture",
//       description:
//         "Automatically capture leads from chat to Google Sheets and CRM",
//       icon: Sheet,
//       category: "sheets",
//       providers: [],
//     },
//   ];

//   if (isLoading) {
//     return (
//       <div
//         className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
//       >
//         <div className="container mx-auto p-8">
//           <div className="text-center py-12">
//             <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
//             <p>Loading integrations...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`min-h-[95vh] flex items-start ${DASHBOARD_CONFIG.CONTAINER_CLASSES}`}
//     >
//       <div className="container mx-auto p-8 space-y-6">
//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             MCP Integrations
//           </h1>
//           <p className="text-gray-600">
//             Connect your chatbot with external services for live data and
//             automation
//           </p>
//         </div>

//         {/* Integration Cards */}
//         <div className="space-y-6">
//           {/* Google Services */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <Calendar className="h-6 w-6 text-blue-600" />
//                   <div>
//                     <CardTitle>Google Services</CardTitle>
//                     <CardDescription>
//                       Google Calendar and Google Sheets integration
//                     </CardDescription>
//                   </div>
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() =>
//                     setExpandedIntegration(
//                       expandedIntegration === "google" ? null : "google"
//                     )
//                   }
//                 >
//                   {expandedIntegration === "google" ? "Collapse" : "Configure"}
//                 </Button>
//               </div>
//             </CardHeader>
//             {expandedIntegration === "google" && (
//               <CardContent className="space-y-4">
//                 <GoogleCalendarIntegration />
//                 <GoogleSheetsIntegration />
//               </CardContent>
//             )}
//           </Card>

//           {/* CRM Integration */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <Database className="h-6 w-6 text-purple-600" />
//                   <div>
//                     <CardTitle>CRM Integration</CardTitle>
//                     <CardDescription>
//                       Connect with HubSpot, Salesforce, Pipedrive, or Zoho CRM
//                     </CardDescription>
//                   </div>
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() =>
//                     setExpandedIntegration(
//                       expandedIntegration === "crm" ? null : "crm"
//                     )
//                   }
//                 >
//                   {expandedIntegration === "crm" ? "Collapse" : "Configure"}
//                 </Button>
//               </div>
//             </CardHeader>
//             {expandedIntegration === "crm" && (
//               <CardContent>
//                 <CRMIntegration />
//               </CardContent>
//             )}
//           </Card>

//           {/* Shopify Integration */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <ShoppingCart className="h-6 w-6 text-green-600" />
//                   <div>
//                     <CardTitle>Shopify</CardTitle>
//                     <CardDescription>
//                       Connect your Shopify store for live product data
//                     </CardDescription>
//                   </div>
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() =>
//                     setExpandedIntegration(
//                       expandedIntegration === "shopify" ? null : "shopify"
//                     )
//                   }
//                 >
//                   {expandedIntegration === "shopify" ? "Collapse" : "Configure"}
//                 </Button>
//               </div>
//             </CardHeader>
//             {expandedIntegration === "shopify" && (
//               <CardContent>
//                 <ShopifyIntegration />
//               </CardContent>
//             )}
//           </Card>

//           {/* Lead Capture */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <Sheet className="h-6 w-6 text-orange-600" />
//                   <div>
//                     <CardTitle>Lead Capture</CardTitle>
//                     <CardDescription>
//                       Automatically capture leads from chat conversations
//                     </CardDescription>
//                   </div>
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() =>
//                     setExpandedIntegration(
//                       expandedIntegration === "lead-capture"
//                         ? null
//                         : "lead-capture"
//                     )
//                   }
//                 >
//                   {expandedIntegration === "lead-capture"
//                     ? "Collapse"
//                     : "Configure"}
//                 </Button>
//               </div>
//             </CardHeader>
//             {expandedIntegration === "lead-capture" && (
//               <CardContent>
//                 <LeadCaptureSettings />
//               </CardContent>
//             )}
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
