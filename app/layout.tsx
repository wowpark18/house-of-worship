import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Of Worship Church",
  description: "2026 Hybrid Minimalism Church - Return to Basic",
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
