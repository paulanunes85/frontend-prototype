export interface DesignComponent {
  id: string;
  name: string;
  framework: 'react' | 'vue';
  category: string;
  description: string;
}

export interface ComponentProps {
  component: string;
  props: Record<string, PropDefinition>;
}

export interface PropDefinition {
  type: string;
  options?: string[];
  default?: string | boolean | number;
  required?: boolean;
  description?: string;
}

export interface DesignToken {
  name: string;
  value: string;
  category: 'colors' | 'spacing' | 'typography' | 'shadows';
}

export interface ComponentExample {
  name: string;
  code: string;
  description?: string;
}

export interface SearchResult {
  name: string;
  framework: string;
  relevance: number;
  description: string;
}
