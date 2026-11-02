import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { getCaseStudies } from '@/lib/sanity';
import TruthBadge from '@/components/common/truth-badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work & Case Studies | Vanthrope Operational Systems',
  description: 'Verified operational case studies with honest case-type labels (Client work, Own business, Demo), architecture blueprints, failure disclosures, and measured results.',
};

export default async function WorkPage() {
  const cases = await getCaseStudies();

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              EVIDENCE OF DELIVERY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-6">
              Production case studies. Honest disclosures.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              Every system documented here includes its case-type classification (Client work vs. Own business testing labs vs. Synthetic demo), what went wrong during deployment, how safety guardrails were engineered, and verified outcome measures.
            </p>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-12">
              {cases.map((cs) => (
                <div
                  key={cs.slug}
                  className="bg-bg-primary border border-border-steel/20 p-8 sm:p-12 text-left transition-steel hover:border-accent-steel/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-color mb-8">
                    <TruthBadge
                      caseType={cs.caseType}
                      maturity={cs.maturity}
                      evidenceId={cs.evidenceId}
                    />
                    <div className="text-xs font-mono text-text-subtle">
                      Timeline: {cs.timeline}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                    <div className="lg:col-span-8 space-y-4">
                      <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight">
                        {cs.title}
                      </h2>
                      <p className="text-xs font-mono text-accent-steel">
                        Context: {cs.clientContext}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed font-normal">
                        {cs.problem}
                      </p>
                    </div>

                    <div className="lg:col-span-4 bg-bg-secondary p-6 border border-border-color space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-accent-gold block">
                        Verified Outcomes
                      </span>
                      {cs.results.map((r, rIdx) => (
                        <div key={rIdx} className="space-y-1">
                          <div className="text-xl font-black text-text-primary font-mono">
                            {r.measure}
                          </div>
                          <div className="text-[11px] text-text-muted">
                            {r.method} ({r.period})
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-border-color flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-text-subtle">
                      <span>Stack:</span>
                      {cs.stack.map((tech) => (
                        <span key={tech} className="text-text-muted">
                          [{tech}]
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel"
                      style={{ minHeight: '44px' }}
                    >
                      Read Full Blueprint & Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
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
