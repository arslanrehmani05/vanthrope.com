import React from 'react';
import { getPlaceholder } from '@/lib/truth-gate';

export default function LocationBar() {
  const baseLocation = getPlaceholder('BASE_LOCATION') || 'UK & US Operating Timezones';
  const timezones = getPlaceholder('TIMEZONES') || 'UK / US';
  const overlap = getPlaceholder('OVERLAP') || '4 hours daily minimum';
  const visits = getPlaceholder('VISITS') || 'Available by arrangement';

  return (
    <div className="w-full bg-bg-secondary/60 border-b border-border-color py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] text-text-subtle font-mono tracking-wide">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>
            <strong className="text-text-muted font-medium">Timezones:</strong> {baseLocation}
          </span>
          <span className="hidden sm:inline text-border-color">|</span>
          <span>
            <strong className="text-text-muted font-medium">Live Overlap:</strong> {overlap} ({timezones})
          </span>
          <span className="hidden sm:inline text-border-color">|</span>
          <span>
            <strong className="text-text-muted font-medium">On-Site Sprints:</strong> {visits}
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-text-muted font-medium">
          Founder-Led Engineering Firm
        </div>
      </div>
    </div>
  );
}
