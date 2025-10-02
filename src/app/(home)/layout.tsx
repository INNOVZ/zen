import type { Metadata } from "next";
import Nav from "@/components/dashboard/layout/NavBar";

export const metadata: Metadata = {
  title: "Zentria AI | Upgrade to AI workforce",
  description: "Making the workforce better with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", function () {
          console.log("Chatbot script is being executed on home page");
          var script = document.createElement('script');
          script.src = 'http://localhost:3000/chat-widget.js';
          script.setAttribute('data-chatbot-id', '97ae5ea1-40a1-4719-a39f-bc965cc4d4c1');
          script.setAttribute('data-api-url', 'http://localhost:8001');
          document.body.appendChild(script);
        });
         `,
        }}
      />
    </>
  );
}
