/**
 * Agent 3: Code Generator
 * Generates complete React and/or Vue project files.
 */

import { callLLMJson } from '../llm.js';

const SYSTEM_PROMPT = `You are an expert full-stack developer specializing in React and Vue.

Generate complete, production-ready project code based on the requirements and selected components.

Output ONLY valid JSON with this structure:
{
  "react_project": {
    "files": {
      "package.json": "{ full package.json content as string }",
      "index.html": "<!DOCTYPE html>...",
      "src/main.tsx": "import React...",
      "src/App.tsx": "import...",
      "src/App.css": "body { ... }",
      "src/components/ComponentName.tsx": "..."
    }
  },
  "vue_project": {
    "files": {
      "package.json": "...",
      "index.html": "...",
      "src/main.ts": "...",
      "src/App.vue": "...",
      "src/components/ComponentName.vue": "..."
    }
  }
}

CRITICAL RULES:
- Generate COMPLETE, WORKING code — no placeholders, no "..." or "TODO"
- Use TypeScript always
- Use Vite as build tool
- For React: use functional components with hooks
- For Vue: use Composition API with <script setup>
- Use realistic mock data (NOT lorem ipsum)
- Include proper CSS styling inline or in App.css
- The package.json must include all needed dependencies
- vite.config must include base: './' for relative paths
- Each file content must be a COMPLETE string, not truncated

If requirements only need React, omit vue_project (set to {"files":{}}).
If requirements only need Vue, omit react_project (set to {"files":{}}).`;

export async function runAgent3(requirements, components) {
  try {
    const input = {
      requirements,
      selected_components: components.selected_components,
    };
    return await callLLMJson(
      SYSTEM_PROMPT,
      JSON.stringify(input, null, 2),
      { temperature: 0.4, maxTokens: 16000 },
    );
  } catch (error) {
    error.stage = 'agent3-codegen';
    throw error;
  }
}
