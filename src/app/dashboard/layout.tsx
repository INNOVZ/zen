import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/dashboard/layout/SideBar";
import MobileBottomMenu from "@/components/dashboard/layout/MobileBottomMenu";
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
  return (
    <SubscriptionProvider>
      <div className="min-h-screen bg-linear-to-r/shorter from-slate-300 to-slate-300 p-4 md:p-4 pb-24 md:pb-4">
        <Sidebar />
        <MobileBottomMenu />
        <Toaster />
        {children}
        <ClientOnlyWrapper>
          <ChatWidget position="bottom-right" showChatbotSelector={true} />
        </ClientOnlyWrapper>
      </div>
    </SubscriptionProvider>
  );
}
