import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

import { listComponents } from './tools/list-components.js';
import { getComponentCode } from './tools/get-component-code.js';
import { getComponentProps } from './tools/get-component-props.js';
import { searchComponents } from './tools/search-components.js';
import { getDesignTokens } from './tools/get-design-tokens.js';
import { getComponentExamples } from './tools/get-component-examples.js';

const server = new Server(
  { name: 'company-design-system', version: '1.0.0' },
  { capabilities: { tools: {} } },
);

// --- List Tools ---
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'list_components',
      description: 'List all available design system components',
      inputSchema: {
        type: 'object' as const,
        properties: {
          framework: { type: 'string', enum: ['react', 'vue', 'all'], description: 'Framework filter' },
          category: { type: 'string', description: 'Component category (optional)' },
        },
      },
    },
    {
      name: 'get_component_code',
      description: 'Return example code for a specific component',
      inputSchema: {
        type: 'object' as const,
        properties: {
          component_name: { type: 'string', description: 'Component name' },
          framework: { type: 'string', enum: ['react', 'vue'], description: 'Target framework' },
          variant: { type: 'string', description: "Component variant (e.g., 'primary')" },
        },
        required: ['component_name', 'framework'],
      },
    },
    {
      name: 'get_component_props',
      description: 'Return TypeScript interface/props for a component',
      inputSchema: {
        type: 'object' as const,
        properties: { component_name: { type: 'string' } },
        required: ['component_name'],
      },
    },
    {
      name: 'search_components',
      description: 'Search components by description or use-case',
      inputSchema: {
        type: 'object' as const,
        properties: {
          query: { type: 'string', description: 'Search term' },
          framework: { type: 'string', enum: ['react', 'vue', 'all'] },
        },
        required: ['query'],
      },
    },
    {
      name: 'get_design_tokens',
      description: 'Return design tokens (colors, spacing, typography, shadows)',
      inputSchema: {
        type: 'object' as const,
        properties: {
          category: { type: 'string', enum: ['colors', 'spacing', 'typography', 'shadows', 'all'] },
        },
      },
    },
    {
      name: 'get_component_examples',
      description: 'Return complete usage examples from Storybook',
      inputSchema: {
        type: 'object' as const,
        properties: {
          component_name: { type: 'string' },
          framework: { type: 'string', enum: ['react', 'vue'] },
        },
        required: ['component_name', 'framework'],
      },
    },
  ],
}));

// --- Call Tool ---
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'list_components': {
        const result = await listComponents(args?.framework as string, args?.category as string);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
      }
      case 'get_component_code': {
        const code = await getComponentCode(
          args!.component_name as string,
          args!.framework as string,
          args?.variant as string,
        );
        return { content: [{ type: 'text', text: code }] };
      }
      case 'get_component_props': {
        const props = await getComponentProps(args!.component_name as string);
        return { content: [{ type: 'text', text: JSON.stringify(props, null, 2) }] };
      }
      case 'search_components': {
        const results = await searchComponents(args!.query as string, args?.framework as string);
        return { content: [{ type: 'text', text: JSON.stringify(results, null, 2) }] };
      }
      case 'get_design_tokens': {
        const tokens = await getDesignTokens(args?.category as string);
        return { content: [{ type: 'text', text: JSON.stringify(tokens, null, 2) }] };
      }
      case 'get_component_examples': {
        const examples = await getComponentExamples(
          args!.component_name as string,
          args!.framework as string,
        );
        return { content: [{ type: 'text', text: JSON.stringify(examples, null, 2) }] };
      }
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { content: [{ type: 'text', text: `Error: ${message}` }], isError: true };
  }
});

// --- Start ---
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Design System Server running on stdio');
}

main().catch(console.error);
