'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, CheckSquare } from 'lucide-react';

interface RubricQuestion {
  id: string;
  question: string;
  weight: number;
  description: string;
}

const RUBRIC_QUESTIONS: RubricQuestion[] = [
  {
    id: 'unique_process',
    question: 'How proprietary is this workflow to your competitive advantage?',
    weight: 25,
    description: 'Off-the-shelf SaaS forces you into industry generic molds; custom software preserves your unique operational edge.',
  },
  {
    id: 'data_sovereignty',
    question: 'Do you require 100% direct ownership of your database and customer data?',
    weight: 20,
    description: 'SaaS vendors lock data behind restricted export APIs and monthly seat subscriptions.',
  },
  {
    id: 'seat_cost_explosion',
    question: 'Does your team size make per-user SaaS license fees prohibitive at scale?',
    weight: 20,
    description: 'Per-seat pricing penalizes operational growth; custom software has zero per-seat subscription cost.',
  },
  {
    id: 'integration_inflexibility',
    question: 'Do you need deep integration with custom in-house or legacy ERP systems?',
    weight: 20,
    description: 'Packaged SaaS rarely integrates cleanly with specialized factory or legacy accounting setups.',
  },
  {
    id: 'rapid_iteration',
    question: 'Do you need to adapt the workflow logic immediately as business rules change?',
    weight: 15,
    description: 'SaaS feature requests take months or are rejected; custom code can be updated in hours.',
  },
];

export default function BuildOrBuyPage() {
  const [scores, setScores] = useState<Record<string, number>>({
    unique_process: 4,
    data_sovereignty: 4,
    seat_cost_explosion: 3,
    integration_inflexibility: 4,
    rapid_iteration: 3,
  });

  // Calculate weighted score (0 to 100)
  const totalWeightedScore = RUBRIC_QUESTIONS.reduce((acc, q) => {
    const rawVal = scores[q.id] || 3; // 1 to 5
    const normalized = (rawVal - 1) / 4; // 0 to 1
    return acc + normalized * q.weight;
  }, 0);

  const roundedScore = Math.round(totalWeightedScore);

  let recommendation = '';
  let rationale = '';

  if (roundedScore >= 65) {
    recommendation = 'CUSTOM BUILD RECOMMENDED';
    rationale = 'Your requirements show high operational uniqueness, deep integration needs, and data sovereignty priorities. An off-the-shelf SaaS subscription will lead to costly workarounds and per-seat fee bloat.';
  } else if (roundedScore <= 35) {
    recommendation = 'COMMERCIAL OFF-THE-SHELF (BUY) RECOMMENDED';
    rationale = 'Your workflow matches standard commercial conventions. A mainstream SaaS subscription is faster and cheaper to deploy than custom engineering.';
  } else {
    recommendation = 'EVALUATE HYBRID SPRINT';
    rationale = 'Borderline score. We recommend a 1-week Discovery Sprint to test whether an existing commercial tool can be adapted with lightweight middleware before committing to full custom development.';
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Breadcrumb Header */}
        <div className="bg-bg-secondary border-b border-border-color py-4 px-6 print:hidden">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-text-subtle">
            <Link href="/tools" className="hover:text-text-primary transition-steel flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Tools
            </Link>
            <span>/</span>
            <span className="text-text-muted">Build-or-Buy Checklist</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 04 // OBJECTIVE EVALUATION RUBRIC
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Build-or-Buy Decision Checklist
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              A transparent, weighted rubric comparing commercial SaaS software against custom operational systems. Visible weights, clear rationale, and no vendor bias.
            </p>
          </div>
        </section>

        {/* Rubric Studio */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Scoring Questions (7 cols) */}
              <div className="lg:col-span-7 bg-bg-primary p-8 border border-border-color space-y-6 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <span className="text-xs font-mono uppercase font-bold text-accent-steel">
                    Scoring Rubric (1 = Generic SaaS Fit, 5 = Highly Custom Fit)
                  </span>
                  <span className="text-[10px] font-mono text-text-subtle">
                    Visible Weighting
                  </span>
                </div>

                <div className="space-y-6 text-xs font-mono">
                  {RUBRIC_QUESTIONS.map((q) => (
                    <div key={q.id} className="space-y-2 pb-4 border-b border-border-color/50">
                      <div className="flex justify-between items-baseline">
                        <label className="text-text-primary font-bold">{q.question}</label>
                        <span className="text-accent-gold font-bold">Weight: {q.weight}%</span>
                      </div>
                      <p className="text-text-muted text-[11px] font-sans font-normal leading-relaxed">
                        {q.description}
                      </p>
                      <div className="flex items-center justify-between gap-4 pt-1">
                        <span className="text-[10px] text-text-subtle">Standard SaaS</span>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={scores[q.id]}
                          onChange={(e) => setScores({ ...scores, [q.id]: Number(e.target.value) })}
                          className="w-1/2 accent-accent-steel"
                        />
                        <span className="text-text-primary font-bold">{scores[q.id]} / 5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Output (5 cols) */}
              <div className="lg:col-span-5 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-6 font-mono text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      Weighted Score: {roundedScore} / 100
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-text-primary tracking-tight mt-1">
                      {recommendation}
                    </div>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border-color px-3 py-1.5 transition-steel print:hidden"
                    style={{ minHeight: '36px' }}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print PDF</span>
                  </button>
                </div>

                {/* Score bar */}
                <div className="w-full bg-bg-secondary h-3 border border-border-color overflow-hidden">
                  <div
                    className="bg-accent-steel h-full transition-all duration-300"
                    style={{ width: `${roundedScore}%` }}
                  />
                </div>

                <div className="p-4 bg-bg-secondary border border-border-color text-xs text-text-primary leading-relaxed font-normal">
                  <strong className="text-accent-steel block font-mono mb-2 uppercase">
                    Strategic Rationale:
                  </strong>
                  {rationale}
                </div>

                <div className="p-4 bg-bg-surface border border-border-color text-[11px] text-text-subtle space-y-2">
                  <div className="font-bold text-text-muted uppercase text-[10px]">
                    Formula Transparency:
                  </div>
                  <div>Score = Σ (normalized rating × weight) where weights sum to 100%.</div>
                  <div>Outputs labeled estimate as of 2026-11-02.</div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
