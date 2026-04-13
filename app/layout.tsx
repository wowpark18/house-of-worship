import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.howchurch.com.au"),
  title: "House Of Worship Church",
  description: "다윗의 장막과 같은 하나님의 임재를 갈망하는 예배의 집.",
  keywords: [
    "뉴카슬 한인교회",
    "뉴캐슬교회",
    "하우스 오브 워십",
    "하우처치",
    "하우교회",
    "HOW처치",
    "HOW교회",
    "howchurch",
    "House of Worship",
    "하우",
    "House of Worship Church",
  ],
  openGraph: {
    title: "House Of Worship Church",
    description: "다윗의 장막과 같은 하나님의 임재를 갈망하는 예배의 집.",
    url: "https://www.howchurch.com.au",
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
