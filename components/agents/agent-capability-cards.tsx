import TruthBadge from '@/components/common/truth-badge';
import { Maturity } from '@/lib/truth-gate';

export interface AgentCard {
  title: string;
  job: string;
  permissions: string[];
  forbiddenActions: string[];
  humanApprovalPoints: string[];
  failureBehaviour: string;
  metricsTracked: string[];
  costDrivers: string;
  maturity: Maturity;
}

export const AGENT_CAPABILITIES: AgentCard[] = [
  {
    title: 'Document & Email Intake',
    job: 'Continuously extract structured entities (vendor, invoice #, amounts, due dates, line items) from incoming PDFs and email streams.',
    permissions: ['Read-only mailbox access', 'Write to staging intake table', 'Read verified OCR text'],
    forbiddenActions: ['Sending outbound emails to external clients', 'Mutating production GL tables'],
    humanApprovalPoints: ['Confidence score below 92%', 'Mismatched vendor banking coordinates'],
    failureBehaviour: 'Quarantines document in unallocated review inbox; alerts supervisor.',
    metricsTracked: ['OCR extraction accuracy', 'Processing time per page', 'Supervisor exception rate'],
    costDrivers: 'OCR page count + LLM entity parsing tokens',
    maturity: 'Running in production'
  },
  {
    title: 'Data Entry & Reconciliation',
    job: 'Perform three-way mathematical and reference matching across purchase orders, warehouse goods received notes, and supplier invoices.',
    permissions: ['Query PO database', 'Query warehouse GRN receipts', 'Draft staging reconciliation entries'],
    forbiddenActions: ['Approving invoices above $0 threshold without validation', 'Overriding supplier pricing'],
    humanApprovalPoints: ['Any price or quantity variance > 0.5%', 'Unlisted freight surcharge'],
    failureBehaviour: 'Reconciliation marked pending; discrepancy highlighted for clerk review.',
    metricsTracked: ['Auto-clear percentage', 'Discrepancy catch rate', 'Hours saved weekly'],
    costDrivers: 'Database query volume + schema validation checks',
    maturity: 'Running in production'
  },
  {
    title: 'Reporting & Summaries',
    job: 'Aggregate transactional data across banking, advertising, and order platforms into automated daily/weekly operational briefs.',
    permissions: ['Read-only API access to Shopify, Meta Ads, and bank feeds', 'Send briefings to authorized Slack channels'],
    forbiddenActions: ['Modifying budget allocations', 'Editing financial ledger balances'],
    humanApprovalPoints: ['Publishing external-facing investor summaries'],
    failureBehaviour: 'Flags missing feeds; reports last-known verified state with stale warnings.',
    metricsTracked: ['Data delivery punctuality', 'Variance alert precision', 'Feed availability %'],
    costDrivers: 'Scheduled compute runtimes + daily report generation tokens',
    maturity: 'Running in production'
  },
  {
    title: 'Inventory & Procurement Follow-ups',
    job: 'Monitor stock reorder points and automate draft purchase orders and vendor lead-time confirmation emails.',
    permissions: ['Read inventory levels and supplier lead-time tables', 'Draft vendor inquiry emails'],
    forbiddenActions: ['Executing binding purchase orders with suppliers', 'Releasing financial deposits'],
    humanApprovalPoints: ['Procurement manager sign-off on all purchase orders > $1,000'],
    failureBehaviour: 'Halts draft creation and notifies procurement lead if vendor lead-time exceeds SLA.',
    metricsTracked: ['Stockout prevention rate', 'Vendor response latency', 'Lead-time accuracy'],
    costDrivers: 'Inventory polling frequency + vendor response parsing',
    maturity: 'Running in production'
  },
  {
    title: 'Customer-Operations Triage',
    job: 'Classify inbound shipping and status inquiries, verify customer identity, and draft accurate status updates from database feeds.',
    permissions: ['Read-only order tracking and shipping carrier API lookup', 'Draft support ticket responses'],
    forbiddenActions: ['Issuing refunds or chargeback disputes', 'Changing delivery addresses without MFA'],
    humanApprovalPoints: ['All negative sentiment / complaint escalations', 'Refund requests of any size'],
    failureBehaviour: 'Immediately routes ticket to human senior support queue with full audit history.',
    metricsTracked: ['First response time', 'Draft acceptance rate without edit', 'Escalation accuracy'],
    costDrivers: 'Inbound ticket volume + carrier API calls',
    maturity: 'Running in production'
  },
  {
    title: 'Sales-Ops Hygiene & Research',
    job: 'Enrich incoming CRM leads with verified company registry data, revenue brackets, and deduplicate contact records.',
    permissions: ['Read and update CRM contact records', 'Query public company registry APIs'],
    forbiddenActions: ['Deleting existing CRM deals or pipeline histories', 'Emailing unqualified prospects'],
    humanApprovalPoints: ['Merging duplicate accounts with competing sales reps'],
    failureBehaviour: 'Marks lead unverified and assigns to sales ops for manual inspection.',
    metricsTracked: ['Data enrichment completeness %', 'Duplicate record detection rate'],
    costDrivers: 'Enrichment API lookup fees + CRM webhook volume',
    maturity: 'Running in production'
  },
  {
    title: 'Monitoring & Anomaly Alerts',
    job: 'Audit system health, API response latency, and database integrity continuously, alerting engineering teams before outages cascade.',
    permissions: ['Read system error logs and metrics', 'Dispatch high-priority PagerDuty / Telegram alerts'],
    forbiddenActions: ['Auto-restarting production database clusters without supervisor trigger'],
    humanApprovalPoints: ['Manual approval for service failover to secondary cloud region'],
    failureBehaviour: 'Falls back to independent secondary heartbeat monitor if primary worker crashes.',
    metricsTracked: ['Mean time to detection (MTTD)', 'False positive alert rate', 'Service uptime'],
    costDrivers: 'High-frequency metric polling infrastructure',
    maturity: 'Running in production'
  },
  {
    title: 'Internal Operations Helpdesk',
    job: 'Answer staff procedural questions regarding standard operating procedures, leave policies, and system access guidelines.',
    permissions: ['Read-only semantic search over company SOP handbook and documentation'],
    forbiddenActions: ['Granting administrative system access or elevating staff permissions'],
    humanApprovalPoints: ['Access elevation requests must be signed by department director'],
    failureBehaviour: 'Declines to answer if procedural documentation lacks explicit source citation.',
    metricsTracked: ['Resolution rate of repetitive staff queries', 'Citation accuracy'],
    costDrivers: 'Semantic vector search queries + answer generation tokens',
    maturity: 'Running in production'
  }
];

export default function AgentCapabilityCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {AGENT_CAPABILITIES.map((agent, idx) => (
        <div
          key={idx}
          className="bg-bg-secondary border border-border-steel/20 p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border-color mb-6">
              <span className="text-xs font-mono font-bold text-accent-steel">
                Capability 0{idx + 1}
              </span>
              <TruthBadge maturity={agent.maturity} />
            </div>

            <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-3">
              {agent.title}
            </h3>

            <p className="text-xs text-text-muted leading-relaxed font-normal mb-6">
              <strong className="text-text-primary font-semibold">The Job:</strong> {agent.job}
            </p>

            {/* Permissions & Forbidden */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono mb-6">
              <div className="p-3 bg-bg-primary border border-border-color space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                  Permitted Actions:
                </span>
                {agent.permissions.map((p, pIdx) => (
                  <div key={pIdx} className="text-text-muted text-[11px] leading-tight">
                    ✓ {p}
                  </div>
                ))}
              </div>

              <div className="p-3 bg-bg-primary border border-border-color space-y-1">
                <span className="text-[10px] uppercase font-bold text-rose-400 block mb-1">
                  Forbidden Actions:
                </span>
                {agent.forbiddenActions.map((f, fIdx) => (
                  <div key={fIdx} className="text-text-muted text-[11px] leading-tight">
                    ✕ {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Human Gate & Failure */}
            <div className="space-y-3 text-xs mb-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase text-accent-steel font-bold">
                  Human Approval Points:
                </span>
                <span className="text-text-primary text-xs font-normal">
                  {agent.humanApprovalPoints.join(' • ')}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase text-text-subtle font-bold">
                  Failure Behaviour:
                </span>
                <span className="text-text-muted text-xs font-normal">
                  {agent.failureBehaviour}
                </span>
              </div>
            </div>

          </div>

          {/* Footer metrics & cost drivers */}
          <div className="pt-4 border-t border-border-color flex flex-wrap items-center justify-between text-[11px] font-mono text-text-subtle gap-2">
            <span>Cost Driver: {agent.costDrivers}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
