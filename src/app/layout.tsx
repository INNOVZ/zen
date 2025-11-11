import type { Metadata } from "next";
import { Codystar, Ubuntu, Doto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
const cody = Codystar({
  subsets: ["latin"],
  variable: "--font-cody",
  display: "swap",
  weight: "400",
  style: "normal",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["400", "500", "700"],
});
const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${ubuntu.variable} ${cody.variable} ${doto.variable} antialiased`}
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
