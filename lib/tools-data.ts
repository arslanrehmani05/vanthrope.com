import { 
  GitFork, 
  Calculator, 
  Scale, 
  CheckSquare, 
  Coins, 
  FileSpreadsheet, 
  Workflow 
} from 'lucide-react';

export const TOOLS_DIRECTORY = [
  {
    slug: 'process-mapper',
    title: '1. Process Mapper',
    icon: GitFork,
    tagline: 'Guided questions to a one-page current-state diagram and staged workflow.',
    description: 'Walk through your existing manual coordination steps, identify human bottlenecks, and generate an immediate ASCII & structured staged rollout diagram.',
    badge: 'In-Browser Visualizer'
  },
  {
    slug: 'cost-calculator',
    title: '2. Manual-Work Cost Calculator',
    icon: Calculator,
    tagline: 'Hours, rate, frequency, error rates, and cost of manual churn.',
    description: 'Input your staff hourly rates, weekly hours spent on manual reporting or copy-pasting, and error correction costs. Outputs conservative ranges, not false precision.',
    badge: 'Formula Transparent'
  },
  {
    slug: 'decision-tool',
    title: '3. Agent-or-Workflow Decision Tool',
    icon: Scale,
    tagline: 'Rubric that recommends the simpler option whenever possible.',
    description: 'Answer 5 diagnostic questions about data structure, exception rates, and failure tolerance to determine whether your problem needs an AI agent or a simple rule.',
    badge: 'Anti-Hype Rubric'
  },
  {
    slug: 'build-or-buy',
    title: '4. Build-or-Buy Checklist',
    icon: CheckSquare,
    tagline: 'Transparent decision rubric with visible weighting.',
    description: 'Compare commercial off-the-shelf software subscriptions against custom operational systems based on workflow uniqueness, data ownership, and 3-year TCO.',
    badge: 'Scored Matrix'
  },
  {
    slug: 'agent-cost',
    title: '5. Agent Cost Estimator',
    icon: Coins,
    tagline: 'Tokens x model price x volume plus human supervisor review time.',
    description: 'Calculate realistic cloud and API operating expenses for automated document extraction, email triage, and reconciliation pipelines using dated pricing models.',
    badge: 'Dated Pricing Sources'
  },
  {
    slug: 'spreadsheet-checker',
    title: '6. Spreadsheet Reality Check',
    icon: FileSpreadsheet,
    tagline: 'Client-side CSV profiler: duplicates, blanks, type clashes, totals.',
    description: 'Drop in a CSV to audit data cleanliness 100% locally in your browser. Zero bytes uploaded to any server. Generates an instant data readiness score.',
    badge: 'Zero-Upload Local Processing'
  },
  {
    slug: 'integration-planner',
    title: '7. Integration Planner',
    icon: Workflow,
    tagline: 'Select systems, get a checklist of data, credentials, and risks.',
    description: 'Select your operational tools (Shopify, QuickBooks, SAP, DHL, Salesforce) to receive a customized pre-flight integration checklist and security matrix.',
    badge: 'System Architecture Checklist'
  }
];
