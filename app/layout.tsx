import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/layout/Navbar/ResponsiveNavbar";
import ScrollTop from "@/components/layout/ScrollTop";
import { siteConfig } from "@/config/site.config";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.brand,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} antialiased bg-[#0d0d1f]`}>
      <body className="min-h-full flex flex-col">
        <ResponsiveNavbar />
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}