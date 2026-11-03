import Link from 'next/link';
import SyntheticWorkflowDemo from '@/components/home/synthetic-workflow-demo';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden border-b border-border-color">
      {/* Geometric background grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 sm:pt-16 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="eyebrow mb-6">
          Operational Systems &amp; Autonomous Agent Swarms
        </div>

        {/* Headline */}
        <h1 className="headline text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl">
          Custom operational software and deterministic AI agents for mid-market enterprise.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg text-text-muted font-normal leading-relaxed max-w-2xl">
          We replace administrative friction, manual reconciliation bottlenecks, and fragile spreadsheets with production-grade software and safe autonomous agent pipelines. Tested against strict failure modes and proven on real factory floors.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary !px-7 !py-3.5 !text-sm font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Book 20-min Discovery Call
          </Link>
          <Link
            href="/work"
            className="btn-ghost !px-7 !py-3.5 !text-sm font-medium rounded-full transition-all"
          >
            View Production Builds &rarr;
          </Link>
        </div>

        {/* 20-second Looping Demo Container */}
        <div className="w-full mt-16 max-w-4xl">
          <div className="text-[11px] font-mono text-text-subtle uppercase tracking-widest mb-3">
            Interactive Operational Proof Simulator
          </div>
          <SyntheticWorkflowDemo />
        </div>

      </div>
    </section>
  );
}
