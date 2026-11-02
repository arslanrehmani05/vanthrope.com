import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import ScopeAssistantModal from '@/components/common/scope-assistant-modal';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vanthrope | Operational Systems & Autonomous Agents",
  description: "Custom operational software, deterministic data pipelines, and autonomous agent systems for mid-market enterprises.",
  metadataBase: new URL("https://vanthrope.com"),
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: "https://vanthrope.com",
  },
  openGraph: {
    title: "Vanthrope | Operational Systems & Autonomous Agents",
    description: "Custom operational software, deterministic data pipelines, and autonomous agent systems for mid-market enterprises.",
    url: "https://vanthrope.com",
    siteName: "Vanthrope",
    locale: "en_US",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vanthrope.com/#organization",
      "name": "Vanthrope",
      "url": "https://vanthrope.com",
      "logo": "https://vanthrope.com/icon.svg",
      "founder": {
        "@type": "Person",
        "name": "Arslan Rehmani",
        "jobTitle": "Principal Systems Architect",
        "url": "https://arslanrehmani.com",
        "sameAs": [
          "https://github.com/arslanrehmani05",
          "https://linkedin.com/in/arslanrehmani"
        ]
      },
      "description": "High-end operational AI agency that designs, builds, and deploys custom software, deterministic data pipelines, and autonomous agent systems for mid-market enterprises."
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://vanthrope.com/#service",
      "name": "Vanthrope Operational Engineering",
      "provider": { "@id": "https://vanthrope.com/#organization" },
      "serviceType": "Operational Systems Design & Automated Agent Engineering",
      "areaServed": "Global (UK & US Operating Timezones)"
    }
  ]
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased min-h-screen selection:bg-accent-steel/20 selection:text-text-primary">
        {children}
        <ScopeAssistantModal />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
