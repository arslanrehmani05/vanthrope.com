import Link from 'next/link';
import VanthropeLogo from '@/components/brand-logo';
import { getPlaceholder } from '@/lib/truth-gate';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const teamModel = getPlaceholder('TEAM') || 'Vanthrope (founder-led)';
  const legalEntity = getPlaceholder('LEGAL_ENTITY');

  return (
    <footer className="bg-[#080808] border-t border-border-color pt-24 pb-12 text-text-muted">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          
          {/* Column 1: Brand & Firm Identity */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-text-primary">
              <VanthropeLogo className="w-7 h-7" />
              <span className="font-black tracking-tight uppercase text-lg">Vanthrope</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm">
              We design, build, and deploy custom software, automations, and AI agents that run the unglamorous parts of a business. Services only. No subscription software product.
            </p>
            <div className="text-[11px] font-mono text-text-subtle pt-2">
              <span>Operating model: </span>
              <span className="text-text-muted font-medium">{teamModel}</span>
            </div>
            {legalEntity && (
              <div className="text-[10px] text-text-subtle mt-2 p-3 bg-bg-secondary border border-border-color">
                {legalEntity}
              </div>
            )}
          </div>

          {/* Column 2: Solutions & Agents */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
              Capabilities
            </span>
            <Link href="/solutions" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Solutions by Problem
            </Link>
            <Link href="/agents" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Agent Architecture & Demos
            </Link>
            <Link href="/services" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Engagement Models & Pricing
            </Link>
            <Link href="/industries" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Verified Industries
            </Link>
          </div>

          {/* Column 3: Work, Method & Tools */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
              Evidence & Tools
            </span>
            <Link href="/work" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Case Studies & Proof
            </Link>
            <Link href="/method" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Our 5-Stage Method
            </Link>
            <Link href="/tools" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              7 Interactive Tools
            </Link>
            <Link href="/proof-ledger" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Public Proof Ledger
            </Link>
          </div>

          {/* Column 4: Governance & Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
              Trust & Legal
            </span>
            <Link href="/security" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Security & Ownership
            </Link>
            <Link href="/enterprise" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Enterprise Governance Pack
            </Link>
            <Link href="/fit" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Is Vanthrope Right For You?
            </Link>
            <Link href="/legal/privacy" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Privacy & Cookie Policy
            </Link>
            <Link href="/legal/terms" className="text-xs hover:text-text-primary transition-steel py-1" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>
              Terms of Engagement
            </Link>
          </div>

        </div>

        {/* Bottom Strip with steel border */}
        <div className="border-t border-border-steel/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider uppercase font-semibold text-text-subtle">
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
