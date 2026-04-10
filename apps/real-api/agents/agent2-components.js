/**
 * Agent 2: Component Selector
 * Selects the best design system components for the prototype.
 */

import { callLLMJson } from '../llm.js';

const SYSTEM_PROMPT = `You are a design system and component architecture expert.

Given structured requirements, select the best components from a corporate design system.
For each component, provide realistic import paths, props, and example code.

Output ONLY valid JSON:
{
  "selected_components": [
    {
      "name": "DataTable",
      "framework": "react",
      "import_path": "@company/design-system",
      "props": { "data": "array", "columns": "array", "pagination": "boolean" },
      "example_code": "import { DataTable } from '@company/design-system';\\n...",
      "usage_in_prototype": "Display sales data with sorting and filtering"
    }
  ]
}

Available components in the design system:
DataTable, LineChart, BarChart, PieChart, KPICard, Card, Button, Form, Modal,
Navbar, Sidebar, Hero, Footer, Alert, Tabs, Select, DatePicker, Input, Checkbox,
Toggle, Avatar, Badge, Tooltip, Dropdown, Breadcrumb, Pagination, Spinner, Toast.

Rules:
- Select ONLY components that match the requirements
- Include both React and Vue example code if frameworks include both
- Provide realistic TypeScript props for each component`;

export async function runAgent2(requirements) {
  try {
    return await callLLMJson(
      SYSTEM_PROMPT,
      JSON.stringify(requirements, null, 2),
      { temperature: 0.3, maxTokens: 3000 },
    );
  } catch (error) {
    error.stage = 'agent2-components';
    throw error;
  }
}
