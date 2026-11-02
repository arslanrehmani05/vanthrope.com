'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, RefreshCw } from 'lucide-react';

export default function ProcessMapperPage() {
  const [formData, setFormData] = useState({
    processName: 'Supplier Invoice & Payment Reconciliation',
    trigger: 'Incoming email attachment (PDF invoice from vendor)',
    manualSteps: 'Clerk downloads PDF, manually re-keys into Excel, emails warehouse lead for delivery confirmation, then types line items into accounting software.',
    bottleneck: 'Waiting 3 days for warehouse manager to confirm physical receipt of goods.',
    volumePerWeek: '45',
    errorRate: '8%',
  });

  const [generated, setGenerated] = useState(true);

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
            <span className="text-text-muted">Process Mapper</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 01 // IN-BROWSER WORKFLOW ARCHITECT
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Operational Process Mapper
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              Answer 4 guided questions to translate any manual coordination bottleneck into a one-page current-state diagram and a safe, staged automated architecture. Free, runs in your browser, and printable.
            </p>
          </div>
        </section>

        {/* Input & Output Studio */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form Input Column (5 cols) */}
              <div className="lg:col-span-5 bg-bg-primary p-8 border border-border-color space-y-6 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <span className="text-xs font-mono uppercase font-bold text-accent-steel">
                    Workflow Diagnostic Inputs
                  </span>
                  <span className="text-[10px] font-mono text-text-subtle">
                    Client-Side Only
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <label className="text-text-muted block mb-1">Process Name:</label>
                    <input
                      type="text"
                      value={formData.processName}
                      onChange={(e) => setFormData({ ...formData, processName: e.target.value })}
                      className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-text-muted block mb-1">Initial Trigger (How does it start?):</label>
                    <input
                      type="text"
                      value={formData.trigger}
                      onChange={(e) => setFormData({ ...formData, trigger: e.target.value })}
                      className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-text-muted block mb-1">Current Manual Steps:</label>
                    <textarea
                      rows={4}
                      value={formData.manualSteps}
                      onChange={(e) => setFormData({ ...formData, manualSteps: e.target.value })}
                      className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-text-muted block mb-1">Primary Bottleneck / Delay Point:</label>
                    <input
                      type="text"
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-text-muted block mb-1">Volume / Week:</label>
                      <input
                        type="text"
                        value={formData.volumePerWeek}
                        onChange={(e) => setFormData({ ...formData, volumePerWeek: e.target.value })}
                        className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-text-muted block mb-1">Est. Error Rate (%):</label>
                      <input
                        type="text"
                        value={formData.errorRate}
                        onChange={(e) => setFormData({ ...formData, errorRate: e.target.value })}
                        className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-color flex gap-4">
                  <button
                    onClick={() => setGenerated(true)}
                    className="w-full bg-accent-steel text-bg-primary font-bold text-xs uppercase tracking-widest py-3 hover:bg-accent-steel-hover transition-steel"
                    style={{ minHeight: '44px' }}
                  >
                    Regenerate Blueprint
                  </button>
                </div>
              </div>

              {/* Output Blueprint Column (7 cols) */}
              <div className="lg:col-span-7 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-8 font-mono">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      One-Page Architecture Blueprint (Estimate)
                    </span>
                    <h2 className="text-xl font-bold text-text-primary uppercase tracking-tight mt-1">
                      {formData.processName}
                    </h2>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border-color px-3 py-1.5 transition-steel print:hidden"
                    style={{ minHeight: '36px' }}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>

                {/* 1. Current State ASCII Map */}
                <div className="space-y-2">
                  <span className="text-xs uppercase text-text-subtle font-bold block">
                    1. Current-State Friction Diagram
                  </span>
                  <div className="p-4 bg-bg-secondary border border-border-color text-xs text-rose-400/90 leading-relaxed overflow-x-auto">
                    [Trigger: {formData.trigger}]<br />
                    &nbsp;&nbsp;↓<br />
                    [Manual Churn: {formData.manualSteps}]<br />
                    &nbsp;&nbsp;↓ (BOTTLENECK: {formData.bottleneck})<br />
                    [Delay: ~{formData.volumePerWeek} tasks/wk with {formData.errorRate} exception risk]
                  </div>
                </div>

                {/* 2. Proposed Staged Architecture */}
                <div className="space-y-2">
                  <span className="text-xs uppercase text-accent-steel font-bold block">
                    2. Proposed Staged Architecture (Automated & Gated)
                  </span>
                  <div className="p-4 bg-bg-secondary border border-accent-steel/30 text-xs text-text-primary leading-relaxed space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-accent-steel font-bold">STAGE 1:</span>
                      <span><strong>Event Ingestion:</strong> Webhook listener or OCR mailbox parser normalizes raw payload into structured JSON.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent-steel font-bold">STAGE 2:</span>
                      <span><strong>Deterministic Validation:</strong> Strict Zod schema checks fields, vendor tax ID, and math checksums.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent-gold font-bold">STAGE 3:</span>
                      <span><strong>Approval Gate:</strong> Automated matching checks PO receipt. If variance &gt; tolerance, prompts supervisor via Telegram/Slack with 1-tap sign-off.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">STAGE 4:</span>
                      <span><strong>Immutable Ledger Commit:</strong> Writes audited record directly to PostgreSQL DB. Rollback hash generated.</span>
                    </div>
                  </div>
                </div>

                {/* Assumptions & Notes */}
                <div className="pt-4 border-t border-border-color text-[11px] text-text-subtle space-y-1">
                  <div>* Assumption: Core database or ERP exposes read/write REST or GraphQL API endpoints.</div>
                  <div>* Formula: All outputs labeled estimate. As-of date: 2026-11-02.</div>
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
