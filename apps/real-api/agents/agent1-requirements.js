/**
 * Agent 1: Requirements Parser
 * Transforms raw form data into a structured specification.
 */

import { callLLMJson } from '../llm.js';

const SYSTEM_PROMPT = `You are a software requirements analyst.
Transform the form data into a structured JSON specification.

Output ONLY valid JSON with this exact structure:
{
  "project_metadata": {
    "name": "project-name",
    "description": "full description",
    "frameworks": ["react", "vue"]
  },
  "prototype_type": "dashboard",
  "components_needed": [
    { "name": "ComponentName", "usage": "how it will be used", "priority": "high" }
  ],
  "features": {
    "authentication": false,
    "api_integration": false,
    "responsive": true,
    "dark_mode": false,
    "i18n": false,
    "testing": false
  },
  "business_rules": ["rule 1", "rule 2"],
  "github_config": {
    "repo_name": "repo-name",
    "visibility": "private",
    "collaborators": []
  },
  "environment_config": {
    "ttl_hours": 72,
    "azure_region": "eastus2"
  }
}

Rules:
- If framework is "both", set frameworks to ["react","vue"]
- Infer missing components based on prototype_type
- Normalize component names to PascalCase
- Keep business_rules as short actionable strings`;

export async function runAgent1(formData) {
  try {
    return await callLLMJson(
      SYSTEM_PROMPT,
      JSON.stringify(formData, null, 2),
      { temperature: 0.2, maxTokens: 2000 },
    );
  } catch (error) {
    error.stage = 'agent1-requirements';
    throw error;
  }
}
