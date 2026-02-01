import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/contexts/I18nContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const metadata: Metadata = {
  title: "Zaakiy AI | Upgrade to AI workforce",
  description: "Making the workforce better with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IT">
      <body className={`${ubuntu.variable} antialiased`}>
        <I18nProvider>
          <Toaster richColors position="top-center" />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
