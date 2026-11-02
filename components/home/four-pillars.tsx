import Link from 'next/link';

export default function FourPillars() {
  const pillars = [
    {
      num: '01',
      title: 'Operational Topography First',
      subtitle: 'Rigorous current-state discovery',
      description: 'Enterprise ERPs fail when they force rigid vendor schemas onto complex shop-floor realities. We map existing transaction lifecycles, staff exceptions, and physical handoffs before specifying database schemas.',
      benefit: 'Zero disruption to active production lines during migration.'
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
        
        <span className="eyebrow mb-6">
          Operational Positioning
        </span>

        <div className="flex flex-col gap-6 mb-20 text-left max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
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
              className="bg-bg-secondary rounded-2xl border border-border-color p-8 sm:p-10 flex flex-col justify-between text-left transition-all hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-color mb-6">
                  <span className="text-3xl font-medium text-text-primary font-mono">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-text-subtle">
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-color text-xs font-mono text-text-muted">
                Key Standard: {pillar.benefit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/method"
            className="inline-flex items-center gap-2 text-xs font-medium text-text-primary hover:text-text-muted transition-colors"
            style={{ minHeight: '44px' }}
          >
            Review our 5-stage method in full <span className="text-sm">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
