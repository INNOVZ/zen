import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/dashboard/layout/SideBar";
import MobileBottomMenu from "@/components/dashboard/layout/MobileBottomMenu";
import FloatingDock from "@/components/dashboard/layout/FloatingDock";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import ChatWidget from "@/components/ChatWidget";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Zaakiy | Console",
  description: "AI Chatbot Management Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <div className="min-h-screen bg-[#5d7dde1b] backdrop-blur-xl p-4 md:p-4 pb-24 md:pb-4">
          <Sidebar />
          <FloatingDock />
          <MobileBottomMenu />
          <Toaster />
          {children}
          <ClientOnlyWrapper>
            <ChatWidget position="bottom-right" showChatbotSelector={true} />
          </ClientOnlyWrapper>
        </div>
      </SubscriptionProvider>
    </AuthProvider>
  );
}
