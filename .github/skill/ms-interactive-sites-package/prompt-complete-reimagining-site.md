# Prompt: Build Complete Agentic DevOps Presentation App

## Context

You have two key reference files:

1. **`ms-interactive-sites/`** — My installed skill with SKILL.md and 4 reference files (design-system.md, section-catalog.md, site-templates.md, multipage-spa.md). READ ALL OF THEM before starting.

2. **`Reimagining_software_development_with_AI_and_Agentic_DevOps_-_FY26_-_Rv_-_November_-_Compress.md`** — The source content (5,585 lines, 131KB). This is the COMPLETE content that must appear in the app. READ THE ENTIRE FILE.

## Task

Transform the ENTIRE markdown content into a **multi-page React presentation app** (.jsx artifact for Claude.ai). Every detail, every bullet point, every comparison, every use case must appear. Nothing is optional.

## ABSOLUTE Rules

1. **ZERO content loss**: Every paragraph, bullet, comparison table, agent description, use case, and customer story from the markdown MUST appear in the final app. If you cannot fit everything, split into more pages.
2. **Single .jsx file**: One file, `export default`, using React + Tailwind + lucide-react only.
3. **No em dashes** (—): Replace with commas, periods, or semicolons.
4. **Inter font**: Import via `<style>` tag inside the component.
5. **Microsoft branding**: 4-color palette (Blue #00A4EF, Green #7FBA00, Yellow #FFB900, Red #F25022).
6. **Content-first**: If a section has 20 bullet points, all 20 appear. If there are 5 customer stories, all 5 appear. If there are 6 industry use case pages, all 6 appear.

## Page Architecture (12 Pages)

Map the 16 agenda items into 12 navigable pages:

### Page 1: `landing` — Home
- Dark gradient hero with title "Reimagining Software Development with AI & Agentic DevOps"
- Gradient animated subtitle
- Paula Silva attribution badge
- Two CTAs
- Agenda as interactive World Map (12 clickable cards with setPage())
- Hands-On Labs section (5 labs listed)
- Pre-requisites section

### Page 2: `ai-dev` — AI Development & Next Gen Developer (Agenda 01+02)
Hero: from-blue-900, Badge "01-02"
Sections to include:
- "Software development is increasingly complex" — 6 challenge cards
- "The way we build AI apps is changing" — From/To comparison table (8 rows: Single model→Multi-model, Simple POCs→Automated agentic workflows, etc.)
- "The New Challenge" — 3 cards (Intelligent Agents, Secured & Responsible, Enterprise-Ready)
- "AI is transforming the developer experience" — 3 pillars
- "Developers will be expected to..." — 3 cards (Innovative, Build faster, Responsible AI)
- "Shifting roles and responsibilities" — Before/After (Previous Dev → Next Gen Dev)
- "How Agentic AI transformed development" — Pair→Peer Programming comparison
- "What developers need" — 6 capability cards

### Page 3: `agents` — What is an AI Agent? (Agenda 03)
Hero: from-purple-900, Badge "03"
Sections:
- "What is an AI agent?" — Diagram: LLM + Instructions + Tools = Agent, Input/Output flow
- "Unlike previous tools, AI Agent can reason, act and learn"
- "Agentic components" — 3 detailed cards: Acting (tool calling), Learning (memory), Reasoning (planning) with full conversation examples
- "An AI agent in action" — Full washing machine conversation flow
- "At the core are threads" — Thread explanation with bullets
- "Agents range from simple to complex" — Chatbots → Copilots → Automated agents
- "Types of AI agents" — 4 types: Goal-based, Reflex, Learning, Utility-based
- "Benefits" — 4 cards: Code Quality, Efficiency, Scalability, Security

### Page 4: `agentic-devops` — Agentic DevOps (Agenda 04)
Hero: from-green-900, Badge "04"
Sections:
- "Evolving DevOps" — Timeline: DevOps → DevSecOps → Agentic DevOps with full definitions
- "Agentic DevOps" full description (2 paragraphs)
- "Create, Collaborate, Operate" — Agentic layer diagram
- "Transforming the entire software lifecycle" — Plan, Code, Verify, Deploy, Operate
- "Microsoft and GitHub are the platform" — Full SDLC tool mapping
- "Agent Use Cases Throughout the SDLC" — COMPLETE table with ALL phases: Specify, Plan, Code, Test/Verify, Deploy, Operate. Each phase has multiple agent types with Use Cases and Prompt examples. THIS IS CRITICAL, include EVERY agent and prompt.
- "Agentic DevOps for Azure and GitHub" — Architecture diagram description

### Page 5: `github-agents` — GitHub Agents & Copilot (Agenda 05)
Hero: from-slate-900, Badge "05"
This is a LARGE page. Sections:
- "The next evolution of GitHub Copilot" — 9 capabilities list
- "Elevate workflows across the entire SDLC" — Create, Collaborate, Operate
- "Agent Mode" — Now in JetBrains, Eclipse, Xcode
- "Copilot vs Copilot Chat" comparison
- "Chat modes in VS Code" — Description + chat mode file example
- "GitHub Copilot for Azure" — 4 features
- "Code Review" — Feedback without the wait
- "GitHub Copilot CLI" — 5 bullet features
- "Coding Agent" — Full section: Prerequisites (4 items), Agent Mode vs Coding Agent comparison, features (4 bullets), use cases (adding features, tech debt, fixing bugs, config), "Give task → Track → Review" flow, "Assign work" (4 methods), "Getting the most out of" (3 tips), Safeguards, Actions runtime, Scope comparison table
- "AGENTS.md" — Full explanation with tips
- "MCP servers for coding agent" — Configuration tips
- "Maximize GitHub Copilot's Potential" — ALL 10 use cases with examples (Code Completion, Refactoring, Documentation, Test Generation, Bug Fixing, Code Conversion, IaC, CLI, SQL, Learning)
- "Use Cases by Persona" — Full table: Software Developer, QA, DBA, DevOps, Security Engineer with ALL bullets for each
- "GitHub Spark" — Description
- "Copilot Spaces" — Description + 3 features

### Page 6: `modernization` — App Modernization & Spec-Kit (Agenda 06+07)
Hero: from-red-900, Badge "06-07"
Sections:
- "Modernize Java and .NET apps" — 4 features
- "Flow of GitHub Copilot App Modernization" — Upgrade → Assess → Migrate → Test & Deploy
- "App Modernization Architecture" — VS Code integration, prompts, tools
- "Spec-Driven Development" — Full description, Spec-Kit link
- "Stages of AI Native Development" — 5 stages: AI Assistant → Vibe Coding → Prompt Engineering → Context Engineering → Spec Driven Development
- "The Rise of Vibe Coding" — Challenges: Scale & Maintenance, etc.
- Include all SDD content from the markdown

### Page 7: `sre-agent` — Azure SRE Agent (Agenda 08)
Hero: from-amber-800, Badge "08"
Sections:
- "What is Azure SRE Agent?" — Full feature checklist (7 items)
- "Azure SRE Agent" — 4 capability cards
- "Top tasks for SREs" — 4 tasks
- "How to access" — Steps
- "AI wins" — 4 customer results with metrics (ACA 75% reduction, Functions 250 hours, Redis 130 hours, SQL 30% reduction)

### Page 8: `mcp` — MCP & A2A (Agenda 09)
Hero: from-purple-900, Badge "09"
Sections:
- "What is MCP" — 5 bullet features
- "General architecture" — Host → MCP Client → Servers → Data Sources diagram
- "Why using MCP with Copilot" — 5 benefits
- "How to Use MCP with Coding Agent" — 4 steps
- "How to Use MCP with Agent mode" — 5 steps
- "GitHub MCP Registry" — Description + 2 features
- "Security Considerations" — 5 bullet points
- "How to create a MCP server" — Prerequisites
- "MCP Microsoft Ecosystem" — Full ecosystem map: Clients & Hosts, Tools, Registry, Community, Enterprise
- "Interact with your toolchain via MCP" — Tool list
- A2A protocol section

### Page 9: `platform` — GitHub + AI Foundry + Azure DevOps (Agenda 10+11)
Hero: from-blue-900, Badge "10-11"
Sections:
- "Azure AI Foundry" architecture diagram — Full stack
- "App platform for multi-model world" — Catalog, Services, Orchestration
- "Azure AI model breadth" — ALL models listed (Azure OpenAI, Phi, Meta, Mistral, Cohere, HuggingFace, Databricks, NVIDIA, Snowflake, Others)
- "Agentic Frameworks"
- "Design Intelligent Apps" — 8 Azure AI services with descriptions
- "Build, Test and Automate" — GitHub Actions + Foundry
- "Trust and verify AI agents" — Evaluations
- "Evaluate AI outputs at scale" — Risk/Safety metrics, Quality metrics, Custom metrics (FULL detail)
- "Secure & Govern Agents" — 5 points
- "Azure AI Content Safety"
- **Azure DevOps Integration** — Hybrid solution, ADO+GH Better Together, Unleash the Agent, Found Means Fixed with GHAS, GitHub+Azure Boards, Work Items to Coding Agent, GitHub+Azure Pipelines, Azure DevOps MCP Server, Work Item Traceability, GHAS for Azure DevOps, GitHub Enterprise Importer, ADO Basic included with GH Enterprise, Adoption Guidance (Repos, Actions/Pipelines, Packages/Artifacts), Call to Action, ADO capabilities not yet in GitHub

### Page 10: `security` — Shift Left Security (Agenda 12)
Hero: from-red-900, Badge "12"
Sections:
- "Secure Your Code and AI from the Start"
- "Share responsibility" — Developers + Security Managers + AppSec tools
- "Securing Developer Workflow" — Plan, Code, Build & Test, Secure, Deploy, Observe
- All GHAS features from the markdown
- Security campaigns content

### Page 11: `three-horizons` — Three Horizons Platform & Architecture (Agenda 13+14)
Hero: from-green-900, Badge "13-14"
Sections:
- Problem statement (Before: Manual)
- "The solution" — Self-service template description
- "Three Horizons" platform description
- "Proven Developer Productivity Gains" — 5 metrics
- "Enterprise challenges addressed" — 5 challenges
- "Key Differentiators" — Full list for Dev Teams, Platform Teams, Business Leaders
- Three pillars: Red Hat Advanced Developer Suite, GitHub Platform, Azure Infrastructure
- "Extending Backstage functionality" — Full Red Hat description
- "Red Hat Advanced Developer Suite" — 3 feature areas
- "The three main pillars" — Architecture details
- "Platform Architecture" — Horizons 1, 2, 3 with full component lists
- Reference architecture diagram description
- Use Cases (Banking Assistant, Multi-Agent Supervisor Architecture)
- Industry use cases: ALL of them (Business Level, Retail, Travel, Energy, Healthcare, Automotive, Finance, Retail & CPG)
- Customer Stories (all 5)

### Page 12: `maturity` — AI-Native Software Delivery Maturity Index
Hero: from-amber-800, Badge "Castle"
Sections:
- Interactive 5-level maturity selector (Level 0-4)
- Three dimensions: Developer Productivity, DevOps Lifecycle, Application Platform
- Full descriptions for each level in each dimension (from the markdown table)
- Progress visualization

## Shared Components

Build these reusable components:

1. **Nav** — Fixed navbar, 12 page links with icons, active state, mobile hamburger
2. **Footer** — Paula Silva attribution, Software GBB Americas, Microsoft 4-color squares
3. **Rev** — ScrollReveal (IntersectionObserver fade-in)
4. **SH** — Section header (badge + title + subtitle)
5. **FAQ** — Expandable accordion
6. **Tabs** — Tabbed content switcher (for persona tables, model lists, etc.)
7. **CompareTable** — Styled From/To or comparison table
8. **PhaseIcon** — SDLC phase with hover tooltip
9. **FeatureCard** — Icon + title + desc with hover lift
10. **CodeBlock** — Dark terminal-style prompt/code display
11. **Badge** — Colored inline badge

## Design Specs

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@keyframes fadeIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
@keyframes slideUp { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:translateY(0) } }
@keyframes gradientShift { 0% { background-position:0% } 50% { background-position:100% } 100% { background-position:0% } }
html { scroll-behavior: smooth; }
```

Page routing: `const [page, setPage] = useState('landing');` with `useEffect` scroll-to-top.

Hero gradients rotate: blue → purple → green → green → slate → red → amber → purple → blue → red → green → amber.

## Output

Save to the output directory as a complete .jsx file. The file will be large (this is expected given 131KB of source content). Ensure it compiles and renders correctly as a Claude.ai artifact.

**REMEMBER: EVERY SINGLE PIECE OF CONTENT FROM THE MARKDOWN MUST APPEAR. This is not a summary. This is a complete, interactive, navigable rendition of the entire presentation.**
