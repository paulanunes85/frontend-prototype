import { fetchStoriesJson, parseStoriesJson } from '../clients/storybook-client.js';
import type { DesignComponent } from '../types.js';

export async function listComponents(
  framework?: string,
  category?: string,
): Promise<{ total: number; components: DesignComponent[] }> {
  const storiesData = await fetchStoriesJson();
  let components = parseStoriesJson(storiesData);

  if (framework && framework !== 'all') {
    components = components.filter((c) => c.framework === framework);
  }
  if (category) {
    components = components.filter((c) => c.category === category);
  }

  return { total: components.length, components };
}
