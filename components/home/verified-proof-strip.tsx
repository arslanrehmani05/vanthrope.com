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
    <div className="w-full bg-bg-secondary/40 border-y border-border-color py-14 px-6 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow mb-1">
              Truth Gate Verified
            </span>
            <h2 className="headline text-xl md:text-2xl font-medium text-text-primary tracking-tight">
              Proven Operational Outcomes
            </h2>
          </div>
          <Link
            href="/proof-ledger"
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5"
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
              className="bg-bg-secondary/70 p-6 rounded-2xl border border-border-color flex flex-col justify-between text-left transition-all hover:border-white/20 backdrop-blur-md"
            >
              <div>
                <TruthBadge
                  caseType={item.evidence.caseType}
                  maturity={item.evidence.maturity}
                  evidenceId={item.evidence.id}
                  className="mb-3"
                />
                <div className="text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight mt-2">
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
