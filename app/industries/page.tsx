import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { Metadata } from 'next';
import { Factory, ShoppingBag, Landmark, Briefcase, ArrowRight } from 'lucide-react';
import TruthBadge from '@/components/common/truth-badge';

export const metadata: Metadata = {
  title: 'Verified Industry Expertise | Vanthrope',
  description: 'Operational systems engineered exclusively where verified production evidence exists: manufacturing, e-commerce, finance, and professional services.',
};

const VERIFIED_INDUSTRIES = [
  {
    title: 'Manufacturing & Distribution',
    icon: Factory,
    problem: 'Multi-loom production scheduling, floor dispatch coordination, and raw yarn inventory tracking across factory lines.',
    evidenceId: 'ev-tm-01',
    evidenceLink: '/work/textilemode-capacity-engine',
    caseTitle: 'TextileMode Capacity Engine (48h → 10h scheduling)',
    caseType: 'Client work' as const,
    maturity: 'Running in production' as const,
  },
  {
    title: 'E-commerce & Retail Operations',
    icon: ShoppingBag,
    problem: 'High-volume reconciliation between Shopify orders, Meta advertising spend, and DHL freight carrier billing invoices.',
    evidenceId: 'ev-bh-01',
    evidenceLink: '/work/belhide-operational-intelligence',
    caseTitle: 'Belhide Multi-Channel Ledger (7 Feeds Unified)',
    caseType: 'Own business' as const,
    maturity: 'Running in production' as const,
  },
  {
    title: 'Finance & Accounting Operations',
    icon: Landmark,
    problem: 'Month-end bank MT940 statement reconciliation, double-entry ledger allocation, and line item tax verification.',
    evidenceId: 'ev-fin-01',
    evidenceLink: '/work/finance-reconciliation-engine',
    caseTitle: 'Bank & ERP Double-Entry Reconciliation (9 days → 2 days closing)',
    caseType: 'Client work' as const,
    maturity: 'Running in production' as const,
  },
  {
    title: 'Professional Services & Consulting',
    icon: Briefcase,
    problem: 'Document intake, invoice parsing, contract indexing, and client milestone approval workflows.',
    evidenceId: 'ev-synth-01',
    evidenceLink: '/proof-ledger#ev-synth-01',
    caseTitle: 'Intelligent Intake Engine (Deterministic Validation)',
    caseType: 'Demo product' as const,
    maturity: 'Running in production' as const,
  }
];

export default function IndustriesPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-6">
              Verified Sectors Only
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-6">
              Industries backed by production proof.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              We do not claim expertise across 40 hypothetical verticals. We only list sectors where we have built real software in production or verified test environments.
            </p>
          </div>
        </section>

        {/* 4 Verified Industries Grid */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {VERIFIED_INDUSTRIES.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="bg-bg-primary border border-border-steel/20 p-8 sm:p-10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-border-color mb-6">
                        <Icon className="w-6 h-6 text-accent-steel" />
                        <TruthBadge
                          caseType={ind.caseType}
                          maturity={ind.maturity}
                          evidenceId={ind.evidenceId}
                        />
                      </div>

                      <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight mb-4">
                        {ind.title}
                      </h2>

                      <p className="text-xs text-text-muted leading-relaxed font-normal mb-8">
                        {ind.problem}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border-color flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs font-mono text-text-subtle">
                        Evidence: {ind.caseTitle}
                      </span>
                      <Link
                        href={ind.evidenceLink}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel"
                        style={{ minHeight: '44px' }}
                      >
                        Inspect Blueprint <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
