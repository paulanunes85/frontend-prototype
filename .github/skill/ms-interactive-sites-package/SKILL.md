---
name: ms-interactive-sites
description: >
  Create production-grade interactive sites, landing pages, and multi-page presentation apps as
  React + Tailwind .jsx artifacts with Microsoft branding and 4-color logo palette. Supports
  single-scroll landing pages AND full multi-page SPAs that render complete markdown content
  into navigable, interactive web apps with accordions, tabs, code blocks, persona cards, maturity
  levels, and rich components. Trigger on: "site", "landing page", "portal", "página",
  "site interativo", "create a site", "build a landing page", "presentation app", "web artifact",
  "evento", "workshop page", "assessment site", "ms-interactive-sites", or any polished web page
  with Microsoft branding. Produces .jsx artifacts for Claude.ai. NOT for Word docs, PPTX, or PDFs.
---

# Microsoft Interactive Sites Builder

Create **production-grade** interactive sites as React + Tailwind `.jsx` artifacts. From single-scroll landing pages to full **multi-page presentation apps** that render complete markdown content into navigable, interactive web experiences.

## Before You Start

**Read the reference files before writing any code:**

1. `references/design-system.md` — Colors, typography, spacing, animations
2. `references/section-catalog.md` — Section components for single-scroll sites
3. `references/site-templates.md` — Templates for each site type
4. `references/multipage-spa.md` — Multi-page SPA architecture and component library

## Two Modes

### Mode 1: Single-Scroll Landing Page
For event invitations, workshop pages, product showcases. One continuous scrollable page, 6-12 sections. See `references/section-catalog.md`.

### Mode 2: Multi-Page Presentation App (DEFAULT)
For content-rich deliverables. The **primary mode** when the user provides substantial content (markdown docs, structured content, multiple topics). See `references/multipage-spa.md`.

**Key rule:** If the content spans more than 3-4 distinct topics, always use Mode 2.

## Content Completeness Rule (CRITICAL)

When the user provides markdown documents, articles, or structured content:

1. **NEVER summarize or truncate** — every paragraph, bullet, example must appear
2. **Transform markdown into interactive UI** — headings → sections, lists → cards/accordions, code blocks → terminal views, tables → interactive comparisons
3. **Enhance, don't reduce** — add icons, badges, colors, interactive elements, but never remove content
4. **Long pages get sub-navigation** — tabs or mini TOC within the page

## Design System Quick Reference

### Colors (Microsoft Logo Palette)
```
Primary:   Blue #00A4EF   Green #7FBA00   Yellow #FFB900   Red #F25022
Brand:     MS Blue #0078D4   Purple #9B59B6   Dark #24292E
Neutral:   Text #171717   Sub #616161   Muted #8E8E8E   Light #F3F2F1   Card #F8F9FB
```

### Page Hero Gradient Rotation (each page gets a unique color)
```
Landing:   from-slate-900 via-blue-900 to-slate-900
Page Blue: from-blue-900 to-slate-900
Page Green:from-green-900 to-slate-900
Page Red:  from-red-900 to-slate-900
Page Purple:from-purple-900 to-slate-900
Page Amber:from-amber-800 to-slate-900
```

### Available in Claude.ai Artifacts
```
React: useState, useEffect, useRef, useCallback, useMemo
Tailwind: all utility classes
lucide-react: any icon (import { Name } from "lucide-react")
```

## Implementation Checklist

- [ ] Single .jsx file, default export, no required props
- [ ] Inter font imported via `<style>` tag inside component
- [ ] ALL content from source documents included (nothing truncated)
- [ ] Multi-page navigation with state-based routing (if Mode 2)
- [ ] Navbar with active state indicator and mobile hamburger menu
- [ ] Each page has unique colored hero section
- [ ] Scroll-to-top on page change
- [ ] Interactive elements work (accordions, tabs, expanders)
- [ ] Lucide icons for visual richness throughout
- [ ] No em dashes (use commas, periods, semicolons)
- [ ] Footer with Software GBB Americas attribution
- [ ] Save to `/mnt/user-data/outputs/` and present to user
