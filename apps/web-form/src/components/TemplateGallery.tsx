import { BarChart3, Rocket, Settings, Smartphone, Building2, FileText, Globe, Bot } from 'lucide-react';
import type { FormData } from '@/types/form';

const TEMPLATES = [
  {
    id: 'sales-dashboard',
    name: 'Sales Dashboard',
    desc: 'Revenue metrics, charts, data tables, and KPI cards with regional filters.',
    icon: BarChart3,
    color: '#F25022',
    config: {
      prototypeType: 'dashboard' as const,
      components: ['DataTable', 'LineChart', 'BarChart', 'KPICard', 'Navbar', 'Sidebar'],
      features: ['responsive', 'dark_mode'] as string[],
      businessRules: 'Show revenue for last 30 days, filter by region, top 10 products by revenue.',
    },
  },
  {
    id: 'saas-landing',
    name: 'SaaS Landing Page',
    desc: 'Hero section, feature grid, pricing table, testimonials, CTA, and footer.',
    icon: Rocket,
    color: '#7FBA00',
    config: {
      prototypeType: 'landing' as const,
      components: ['Hero', 'Card', 'Button', 'Navbar', 'Footer'],
      features: ['responsive', 'i18n'] as string[],
      businessRules: 'Hero with background video, 3 pricing tiers, 14-day free trial CTA.',
    },
  },
  {
    id: 'admin-panel',
    name: 'Admin Panel',
    desc: 'User management CRUD, settings page, sidebar navigation, and data tables.',
    icon: Settings,
    color: '#00A4EF',
    config: {
      prototypeType: 'admin' as const,
      components: ['DataTable', 'Form', 'Modal', 'Sidebar', 'Navbar', 'Button', 'Alert', 'Tabs'],
      features: ['responsive', 'authentication', 'api_integration'] as string[],
      businessRules: 'User list with role-based access, CRUD operations, audit log.',
    },
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    desc: 'Responsive PWA with bottom navigation, cards, and swipeable views.',
    icon: Smartphone,
    color: '#FFB900',
    config: {
      prototypeType: 'mobile' as const,
      components: ['Card', 'Button', 'Navbar', 'Tabs', 'Alert'],
      features: ['responsive'] as string[],
      businessRules: 'Bottom tab navigation, pull-to-refresh, skeleton loading states.',
    },
  },
  {
    id: 'internal-tool',
    name: 'Internal Tool',
    desc: 'Approval workflows, ticketing system, and status tracking dashboards.',
    icon: Building2,
    color: '#0078D4',
    config: {
      prototypeType: 'internal-tool' as const,
      components: ['DataTable', 'Form', 'Modal', 'Navbar', 'Sidebar', 'Alert', 'Select'],
      features: ['responsive', 'authentication', 'api_integration'] as string[],
      businessRules: 'Ticket list with status (open, in-progress, resolved), assign to team member, priority filter.',
    },
  },
  {
    id: 'onboarding-wizard',
    name: 'Onboarding Wizard',
    desc: 'Multi-step form with progress bar, validation, and success confirmation.',
    icon: FileText,
    color: '#F25022',
    config: {
      prototypeType: 'form-wizard' as const,
      components: ['Form', 'Button', 'Alert', 'Select', 'DatePicker'],
      features: ['responsive', 'testing'] as string[],
      businessRules: '5-step onboarding: personal info, company, preferences, review, confirmation.',
    },
  },
  {
    id: 'client-portal',
    name: 'Client Portal',
    desc: 'Self-service portal with knowledge base, support tickets, and account settings.',
    icon: Globe,
    color: '#7FBA00',
    config: {
      prototypeType: 'portal' as const,
      components: ['DataTable', 'Card', 'Navbar', 'Sidebar', 'Tabs', 'Form', 'Alert'],
      features: ['responsive', 'authentication'] as string[],
      businessRules: 'Dashboard with open tickets, knowledge base search, account settings, billing.',
    },
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chat Interface',
    desc: 'Conversational UI with message bubbles, typing indicator, and suggestion chips.',
    icon: Bot,
    color: '#00A4EF',
    config: {
      prototypeType: 'ai-chat' as const,
      components: ['Card', 'Button', 'Navbar', 'Form'],
      features: ['responsive', 'api_integration'] as string[],
      businessRules: 'Chat with AI assistant, message history, suggested prompts, copy code blocks.',
    },
  },
];

interface Props {
  onSelect: (template: typeof TEMPLATES[0]) => void;
  selected: string | null;
}

export function TemplateGallery({ onSelect, selected }: Props) {
  return (
    <div>
      <h3 className="text-xl font-extrabold text-[#171717] mb-1">Start with a Template</h3>
      <p className="text-sm text-[#616161] mb-6">Choose a pre-built configuration or start from scratch below.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TEMPLATES.map((t) => {
          const Icon = t.icon;
          const isSelected = selected === t.id;
          return (
            <button key={t.id} type="button" onClick={() => onSelect(t)}
              className={`flex items-start gap-4 p-5 rounded-2xl border-[1.5px] text-left transition-all ${
                isSelected
                  ? 'border-[#0078D4] bg-[rgba(0,120,212,0.04)] shadow-[0_0_0_3px_rgba(0,120,212,0.08)]'
                  : 'border-[#E1E1E1] bg-white hover:border-[#c0c0c0] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]'
              }`}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: t.color }}>
                <Icon size={20} />
              </div>
              <div>
                <div className={`font-bold text-sm mb-0.5 ${isSelected ? 'text-[#0078D4]' : 'text-[#171717]'}`}>{t.name}</div>
                <div className="text-xs text-[#616161] leading-[1.5]">{t.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
      <button type="button" onClick={() => onSelect({ id: 'custom', name: 'Custom', desc: '', icon: FileText, color: '#8E8E8E', config: {} as any })}
        className={`w-full mt-4 py-3 rounded-xl border-[1.5px] text-sm font-semibold transition-all ${
          selected === 'custom'
            ? 'border-[#0078D4] text-[#0078D4] bg-[rgba(0,120,212,0.04)]'
            : 'border-dashed border-[#E1E1E1] text-[#8E8E8E] hover:border-[#c0c0c0] hover:text-[#616161]'
        }`}>
        Start from scratch (custom)
      </button>
    </div>
  );
}

export { TEMPLATES };
