'use client';

import { useState } from 'react';
import Link from 'next/link';
import LocationBar from '@/components/common/location-bar';
import SyntheticWorkflowDemo from '@/components/home/synthetic-workflow-demo';

export default function Hero() {
  const [headlineOption, setHeadlineOption] = useState<'A' | 'B'>('A');

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-bg-primary border-b border-border-color">
      {/* Location line near top of Home */}
      <LocationBar />

      {/* Geometric background grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 sm:pt-20 flex flex-col items-center text-center">
        
        {/* Headline A/B Testing Switcher */}
        <div className="mb-8 flex items-center gap-1.5 bg-bg-secondary p-1 rounded-full border border-border-color text-xs font-mono">
          <span className="text-text-subtle px-2">Headline:</span>
          <button
            onClick={() => setHeadlineOption('A')}
            className={`px-3 py-1 rounded-full transition-all ${
              headlineOption === 'A' ? 'bg-text-primary text-bg-primary font-semibold' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            A: Outcome
          </button>
          <button
            onClick={() => setHeadlineOption('B')}
            className={`px-3 py-1 rounded-full transition-all ${
              headlineOption === 'B' ? 'bg-text-primary text-bg-primary font-semibold' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            B: Reliability
          </button>
        </div>

        {/* Outcome Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08] max-w-4xl">
          {headlineOption === 'A' ? (
            <>Get your Mondays back with systems that run the unglamorous work.</>
          ) : (
            <>Custom software and agents that stay safe and keep working.</>
          )}
        </h1>

        {/* Sub-headline: Who it's for */}
        <p className="mt-6 text-base sm:text-lg text-text-muted font-normal leading-relaxed max-w-2xl">
          For business owners, operations leads, and technical directors who need to permanently eliminate administrative friction, manual copy-pasting, and disconnected spreadsheets. Proven on synthetic tests and real production lines.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary !px-7 !py-3.5 !text-sm font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Book 20-min Discovery Call
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium border border-border-color text-text-primary hover:bg-bg-surface transition-all"
          >
            Explore Case Studies
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium text-text-muted hover:text-text-primary transition-all"
          >
            Try a tool &rarr;
          </Link>
        </div>

        {/* 20-second Looping Demo Container */}
        <div className="w-full mt-16">
          <div className="text-[11px] font-mono text-text-subtle uppercase tracking-widest mb-3">
            Interactive Operational Proof Simulator
          </div>
          <SyntheticWorkflowDemo />
        </div>

      </div>
    </section>
  );
}
