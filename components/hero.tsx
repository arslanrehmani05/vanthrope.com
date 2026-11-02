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
        <div className="mb-6 flex items-center gap-2 bg-bg-secondary p-1 border border-border-color text-[10px] font-mono">
          <span className="text-text-subtle px-2">Headline Option:</span>
          <button
            onClick={() => setHeadlineOption('A')}
            className={`px-2 py-0.5 transition-steel ${
              headlineOption === 'A' ? 'bg-accent-steel text-bg-primary font-bold' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            A: Outcome
          </button>
          <button
            onClick={() => setHeadlineOption('B')}
            className={`px-2 py-0.5 transition-steel ${
              headlineOption === 'B' ? 'bg-accent-steel text-bg-primary font-bold' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            B: Reliability
          </button>
        </div>

        {/* Outcome Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary leading-[1.1] max-w-4xl uppercase">
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-accent-steel hover:bg-accent-steel-hover text-bg-primary font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-steel"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Book a 20-minute discovery call
          </Link>
          <Link
            href="/tools"
            className="border border-border-steel text-text-primary hover:border-accent-steel text-xs font-semibold tracking-widest uppercase px-6 py-4 rounded-none transition-steel"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Try a tool
          </Link>
          <Link
            href="/work"
            className="text-text-muted hover:text-text-primary text-xs font-semibold tracking-widest uppercase px-4 py-4 transition-steel"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            See the work <span className="ml-1 text-accent-steel">→</span>
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
