import Link from 'next/link';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Unplug, 
  Clock, 
  RefreshCcw, 
  Inbox, 
  FileCheck, 
  Search 
} from 'lucide-react';
import TruthBadge from '@/components/common/truth-badge';

export const SOLUTIONS_LIST = [
  {
    slug: 'spreadsheets',
    title: 'Too Many Spreadsheets',
    problem: 'Critical operations running across dozens of fragile Excel workbooks with zero concurrency and manual copy-pasting.',
    outcome: 'Centralized database with automated validation and role-based permissions.',
    icon: FileSpreadsheet,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'reporting',
    title: 'Manual Reporting',
    problem: 'Staff wasting every Monday compiling sales, margin, and pipeline numbers from 5 different software dashboards.',
    outcome: 'Automated daily summaries delivered to leadership with anomaly detection.',
    icon: BarChart3,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'disconnected-tools',
    title: 'Disconnected Tools',
    problem: 'Orders in Shopify, shipments in DHL, inventory in legacy ERP, and invoices in QuickBooks failing to communicate.',
    outcome: 'Reliable webhook middleware with dead-letter queue recovery.',
    icon: Unplug,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'slow-approvals',
    title: 'Slow Approvals & Handoffs',
    problem: 'High-value customer requests and purchase orders stalled in manager email inboxes for days.',
    outcome: 'Interactive Slack/Telegram approval bot with clear timeout escalation.',
    icon: Clock,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'stock-invoices-sync',
    title: 'Orders, Stock & Invoices Out of Sync',
    problem: 'Warehouse packing slips differ from accounting ledger entries, causing revenue leaks and inventory discrepancies.',
    outcome: 'Deterministic three-way reconciliation matching POs, delivery receipts, and invoices.',
    icon: RefreshCcw,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'customer-requests',
    title: 'Customer Requests Piling Up',
    problem: 'Support and dispatch teams drowned in repetitive inquiry emails that require looking up tracking numbers.',
    outcome: 'Intelligent triage agent pulling live database status and drafting accurate replies for agent review.',
    icon: Inbox,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'month-end-compliance',
    title: 'Month-End & Compliance Paperwork',
    problem: 'Closing monthly books drags for 10+ days due to unallocated bank deposits and missing tax receipts.',
    outcome: 'Automated double-entry reconciliation engine slashing closing time down to 48 hours.',
    icon: FileCheck,
    maturity: 'Running in production' as const,
  },
  {
    slug: 'searchable-documents',
    title: 'Documents & Emails Nobody Can Search',
    problem: 'Thousands of PDF invoices, engineering specs, and contracts locked in email threads with zero semantic search.',
    outcome: 'Local semantic indexing pipeline with citation-backed answer retrieval.',
    icon: Search,
    maturity: 'Running in production' as const,
  },
];

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-32 sm:py-40 border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="eyebrow mb-6">
          Solutions by Problem
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 text-left">
          <div className="max-w-3xl">
            <h2 className="headline text-3xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
              We fix the specific friction slowing your business down.
            </h2>
            <p className="text-base text-text-muted mt-4 font-normal">
              Click into each operational challenge to review the exact architecture, what changes, what we build, and what this is not.
            </p>
          </div>
          <Link
            href="/solutions"
            className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 shrink-0"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            View all 8 operational solutions <span className="text-sm">→</span>
          </Link>
        </div>

        {/* 8 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_LIST.map((sol) => {
            const Icon = sol.icon;
            return (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group bg-bg-secondary/70 backdrop-blur-md rounded-2xl border border-border-color hover:border-white/20 hover:-translate-y-0.5 p-6 flex flex-col justify-between transition-all text-left"
                style={{ minHeight: '300px' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-6 h-6 text-text-muted group-hover:text-text-primary group-hover:scale-105 transition-all" />
                    <TruthBadge maturity={sol.maturity} />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary tracking-tight mb-3 group-hover:text-text-primary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-4 font-normal">
                    {sol.problem}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-color text-xs text-text-muted group-hover:text-text-primary transition-colors flex items-center justify-between">
                  <span>Explore Blueprint</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
