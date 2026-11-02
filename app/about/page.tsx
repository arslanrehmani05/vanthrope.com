import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { getPlaceholder } from '@/lib/truth-gate';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Founder & Operating Norms | Vanthrope',
  description: 'Founded by Arslan Rehmani, ACCA-qualified finance professional turned software developer. Working norms, reply times, and verified engineering credentials.',
};

export default function AboutPage() {
  const accaStatus = getPlaceholder('ACCA_STATUS') || 'ACCA-qualified finance professional turned developer';
  const teamModel = getPlaceholder('TEAM') || 'Vanthrope (founder-led)';

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              FOUNDER & PHILOSOPHY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-6">
              Engineering systems with general ledger rigor.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal max-w-3xl leading-relaxed">
              Vanthrope was established to eliminate the chronic friction between corporate finance rules and custom software engineering. We build systems that run operations safely and protect margins.
            </p>
          </div>
        </section>

        {/* Founder Profile Grid */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
              
              {/* Photo & Identity (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-start gap-6">
                <div className="relative w-64 h-64 md:w-80 md:h-80 border border-accent-steel overflow-hidden bg-bg-primary">
                  <Image
                    src="/headshot.png"
                    alt="Arslan Rehmani portrait"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight">
                    Arslan Rehmani
                  </h2>
                  <div className="text-xs font-mono text-accent-steel mt-1">
                    Founder &amp; Principal Systems Architect
                  </div>
                  <div className="text-[11px] font-mono text-text-subtle mt-0.5">
                    {teamModel}
                  </div>
                </div>
              </div>

              {/* Bio & Dual Competency (8 cols) */}
              <div className="lg:col-span-8 space-y-6 text-sm text-text-muted leading-relaxed font-normal">
                <div className="p-4 bg-bg-primary border border-border-steel/30 text-xs font-mono text-accent-gold">
                  Verified Credential: {accaStatus}.
                </div>

                <p>
                  Most operational breakdowns happen because software engineers do not understand balance sheets, and finance teams do not write production software. The result is millions of dollars in manual coordination costs trapped in fragile spreadsheets and disconnected portals.
                </p>

                <p>
                  As an {accaStatus}, Arslan brings institutional financial controls, reconciliation checks, and audit trails to modern cloud architecture. Before writing code, we map every debited and credited account, every inventory buffer, and every staff exception.
                </p>

                <p>
                  As the engineer behind TextileMode ERP (automating loom capacity for mid-market textile manufacturing) and Belhide Operational Intelligence (unifying real-time tannery yield and order feeds), Arslan works directly with every Vanthrope client from initial diagnostic sprint to production deployment.
                </p>

                <div className="p-4 bg-bg-primary border border-border-color text-xs text-text-muted leading-relaxed font-mono">
                  For Arslan&apos;s personal engineering field notes, open proof ledger, and interactive diagnostic scans, visit{' '}
                  <a
                    href="https://arslanrehmani.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary underline hover:text-accent-steel transition-steel inline-flex items-center gap-1 font-semibold"
                  >
                    arslanrehmani.com <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-4 border-t border-border-color flex flex-wrap gap-6 text-xs font-mono">
                  <Link
                    href="/proof-ledger"
                    className="text-accent-steel hover:text-accent-steel-hover transition-steel flex items-center gap-1"
                  >
                    View Verified Claims in Proof Ledger <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Working Norms Section */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              OPERATIONAL CADENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text-primary uppercase tracking-tight mb-8">
              Our Working Norms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 bg-bg-secondary border border-border-color space-y-3">
                <Clock className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">
                  Response Times
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  All active client inquiries receive a direct technical response within 4 business hours. No ticketing bureaucracy or support call-centers.
                </p>
              </div>

              <div className="p-8 bg-bg-secondary border border-border-color space-y-3">
                <ShieldCheck className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">
                  Weekly Demos & Video Briefs
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  Every Friday, clients receive a 5-minute Loom video walking through what was shipped, current test pass rates, and next week’s milestone.
                </p>
              </div>

              <div className="p-8 bg-bg-secondary border border-border-color space-y-3">
                <Mail className="w-5 h-5 text-accent-steel" />
                <h3 className="font-bold text-text-primary uppercase text-sm">
                  Async-First Communication
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-normal">
                  We communicate via a dedicated private Slack or Telegram channel with structured pull-requests and documented decision logs.
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
