'use client';

import { useState } from 'react';
import { ShieldCheck, Lock, Eye, RotateCcw, AlertTriangle } from 'lucide-react';

export default function SafeExplorer() {
  const [activeTab, setActiveTab] = useState<'inputs' | 'limits' | 'review' | 'audit'>('inputs');

  const tabs = [
    {
      id: 'inputs' as const,
      label: '01. Input Hardening',
      icon: ShieldCheck,
      headline: 'Untrusted data is isolated before LLMs touch it',
      description: 'Incoming emails, PDF invoices, and form submissions are treated strictly as untrusted raw strings. They are sanitized, passed through prompt-injection filters, and validated against strict Zod schemas before being processed.',
      rules: [
        'Strip executable script tags and unexpected MIME types',
        'Extract text via deterministic OCR libraries, not generative models',
        'Reject payloads that fail basic syntax or boundary rules'
      ],
      codeSample: `// Zod Schema Boundary Gate
const InvoicePayloadSchema = z.object({
  vendorTaxId: z.string().regex(/^[0-9]{9}$/),
  invoiceTotal: z.number().positive().max(500000),
  lineItemCount: z.number().int().min(1).max(500)
});`
    },
    {
      id: 'limits' as const,
      label: '02. Execution Limits',
      icon: Lock,
      headline: 'Strict blast-radius caps on cost, actions, and API write authority',
      description: 'Agents run in restricted, sandboxed execution runtimes. They have zero authority to make financial transfers, delete databases, or modify user roles. Every agent operates under tight rate and spend limits.',
      rules: [
        'Daily hard spend cap with automatic kill switch on token consumption',
        'Write permissions restricted to staging/draft database tables only',
        'Maximum 3 recursive tool iterations per request before halting'
      ],
      codeSample: `// Runtime Rate & Spend Guardrail
if (dailySpendUSD >= DAILY_KILL_SWITCH_THRESHOLD) {
  await triggerCircuitBreaker("Daily spend cap exceeded");
  throw new OperationalCircuitBreakerError("Spend ceiling breached.");
}`
    },
    {
      id: 'review' as const,
      label: '03. Human Approval Gates',
      icon: Eye,
      headline: 'High-value and anomalous decisions require clerk or supervisor sign-off',
      description: 'Whenever a variance exceeds a configurable threshold (e.g. freight cost > 10% delta, invoice > $5,000, or low-confidence OCR match), the agent pauses execution and requests explicit human sign-off.',
      rules: [
        'Interactive notification dispatched via Telegram / Slack to authorized supervisors',
        'Side-by-side visual diff showing original invoice vs extracted field',
        'Single-click approve or reject with mandatory rejection reason'
      ],
      codeSample: `// Threshold Verification Gate
if (freightVarianceUSD > 100 || confidenceScore < 0.95) {
  return await dispatchSupervisorApprovalCard({
    transactionId,
    reason: "Freight variance exceeds $100 tolerance"
  });
}`
    },
    {
      id: 'audit' as const,
      label: '04. Immutable Audit Trail',
      icon: RotateCcw,
      headline: 'Every automated decision is recorded with cryptographic replayability',
      description: 'All system triggers, prompts, model responses, supervisor approvals, and database mutations are logged in an append-only audit ledger with cryptographic hashes. Any flawed transaction can be rolled back with one click.',
      rules: [
        'Append-only PostgreSQL event ledger with transaction hashing',
        'Document and prompt snapshots retained for compliance',
        'Instant point-in-time state reversion'
      ],
      codeSample: `// Immutable Audit Commit
await db.auditLog.insert({
  actionId: crypto.randomUUID(),
  inputHash: sha256(rawInput),
  approverId: supervisorUser.id,
  committedTimestamp: new Date().toISOString()
});`
    }
  ];

  const current = tabs.find((t) => t.id === activeTab)!;
  const Icon = current.icon;

  return (
    <div className="w-full bg-bg-secondary border border-border-steel/30 p-6 md:p-10 text-left">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-color mb-8">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent-steel block mb-1">
            ARCHITECTURAL GUARDRAILS
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-text-primary uppercase tracking-tight">
            How an agent is kept safe
          </h3>
        </div>
        <div className="text-xs font-mono text-accent-gold border border-accent-gold/40 px-3 py-1">
          Zero Direct DB Writes
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 text-left border transition-steel font-mono text-xs ${
              activeTab === tab.id
                ? 'border-accent-steel bg-bg-surface text-text-primary font-bold'
                : 'border-border-color text-text-subtle hover:text-text-muted hover:border-border-steel/40'
            }`}
            style={{ minHeight: '44px' }}
          >
            <div className="truncate">{tab.label}</div>
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Description & Rules (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-accent-steel">
            <Icon className="w-5 h-5" />
            <h4 className="text-lg font-bold text-text-primary tracking-tight">
              {current.headline}
            </h4>
          </div>
          <p className="text-sm text-text-muted leading-relaxed font-normal">
            {current.description}
          </p>

          <div className="mt-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-text-muted block">
              Enforced Specifications:
            </span>
            {current.rules.map((rule, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-text-primary font-mono">
                <span className="text-accent-steel">▸</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Code Guardrail Example (5 cols) */}
        <div className="lg:col-span-5 bg-bg-primary p-4 border border-border-color font-mono text-xs text-text-muted">
          <div className="text-[10px] text-text-subtle uppercase tracking-widest pb-2 border-b border-border-color mb-3">
            Guardrail Implementation Snippet
          </div>
          <pre className="text-text-primary overflow-x-auto text-[11px] leading-relaxed">
            {current.codeSample}
          </pre>
        </div>

      </div>
    </div>
  );
}
