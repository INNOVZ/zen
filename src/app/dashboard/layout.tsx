import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import "../globals.css";
import Sidebar from "@/components/dashboard/layout/SideBar";
import { Toaster } from "@/components/ui/sonner";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import ChatWidget from "@/components/ChatWidget";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

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
  const cookieStore = await cookies();

  // Use the updated non-deprecated Supabase SSR API
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );

  // Check authentication
  const {
    data: { session },
  } = await supabase.auth.getSession();

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
