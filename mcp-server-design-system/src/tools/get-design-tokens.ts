export async function getDesignTokens(
  category?: string,
): Promise<Record<string, unknown>> {
  // In production, fetched from design system package or Storybook
  const tokens: Record<string, unknown> = {
    colors: {
      primary: { main: '#0078D4', light: '#50A0E0', dark: '#005A9E' },
      secondary: { main: '#6B6B6B', light: '#8A8A8A', dark: '#4C4C4C' },
      success: '#28A745',
      error: '#DC3545',
      warning: '#FFB900',
      background: { default: '#F5F7FA', paper: '#FFFFFF' },
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px',
    },
    typography: {
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      h1: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 },
      h2: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3 },
      body: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
      small: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.5 },
    },
    shadows: {
      sm: '0 1px 3px rgba(0,0,0,0.08)',
      md: '0 2px 8px rgba(0,0,0,0.12)',
      lg: '0 8px 24px rgba(0,0,0,0.16)',
    },
  };

  if (category && category !== 'all') {
    return { [category]: tokens[category] || {} };
  }

  return tokens;
}
