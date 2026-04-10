# Site Templates Reference

Pre-built section compositions for the three main site types. Use these as starting blueprints and customize content for each use case.

## Table of Contents

1. [Event / Workshop Landing Page](#1-event--workshop-landing-page)
2. [Interactive Client Site](#2-interactive-client-site)
3. [Documentation / Resource Portal](#3-documentation--resource-portal)
4. [Section Ordering Rules](#4-section-ordering-rules)
5. [Content Adaptation Guide](#5-content-adaptation-guide)
6. [Full Component Skeleton](#6-full-component-skeleton)

---

## 1. Event / Workshop Landing Page

Best for: GitHub Copilot sessions, Agentic DevOps workshops, AI Tour events, hackathons, SERPRO sessions, customer exclusives.

### Recommended Sections (in order)

```
1. 4-Color Top Bar         — Always
2. Navbar                  — With event name + date
3. Hero Centered           — Event title, date, location, register CTA
4. Stats Bar               — Key numbers (attendees, sessions, hours, topics)
5. Evolution Cards         — Agenda phases or workshop modules (3 items)
6. Feature Duo             — Highlight 2 main topics (e.g., AI Chat + AI Impact)
7. Getting Started Steps   — "How to Participate" (Register → Prepare → Attend)
8. FAQ Accordion           — Event logistics, prerequisites, what to bring
9. Tech Logos Bar          — Technologies covered
10. CTA Footer             — Register CTA, calendar link
11. Bottom Footer          — Software GBB Americas credit
```

### Hero Content Pattern for Events

```jsx
// Tagline: event type
"Exclusive Workshop — March 17, 2026"

// Title
"GitHub Copilot\nAdvanced Session\nfor Enterprise"

// Subtitle
"Deep-dive into agents, skills, MCP integrations, and professional deliverable generation for advanced business users."

// Primary CTA
"Register Now"

// Secondary CTA
"View Agenda →"

// Stats
{ value: '4h', label: 'Duration' }
{ value: '6', label: 'Modules' }
{ value: '3', label: 'Hands-on Labs' }
```

### Data Template

```jsx
const EVENT_INFO = {
  name: 'Workshop Name',
  date: 'March 17, 2026',
  location: 'Microsoft Reactor, São Paulo',
  type: 'Exclusive Workshop',
};

const AGENDA = [
  { gen: '01', title: 'Foundation', color: '#00A4EF', desc: 'Module 1 description...' },
  { gen: '02', title: 'Deep Dive', color: '#7FBA00', desc: 'Module 2 description...' },
  { gen: '03', title: 'Hands-on Lab', color: '#FFB900', desc: 'Module 3 description...' },
];

const FAQ = [
  { q: 'Who should attend?', a: 'Senior developers and engineering leads...' },
  { q: 'What should I bring?', a: 'Laptop with GitHub Copilot configured...' },
  { q: 'Is there a recording?', a: 'Sessions will be recorded and shared...' },
];
```

---

## 2. Interactive Client Site

Best for: AI Maturity Assessments, Three Horizons Accelerator, platform proposals, SERPRO hackathon portal, technical specifications, Grupo Sura assessments.

### Recommended Sections (in order)

```
1. 4-Color Top Bar         — Always
2. Navbar                  — Product name + nav links
3. Hero Split              — Product name left, terminal animation right
4. Stats Bar               — Platform numbers (templates, agents, modules, etc.)
5. Evolution Cards         — Product evolution (DevOps → DevSecOps → Agentic)
6. Horizons Cards          — H1/H2/H3 model or phases
7. Feature Duo             — Two headline capabilities
8. Maturity Framework      — Pillars + levels (if assessment-related)
9. Feature Grid            — 6 differentiators / key features
10. Architecture Stack     — Technology layers
11. Team Cards             — Value per audience (Devs, Platform, Leaders)
12. FAQ Accordion           — Product questions
13. Tech Logos Bar          — Stack technologies
14. Getting Started Steps   — Onboarding steps
15. CTA Footer             — Deploy / Contact CTA
16. Bottom Footer          — Credits
```

### Hero Content Pattern for Products

```jsx
// Tagline
"Agentic DevOps Platform — Open Horizons"

// Title
"The platform that\naccelerates the\nAgentic SDLC"

// Subtitle
"AI-powered developer portal with Golden Paths, intelligent agents, and full observability."

// Primary CTA (with GitHub icon)
"Sign in with GitHub"

// Secondary CTA
"Explore Platform →"

// Stats
{ value: '22', label: 'Golden Paths' }
{ value: '17', label: 'AI Agents' }
{ value: '15', label: 'MCP Servers' }
```

---

## 3. Documentation / Resource Portal

Best for: Getting started guides, resource hubs, technical documentation portals, partner enablement, training material hubs.

### Recommended Sections (in order)

```
1. 4-Color Top Bar         — Always
2. Navbar                  — Portal name + doc links
3. Hero Centered           — Portal title, search or browse CTA
4. Getting Started Steps   — Quick start (3 steps)
5. Feature Grid            — Resource categories (6 items)
6. Architecture Stack      — Technical overview
7. Horizons Cards          — Learning paths or resource tiers
8. FAQ Accordion           — Usage questions
9. Tech Logos Bar          — Covered technologies
10. CTA Footer             — Contribute / Contact CTA
11. Bottom Footer          — Credits
```

### Hero Content Pattern for Portals

```jsx
// Tagline
"Documentation Portal — v2.0"

// Title
"Everything You Need\nto Build with\nOpen Horizons"

// Subtitle
"Guides, references, templates, and examples for the complete Agentic DevOps Platform."

// Primary CTA
"Browse Docs"

// Secondary CTA
"Quick Start →"
```

---

## 4. Section Ordering Rules

Follow these rules when composing sections:

1. **Top bar is always first** (fixed, z-1000)
2. **Navbar is always second** (fixed, z-50)
3. **Hero is always third** (first visible content)
4. **Stats bar follows hero** (immediate impact numbers)
5. **Content sections alternate backgrounds**: white → #F3F2F1 → white → #F3F2F1
6. **FAQ comes near the bottom** (before CTA footer)
7. **Tech logos bar** sits between FAQ and CTA (or between content and CTA)
8. **CTA footer is always second-to-last** (dark section)
9. **Bottom footer is always last** (light bar)
10. **Maximum 12-15 sections** per site to avoid excessive length

### Background Alternation Pattern

```
Section 1 (Hero):       transparent / default
Section 2 (Stats):      bg-white
Section 3 (Evolution):  bg-[#F3F2F1]
Section 4 (Horizons):   bg-white
Section 5 (Features):   bg-[#F3F2F1]
Section 6 (Arch):       bg-white  or  bg-[#F3F2F1]
...continue alternating...
CTA Footer:             bg-[#2c3136]
Bottom Footer:          bg-[#F8F9FB]
```

---

## 5. Content Adaptation Guide

When building a site for a specific client or event, adapt the Open Horizons data:

### Replace These Elements

| Original | Adapt To |
|----------|----------|
| "Open Horizons" | Client product name or event name |
| Stats (22, 17, 16, 15) | Relevant numbers for the context |
| Evolution generations | Phases of the product/event/assessment |
| Horizons H1/H2/H3 | Product tiers, maturity levels, or workshop modules |
| Architecture layers | Client-specific stack or solution components |
| Team audiences | Client stakeholders (IT, Business, Security, etc.) |
| FAQ items | Context-specific questions |
| Tech logos | Relevant technology stack |
| GitHub links | Appropriate action URLs |

### Keep These Elements

| Element | Reason |
|---------|--------|
| 4-color top bar | Microsoft branding identity |
| Inter font | Design system consistency |
| Color palette | Microsoft logo colors |
| Card patterns | Visual language consistency |
| Scroll reveal | Modern UX pattern |
| Footer attribution | Software GBB Americas credit |

---

## 6. Full Component Skeleton

The complete React component structure that wraps all sections.

```jsx
import { useState, useEffect, useRef } from 'react';

// ─── Data Constants ──────────────────────────────────────
const STATS = [/* ... */];
const EVOLUTIONS = [/* ... */];
const FEATURES = [/* ... */];
const FAQ = [/* ... */];
// ... more data arrays

// ─── Component ───────────────────────────────────────────
export default function SiteName() {
  const [openFaq, setOpenFaq] = useState(null);
  const [termLines, setTermLines] = useState(0);
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(prev => ({ ...prev, [entry.target.id]: true }));
      }),
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Terminal typing effect (if using terminal section)
  useEffect(() => {
    if (termLines < TERM_LINES.length) {
      const delay = TERM_LINES[termLines]?.type === 'prompt' ? 1200 : 600 + Math.random() * 400;
      const t = setTimeout(() => setTermLines(l => l + 1), delay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTermLines(0), 4000);
    return () => clearTimeout(t);
  }, [termLines]);

  // Helpers
  const ref = (id) => (el) => { sectionRefs.current[id] = el; };
  const reveal = (id) => `transition-all duration-700 ease-out ${visible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div className="w-full bg-[#F3F2F1] text-[#171717] overflow-x-hidden relative"
      style={{ fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>

      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* 1. 4-Color Top Bar */}
      {/* 2. Navbar */}
      {/* 3. Hero */}
      {/* 4-N. Content Sections with scroll reveal */}
      {/* N+1. CTA Footer */}
      {/* N+2. Bottom Footer */}

    </div>
  );
}
```

### Important Notes

1. **No external dependencies** beyond React and Tailwind (both available in Claude.ai artifacts)
2. **Default export required** for artifact rendering
3. **No required props** (all data is embedded as constants)
4. **Font import** via `<style>` tag inside the component (not external link)
5. **All interactivity** (FAQ accordion, smooth scroll, terminal) handled with React state
6. **No em dashes** in any text content, use commas, periods, or semicolons instead
7. **English content** by default, unless specifically requested in Portuguese or Spanish
