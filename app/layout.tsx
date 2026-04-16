import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "S-1 Ventures — GTM Operating Partner for Venture-Backed Software Companies",
  description:
    "S-1 builds the GTM foundation your next VP Sales needs to succeed. Value framework, ICP, sales process, pipeline systems — built in parallel with the revenue push.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
