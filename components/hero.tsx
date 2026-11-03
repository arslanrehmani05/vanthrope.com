import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SyntheticWorkflowDemo from '@/components/home/synthetic-workflow-demo';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden border-b border-border-color">
      {/* Geometric background grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 sm:pt-16 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="eyebrow gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Operational Systems Firm · Production Agentic AI · FDE</span>
        </div>

        {/* Headline */}
        <h1 className="headline text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl">
          Custom operational software and autonomous agents that replace manual drag.{' '}
          <span className="italic font-serif text-text-primary">Permanently.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg text-text-muted font-normal leading-relaxed max-w-2xl">
          We replace administrative friction, manual reconciliation bottlenecks, and fragile spreadsheets with production-grade software and safe autonomous agent pipelines. Tested against strict failure modes and proven on real factory floors.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary !px-7 !py-3.5 !text-sm font-semibold flex items-center gap-3 group cursor-pointer"
          >
            <span>Book 20-min Discovery Call</span>
            <span className="btn-arrow-badge w-6 h-6">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
          <Link
            href="/work"
            className="btn-ghost !px-6 !py-3.5 !text-sm font-medium flex items-center gap-2 cursor-pointer group"
          >
            <span>View Production Builds</span>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Verification Metrics Bar */}
        <div className="mt-12 pt-8 border-t border-border-color/60 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl w-full text-xs font-mono text-left">
          <div>
            <span className="text-text-subtle uppercase text-[10px] block">Production Verification</span>
            <span className="text-sm font-bold text-text-primary">18 Mos Live Mill Operations</span>
          </div>
          <div>
            <span className="text-text-subtle uppercase text-[10px] block">Staff Overhead</span>
            <span className="text-sm font-bold text-emerald-400">10 → 1 Clerk</span>
          </div>
          <div>
            <span className="text-text-subtle uppercase text-[10px] block">Reconciliation Accuracy</span>
            <span className="text-sm font-bold text-emerald-400">99.2% Deterministic</span>
          </div>
          <div>
            <span className="text-text-subtle uppercase text-[10px] block">Architecture Guarantee</span>
            <span className="text-sm font-bold text-text-primary">Zero Speculative Commit</span>
          </div>
        </div>

        {/* Interactive Simulator Container */}
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
