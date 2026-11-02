import Link from 'next/link';
import { SEED_CASE_STUDIES } from '@/lib/sanity';
import TruthBadge from '@/components/common/truth-badge';

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-bg-primary py-32 sm:py-40 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
          FEATURED WORK
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
              Real systems running in production.
            </h2>
            <p className="text-base text-text-muted mt-4 font-normal">
              Every case study discloses its case type, what went wrong during rollout, how it is kept safe, and verified measurable outcomes.
            </p>
          </div>
          <Link
            href="/work"
            className="text-xs font-mono uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel flex items-center gap-1 shrink-0"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Explore all case studies <span className="text-sm">→</span>
          </Link>
        </div>

        {/* 3 Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SEED_CASE_STUDIES.map((cs) => (
            <div
              key={cs.slug}
              className="bg-bg-secondary border border-border-steel/20 p-8 flex flex-col justify-between text-left transition-steel hover:border-accent-steel/50"
            >
              <div>
                <TruthBadge
                  caseType={cs.caseType}
                  maturity={cs.maturity}
                  evidenceId={cs.evidenceId}
                  className="mb-4"
                />
                
                <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-3">
                  {cs.title}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed mb-6 font-normal">
                  {cs.problem}
                </p>

                {/* Measurable Results */}
                <div className="space-y-3 pt-4 border-t border-border-color mb-6">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex flex-col">
                      <span className="text-lg font-black text-text-primary font-mono">
                        {res.measure}
                      </span>
                      <span className="text-[11px] text-text-subtle font-mono">
                        {res.method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="pt-4 border-t border-border-color">
                <Link
                  href={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel"
                  style={{ minHeight: '44px' }}
                >
                  Read Architecture Blueprint <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
