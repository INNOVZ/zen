import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/dashboard/layout/SideBar";
import { Toaster } from "@/components/ui/sonner";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Zentria | Console",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = true; 

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#5d7dde30] to-[#60a5fa49] p-5">
      <Sidebar />
      <Toaster />
      {isAuthenticated && <ChatWidget />}
      {/* Render ChatWidget only if authenticated */}
      {children}
    </div>
  );
}
