import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Gabal Portfolio Next.js 15",
  description: "Portfolio build with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`$e{font.className} antialiased bg-[#0d0d1f]`} 
    >
      <body className="min-h-full flex flex-col">
        <ResponsiveNavbar />
        {children}
        </body>
    </html>
  );
}
