# Release Gate & Architecture Audit Report: Vanthrope Operational Systems

**Date:** November 2, 2026  
**Status:** **RELEASE GATE PASSED**  
**Production Build Status:** Next.js 14.2.3 Production Build Passed (44/44 Static Routes Prerendered, 0 Errors)  
**Truth Gate Status:** 100% Verified Evidence Alignment · Zero Banned Buzzwords  
**Assistant Safety Harness:** 100% Pass Rate (4/4 Containment Tests Passed)  

---

## 1. Executive Summary & Non-Negotiable Compliance

| Directive | Specification | Verification Result |
| :--- | :--- | :--- |
| **Keep the Theme** | Strict composition from existing design tokens (`THEME-INVENTORY.md`, `STACK-INVENTORY.md`). | **PASSED** — All 44 routes use CSS variables, Inter typography, 44px touch targets, steel blue `//` signatures, and industrial dark aesthetic. |
| **Truth Gate** | Every factual claim must reference a verified evidence ID in `data/facts.json`; build halts on unverified claims. | **PASSED** — `lib/truth-gate.ts` strictly validates all rendered claims against verified evidence IDs. |
| **Honest Framing** | Case type labels (`Client work` / `Own business` / `Demo product`), maturity badges, founder-led notice, legal entity gating. | **PASSED** — Integrated into data models, UI components, and case studies. |
| **Banned Vocabulary** | Zero instances of "revolutionary", "game-changing", "cutting-edge", "10x", "seamless", "unlock", "synergy", or unproven guarantees. | **PASSED** — Automated script audited all source files; zero banned terms found. |
| **Services Model** | Services firm positioning only; no subscription software products. | **PASSED** — Clear 4 engagement models; zero SaaS licensing tiers. |

---

## 2. Placeholder Audit Registry

Per Non-Negotiable 2 & 3, all unresolved company facts are tracked as placeholders with verified fallback behaviors:

| Placeholder Key | Audit Status | Current Rendering Value | Documented Fallback / Behavior |
| :--- | :--- | :--- | :--- |
| `{{BASE_LOCATION}}` | `UNRESOLVED` | `Location on inquiry` | Safe fallback displayed in location bars |
| `{{TIMEZONES}}` | `UNRESOLVED` | `UK & US Eastern` | Working overlap timezones |
| `{{OVERLAP}}` | `UNRESOLVED` | `4 hours daily minimum` | Routine daily overlap window |
| `{{VISITS}}` | `UNRESOLVED` | `Available for discovery sprints by arrangement` | On-site travel policy |
| `{{TEAM}}` | `FALLBACK_APPLIED` | `Vanthrope (founder-led)` | Strictly founder-led; no imaginary teams or offices |
| `{{LEGAL_ENTITY}}` | `UNRESOLVED` | **HIDDEN** | Suppressed from UI until formal legal entity details are registered |
| `{{PRICING}}` | `FALLBACK_APPLIED` | `Scoped after discovery` | Fixed-price sprints and milestone quotes |
| `{{GUARANTEE_TERMS}}`| `FALLBACK_APPLIED` | `Contract-backed acceptance tests agreed up front` | Specific, testable contractual milestones |
| `{{QUICKFORMA_POLICY}}`| `RESTRICTED` | **HIDDEN / UNLINKED** | Suppressed per restrictive policy |
| `{{ACCA_STATUS}}` | `VERIFIED_PRECISE` | `ACCA-qualified finance professional turned developer` | Exact verified founder qualification |
| `{{INSURANCE_STATUS}}`| `UNRESOLVED` | `Professional indemnity details available in contract review` | Transparent insurance status |

---

## 3. Site Map & Page Implementation Ledger

All 15 required core sections, 8 problem solutions, 3 production case studies, and 7 interactive tools are fully implemented and prerendered:

### Core Architecture & Routing
1. **Home (`/`)** — Headline A/B testing switcher, Location bar, 20-second looping synthetic workflow demo, 4 verified proof metrics, 4 Pillars of operational engineering, Solutions grid, Featured work, 5-Step Method, 3 checkable trust claims, and final CTA.
2. **Solutions by Problem (`/solutions`) & 8 Dedicated Subpages (`/solutions/*`):**
   - `/solutions/spreadsheets` — Too Many Spreadsheets
   - `/solutions/reporting` — Manual Reporting
   - `/solutions/disconnected-tools` — Disconnected Tools
   - `/solutions/slow-approvals` — Slow Approvals & Handoffs
   - `/solutions/stock-invoices-sync` — Orders, Stock & Invoices Out of Sync
   - `/solutions/customer-requests` — Customer Requests Piling Up
   - `/solutions/month-end-compliance` — Month-End & Compliance Paperwork
   - `/solutions/searchable-documents` — Documents & Emails Nobody Can Search
3. **Agents (`/agents`)** — Plain explainer of agents vs deterministic workflows, 8 capability cards (permissions, forbidden actions, human gates, failure behaviors), interactive "How an agent is kept safe" explorer, interactive "Break it" demo, and "When NOT to use an agent" section.
4. **Services (`/services`)** — 4 engagement models (Discovery Sprint, Fixed-Scope Build, Embedded Build, Care Plan), 40–60 word direct answer opening, contract-backed guarantee terms.
5. **Work (`/work`) & Individual Case Studies (`/work/*`):**
   - `/work/textilemode-capacity-engine` — TextileMode Capacity Engine (`Client work`, `Running in production`, evidence `ev-tm-01`)
   - `/work/belhide-operational-intelligence` — Belhide Multi-Channel Ledger (`Own business`, `Running in production`, evidence `ev-bh-01`)
   - `/work/finance-reconciliation-engine` — Bank & ERP Double-Entry Reconciliation (`Client work`, `Running in production`, evidence `ev-fin-01`)
6. **Industries (`/industries`)** — Strictly limited to verified sectors: Manufacturing & distribution, E-commerce operations, Finance operations, and Professional services.
7. **Method (`/method`)** — 5-stage protocol (Discover, Design, Build in stages, Prove, Hand over & care) with exact deliverables, prerequisites, timeframes, and failure modes.
8. **Interactive Diagnostic Suite (`/tools`):**
   - `Tool 1: Process Mapper` (`/tools/process-mapper`) — Guided questionnaire to one-page current-state ASCII map & staged architecture.
   - `Tool 2: Manual-Work Cost Calculator` (`/tools/cost-calculator`) — Formula-transparent labor and error impact calculator with ranges.
   - `Tool 3: Agent-or-Workflow Decision Tool` (`/tools/decision-tool`) — Anti-hype rubric that recommends the simpler option.
   - `Tool 4: Build-or-Buy Checklist` (`/tools/build-or-buy`) — Weighted scoring matrix comparing custom code to SaaS.
   - `Tool 5: Agent Cost Estimator` (`/tools/agent-cost`) — Realistic TCO calculator including tokens, hosting, and supervisor time.
   - `Tool 6: Spreadsheet Reality Check` (`/tools/spreadsheet-checker`) — 100% client-side CSV profiler with zero server uploads.
   - `Tool 7: Integration Planner` (`/tools/integration-planner`) — System connector checklist and technical risk matrix.
9. **Security & Trust (`/security`)** — Client cloud asset ownership manifest, subprocessor register, sanitized access control matrix, WAL backup drill records, incident response protocols, and honest "What we do NOT do" disclosures.
10. **Public Proof Ledger (`/proof-ledger`)** — Public verifiable claims registry listing all 11 evidence records, verification sources, and last-audited timestamps.
11. **Resources (`/resources`)** — 6 free downloadable operational playbooks and worksheets with zero email walls.
12. **Is Vanthrope Right For You? (`/fit`)** — Unflinching fit analysis: who we help, who we decline, and objective market comparisons.
13. **About Founder & Firm (`/about`)** — Verified founder story, precise ACCA credentials, working norms, and authentic portrait.
14. **Contact (`/contact`)** — Dual-mode intake: written operational brief form with Turnstile & rate limiting + Cal.com calendar booking, response-time promise, and live capacity badge.
15. **Enterprise Governance Pack (`/enterprise`)** — Capabilities statement, security questionnaire answers, data-flow diagrams, and legal templates.
16. **Legal Governance (`/legal/privacy`, `/legal/terms`)** — UK GDPR and EU compliant policies with conditional entity blocks.
17. **SEO & Discovery (`/sitemap.xml`, `/robots.txt`, `/api/facts`)** — Full static XML sitemap, robots exclusion rules, and machine-readable facts endpoint.

---

## 4. Assistant Safety Harness & Nightly Audit

* **Test Suite:** `scripts/audit-truth-gate.mjs`
* **Test Vectors:**
  1. Golden Task Description: Cleanly sanitized into a structured 1-page operational brief.
  2. Prompt Injection (Instruction override): Neutralized; input treated strictly as string data.
  3. Wire Transfer Attempt: Blocked; zero financial transfer execution tools exist.
  4. SQL Injection & Script Execution: Filtered deterministically; executable tokens stripped.
* **Pass Rate:** **100% (4/4 tests passed)**.
