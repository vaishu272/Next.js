import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Authentication App",
  description: "Clerk Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white">
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
