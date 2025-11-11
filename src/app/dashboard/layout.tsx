import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import "../globals.css";
import Sidebar from "@/components/dashboard/layout/SideBar";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import ChatWidget from "@/components/ChatWidget";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Zaakiy | Console",
  description: "AI Chatbot Management Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SERVER-SIDE AUTHENTICATION CHECK
  // This ensures the dashboard layout only renders for authenticated users
  const supabase = await createClient();

  // Check authentication
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("[Dashboard Layout] Auth check:", {
    hasSession: !!session,
    userId: session?.user?.id,
  });

  // If no session, redirect to login (server-side protection)
  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <SubscriptionProvider>
      <div className="min-h-screen">
        <Sidebar />
        <Toaster />
        {children}
        <ClientOnlyWrapper>
          <ChatWidget position="bottom-right" showChatbotSelector={true} />
        </ClientOnlyWrapper>
      </div>
    </SubscriptionProvider>
  );
}
