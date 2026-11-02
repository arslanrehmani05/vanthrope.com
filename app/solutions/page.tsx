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
            <span className="eyebrow mb-6">
              Operational Problem Directory
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl">
              Deterministic systems for mission-critical operations.
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-normal mt-6 max-w-3xl leading-relaxed">
              Production software engineered to eliminate manual coordination friction, spreadsheet fragility, and reconciliation delays. Explore the technical architecture, data flows, and safety guardrails deployed for each operational failure mode.
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
