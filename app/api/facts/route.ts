import { NextResponse } from 'next/server';
import factsData from '@/data/facts.json';
import { getAllVerifiedEvidence, getPlaceholderAuditReport } from '@/lib/truth-gate';

export async function GET() {
  const verifiedEvidence = getAllVerifiedEvidence();
  const placeholdersReport = getPlaceholderAuditReport();

  return NextResponse.json({
    organization: factsData.meta.organization,
    positioning: factsData.meta.positioning,
    teamModel: factsData.meta.teamModel,
    businessModel: factsData.meta.businessModel,
    lastAudited: factsData.lastAudited,
    truthGateEnforced: true,
    verifiedClaimsCount: verifiedEvidence.length,
    evidenceLedger: verifiedEvidence,
    placeholders: placeholdersReport,
  });
}
