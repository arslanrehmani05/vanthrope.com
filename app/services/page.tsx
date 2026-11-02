import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { getPlaceholder } from '@/lib/truth-gate';
import Link from 'next/link';
import { Metadata } from 'next';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services & Engagement Models | Vanthrope',
  description: 'Fixed-price Discovery Sprints, milestone-gated Fixed-Scope Builds, Embedded Engineering, and monthly Care Plans with testable contractual guarantees.',
};

export default function ServicesPage() {
  const pricingPolicy = getPlaceholder('PRICING') || 'Scoped after discovery';
  const guaranteeTerms = getPlaceholder('GUARANTEE_TERMS') || 'Contract-backed acceptance tests agreed up front before deployment';

  const models = [
    {
      num: '01',
      title: 'Discovery Sprint',
      duration: '1–2 Weeks',
      pricing: 'Fixed price',
      headline: 'Process map, risks, architectural options, and throwaway prototype before any build commitment.',
      deliverables: [
        'Complete current-state process map with identified bottlenecks',
        'Failure-mode and security risk assessment',
        'Architecture specification with two implementation options',
        'Clickable prototype or staging test proving core technical feasibility'
      ],
      idealFor: 'Businesses that know they have operational friction but need rigorous technical analysis before committing capital.'
    },
    {
      num: '02',
      title: 'Fixed-Scope Build',
      duration: '4–8 Weeks',
      pricing: pricingPolicy,
      headline: 'Milestone-driven production deployment with acceptance tests agreed up front in writing.',
      deliverables: [
        'Deterministic database and agent middleware deployment',
        'Custom web interfaces for clerk input and supervisor review',
        '100% test coverage over critical financial and inventory paths',
        'Staff training sessions, runbooks, and cloud repository handover'
      ],
      idealFor: 'Operations with clearly defined workflows that need a production-grade system delivered without cost overruns.'
    },
    {
      num: '03',
      title: 'Embedded Build',
      duration: '1–3 Months',
      pricing: pricingPolicy,
      headline: 'Forward-deployed engineering alongside your operational team for complex, evolving workflows.',
      deliverables: [
        'Direct pairing with department heads and software teams',
        'Continuous weekly feature rollouts and immediate line adaptations',
        'System architecture scaling and database optimization',
        'Internal technical leadership and junior engineer mentoring'
      ],
      idealFor: 'High-growth mid-market firms undergoing rapid restructuring or multi-system ERP overhauls.'
    },
    {
      num: '04',
      title: 'Care Plan',
      duration: 'Monthly Retainer',
      pricing: pricingPolicy,
      headline: 'Continuous monitoring, verified backups, access reviews, prompt hardening, and small feature updates.',
      deliverables: [
        '24/7 uptime and anomaly alert monitoring',
        'Monthly backup restoration verification tests',
        'Quarterly security access and third-party API token audits',
        'Dedicated allocation of developer hours for small operational tweaks'
      ],
      idealFor: 'Clients running mission-critical systems that require guaranteed maintenance and zero staff worry.'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* 40-60 Word Direct Answer Opening */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-6">
              Engagement Models
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-8">
              Four structured ways we work together.
            </h1>

            {/* Direct Answer Box */}
            <div className="p-8 bg-bg-secondary border-l-2 border-border-color max-w-3xl mb-12 rounded-r-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-subtle block mb-2">
                Direct Answer
              </span>
              <p className="text-base sm:text-lg text-text-primary leading-relaxed font-normal">
                Vanthrope engineers custom operational software and autonomous agent systems for mid-market enterprises. We engage through fixed-price discovery sprints, milestone-backed builds, embedded forward-deployed engineering, and ongoing care plans. All pricing is transparent and scoped after discovery, with contract-backed acceptance tests agreed up front.
              </p>
            </div>

            {/* Guarantee Terms Box */}
            <div className="p-6 bg-bg-surface border border-border-color rounded-2xl max-w-3xl flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-text-primary shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-primary block mb-1">
                  Contract-Backed Guarantee
                </span>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  {guaranteeTerms}. You do not pay final milestone balances until all agreed test criteria pass on staging environments.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Models Grid */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {models.map((m) => (
                <div
                  key={m.num}
                  className="bg-bg-primary border border-border-steel/20 p-8 sm:p-10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-border-color mb-6">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-accent-steel">
                        {m.num}
                      </span>
                      <div className="text-right">
                        <span className="text-xs font-mono text-accent-gold block font-bold">
                          {m.duration}
                        </span>
                        <span className="text-[10px] font-mono text-text-subtle">
                          {m.pricing}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight mb-3">
                      {m.title}
                    </h2>

                    <p className="text-xs text-text-muted leading-relaxed mb-6 font-normal">
                      {m.headline}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                        Included Deliverables:
                      </span>
                      {m.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-text-muted font-normal">
                          <Check className="w-4 h-4 text-accent-steel shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-color text-xs font-mono text-text-subtle">
                    Ideal For: {m.idealFor}
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
