import Link from 'next/link';

export default function FourPillars() {
  const pillars = [
    {
      num: '01',
      title: 'Fits How You Actually Work',
      subtitle: 'Discovery before design',
      description: 'We do not ask you to bend your operations around someone else’s software mold. We spend time observing current spreadsheets, exceptions, and team handoffs before drafting architecture.',
      benefit: 'Zero disruption to running production lines during rollout.'
    },
    {
      num: '02',
      title: 'Safe By Design',
      subtitle: 'Access control, audit trails, recoverable',
      description: 'LLMs never touch your database directly. Every action is gated by deterministic schema validators, explicit spend/frequency limits, role-based keys, and immutable audit logs.',
      benefit: 'Every action is reversible with a clear supervisor sign-off trail.'
    },
    {
      num: '03',
      title: 'Measurable Outcomes',
      subtitle: 'Hours returned, errors cut, days to close',
      description: 'We do not bill for open-ended experimentation. Engagements are contracted against specific measurable outcomes: manual hours returned to staff, reconciliation errors cut, or days eliminated from month-end.',
      benefit: 'Definitive milestones agreed in writing before kickoff.'
    },
    {
      num: '04',
      title: 'You Own It Completely',
      subtitle: 'Your accounts, keys, code and docs',
      description: 'Everything we build is deployed directly into your own cloud accounts (AWS, Supabase, Vercel, GCP). You retain full IP assignment, repository access, and unredacted documentation.',
      benefit: 'No monthly proprietary license rent. No vendor lock-in.'
    },
  ];

  return (
    <section className="bg-bg-primary py-32 sm:py-40 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
          OPERATIONAL POSITIONING
        </span>

        <div className="flex flex-col gap-6 mb-20 text-left max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight">
            How we engineer systems that keep working.
          </h2>
          <p className="text-base text-text-muted leading-relaxed max-w-2xl font-normal">
            Four engineering principles that separate operational systems from disposable prototypes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-bg-secondary border border-border-steel/20 p-8 sm:p-10 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-color mb-6">
                  <span className="text-4xl font-black text-accent-steel font-mono">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-text-subtle">
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-text-primary uppercase mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-steel/10 text-xs font-mono text-accent-steel/90">
                Key Standard: {pillar.benefit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/method"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-steel hover:text-accent-steel-hover transition-steel"
            style={{ minHeight: '44px' }}
          >
            Review our 5-stage method in full <span className="text-sm">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
