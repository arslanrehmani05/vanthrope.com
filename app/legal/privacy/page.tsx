import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import { getPlaceholder } from '@/lib/truth-gate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy | Vanthrope',
  description: 'UK GDPR and EU compliant privacy policy and cookie disclosure. Transparent tracking, zero unauthorized marketing, and strict data retention limits.',
};

export default function PrivacyPolicyPage() {
  const legalEntity = getPlaceholder('LEGAL_ENTITY');

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color text-left">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              LEGAL GOVERNANCE
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight mb-8">
              Privacy & Cookie Policy
            </h1>
            <div className="text-xs font-mono text-text-subtle mb-12">
              Last Updated: 2026-11-02 · UK GDPR & EU Compliance Ready
            </div>

            <div className="space-y-8 text-sm text-text-muted leading-relaxed font-normal">
              
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  1. Fundamental Principles
                </h2>
                <p>
                  Vanthrope operates as a specialized operational systems firm. We do not sell user data, we do not operate advertising retargeting pixels, and we do not use client operational data to train external public artificial intelligence models.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  2. Data Collected & Retention
                </h2>
                <p>
                  We collect information voluntarily submitted through our intake forms (name, corporate email, company, and operational descriptions). Diagnostic tools (such as the Spreadsheet Reality Check) process files strictly client-side within your browser—zero bytes of file content are uploaded to our servers. Intake data is retained for 30 days for inquiry follow-up and deleted upon request.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  3. Cookies & Analytics
                </h2>
                <p>
                  We use privacy-friendly Google Analytics (GA4) strictly for anonymous aggregated performance metrics. Analytics cookies are deployed only where consent is granted. No third-party marketing tracking cookies are loaded.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  4. Subprocessors
                </h2>
                <p>
                  Our primary hosting and database infrastructure is provided by Vercel Inc. and Supabase Inc. (AWS). Data transfers operate under Standard Contractual Clauses (SCCs) and Data Processing Agreements.
                </p>
              </div>

              {legalEntity && (
                <div className="p-6 bg-bg-secondary border border-border-color space-y-2 text-xs font-mono">
                  <h3 className="font-bold text-text-primary uppercase">Registered Entity Details</h3>
                  <p>{legalEntity}</p>
                </div>
              )}

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  5. Contact for Data Protection
                </h2>
                <p>
                  To exercise your rights to access, rectification, or deletion under the UK Data Protection Act 2018 or GDPR, contact <span className="font-mono text-accent-steel">privacy@vanthrope.com</span>.
                </p>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
