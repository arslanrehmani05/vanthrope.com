import Link from 'next/link';
import VanthropeLogo from '@/components/brand-logo';
import { getPlaceholder } from '@/lib/truth-gate';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const teamModel = getPlaceholder('TEAM') || 'Vanthrope (founder-led)';
  const legalEntity = getPlaceholder('LEGAL_ENTITY');

  return (
    <footer className="border-t border-border-color bg-bg-secondary/40 backdrop-blur-md pt-24 pb-12 text-text-muted">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          
          {/* Column 1: Brand & Firm Identity */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-text-primary">
              <VanthropeLogo className="w-7 h-7" />
              <span className="font-medium tracking-tight text-lg text-text-primary">Vanthrope</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm font-normal">
              Vanthrope engineers custom operational software, deterministic data pipelines, and mission-critical autonomous agent swarms for mid-market enterprises.
            </p>
            <div className="text-[11px] font-mono text-text-subtle pt-2 space-y-1">
              <div>
                <span>Operating model: </span>
                <span className="text-text-muted font-medium">Founder-led (Arslan Rehmani, Principal Systems Architect)</span>
              </div>
              <div>
                <span>Founder ledger: </span>
                <a
                  href="https://arslanrehmani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary underline hover:text-text-muted transition-colors"
                >
                  arslanrehmani.com
                </a>
              </div>
            </div>
            {legalEntity && (
              <div className="text-[10px] text-text-subtle mt-2 p-3 bg-bg-secondary/70 border border-border-color rounded-xl">
                {legalEntity}
              </div>
            )}
          </div>

          {/* Column 2: Solutions & Agents */}
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-text-primary uppercase tracking-wider block font-mono text-[11px] mb-2">
              Capabilities
            </span>
            <Link href="/solutions" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Solutions by Problem
            </Link>
            <Link href="/agents" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Agent Architecture &amp; Demos
            </Link>
            <Link href="/services" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Engagement Models &amp; Pricing
            </Link>
            <Link href="/industries" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Verified Industries
            </Link>
          </div>

          {/* Column 3: Work, Method & Tools */}
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-text-primary uppercase tracking-wider block font-mono text-[11px] mb-2">
              Evidence &amp; Tools
            </span>
            <Link href="/work" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Case Studies &amp; Proof
            </Link>
            <Link href="/method" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Our 5-Stage Method
            </Link>
            <Link href="/tools" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              7 Interactive Tools
            </Link>
            <Link href="/proof-ledger" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Public Proof Ledger
            </Link>
          </div>

          {/* Column 4: Governance & Legal */}
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-text-primary uppercase tracking-wider block font-mono text-[11px] mb-2">
              Trust &amp; Legal
            </span>
            <Link href="/security" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Security &amp; Ownership
            </Link>
            <Link href="/enterprise" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Enterprise Governance Pack
            </Link>
            <Link href="/fit" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Is Vanthrope Right For You?
            </Link>
            <Link href="/legal/privacy" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Privacy &amp; Cookie Policy
            </Link>
            <Link href="/legal/terms" className="text-xs hover:text-text-primary transition-colors py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Terms of Engagement
            </Link>
          </div>

        </div>

        {/* Bottom Strip with subtle border */}
        <div className="border-t border-border-color/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-text-subtle">
          <div>
            &copy; {currentYear} Vanthrope. All rights reserved. Services firm model.
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <span>Deterministic Schema Validation</span>
            <span>Client Cloud Ownership</span>
            <span>Truth Gate Audited</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
