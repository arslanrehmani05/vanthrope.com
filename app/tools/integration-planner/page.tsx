'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, CheckCircle2, ShieldAlert, Key } from 'lucide-react';

interface SystemItem {
  id: string;
  name: string;
  category: string;
  dataExchanged: string[];
  requiredAccess: string[];
  primaryRisk: string;
}

const AVAILABLE_SYSTEMS: SystemItem[] = [
  {
    id: 'shopify',
    name: 'Shopify / Multi-channel Store',
    category: 'E-commerce',
    dataExchanged: ['Order line items', 'Customer addresses', 'SKU stock levels', 'Refund events'],
    requiredAccess: ['Admin API Access Token (Orders Read/Write, Inventory Read)'],
    primaryRisk: 'API rate limits during flash sale volume surges (requires token bucket queueing).'
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks / Xero',
    category: 'Accounting',
    dataExchanged: ['Invoices', 'Accounts payable', 'Customer ledger balances', 'Bank feed reconciliations'],
    requiredAccess: ['OAuth2 App Credentials (Accounting Transactions Write, Company Read)'],
    primaryRisk: 'Accidental duplicate general ledger journal postings (requires strict idempotency keys).'
  },
  {
    id: 'dhl',
    name: 'DHL / FedEx / Shipping Carriers',
    category: 'Logistics',
    dataExchanged: ['Tracking numbers', 'Shipping label weights', 'Customs clearance status', 'Freight billing surcharges'],
    requiredAccess: ['Carrier Developer API Key & Account Number'],
    primaryRisk: 'Dimensional weight billing adjustments arriving 30 days post-dispatch.'
  },
  {
    id: 'slack',
    name: 'Slack / Microsoft Teams / Telegram',
    category: 'Internal Communications',
    dataExchanged: ['Exception notification cards', 'Supervisor 1-tap sign-off tokens', 'Daily operational summaries'],
    requiredAccess: ['Incoming Webhook & Interactive Bot Token'],
    primaryRisk: 'Unauthorized staff clicking approval buttons if channels lack RBAC scoping.'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL / Supabase / AWS RDS',
    category: 'Core Database',
    dataExchanged: ['Immutable operational ledger', 'Normalized business transactions', 'Audit event history'],
    requiredAccess: ['Service Role Key / Connection String with Row Level Security (RLS)'],
    primaryRisk: 'Schema migration locks during peak production operating hours.'
  }
];

export default function IntegrationPlannerPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['shopify', 'quickbooks', 'postgres']);

  const toggleSystem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedSystems = AVAILABLE_SYSTEMS.filter((s) => selectedIds.includes(s.id));

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
            <span className="text-text-muted">Integration Planner</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 07 // PRE-FLIGHT INTEGRATION CHECKLIST
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              System Integration & Risk Planner
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              Select your active operational tools to compile an instant pre-flight checklist: data exchanged, required security credentials, and documented technical failure risks.
            </p>
          </div>
        </section>

        {/* Interactive Selection Studio */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* System Selector (5 cols) */}
              <div className="lg:col-span-5 bg-bg-primary p-8 border border-border-color space-y-4 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <span className="text-xs font-mono uppercase font-bold text-accent-steel">
                    Select Your Operational Tools
                  </span>
                  <span className="text-[10px] font-mono text-text-subtle">
                    {selectedIds.length} Selected
                  </span>
                </div>

                <div className="space-y-3">
                  {AVAILABLE_SYSTEMS.map((sys) => {
                    const isSelected = selectedIds.includes(sys.id);
                    return (
                      <button
                        key={sys.id}
                        onClick={() => toggleSystem(sys.id)}
                        className={`w-full p-4 border text-left transition-steel font-mono text-xs flex items-center justify-between ${
                          isSelected
                            ? 'border-accent-steel bg-bg-surface text-text-primary font-bold'
                            : 'border-border-color text-text-muted hover:border-border-steel/40'
                        }`}
                        style={{ minHeight: '44px' }}
                      >
                        <div>
                          <div>{sys.name}</div>
                          <div className="text-[10px] text-text-subtle">{sys.category}</div>
                        </div>
                        <span className={isSelected ? 'text-accent-steel font-bold' : 'text-text-subtle'}>
                          {isSelected ? '✓ ADDED' : '+ ADD'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Output Checklist (7 cols) */}
              <div className="lg:col-span-7 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-8 font-mono text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      Pre-Flight Architecture Matrix (Estimate)
                    </span>
                    <div className="text-xl font-bold text-text-primary uppercase tracking-tight mt-1">
                      {selectedSystems.length} Systems Connected
                    </div>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border-color px-3 py-1.5 transition-steel print:hidden"
                    style={{ minHeight: '36px' }}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Architecture Matrix</span>
                  </button>
                </div>

                {/* System check blocks */}
                <div className="space-y-6">
                  {selectedSystems.map((sys) => (
                    <div key={sys.id} className="p-6 bg-bg-secondary border border-border-color space-y-3 text-xs">
                      <div className="flex justify-between items-baseline border-b border-border-color/60 pb-2">
                        <span className="font-bold text-text-primary text-sm uppercase">{sys.name}</span>
                        <span className="text-[10px] text-accent-steel uppercase">{sys.category}</span>
                      </div>

                      <div>
                        <span className="text-text-muted font-bold text-[10px] uppercase block mb-1">
                          Data Exchanged:
                        </span>
                        <div className="text-text-primary leading-relaxed">
                          {sys.dataExchanged.join(', ')}
                        </div>
                      </div>

                      <div>
                        <span className="text-accent-steel font-bold text-[10px] uppercase block mb-1">
                          Required Access Credentials:
                        </span>
                        <div className="text-text-muted text-[11px]">
                          {sys.requiredAccess.join('; ')}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border-color/40 flex items-start gap-2 text-rose-400 text-[11px]">
                        <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                        <span><strong>Key Risk:</strong> {sys.primaryRisk}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-bg-surface border border-border-color text-[11px] text-text-subtle space-y-1">
                  <div>* Access Principle: Least privilege credentials provisioned only in client cloud secret vaults.</div>
                  <div>* All outputs labeled estimate as of 2026-11-02.</div>
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
