export interface SolutionDetail {
  slug: string;
  title: string;
  categoryEyebrow: string;
  clientProblemStatement: string;
  whatChanges: string;
  whatWeBuild: string[];
  workflowDiagramText: string;
  relevantToolSlug: string;
  relevantToolName: string;
  relatedCaseSlug: string;
  relatedCaseName: string;
  whatThisIsNot: string[];
  faq: { q: string; a: string }[];
}

export const SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  'spreadsheets': {
    slug: 'spreadsheets',
    title: 'Too Many Spreadsheets',
    categoryEyebrow: 'OPERATIONAL SILOS',
    clientProblemStatement: '"Our core business operations live in 15 different Excel files. Only two people understand the formulas, files get accidentally overwritten, and if someone is on sick leave, our shipping or inventory calculations come to a halt."',
    whatChanges: 'Multi-tab workbooks are replaced with an ACID-compliant Postgres database wrapped in clean, role-based internal screens. Concurrency conflicts, broken VLOOKUPs, and formula accidents are permanently eliminated.',
    whatWeBuild: [
      'Relational database architecture mirroring your business logic',
      'Web-based clerk and supervisor portal with strict field validation',
      'Immutable version history and audit log on every cell/record change',
      'Automated nightly backup with point-in-time recovery'
    ],
    workflowDiagramText: 'Incoming Data → Field Validation Schema → Postgres DB Transaction → Role-Gated Dashboard → Automated Nightly Backup',
    relevantToolSlug: 'spreadsheet-checker',
    relevantToolName: 'Spreadsheet Reality Check (In-Browser CSV Profiler)',
    relatedCaseSlug: 'textilemode-capacity-engine',
    relatedCaseName: 'TextileMode Capacity Engine (48h → 10h scheduling)',
    whatThisIsNot: [
      'Not a generic Airtable or Notion template that you will outgrow in 3 months.',
      'Not a bloated enterprise ERP that takes 18 months and $200k to implement.'
    ],
    faq: [
      {
        q: 'Can staff still export data to Excel if they want to review numbers?',
        a: 'Yes. One-click CSV/Excel export is built into every view, but the database remains the single authoritative source of truth.'
      },
      {
        q: 'How long does migrating our spreadsheets usually take?',
        a: 'A standard migration takes 2 to 4 weeks depending on how many historical files need data cleaning.'
      }
    ]
  },
  'reporting': {
    slug: 'reporting',
    title: 'Manual Reporting',
    categoryEyebrow: 'DECISION DELAYS',
    clientProblemStatement: '"Every Monday morning, our operations manager spends 4 hours logging into 5 different portals to copy numbers into a weekly KPI deck. By the time leadership reads it, the data is already 48 hours stale."',
    whatChanges: 'All third-party portals, ad networks, bank feeds, and CRM metrics are ingested automatically every morning. Leadership receives an automated briefing email or Slack summary with flagged anomalies before the Monday standup starts.',
    whatWeBuild: [
      'Scheduled background API ingestion workers',
      'Data transformation pipeline computing blended gross margins and customer acquisition costs',
      'Automated morning executive brief with highlighted variances',
      'Discrepancy alert bot when metrics deviate more than 15% from 30-day moving averages'
    ],
    workflowDiagramText: 'APIs (Shopify, Ads, Bank, ERP) → Scheduled Fetcher → Data Normalization & Checksums → Anomaly Detector → Leadership Briefing',
    relevantToolSlug: 'cost-calculator',
    relevantToolName: 'Manual-Work Cost Calculator',
    relatedCaseSlug: 'belhide-operational-intelligence',
    relatedCaseName: 'Belhide Multi-Channel Ledger (7 Disconnected Feeds Automated)',
    whatThisIsNot: [
      'Not another dashboard software subscription that nobody logs into.',
      'Not vanity metrics—we track cash, margins, inventory turns, and order throughput only.'
    ],
    faq: [
      {
        q: 'What happens if one of the third-party APIs changes its format or fails?',
        a: 'The pipeline contains dead-letter queues. If an API returns an error or altered schema, an alert is dispatched, previous cached data is flagged, and the system fails safely without reporting inaccurate numbers.'
      }
    ]
  },
  'disconnected-tools': {
    slug: 'disconnected-tools',
    title: 'Disconnected Tools',
    categoryEyebrow: 'SYSTEM INTEGRATION',
    clientProblemStatement: '"Our e-commerce store does not talk to our warehouse shipping carrier, and neither talks to our accounting software. We have someone manually re-typing customer address changes and shipping tracking numbers all day."',
    whatChanges: 'Secure, event-driven webhooks automatically synchronize records across your entire software ecosystem in near real-time, with automated retries and duplicate prevention.',
    whatWeBuild: [
      'Custom webhook listener microservice with cryptographic signature verification',
      'Idempotent event processor ensuring duplicate events never trigger double shipments or payments',
      'Two-way sync pipeline between inventory management and order channels',
      'Audit dashboard showing live status of every payload transmitted'
    ],
    workflowDiagramText: 'Channel Webhook → Signature Verification → Idempotency Cache → Schema Transformer → Target API Write → Status Ack',
    relevantToolSlug: 'integration-planner',
    relevantToolName: 'Integration Planner & Readiness Checklist',
    relatedCaseSlug: 'belhide-operational-intelligence',
    relatedCaseName: 'Belhide Multi-Channel Ledger',
    whatThisIsNot: [
      'Not fragile Zapier or Make chains with rate-limit failures and hidden per-task fees.',
      'Not a black-box middleware: you own the code and run it in your own cloud account.'
    ],
    faq: [
      {
        q: 'What happens when an external service has an outage?',
        a: 'Our middleware stores incoming payloads in a persistent buffer (SQS/PostgreSQL) and retries with exponential backoff until the target endpoint recovers.'
      }
    ]
  },
  'slow-approvals': {
    slug: 'slow-approvals',
    title: 'Slow Approvals & Handoffs',
    categoryEyebrow: 'WORKFLOW LATENCY',
    clientProblemStatement: '"Purchase orders over $5,000 and custom client quotes sit in email chains for three to five days waiting for sign-off. Deals stall and vendor discounts expire."',
    whatChanges: 'Requests are converted into interactive cards sent directly to decision-makers on Slack, Microsoft Teams, or Telegram. Approvers can review supporting docs, check budget headroom, and approve or reject with a single tap.',
    whatWeBuild: [
      'Interactive approval cards with inline attachments and budget context',
      'Configurable timeout escalation (e.g. notify backup manager after 4 business hours)',
      'Immutable cryptographic sign-off token logged for compliance',
      'Automated downstream trigger execution upon sign-off'
    ],
    workflowDiagramText: 'Intake Trigger → Threshold Evaluation → Interactive Messaging Card → Supervisor 1-Tap Sign-off → Downstream System Commit',
    relevantToolSlug: 'decision-tool',
    relevantToolName: 'Agent-or-Workflow Decision Tool',
    relatedCaseSlug: 'finance-reconciliation-engine',
    relatedCaseName: 'Bank & ERP Double-Entry Reconciliation',
    whatThisIsNot: [
      'Not an autonomous bot making financial commitments without human approval.',
      'Not another standalone app: approvals happen directly inside tools your team already uses daily.'
    ],
    faq: [
      {
        q: 'Can approvals require dual-authorization for large payments?',
        a: 'Yes. Rules can require two distinct supervisor sign-offs before any transactional trigger executes.'
      }
    ]
  },
  'stock-invoices-sync': {
    slug: 'stock-invoices-sync',
    title: 'Orders, Stock & Invoices Out of Sync',
    categoryEyebrow: 'MARGIN LEAKS',
    clientProblemStatement: '"We frequently ship items that are out of stock, or discover weeks later that an invoice was sent with incorrect pricing that doesn’t match what the warehouse actually packed."',
    whatChanges: 'A three-way automated reconciliation engine compares sales orders, packing slips, and supplier invoices prior to billing, stopping margin leaks before invoices leave the building.',
    whatWeBuild: [
      'Three-way matching validator (PO vs Goods Received Note vs Invoice)',
      'Tolerance-based discrepancy detection (flags qty or price differences > 0.5%)',
      'Live warehouse inventory reservation lock preventing overselling',
      'Exception resolution portal for operations managers'
    ],
    workflowDiagramText: 'Purchase Order + GRN + Invoice Ingestion → Line-by-Line Matcher → Variance Filter → Auto-Clear or Supervisor Flag',
    relevantToolSlug: 'cost-calculator',
    relevantToolName: 'Manual-Work Cost Calculator',
    relatedCaseSlug: 'textilemode-capacity-engine',
    relatedCaseName: 'TextileMode Capacity Engine',
    whatThisIsNot: [
      'Not an inventory guessing tool: strictly deterministic mathematical reconciliation.',
      'Not an overhaul of your physical warehouse equipment.'
    ],
    faq: [
      {
        q: 'How does it handle partial shipments?',
        a: 'The matching logic tracks line item quantities cumulatively against the master PO until the order is fulfilled or formally closed.'
      }
    ]
  },
  'customer-requests': {
    slug: 'customer-requests',
    title: 'Customer Requests Piling Up',
    categoryEyebrow: 'SUPPORT OVERHEAD',
    clientProblemStatement: '"Our support team spends 70% of their workday looking up order statuses, tracking numbers, and re-sending copies of invoices. Complex technical inquiries get lost in the queue."',
    whatChanges: 'Routine transactional requests are answered accurately using real-time database lookups. The agent drafts the response with order verification, allowing staff to review and click send, or let verified safe requests resolve automatically.',
    whatWeBuild: [
      'Inbound email and ticket classification agent',
      'Deterministic database query interface (read-only order/shipping lookup)',
      'Draft response generator with human review workflow',
      'Strict escalation rules for refunds, complaints, and sensitive clients'
    ],
    workflowDiagramText: 'Customer Ticket → Intent Classifier → Read-Only DB Query → Draft Generator → Staff Review / Auto-Send → CRM Sync',
    relevantToolSlug: 'agent-cost',
    relevantToolName: 'Agent Cost Estimator',
    relatedCaseSlug: 'belhide-operational-intelligence',
    relatedCaseName: 'Belhide Multi-Channel Ledger',
    whatThisIsNot: [
      'Not an unsupervised hallucinating chatbot that promises discounts or gives inaccurate advice.',
      'Not an attempt to replace human customer care: it handles repetitive lookup tasks so your team can focus on complex issues.'
    ],
    faq: [
      {
        q: 'How do you prevent the agent from making false promises to angry customers?',
        a: 'The agent has zero authority to issue credits or alter policy. Any ticket classified with negative sentiment or refund keywords is routed immediately to a human supervisor.'
      }
    ]
  },
  'month-end-compliance': {
    slug: 'month-end-compliance',
    title: 'Month-End & Compliance Paperwork',
    categoryEyebrow: 'FINANCIAL CONTROL',
    clientProblemStatement: '"Our finance team dreads month-end. Matching bank transactions against receipts and journal vouchers takes 10 full business days, delaying board packs and financial visibility."',
    whatChanges: 'Bank feeds, credit card receipts, and invoice records are matched continuously throughout the month. Month-end becomes a 48-hour review of remaining edge cases rather than a mad scramble.',
    whatWeBuild: [
      'Automated MT940 / CSV bank statement ingestion engine',
      'Fuzzy and exact matching algorithms pairing transactions with open payables/receivables',
      'Automated tax / VAT verification on receipt images and PDF vouchers',
      'Audit-ready month-end reconciliation pack export'
    ],
    workflowDiagramText: 'Bank Transaction Stream → Reference & Amount Matcher → Tax Code Allocator → GL Draft Entry → Accountant Sign-Off',
    relevantToolSlug: 'spreadsheet-checker',
    relevantToolName: 'Spreadsheet Reality Check',
    relatedCaseSlug: 'finance-reconciliation-engine',
    relatedCaseName: 'Bank & ERP Double-Entry Reconciliation (9 days → 2 days closing)',
    whatThisIsNot: [
      'Not an external accounting firm: we engineer the software tools that empower your internal finance team.',
      'Not a generic SaaS bookkeeping tool.'
    ],
    faq: [
      {
        q: 'Does this comply with statutory accounting and tax standards?',
        a: 'Yes. All reconciliations maintain double-entry integrity, strict audit logs, and require formal clerk/accountant approval prior to posting.'
      }
    ]
  },
  'searchable-documents': {
    slug: 'searchable-documents',
    title: 'Documents & Emails Nobody Can Search',
    categoryEyebrow: 'INFORMATION RETRIEVAL',
    clientProblemStatement: '"Ten years of supplier contracts, equipment manuals, and custom client proposals are buried in individual employee mailboxes and Google Drive folders. Finding past pricing or contract terms takes hours."',
    whatChanges: 'All organizational PDFs, contracts, and documents are indexed into a private, local semantic search engine. Staff can query in plain English and receive instant, exact citations referencing specific page numbers and clauses.',
    whatWeBuild: [
      'Local OCR and document text chunking pipeline',
      'Private vector embedding database stored on your own cloud instance',
      'Strict citation-backed retrieval interface (every claim quotes exact page & paragraph)',
      'Role-based document access control ensuring sensitive payroll or executive files remain confidential'
    ],
    workflowDiagramText: 'PDF/Doc Ingest → Local OCR & Chunking → Private Vector DB → Semantic Query → Verified Citation Result',
    relevantToolSlug: 'process-mapper',
    relevantToolName: 'Process Mapper & Staged Workflow Builder',
    relatedCaseSlug: 'textilemode-capacity-engine',
    relatedCaseName: 'TextileMode Capacity Engine',
    whatThisIsNot: [
      'Not an upload to public consumer AI services: your data never trains public models.',
      'Not a speculative summary: answers always quote exact source documents.'
    ],
    faq: [
      {
        q: 'Is our sensitive contract data sent to public AI platforms?',
        a: 'No. We deploy dedicated private instances (e.g. AWS Bedrock, private Azure OpenAI, or self-hosted embeddings) with explicit zero-data-retention agreements.'
      }
    ]
  }
};
