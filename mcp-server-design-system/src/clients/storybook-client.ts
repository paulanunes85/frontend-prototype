import type { DesignComponent } from '../types.js';

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'https://storybook.company.com';

export function parseStoriesJson(storiesData: Record<string, unknown>): DesignComponent[] {
  const components: DesignComponent[] = [];
  const stories = (storiesData as { stories?: Record<string, Record<string, unknown>> }).stories || {};

  for (const [id, story] of Object.entries(stories)) {
    const title = (story.title as string) || '';
    const params = (story.parameters as Record<string, unknown>) || {};
    const docs = (params.docs as Record<string, unknown>) || {};

    components.push({
      id,
      name: title.split('/').pop() || (story.name as string) || id,
      framework: (params.framework as 'react' | 'vue') || 'react',
      category: title.split('/')[0] || 'Other',
      description: (docs.description as string) || '',
    });
  }

  return components;
}

export async function fetchStoriesJson(): Promise<Record<string, unknown>> {
  const response = await fetch(`${STORYBOOK_URL}/stories.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch stories.json: ${response.status}`);
  }
  return response.json() as Promise<Record<string, unknown>>;
}
