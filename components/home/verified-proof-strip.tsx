import Link from 'next/link';
import { getVerifiedEvidence } from '@/lib/truth-gate';
import TruthBadge from '@/components/common/truth-badge';

export default function VerifiedProofStrip() {
  const metrics = [
    {
      evidence: getVerifiedEvidence('ev-tm-01'),
      headline: '10 clerks → 1 operator',
      subtext: '27 looms, PKR 3 crore/mo managed',
    },
    {
      evidence: getVerifiedEvidence('ev-bh-01'),
      headline: '3,000+ daily skins',
      subtext: 'Real-time yield, 0% grading discrepancies',
    },
    {
      evidence: getVerifiedEvidence('ev-fin-01'),
      headline: '3 days → 45 min',
      subtext: '98% automated reconciliation match rate',
    },
    {
      evidence: getVerifiedEvidence('ev-trust-01'),
      headline: '100% Client Owned',
      subtext: 'Accounts, keys, code & documentation',
    },
  ];

  return (
    <div className="w-full bg-bg-surface border-y border-border-color py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-steel block mb-1">
              TRUTH GATE VERIFIED
            </span>
            <h2 className="text-xl md:text-2xl font-black text-text-primary tracking-tight uppercase">
              Proven Operational Outcomes
            </h2>
          </div>
          <Link
            href="/proof-ledger"
            className="text-xs font-mono text-accent-steel hover:text-accent-steel-hover transition-steel flex items-center gap-1.5"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Inspect Evidence Registry <span className="text-sm">→</span>
          </Link>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-secondary p-6 border border-border-steel/20 flex flex-col justify-between text-left"
            >
              <div>
                <TruthBadge
                  caseType={item.evidence.caseType}
                  maturity={item.evidence.maturity}
                  evidenceId={item.evidence.id}
                  className="mb-3"
                />
                <div className="text-2xl lg:text-3xl font-black text-text-primary tracking-tight mt-2">
                  {item.headline}
                </div>
                <div className="text-xs text-text-muted mt-1.5 leading-relaxed font-normal">
                  {item.subtext}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-border-color text-[10px] text-text-subtle font-mono truncate">
                Source: {item.evidence.verificationSource}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
