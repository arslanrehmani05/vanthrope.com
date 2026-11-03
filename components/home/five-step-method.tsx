import Link from 'next/link';

export const METHOD_STAGES = [
  {
    step: '01',
    name: 'Discover',
    timeframe: '1–2 weeks',
    tagline: 'Process observation and bottleneck mapping before drafting any code.',
    whatYouGet: 'Complete current-state process map, identified data leaks, architectural options, and a fixed-price Discovery Sprint report.',
    whatINeedFromYou: 'Access to screen-shares with the staff running the daily workflow and sample edge-case documents.',
    howItCanFail: 'If discovery is limited to high-level managerial summaries without direct observation of front-line edge-case workarounds.'
  },
  {
    step: '02',
    name: 'Design',
    timeframe: '1 week',
    tagline: 'Deterministic schema design, failover policies, and human approval gates.',
    whatYouGet: 'Written technical specification, agreed acceptance test definitions, data flow diagrams, and permission boundary contracts.',
    whatINeedFromYou: 'Sign-off on the edge-case threshold rules (e.g. at what dollar amount or error score must an agent pause for human approval).',
    howItCanFail: 'If sign-off is delegated to someone without operational authority to approve business rule exceptions.'
  },
  {
    step: '03',
    name: 'Build in Stages',
    timeframe: '2–6 weeks',
    tagline: 'Modular delivery with weekly working demos in a sandbox environment.',
    whatYouGet: 'Weekly deployed demos, verifiable test suites, database schema migrations, and clean infrastructure-as-code.',
    whatINeedFromYou: '15-minute weekly demo attendance and access to a staging environment or synthetic test data.',
    howItCanFail: 'If API credentials for third-party tools (ERP, banking, CRM) are delayed by external IT departments.'
  },
  {
    step: '04',
    name: 'Prove',
    timeframe: '1–2 weeks',
    tagline: 'Parallel-run testing alongside existing operations with zero customer risk.',
    whatYouGet: 'Discrepancy audit log comparing agent output against manual clerk outputs until 100% agreement is achieved.',
    whatINeedFromYou: 'Staff willingness to parallel-run and report any subtle real-world variations during the burn-in period.',
    howItCanFail: 'Rushing to cut over before edge cases in the parallel log reach zero.'
  },
  {
    step: '05',
    name: 'Hand Over & Care',
    timeframe: 'Ongoing',
    tagline: 'Deployment into your cloud accounts, full IP assignment, and optional monthly care.',
    whatYouGet: '100% ownership of repositories, cloud environments, runbooks, training videos, and active monitoring under a Care Plan.',
    whatINeedFromYou: 'Designated internal system administrator for security credential handoff.',
    howItCanFail: 'Letting internal API tokens expire without updating secrets managers.'
  }
];

export default function FiveStepMethod() {
  return (
    <section id="method" className="py-32 sm:py-40 border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="eyebrow mb-6">
          Our 5-Stage Method
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 text-left">
          <div className="max-w-3xl">
            <h2 className="headline text-3xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
              Predictable delivery. No endless science projects.
            </h2>
            <p className="text-base text-text-muted mt-4 font-normal">
              Every stage has explicit deliverables, prerequisites, timeframes, and candid disclosures of how it can fail.
            </p>
          </div>
          <Link
            href="/method"
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 shrink-0"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Review Detailed Method Page <span className="text-sm">→</span>
          </Link>
        </div>

        {/* 5 Stages Vertical / Accordion Grid */}
        <div className="space-y-6">
          {METHOD_STAGES.map((s) => (
            <div
              key={s.step}
              className="bg-bg-secondary/70 backdrop-blur-md rounded-2xl border border-border-color p-8 sm:p-10 text-left transition-all hover:border-white/20 hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Step Num & Name (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl sm:text-4xl font-medium text-text-primary font-mono">
                      {s.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-text-primary tracking-tight">
                      {s.name}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-text-muted mt-1">
                    Typical Duration: {s.timeframe}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed mt-2 font-normal">
                    {s.tagline}
                  </p>
                </div>

                {/* Details Breakdown (8 cols) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border-color lg:pl-8 text-xs">
                  
                  {/* What you get */}
                  <div className="space-y-1.5">
                    <div className="font-mono uppercase font-bold text-accent-steel text-[11px]">
                      What You Get
                    </div>
                    <p className="text-text-primary/90 leading-relaxed font-normal">
                      {s.whatYouGet}
                    </p>
                  </div>

                  {/* What I need */}
                  <div className="space-y-1.5">
                    <div className="font-mono uppercase font-bold text-text-muted text-[11px]">
                      What I Need From You
                    </div>
                    <p className="text-text-muted leading-relaxed font-normal">
                      {s.whatINeedFromYou}
                    </p>
                  </div>

                  {/* How it can fail */}
                  <div className="space-y-1.5">
                    <div className="font-mono uppercase font-bold text-rose-400/90 text-[11px]">
                      How It Can Fail
                    </div>
                    <p className="text-text-subtle leading-relaxed font-normal">
                      {s.howItCanFail}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
