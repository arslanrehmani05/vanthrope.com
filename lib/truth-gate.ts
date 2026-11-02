import factsData from '@/data/facts.json';

export type CaseType = 'Client work' | 'Own business' | 'Demo product';
export type Maturity = 'Running in production' | 'Prototype' | 'Design';

export interface EvidenceItem {
  id: string;
  category: string;
  subject: string;
  caseType: CaseType;
  maturity: Maturity;
  claim: string;
  metric: string;
  metricLabel: string;
  verificationSource: string;
  verifiedDate: string;
  status: 'VERIFIED' | 'UNVERIFIED' | 'STALE';
  details?: string;
}

export interface PlaceholderItem {
  status: 'VERIFIED_PRECISE' | 'FALLBACK_APPLIED' | 'UNRESOLVED' | 'RESTRICTED';
  value: string | null;
  fallback: string | null;
  description: string;
}

const BANNED_WORDS = [
  'revolutionary',
  'game-changing',
  'cutting-edge',
  '10x',
  'seamless',
  'unlock',
  'synergy',
  'zero hallucination guarantee',
  'as seen in',
  'unlimited scale',
  'magic',
  'miracle'
];

/**
 * Truth Gate: Resolves a verified evidence item by ID.
 * Throws a fatal build error if the evidence ID is missing or not marked VERIFIED.
 */
export function getVerifiedEvidence(id: string): EvidenceItem {
  const item = factsData.evidence.find((ev) => ev.id === id);
  if (!item) {
    throw new Error(
      `[TRUTH GATE FATAL]: Attempted to render claim referencing unknown evidence ID "${id}". Every factual claim must reference a verified record in data/facts.json.`
    );
  }
  if (item.status !== 'VERIFIED') {
    throw new Error(
      `[TRUTH GATE FATAL]: Evidence ID "${id}" is marked "${item.status}". Only VERIFIED evidence may be rendered.`
    );
  }
  return item as EvidenceItem;
}

/**
 * Retrieves all verified evidence items for public ledger and proof displays.
 */
export function getAllVerifiedEvidence(): EvidenceItem[] {
  return (factsData.evidence as EvidenceItem[]).filter((ev) => ev.status === 'VERIFIED');
}

/**
 * Resolves a placeholder value safely.
 * Returns the verified value if present, otherwise the documented fallback, or null if it must remain hidden.
 */
export function getPlaceholder(key: keyof typeof factsData.placeholders): string | null {
  const placeholder = (factsData.placeholders as Record<string, PlaceholderItem>)[key];
  if (!placeholder) {
    return null;
  }
  if (placeholder.value !== null && placeholder.value !== undefined) {
    return placeholder.value;
  }
  return placeholder.fallback;
}

/**
 * Returns the current audit status of all placeholders for build reporting.
 */
export function getPlaceholderAuditReport() {
  const report: { key: string; status: string; value: string | null; fallback: string | null }[] = [];
  for (const [key, details] of Object.entries(factsData.placeholders)) {
    report.push({
      key,
      status: details.status,
      value: details.value,
      fallback: details.fallback,
    });
  }
  return report;
}

/**
 * Scans text content for banned buzzwords.
 */
export function auditCopyForBannedWords(text: string): { clean: boolean; detected: string[] } {
  const lower = text.toLowerCase();
  const detected = BANNED_WORDS.filter((word) => lower.includes(word));
  return {
    clean: detected.length === 0,
    detected,
  };
}
