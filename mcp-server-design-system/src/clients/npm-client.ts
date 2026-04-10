const NPM_REGISTRY = process.env.NPM_REGISTRY || 'https://npm.company.com';
const NPM_TOKEN = process.env.NPM_TOKEN;

export async function fetchPackageInfo(packageName: string): Promise<Record<string, unknown>> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (NPM_TOKEN) {
    headers['Authorization'] = `Bearer ${NPM_TOKEN}`;
  }

  const response = await fetch(`${NPM_REGISTRY}/${encodeURIComponent(packageName)}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch package ${packageName}: ${response.status}`);
  }

  return response.json() as Promise<Record<string, unknown>>;
}
