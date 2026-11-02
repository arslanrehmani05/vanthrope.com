import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import { getPlaceholder } from '@/lib/truth-gate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Engagement | Vanthrope',
  description: 'Terms governing architectural advisory, discovery sprints, milestone delivery, and intellectual property ownership.',
};

export default function TermsPage() {
  const legalEntity = getPlaceholder('LEGAL_ENTITY');
  const guaranteeTerms = getPlaceholder('GUARANTEE_TERMS') || 'Contract-backed acceptance tests agreed up front before deployment';

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color text-left">
          <div className="max-w-4xl mx-auto px-6">
            <span className="eyebrow mb-4 block">
              Contractual Framework
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-text-primary leading-tight mb-8">
              Terms of Engagement
            </h1>
            <div className="text-xs font-mono text-text-subtle mb-12">
              Last Updated: 2026-11-02 · Governed by Standard Commercial Law
            </div>

            <div className="space-y-8 text-sm text-text-muted leading-relaxed font-normal">
              
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  1. Scope of Services
                </h2>
                <p>
                  Vanthrope provides custom software engineering, process diagnostics, and AI systems deployment. All work is conducted under formal written Statements of Work (SOW) specifying milestones, acceptance tests, and timelines.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  2. Intellectual Property Assignment
                </h2>
                <p>
                  Upon settlement of agreed milestone fees, 100% of custom software code, database schemas, and documentation engineered for the client are assigned to the client. Vanthrope retains zero proprietary ownership or ongoing license claim over client codebases.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  3. Acceptance Testing & Guarantees
                </h2>
                <p>
                  Engagements are backed by testable functional criteria. {guaranteeTerms}. Milestones are considered achieved only when agreed test cases pass in a staging environment.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-text-primary uppercase tracking-tight">
                  4. Confidentiality & Non-Disclosure
                </h2>
                <p>
                  Both parties agree to treat all business data, customer records, and operational designs as strictly confidential. Bilateral NDAs govern all client exchanges.
                </p>
              </div>

              {legalEntity && (
                <div className="p-6 bg-bg-secondary border border-border-color space-y-2 text-xs font-mono">
                  <h3 className="font-bold text-text-primary uppercase">Corporate Entity Details</h3>
                  <p>{legalEntity}</p>
                </div>
              )}

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
