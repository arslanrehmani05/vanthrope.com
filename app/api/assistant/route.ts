import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { workflowName, currentFriction, toolsInvolved, estimatedWeeklyHours, targetOutcome } = body;

    if (!workflowName || !currentFriction) {
      return NextResponse.json(
        { success: false, error: 'Workflow name and description of friction are required.' },
        { status: 400 }
      );
    }

    // Sanitize and isolate untrusted input
    const sanitize = (val: any) =>
      String(val || '')
        .slice(0, 1000)
        .replace(/[<>{}]/g, '')
        .replace(/(drop\s+table|delete\s+from|insert\s+into|exec\s*\(|script)/gi, '[FILTERED]');

    const cleanWorkflow = sanitize(workflowName).slice(0, 150);
    const cleanFriction = sanitize(currentFriction);
    const cleanTools = sanitize(toolsInvolved || 'Spreadsheets / Email').slice(0, 200);
    const hours = Number(estimatedWeeklyHours) || 10;

    // Deterministic Brief Synthesis
    const structuredBrief = {
      projectTitle: `Operational Brief: ${cleanWorkflow}`,
      synthesizedAt: new Date().toISOString(),
      disclosure: "AI-generated preliminary brief. A human systems architect (Arslan Rehmani) reviews every brief before any formal scope or quote is issued.",
      currentStatusQuo: {
        reportedFriction: cleanFriction,
        activeTools: cleanTools,
        annualizedHoursLost: hours * 50,
      },
      recommendedInitialPhase: hours > 20 ? "Fixed-Price Discovery Sprint (1–2 weeks)" : "Rapid Workflow Prototype (1 week)",
      preliminaryArchitecture: [
        "Event ingestion layer isolating untrusted incoming attachments/webhooks",
        "Deterministic Zod schema validator verifying mathematical and reference integrity",
        "Role-gated supervisor approval card (Telegram/Slack) for high-value variances",
        "PostgreSQL immutable ledger commit with full audit hash logging"
      ],
      nextStep: "Submit this brief to book a 20-minute technical validation review with Arslan Rehmani."
    };

    return NextResponse.json({
      success: true,
      brief: structuredBrief,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Failed to synthesize brief.' },
      { status: 500 }
    );
  }
}
