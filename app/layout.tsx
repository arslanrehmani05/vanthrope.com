import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vanthrope | Operational AI Systems",
  description: "Vanthrope designs, builds, and deploys custom AI agent systems that replace manual operations permanently for mid-market businesses.",
  metadataBase: new URL("https://vanthrope.com"),
  openGraph: {
    title: "Vanthrope | Operational AI Systems",
    description: "Vanthrope designs, builds, and deploys custom AI agent systems that replace manual operations permanently.",
    url: "https://vanthrope.com",
    siteName: "Vanthrope",
    locale: "en_US",
    type: "website",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-bg-primary text-text-primary antialiased min-h-screen selection:bg-accent-steel/20 selection:text-text-primary">
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
