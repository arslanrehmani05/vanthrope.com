import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import SolutionsGrid from '@/components/home/solutions-grid';
import FinalCta from '@/components/home/final-cta';
import LocationBar from '@/components/common/location-bar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions by Problem | Vanthrope Operational Systems',
  description: 'Custom software and automated AI systems engineered to fix specific operational bottlenecks: spreadsheets, manual reporting, disconnected tools, and reconciliation friction.',
};

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-24 sm:py-32 border-b border-border-color">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-6 block">
              OPERATIONAL PROBLEM DIRECTORY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl">
              Solutions organized by the exact problem you face.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal mt-6 max-w-3xl leading-relaxed">
              We do not sell abstract technology. We audit, design, and deploy custom software and AI agent systems that fix specific operational breakdowns. Select your business challenge below to inspect what changes, what we build, and how it is kept safe.
            </p>
          </div>
        </section>

        {/* 8 Solutions Grid */}
        <SolutionsGrid />

        {/* Final CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
