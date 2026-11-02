import React from 'react';
import { getPlaceholder } from '@/lib/truth-gate';

export default function LocationBar() {
  const baseLocation = getPlaceholder('BASE_LOCATION') || '{{BASE_LOCATION}}';
  const timezones = getPlaceholder('TIMEZONES') || '{{TIMEZONES}}';
  const overlap = getPlaceholder('OVERLAP') || '{{OVERLAP}}';
  const visits = getPlaceholder('VISITS') || '{{VISITS}}';

  return (
    <div className="w-full bg-bg-secondary/60 border-b border-border-color py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] text-text-subtle font-mono tracking-wide">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>
            <strong className="text-text-muted font-medium">Base:</strong> {baseLocation}
          </span>
          <span className="hidden sm:inline text-border-steel">|</span>
          <span>
            <strong className="text-text-muted font-medium">Overlap with {timezones}:</strong> {overlap}
          </span>
          <span className="hidden sm:inline text-border-steel">|</span>
          <span>
            <strong className="text-text-muted font-medium">On-site visits:</strong> {visits}
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-accent-steel/80 font-bold">
          Founder-Led Systems Firm
        </div>
      </div>
    </div>
  );
}
