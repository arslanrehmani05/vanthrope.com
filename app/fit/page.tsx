import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { Metadata } from 'next';
import { CheckCircle2, XCircle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Is Vanthrope Right For You? | Fit Assessment',
  description: 'An honest fit page: who we help, who we decline, and an objective comparison against off-the-shelf software, freelancers, and traditional consultancies.',
};

export default function FitPage() {
  const whoWeHelp = [
    'Mid-market business owners and operations leads running $1M–$50M+ operations with manual spreadsheet bottlenecks.',
    'Companies with established business models where workflows are already running manually and ready for code automation.',
    'Technical leaders who demand complete ownership of their source code, API keys, and databases.',
    'Teams that want a founder-led engineering partner who understands the general ledger as fluently as cloud architecture.'
  ];

  const whoWeDoNotHelp = [
    'Regulated enterprise procurement: If your vendor onboarding requires a 6-month SOC 2 RFP audit, we are not the right fit.',
    'On-site only engagements: We work primarily remotely with targeted on-site discovery sessions by arrangement.',
    'Pure brand/design work: We do not build marketing sites or produce slide deck presentations.',
    'Seed startups with tiny budgets: If you have not proven your operational workflow manually yet, code will not fix it.'
  ];

  const comparisons = [
    {
      option: 'Off-the-Shelf SaaS',
      pros: 'Fast setup, predictable monthly subscription.',
      cons: 'Forces your business into generic workflows, charges per-seat license fees, locks data behind export barriers.',
      verdict: 'Best for standard generic operations (e.g. basic payroll, standard CRM).'
    },
    {
      option: 'Solo Freelancer / Contractor',
      pros: 'Low hourly rate, flexible ad-hoc tasks.',
      cons: 'Rarely understands corporate finance or internal audit controls; high key-person risk if they disappear.',
      verdict: 'Best for one-off script bug fixes or small UI tweaks.'
    },
    {
      option: 'Big Consulting Firm (Accenture / Big 4)',
      pros: 'Extensive brand prestige, massive staffing bench.',
      cons: 'Extremely high minimums ($150k+), junior staff doing the actual coding, endless slide decks before software is deployed.',
      verdict: 'Best for Fortune 500 enterprises requiring institutional political cover.'
    },
    {
      option: 'Vanthrope (Founder-Led)',
      pros: 'Direct technical execution by an ACCA-qualified developer, fixed milestones, client cloud ownership, zero seat fees.',
      cons: 'Selective capacity (we only take 2–3 active builds at any time).',
      verdict: 'Best for mid-market businesses that need production systems engineered without agency overhead.'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="eyebrow mb-6">
              Honest Evaluation
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl mb-6">
              Is Vanthrope right for your business?
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              We work with a small number of clients and do not pretend to be the right fit for everyone. Here is an honest appraisal of where we excel, where we decline work, and how we compare.
            </p>
          </div>
        </section>

        {/* Who We Help vs Who We Don't */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              
              {/* Who we help */}
              <div className="bg-bg-primary border border-border-steel/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-xs font-mono">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Who We Help</span>
                </div>
                <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight">
                  Ideal Operational Profiles
                </h2>
                <div className="space-y-4">
                  {whoWeHelp.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-text-muted font-normal leading-relaxed">
                      <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who we don't */}
              <div className="bg-bg-primary border border-border-steel/30 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-2 text-rose-400 font-bold uppercase text-xs font-mono">
                  <XCircle className="w-5 h-5" />
                  <span>Who We Do Not Help</span>
                </div>
                <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight">
                  Where We Decline Engagements
                </h2>
                <div className="space-y-4">
                  {whoWeDoNotHelp.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-text-muted font-normal leading-relaxed">
                      <span className="text-rose-400 font-bold mt-0.5">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Objective Comparison Table */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              MARKET COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-8">
              How we compare with alternative approaches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {comparisons.map((c, idx) => (
                <div
                  key={idx}
                  className={`p-8 border text-left flex flex-col justify-between ${
                    c.option.includes('Vanthrope')
                      ? 'bg-bg-secondary border-accent-steel/50'
                      : 'bg-bg-secondary border-border-color'
                  }`}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-text-primary uppercase tracking-tight">
                      {c.option}
                    </h3>
                    <div className="text-xs space-y-2">
                      <div>
                        <strong className="text-emerald-400 font-mono block text-[10px] uppercase">Pros:</strong>
                        <span className="text-text-muted font-normal">{c.pros}</span>
                      </div>
                      <div>
                        <strong className="text-rose-400 font-mono block text-[10px] uppercase">Cons / Trade-offs:</strong>
                        <span className="text-text-muted font-normal">{c.cons}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-color text-xs font-mono text-accent-steel">
                    Verdict: {c.verdict}
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
