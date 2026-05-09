import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "StakUp — AI Agency",
  description:
    "StakUp designs and deploys custom AI agents, automation pipelines, and intelligent integrations that save time, cut costs, and unlock new growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg-primary text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
