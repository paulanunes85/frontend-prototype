import { fetchStoriesJson, parseStoriesJson } from '../clients/storybook-client.js';
import type { SearchResult } from '../types.js';

export async function searchComponents(
  query: string,
  framework?: string,
): Promise<SearchResult[]> {
  const storiesData = await fetchStoriesJson();
  let components = parseStoriesJson(storiesData);

  if (framework && framework !== 'all') {
    components = components.filter((c) => c.framework === framework);
  }

  const lowerQuery = query.toLowerCase();

  return components
    .map((c) => {
      const nameMatch = c.name.toLowerCase().includes(lowerQuery) ? 0.8 : 0;
      const descMatch = c.description.toLowerCase().includes(lowerQuery) ? 0.5 : 0;
      const catMatch = c.category.toLowerCase().includes(lowerQuery) ? 0.3 : 0;
      const relevance = Math.min(nameMatch + descMatch + catMatch, 1);
      return { name: c.name, framework: c.framework, relevance, description: c.description };
    })
    .filter((r) => r.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance);
}
