import React from 'react';
import { CaseType, Maturity } from '@/lib/truth-gate';
import Link from 'next/link';

interface TruthBadgeProps {
  caseType?: CaseType;
  maturity?: Maturity;
  evidenceId?: string;
  className?: string;
}

export default function TruthBadge({ caseType, maturity, evidenceId, className = '' }: TruthBadgeProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {caseType && (
        <span className="inline-flex items-center rounded-full border border-border-color bg-bg-surface text-text-muted text-[10px] font-mono tracking-wider px-2.5 py-0.5">
          {caseType === 'Own business' ? 'Own Business (Co-owned)' : caseType === 'Demo product' ? 'Demo Product' : caseType}
        </span>
      )}
      {maturity && (
        <span className="inline-flex items-center rounded-full border border-accent-gold/30 bg-accent-gold/5 text-accent-gold text-[10px] font-mono tracking-wider px-2.5 py-0.5">
          {maturity}
        </span>
      )}
      {evidenceId && (
        <Link
          href={`/proof-ledger#${evidenceId}`}
          className="inline-flex items-center text-[10px] font-mono tracking-wider text-text-subtle hover:text-text-primary transition-steel underline underline-offset-2"
          title={`Verified Evidence Record: ${evidenceId}`}
        >
          [{evidenceId}]
        </Link>
      )}
    </div>
  );
}
