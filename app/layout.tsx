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
  title: "Vanthrope | Operational Systems Firm",
  description: "Vanthrope audits, designs, and builds custom software, automations, and AI agents that run the unglamorous parts of business operations, kept safe and measurable.",
  metadataBase: new URL("https://vanthrope.com"),
  alternates: {
    canonical: "https://vanthrope.com",
  },
  openGraph: {
    title: "Vanthrope | Operational Systems Firm",
    description: "Custom software, automations, and agents that run unglamorous business operations, kept safe and measurable.",
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
      "description": "Operational systems firm designing and building custom software, automations, and AI agents.",
      "founder": {
        "@type": "Person",
        "name": "Arslan Rehmani",
        "jobTitle": "Founder & Systems Architect"
      }
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
