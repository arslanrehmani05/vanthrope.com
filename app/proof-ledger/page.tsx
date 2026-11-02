import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { getAllVerifiedEvidence } from '@/lib/truth-gate';
import TruthBadge from '@/components/common/truth-badge';
import { Metadata } from 'next';
import { CheckCircle2, Clock, ShieldCheck, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Public Proof Ledger | Vanthrope Operational Systems',
  description: 'Public registry of verified claims, evidence IDs, verification sources, and last-audited dates. Stale items flagged visibly.',
};

export default function ProofLedgerPage() {
  const allEvidence = getAllVerifiedEvidence();

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              VERIFIABLE CLAIMS REGISTRY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-6">
              Public Proof Ledger.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              Every factual assertion, operational metric, and case study on this website references an entry in this registry. Claims without verified evidence are blocked from the build.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{allEvidence.length} Active Verified Claims</span>
              </div>
              <div className="flex items-center gap-2 text-text-subtle">
                <Clock className="w-4 h-4" />
                <span>Truth Gate Automated Audit: Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Table */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              {allEvidence.map((ev) => (
                <div
                  key={ev.id}
                  id={ev.id}
                  className="bg-bg-primary border border-border-steel/20 p-6 md:p-8 text-left transition-steel hover:border-accent-steel/40 target:border-accent-steel target:bg-bg-surface"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-accent-steel">
                        [{ev.id}]
                      </span>
                      <TruthBadge caseType={ev.caseType} maturity={ev.maturity} />
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-emerald-400 font-bold uppercase">
                        ✓ {ev.status}
                      </span>
                      <span className="text-text-subtle">
                        Verified: {ev.verifiedDate}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Subject & Claim (8 cols) */}
                    <div className="lg:col-span-8 space-y-3">
                      <div className="text-xs font-mono uppercase text-accent-gold font-bold">
                        Subject: {ev.subject} ({ev.category})
                      </div>
                      <p className="text-sm sm:text-base text-text-primary font-normal leading-relaxed">
                        {ev.claim}
                      </p>
                      {ev.details && (
                        <p className="text-xs text-text-muted font-normal leading-relaxed pt-2">
                          {ev.details}
                        </p>
                      )}
                    </div>

                    {/* Metric & Verification Source (4 cols) */}
                    <div className="lg:col-span-4 bg-bg-secondary p-5 border border-border-color space-y-3 text-xs font-mono">
                      <div>
                        <span className="text-[10px] uppercase text-text-subtle block">
                          Verified Metric
                        </span>
                        <div className="text-xl font-black text-text-primary mt-1">
                          {ev.metric}
                        </div>
                        <div className="text-[11px] text-text-muted mt-0.5">
                          {ev.metricLabel}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-border-color">
                        <span className="text-[10px] uppercase text-text-subtle block">
                          Verification Source
                        </span>
                        <div className="text-[11px] text-text-muted mt-1 leading-relaxed">
                          {ev.verificationSource}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
