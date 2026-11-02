# Gap Analysis: Vanthrope Operational Systems Platform

This document assesses the current repository state against the comprehensive specifications required to position Vanthrope as the primary credibility asset of an operational systems firm.

---

## 1. High-Level Summary

| Dimension | Current Baseline | Target Architecture | Gap Severity |
| :--- | :--- | :--- | :--- |
| **Site Structure** | Single-page landing page with section anchors (`#capability`, `#proof`, etc.) | 15 distinct routes + 8 problem solution subpages + dynamic case studies | **High** |
| **Factual Integrity** | Hardcoded text without evidence links; claims lack provenance IDs | Strict **Truth Gate**: every factual claim backed by verified evidence ID in `facts.json` | **Critical** |
| **Honest Framing** | Unspecified case maturity; generic consultancy wording | Clear case types (Client work / Own business / Demo), maturity badges, founder-led notice | **Critical** |
| **Banned Vocabulary** | Uses phrases like "Zero Hallucination Guarantee" in footer | Elimination of hype terms ("zero hallucination", "revolutionary", "cutting-edge", "10x") | **High** |
| **Interactive Tools** | Simple contact form only | 7 interactive, client-side, zero-upload operational tools with formula visibility & PDF export | **High** |
| **Agent Demos** | None | "How an agent is kept safe" explorer + deterministic "Break it" simulator (synthetic data) | **High** |
| **On-Site Assistant** | None | Guided intake assistant producing structured one-page briefs with test harness | **Medium** |
| **Security & Proof** | High-level marketing statements | Dedicated Security & Trust page + live Proof Ledger linked to evidence IDs | **High** |
| **CMS Architecture** | Static code | Sanity CMS integration layer so content can update without code deployment | **Medium** |

---

## 2. Route & Section Inventory Delta

| Route / Section | Current State | Required Implementation |
| :--- | :--- | :--- |
| **Home (`/`)** | Basic hero, 3 capability cards, 2 unverified metrics, founder block | Outcome headline A/B test, 20s looping synthetic workflow demo, 4 verified proof metrics, 5-step method, 3 checkable trust claims, location line |
| **Solutions (`/solutions/*`)** | None | Index + 8 dedicated subpages by problem (Spreadsheets, Reporting, Disconnected tools, Approvals, Stock/Invoices, Customer queues, Month-end compliance, Searchable documents) |
| **Agents (`/agents`)** | Anchor section | Plain explainer, 8 capability cards with permissions & failure specs, "How an agent is kept safe" explorer, "Break it" demo, "When not to use an agent" |
| **Services (`/services`)** | None | 4 engagement models (Discovery Sprint, Fixed-Scope, Embedded, Care Plan), 40-60 word direct answers, testable guarantee terms |
| **Work (`/work`, `/work/[slug]`)** | 2 summary cards | Structured case studies with case type (Client work / Own business / Demo), architecture diagrams, what went wrong, signed quotes |
| **Industries (`/industries`)** | Anchor mentions | Only verified sectors (Manufacturing & distribution, E-commerce operations, Finance operations, Professional services) |
| **Method (`/method`)** | 4-step card grid | 5 rigorous stages: Discover, Design, Build in stages, Prove, Hand over & care; deliverables, prerequisites, timeframes, and failure modes |
| **Tools (`/tools/*`)** | None | 7 in-browser tools (Process Mapper, Manual-Work Cost Calculator, Decision Tool, Build-or-Buy Checklist, Agent Cost Estimator, Spreadsheet Reality Check, Integration Planner) |
| **Security & Trust (`/security`)** | None | Client ownership manifest, IP assignment, DPA, subprocessor list, access control, backup & restore practices, sanitized test matrix |
| **Proof Ledger (`/proof-ledger`)** | None | Public registry of claims, evidence links, status, last-verified dates, stale indicators |
| **Resources (`/resources`)** | None | Downloadable playbooks, worksheets, checklists, SOW templates (no email gating) |
| **Is Vanthrope Right For You? (`/fit`)** | Basic "Who We Work With" | Transparent fit analysis: who we help, who we decline, objective comparison with software, freelancers, big consultancies |
| **About (`/about`)** | Brief founder blurb | Verified founder credentials (`{{ACCA_STATUS}}`), working norms, response-time commitments, real portrait |
| **Contact (`/contact`)** | Simple form | Cal.com booking embed, structured contact form, response-time promise, capacity indicator |
| **Enterprise Pack (`/enterprise`)** | None | Capabilities statement, security questionnaire answers, data flow diagrams, incident outlines |
| **Legal (`/legal/*`)** | Copyright line only | Privacy policy (UK/EU compliant), Cookie consent modal with GA4 gating, Terms of Service, Legal entity block |

---

## 3. Truth Gate & Placeholder Architecture Delta

* **Data Schema:** Needs `data/facts.json` tracking verified claims, evidence IDs, sources, verification dates, and categories.
* **Placeholder Tokens:** Needs structured replacement or safe suppression for:
  * `{{BASE_LOCATION}}`
  * `{{TIMEZONES}}`
  * `{{OVERLAP}}`
  * `{{VISITS}}`
  * `{{TEAM}}` (Default: "Vanthrope (founder-led)")
  * `{{LEGAL_ENTITY}}` (Hidden until registered details are provided)
  * `{{PRICING}}` (Default: "Scoped after discovery")
  * `{{GUARANTEE_TERMS}}`
  * `{{QUICKFORMA_POLICY}}`
  * `{{ACCA_STATUS}}`
  * `{{INSURANCE_STATUS}}`
* **Build-Time Enforcement:** Build script fails if any claim rendered in the UI cannot be resolved to a verified evidence ID in `facts.json`.
