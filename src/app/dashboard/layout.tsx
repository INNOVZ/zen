import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/dashboard/layout/SideBar";
import { Toaster } from "@/components/ui/sonner";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import ChatWidget from "@/components/ChatWidget";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
export const metadata: Metadata = {
  title: "Zentria | Console",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
