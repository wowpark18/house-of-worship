import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://house-of-worship-orcin.vercel.app"),
  title: "House Of Worship Church",
  description: "2026 Hybrid Minimalism Church - Return to Basic",
  openGraph: {
    title: "House Of Worship Church",
    description: "본질로의 회귀. 말씀과 공동체에 집중하는 곳.",
    url: "https://house-of-worship-orcin.vercel.app",
    siteName: "House Of Worship",
    locale: "ko_KR",
    type: "website",
  },
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
