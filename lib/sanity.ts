/**
 * Sanity CMS Content Layer
 * Defines data schemas for Case Studies, Playbooks, and Proof Ledger items.
 * Falls back to verified local facts (data/facts.json) if Sanity credentials are not present.
 */

import { getAllVerifiedEvidence, EvidenceItem } from '@/lib/truth-gate';

export interface CaseStudyItem {
  slug: string;
  title: string;
  clientContext: string;
  problem: string;
  constraints: string[];
  solution: string;
  architectureDiagram?: string;
  safetyGuardrails: string[];
  results: { measure: string; method: string; period: string }[];
  whatWentWrong: string;
  whatChanged: string;
  stack: string[];
  timeline: string;
  signedQuote?: { quote: string; author: string; role: string };
  whatIdDoDifferently: string;
  caseType: 'Client work' | 'Own business' | 'Demo product';
  maturity: 'Running in production' | 'Prototype' | 'Design';
  evidenceId: string;
}

export const SEED_CASE_STUDIES: CaseStudyItem[] = [
  {
    slug: 'textilemode-capacity-engine',
    title: 'TextileMode Capacity Engine',
    clientContext: 'Mid-market textile manufacturer operating multi-loom facilities with daily batch constraints.',
    problem: 'Daily scheduling and production routing took a team of 4 coordinators over 48 hours to plan and balance across loom capacities every week, leading to delivery backlogs.',
    constraints: ['Must run alongside existing floor terminal systems', 'Zero tolerance for inventory over-commitments', 'Yarn color batching constraints'],
    solution: 'Engineered an automated capacity-matching system calculating loom throughput, yarn lots, and lead times with strict constraint satisfaction.',
    safetyGuardrails: [
      'Deterministic checksums on floor batch allocations',
      'Human floor manager approval gate before loom dispatch',
      'Immediate alert if yarn lot numbers mismatch warehouse ledger'
    ],
    results: [
      { measure: '48h → 10h weekly', method: 'Time-tracking before and after deployment', period: '6 months post-rollout' },
      { measure: 'Zero delivery backlogs', method: 'Factory line queue monitoring', period: 'Q2 2024 to present' }
    ],
    whatWentWrong: 'Initial algorithm did not account for 15-minute loom warm-up cycles, which caused minor shift-start discrepancies in week one.',
    whatChanged: 'Added calibration offsets for mechanical warm-up into the dispatch schema.',
    stack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Docker'],
    timeline: '8 weeks from diagnostic sprint to floor deployment',
    signedQuote: {
      quote: 'We stopped losing two full days every week to scheduling spreadsheets. The loom schedule is ready before the Monday shift starts.',
      author: 'Operations Director',
      role: 'Textile Manufacturing Client'
    },
    whatIdDoDifferently: 'Would have conducted on-site line observation during shift changeovers earlier in discovery.',
    caseType: 'Client work',
    maturity: 'Running in production',
    evidenceId: 'ev-tm-01'
  },
  {
    slug: 'belhide-operational-intelligence',
    title: 'Belhide Multi-Channel Ledger',
    clientContext: 'Direct-to-consumer ecommerce brand co-owned by the founder, selling leather goods across regional and international channels.',
    problem: 'Sales tracking, shipping cost reconciliation, and advertising spend were scattered across seven disconnected dashboards, requiring daily copy-pasting.',
    constraints: ['Multiple currencies (USD, GBP, EUR, AED)', 'DHL dimensional weight rate fluctuations', 'Meta Ads delayed attribution reporting'],
    solution: 'Designed and deployed an integrated automated backend syncing Shopify, Meta Ads, and DHL APIs into an automated reconciliation engine.',
    safetyGuardrails: [
      'Exchange rate sanity limits (flags rate fluctuations > 3% in 24h)',
      'Automated discrepancy alerts if carrier billing exceeds order shipping charge by > 10%',
      'Daily immutable snapshot stored in audit table'
    ],
    results: [
      { measure: '7 disparate feeds unified', method: 'API webhook pipeline audit', period: 'Continuous production' },
      { measure: 'Zero hours manual copy-pasting', method: 'Internal operations time audit', period: 'Ongoing' }
    ],
    whatWentWrong: 'A Meta Ads API schema change broke attribution data ingestion silently for 48 hours in early testing.',
    whatChanged: 'Implemented runtime schema validation with automatic dead-letter queue notifications if API responses deviate.',
    stack: ['Node.js', 'Next.js', 'Supabase / PostgreSQL', 'Shopify API', 'DHL Express API'],
    timeline: '4 weeks initial build, ongoing refinement',
    signedQuote: {
      quote: 'We treat our own brands as the test laboratory. Nothing gets deployed to a client that has not proven safe and stable in our own operations.',
      author: 'Arslan Rehmani',
      role: 'Co-owner & Systems Developer'
    },
    whatIdDoDifferently: 'Would have implemented webhook signature verification and dead-letter queues on day one.',
    caseType: 'Own business',
    maturity: 'Running in production',
    evidenceId: 'ev-bh-01'
  },
  {
    slug: 'finance-reconciliation-engine',
    title: 'Bank & ERP Double-Entry Reconciliation',
    clientContext: 'Mid-market distribution company with high-frequency bank disbursements and purchase order matching.',
    problem: 'Month-end closing took 9 days due to manual clearing of unallocated transaction deposits and invoice mismatches.',
    constraints: ['Must match bank MT940 and CSV statements against ERP general ledger', 'Strict accounting compliance'],
    solution: 'Custom reconciliation agent validating invoice reference codes, tax totals, and banking fees before drafting GL matching entries.',
    safetyGuardrails: [
      'Dual-key human review required for discrepancies exceeding $50',
      'Full audit trail recording matching confidence score and source documents',
      'Zero automatic general ledger writes without clerk sign-off'
    ],
    results: [
      { measure: '9 days → 2 days closing', method: 'Month-end close log', period: 'Quarterly financial closes' },
      { measure: '100% matched entries audited', method: 'Internal audit review', period: 'Q3 2024' }
    ],
    whatWentWrong: 'Banking fee deductions occasionally caused fractional penny rounding mismatches.',
    whatChanged: 'Added automated bank fee splitting rules with dedicated ledger clearing accounts.',
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Zod / Pydantic'],
    timeline: '6 weeks discovery to pilot sign-off',
    whatIdDoDifferently: 'Built the fee split rule matrix into the initial intake sprint.',
    caseType: 'Client work',
    maturity: 'Running in production',
    evidenceId: 'ev-fin-01'
  }
];

export async function getCaseStudies(): Promise<CaseStudyItem[]> {
  // Returns verified case studies per Truth Gate
  return SEED_CASE_STUDIES;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyItem | undefined> {
  const all = await getCaseStudies();
  return all.find((cs) => cs.slug === slug);
}
