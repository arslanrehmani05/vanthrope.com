import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import FiveStepMethod, { METHOD_STAGES } from '@/components/home/five-step-method';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our 5-Stage Method | Vanthrope Operational Systems',
  description: 'Discover, Design, Build in stages, Prove, Hand over and care. Transparent timelines, prerequisites, and failure-mode disclosures.',
};

export default function MethodPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              ENGINEERING PROTOCOL
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-6">
              How we take a messy workflow to production.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              We do not believe in open-ended R&D or vague sprints. Every stage in our delivery protocol has written outputs, agreed acceptance criteria, and honest disclosures of what causes failure.
            </p>
          </div>
        </section>

        {/* 5-Step Detailed Method Display */}
        <FiveStepMethod />

        {/* Operational Guarantees Section */}
        <section className="bg-bg-secondary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              DELIVERY INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-8">
              Rules of our delivery engagement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-bg-primary border border-border-color space-y-3">
                <span className="text-xs font-mono font-bold text-accent-steel uppercase">
                  1. Weekly Working Code
                </span>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  You never wait 8 weeks to see progress. We demo clickable, working code in staging environments every single week.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color space-y-3">
                <span className="text-xs font-mono font-bold text-accent-steel uppercase">
                  2. Acceptance-Gated Milestones
                </span>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Invoices are tied to testable functional milestones agreed in writing before contract execution.
                </p>
              </div>
              <div className="p-6 bg-bg-primary border border-border-color space-y-3">
                <span className="text-xs font-mono font-bold text-accent-steel uppercase">
                  3. Client Account Deployment
                </span>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  All databases and code repositories are provisioned directly in your corporate cloud tenancy. You hold the master keys.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
