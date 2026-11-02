'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, Coins } from 'lucide-react';

export default function AgentCostEstimatorPage() {
  const [taskVolumeMonthly, setTaskVolumeMonthly] = useState(2500);
  const [avgInputTokens, setAvgInputTokens] = useState(1500);
  const [avgOutputTokens, setAvgOutputTokens] = useState(400);
  const [humanReviewRatePercent, setHumanReviewRatePercent] = useState(10);
  const [reviewerHourlyRate, setReviewerHourlyRate] = useState(40);
  const [minutesPerReview, setMinutesPerReview] = useState(3);

  // Model pricing benchmark (Claude 3.5 Sonnet / GPT-4o tiered API as of 2026-10-01)
  const inputPricePerMillion = 3.00;
  const outputPricePerMillion = 15.00;

  // Monthly Calculations
  const totalInputTokensMonthly = taskVolumeMonthly * avgInputTokens;
  const totalOutputTokensMonthly = taskVolumeMonthly * avgOutputTokens;

  const inputTokenCost = (totalInputTokensMonthly / 1_000_000) * inputPricePerMillion;
  const outputTokenCost = (totalOutputTokensMonthly / 1_000_000) * outputPricePerMillion;
  const totalApiTokenCost = inputTokenCost + outputTokenCost;

  // Cloud infrastructure buffer (Postgres DB, edge execution, webhook ingress)
  const cloudInfraBaseCost = 35.00;

  // Human Review Labor Cost
  const reviewsCountMonthly = taskVolumeMonthly * (humanReviewRatePercent / 100);
  const totalReviewHoursMonthly = (reviewsCountMonthly * minutesPerReview) / 60;
  const humanReviewCostMonthly = totalReviewHoursMonthly * reviewerHourlyRate;

  const totalMonthlyOperationalCost = totalApiTokenCost + cloudInfraBaseCost + humanReviewCostMonthly;
  const costPerTask = taskVolumeMonthly > 0 ? (totalMonthlyOperationalCost / taskVolumeMonthly) : 0;

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
            <span className="text-text-muted">Agent Cost Estimator</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 05 // REALISTIC TCO CALCULATOR
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Agent Operational Cost Estimator
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              Most agent estimates falsely omit human supervisor review and cloud infrastructure. This tool calculates real-world operating expenses: tokens + hosting + supervisor time, using dated API benchmarks.
            </p>
          </div>
        </section>

        {/* Interactive Studio */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Inputs (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 border border-border-color space-y-6 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <span className="text-xs font-mono uppercase font-bold text-accent-steel">
                    Volume & Sizing Parameters
                  </span>
                  <span className="text-[10px] font-mono text-text-subtle">
                    API Pricing As-of: 2026-10-01
                  </span>
                </div>

                <div className="space-y-5 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Monthly Task Volume (Docs/Tickets/Orders):</label>
                      <span className="text-text-primary font-bold">{taskVolumeMonthly.toLocaleString()} tasks</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="20000"
                      step="200"
                      value={taskVolumeMonthly}
                      onChange={(e) => setTaskVolumeMonthly(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Avg Input Tokens per Task:</label>
                      <span className="text-text-primary font-bold">{avgInputTokens} tokens</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="8000"
                      step="250"
                      value={avgInputTokens}
                      onChange={(e) => setAvgInputTokens(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                    <span className="text-[10px] text-text-subtle block mt-1">
                      Includes system prompts + OCR document text + vendor schema.
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Human Supervisor Review Rate (%):</label>
                      <span className="text-accent-gold font-bold">{humanReviewRatePercent}% exception review</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="30"
                      value={humanReviewRatePercent}
                      onChange={(e) => setHumanReviewRatePercent(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                    <span className="text-[10px] text-text-subtle block mt-1">
                      Percentage of edge-case tasks routed to a clerk for 1-tap sign-off.
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-text-muted block mb-1">Reviewer Cost ($/hr):</label>
                      <input
                        type="number"
                        value={reviewerHourlyRate}
                        onChange={(e) => setReviewerHourlyRate(Number(e.target.value))}
                        className="w-full bg-bg-surface border border-border-color p-2 text-text-primary"
                      />
                    </div>
                    <div>
                      <label className="text-text-muted block mb-1">Mins per Review:</label>
                      <input
                        type="number"
                        value={minutesPerReview}
                        onChange={(e) => setMinutesPerReview(Number(e.target.value))}
                        className="w-full bg-bg-surface border border-border-color p-2 text-text-primary"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Outputs (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-6 font-mono text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      Total Monthly Run Cost (Estimate)
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight mt-1">
                      ${Math.round(totalMonthlyOperationalCost).toLocaleString()} / month
                    </div>
                    <span className="text-[11px] text-text-subtle">
                      Equivalent to ~${costPerTask.toFixed(2)} per processed task
                    </span>
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

                {/* Detailed cost breakdown */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between p-3 bg-bg-secondary border border-border-color">
                    <span className="text-text-muted">LLM Inference API Tokens:</span>
                    <span className="text-text-primary font-bold">${totalApiTokenCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-bg-secondary border border-border-color">
                    <span className="text-text-muted">Cloud Compute & Database Buffer:</span>
                    <span className="text-text-primary font-bold">${cloudInfraBaseCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-bg-secondary border border-border-color">
                    <span className="text-text-muted">Human Supervisor Review Time:</span>
                    <span className="text-accent-gold font-bold">${humanReviewCostMonthly.toFixed(2)}</span>
                  </div>
                </div>

                {/* Formula Breakdown */}
                <div className="p-4 bg-bg-surface border border-border-color text-[11px] text-text-subtle space-y-1">
                  <div className="font-bold text-text-muted uppercase text-[10px]">
                    Pricing Assumptions & Formula:
                  </div>
                  <div>* Input Token Rate: $3.00 / 1M tokens; Output Token Rate: $15.00 / 1M tokens.</div>
                  <div>* Human Review = {Math.round(reviewsCountMonthly)} reviews × ({minutesPerReview} min / 60) × ${reviewerHourlyRate}/hr = ${Math.round(humanReviewCostMonthly)}.</div>
                  <div>* All outputs labeled estimate. As-of date: 2026-10-01 benchmark.</div>
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
