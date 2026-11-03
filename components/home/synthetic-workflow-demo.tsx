'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Play, Pause, RefreshCw, FileText, ArrowRight } from 'lucide-react';

export default function SyntheticWorkflowDemo() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      title: '01. Raw Messy Input Ingestion',
      subtitle: 'Unstructured PDF Invoice #INV-8891 received via incoming email attachment.',
      status: 'PARSING',
      content: (
        <div className="bg-bg-primary/60 p-4 rounded-xl border border-border-color font-mono text-xs text-text-muted space-y-1.5">
          <div className="text-text-subtle">{"//"} Raw Text Stream from OCR Ingest</div>
          <div className="text-text-primary">VENDOR: Apex Industrial Spares LLC</div>
          <div>DATE: 2026-10-24 | INV_TOTAL: $14,850.00</div>
          <div>LINES: 40x Machined Roller Bearings @ $350.00 = $14,000.00</div>
          <div>FREIGHT: $850.00 (Expedited DHL Express)</div>
          <div className="text-amber-400 text-[11px] pt-1">
            ⚠ Flag: PO #PO-4092 expected standard freight rate ($450.00). Delta detected.
          </div>
        </div>
      ),
    },
    {
      title: '02. Deterministic Validation & Schema Check',
      subtitle: 'Mathematical checksum validation and vendor GL mapping before any database write.',
      status: 'VALIDATING',
      content: (
        <div className="bg-bg-primary/60 p-4 rounded-xl border border-border-color font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-text-primary">
            <span>Formula Checksum: ($350 x 40) + $850</span>
            <span className="text-emerald-400 font-bold">✓ $14,850.00 MATCH</span>
          </div>
          <div className="flex items-center justify-between text-text-primary">
            <span>Vendor Tax ID Lookup (Apex Ind):</span>
            <span className="text-emerald-400 font-bold">✓ Active (GL #2100-AP)</span>
          </div>
          <div className="flex items-center justify-between text-text-muted">
            <span>Purchase Order PO-4092 Line Variance:</span>
            <span className="text-amber-400 font-bold">+ $400.00 Freight Variance</span>
          </div>
          <div className="text-[11px] text-text-subtle border-t border-border-color pt-2">
            Deterministic Rule: Any variance &gt; $100 requires mandatory supervisor sign-off.
          </div>
        </div>
      ),
    },
    {
      title: '03. Human Approval Gate (Supervisor Sign-off)',
      subtitle: 'System halts automatic posting and prompts supervisor with exact difference.',
      status: 'AWAITING APPROVAL',
      content: (
        <div className="bg-bg-primary/60 p-4 rounded-xl border border-border-color font-mono text-xs space-y-3">
          <div className="flex items-start gap-2 text-text-primary">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Variance Reason: </span>
              <span className="text-text-muted">DHL Expedited Delivery authorized by Operations Lead to avert line shutdown.</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-bg-surface border border-border-color flex items-center justify-between text-[11px]">
            <span>Supervisor Action: Arslan Rehmani (Finance Lead)</span>
            <span className="text-emerald-400 font-bold uppercase tracking-wider">Approved via Telegram</span>
          </div>
          <div className="text-[10px] text-text-subtle">
            Auth Token: 9f8a2c1e-4b6d-789a | Recorded at 14:02:11 UTC
          </div>
        </div>
      ),
    },
    {
      title: '04. Immutable Ledger Write & Audit Trail',
      subtitle: 'Dual-entry ledger post committed with audit trail and document link.',
      status: 'COMMITTED',
      content: (
        <div className="bg-bg-primary/60 p-4 rounded-xl border border-border-color font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-emerald-400">
            <span>DR: #1400 (Inventory - Spares)</span>
            <span>$14,000.00</span>
          </div>
          <div className="flex items-center justify-between text-emerald-400">
            <span>DR: #6200 (Freight Inbound)</span>
            <span>$850.00</span>
          </div>
          <div className="flex items-center justify-between text-emerald-400">
            <span>CR: #2100 (Accounts Payable - Apex)</span>
            <span>$14,850.00</span>
          </div>
          <div className="border-t border-border-color pt-2 text-[10px] text-text-subtle flex justify-between">
            <span>Transaction Hash: 0x8b4...119d</span>
            <span>Audit Trail: Immutable</span>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full rounded-2xl bg-bg-secondary/80 border border-border-color p-6 md:p-8 text-left max-w-4xl mx-auto backdrop-blur-md shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-text-primary">
            Synthetic Workflow Demo
          </span>
          <span className="text-[10px] rounded-full border border-border-color text-text-subtle uppercase px-2.5 py-0.5 ml-2 font-mono">
            Synthetic Data
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-xs font-mono text-text-muted hover:text-text-primary flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-full bg-bg-primary/80 border border-border-color"
            aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
            style={{ minHeight: '32px' }}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Resume'}</span>
          </button>
          <button
            onClick={() => setStep((prev) => (prev + 1) % steps.length)}
            className="text-xs font-mono text-text-muted hover:text-text-primary flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-full bg-bg-primary/80 border border-border-color"
            title="Next step"
            style={{ minHeight: '32px' }}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Next</span>
          </button>
        </div>
      </div>

      {/* Step Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => {
              setStep(idx);
              setIsPlaying(false);
            }}
            className={`text-left p-3 rounded-xl border transition-all text-xs font-mono ${
              step === idx
                ? 'border-text-primary/60 bg-bg-surface text-text-primary font-semibold shadow-sm'
                : 'border-border-color/60 bg-bg-primary/30 text-text-subtle hover:text-text-muted hover:border-border-color'
            }`}
            style={{ minHeight: '44px' }}
          >
            <div className="text-[10px] text-text-subtle mb-0.5">Stage 0{idx + 1}</div>
            <div className="truncate">{s.status}</div>
          </button>
        ))}
      </div>

      {/* Active Stage Details */}
      <div className="mb-4">
        <h3 className="text-base font-medium text-text-primary tracking-tight mb-1">
          {steps[step].title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">
          {steps[step].subtitle}
        </p>
      </div>

      {/* Active Stage Content */}
      <div className="mt-4">{steps[step].content}</div>

      {/* Footer explanation */}
      <div className="mt-6 pt-4 border-t border-border-color flex flex-wrap items-center justify-between text-[11px] text-text-subtle font-mono">
        <span>Cycle Duration: 20 seconds total</span>
        <span>Human Oversight: Mandatory on Variance</span>
      </div>
    </div>
  );
}
