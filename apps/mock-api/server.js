/**
 * Mock Foundry API — Simulates the 5-agent pipeline locally.
 *
 * POST /api/generate-prototype
 *   - Accepts the same payload as the real Foundry orchestrator
 *   - Simulates each agent with a realistic delay
 *   - Returns a mock GenerationResponse pointing to the sample-prototype container
 *
 * GET /api/health
 *   - Health check
 */

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
const SAMPLE_PROTOTYPE_URL = process.env.SAMPLE_PROTOTYPE_URL || 'http://localhost:8080';

app.use(cors());
app.use(express.json());

// --- Health check ---
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'mock-foundry-api' });
});

// --- Agent simulation ---
const AGENTS = [
  { name: 'Requirements Parser', delay: 1500 },
  { name: 'Component Selector', delay: 2000 },
  { name: 'Code Generator', delay: 3000 },
  { name: 'Documentation Writer', delay: 1500 },
  { name: 'GitHub Publisher + Azure Deployer', delay: 2000 },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- POST /api/generate-prototype ---
app.post('/api/generate-prototype', async (req, res) => {
  const startTime = Date.now();
  const payload = req.body;

  console.log('\n========================================');
  console.log('  Foundry Prototype Generator (MOCK)');
  console.log('========================================');
  console.log(`Project: ${payload.project_name}`);
  console.log(`Type:    ${payload.prototype_type}`);
  console.log(`Framework: ${payload.framework}`);
  console.log(`Components: ${(payload.components || []).join(', ')}`);
  console.log('----------------------------------------\n');

  // Simulate each agent sequentially
  for (let i = 0; i < AGENTS.length; i++) {
    const agent = AGENTS[i];
    console.log(`  [${i + 1}/5] ${agent.name}...`);
    await sleep(agent.delay);
    console.log(`  [${i + 1}/5] ${agent.name} ✓ (${agent.delay}ms)`);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const projectName = payload.project_name || 'demo-prototype';
  const ttlHours = payload.environment_config?.ttl_hours || 72;
  const expiresAt = new Date(Date.now() + ttlHours * 3600_000).toISOString();

  const response = {
    success: true,
    repository_url: `https://github.com/company/${projectName}`,
    prototype_url: SAMPLE_PROTOTYPE_URL,
    react_url: `${SAMPLE_PROTOTYPE_URL}/react/`,
    vue_url: `${SAMPLE_PROTOTYPE_URL}/vue/`,
    expires_at: expiresAt,
    ttl_hours: ttlHours,
    execution_time: parseFloat(elapsed),
  };

  console.log(`\n  ✓ Prototype ready in ${elapsed}s`);
  console.log(`  URL: ${response.prototype_url}`);
  console.log(`  Expires: ${response.expires_at}\n`);

  res.json(response);
});

// --- 404 ---
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// --- Start ---
app.listen(PORT, () => {
  console.log(`\nMock Foundry API running on http://localhost:${PORT}`);
  console.log(`Sample prototype URL: ${SAMPLE_PROTOTYPE_URL}\n`);
});
