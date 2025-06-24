import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BgPhoto from "@/components/effect/BgPhoto";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "코흐 | 포트폴리오",
  description: "프론트엔드 개발자 박형석입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black`}>
        <div id="top" className="absolute top-0" />
        <BgPhoto />
        {children}
      </body>
    </html>
  );
}
