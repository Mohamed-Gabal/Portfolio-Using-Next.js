import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ScrollTop from "@/components/layout/ScrollTop";
import { siteConfig } from "@/config/site.config";
import Nav from "@/components/layout/Navbar/Nav";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Get the current locale determined by the proxy/middleware from URL
  const locale = await getLocale();

  // Get the translation messages (en.json or ar.json) for the current locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${font.className} antialiased bg-[#0d0d1f]`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
          <ScrollTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
