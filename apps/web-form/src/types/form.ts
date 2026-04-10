export interface FormData {
  projectName: string;
  description: string;
  framework: 'react' | 'vue' | 'both';
  prototypeType: PrototypeType;
  components: string[];
  features: Feature[];
  businessRules: string;
  repoVisibility: 'public' | 'private';
  collaborators: string[];
  ttlHours: number;
  azureRegion: string;
}

export type PrototypeType = 'dashboard' | 'landing' | 'crud' | 'ecommerce' | 'custom';

export type Feature =
  | 'authentication'
  | 'api_integration'
  | 'responsive'
  | 'dark_mode'
  | 'i18n'
  | 'testing';

export const PROTOTYPE_TYPES: { value: PrototypeType; label: string }[] = [
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'crud', label: 'CRUD / Form' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'custom', label: 'Custom' },
];

export const FEATURES: { value: Feature; label: string }[] = [
  { value: 'authentication', label: 'Authentication' },
  { value: 'api_integration', label: 'REST API Integration' },
  { value: 'responsive', label: 'Responsive Design' },
  { value: 'dark_mode', label: 'Dark Mode' },
  { value: 'i18n', label: 'Internationalization (i18n)' },
  { value: 'testing', label: 'Automated Tests' },
];

export const AZURE_REGIONS = [
  { value: 'eastus2', label: 'East US 2' },
  { value: 'westeurope', label: 'West Europe' },
  { value: 'southeastasia', label: 'Southeast Asia' },
];

export const TTL_OPTIONS = [
  { value: 24, label: '24 hours (quick review)' },
  { value: 72, label: '72 hours (default)' },
  { value: 168, label: '7 days (extended review)' },
  { value: 720, label: '30 days (long-term demo)' },
];
