import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvision Media | Digital Brilliance Delivered",
  description: "Empowering businesses to thrive and succeed through strategic marketing insights and personalized solutions. Your trusted agency partner.",
  keywords: ["digital marketing agency", "SEO", "Google Ads", "Social Media marketing", "Email Marketing", "Lead Generation"],
  openGraph: {
    title: "Alvision Media | Digital Brilliance Delivered",
    description: "Empowering businesses to thrive and succeed through strategic marketing insights and personalized solutions.",
    type: "website",
    locale: "en_US",
    url: "https://alvisionmedia.com",
    siteName: "Alvision Media",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
