/**
 * Real Foundry Prototype Generator API
 *
 * Orchestrates 5 AI agents via GitHub Models API (GPT-4o),
 * creates real GitHub repos, and deploys to Azure Container Apps.
 */

import express from 'express';
import cors from 'cors';
import { runAgent1 } from './agents/agent1-requirements.js';
import { runAgent2 } from './agents/agent2-components.js';
import { runAgent3 } from './agents/agent3-codegen.js';
import { runAgent4 } from './agents/agent4-docs.js';
import { runAgent5 } from './agents/agent5-publish.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'foundry-prototype-api', mode: 'real' });
});

app.post('/api/generate-prototype', async (req, res) => {
  const startTime = Date.now();
  const payload = req.body;

  console.log('\n==========================================');
  console.log('  Foundry Prototype Generator (REAL)');
  console.log('==========================================');
  console.log(`Project: ${payload.project_name}`);
  console.log(`Type:    ${payload.prototype_type}`);
  console.log(`Framework: ${payload.framework}`);
  console.log('------------------------------------------\n');

  try {
    // Agent 1: Parse Requirements
    console.log('  [1/5] Requirements Parser...');
    const requirements = await runAgent1(payload);
    console.log('  [1/5] Requirements Parser ✓');

    // Agent 2: Select Components
    console.log('  [2/5] Component Selector...');
    const components = await runAgent2(requirements);
    console.log('  [2/5] Component Selector ✓');

    // Agent 3: Generate Code
    console.log('  [3/5] Code Generator...');
    const code = await runAgent3(requirements, components);
    console.log('  [3/5] Code Generator ✓');

    // Agent 4: Documentation
    console.log('  [4/5] Documentation Writer...');
    const docs = await runAgent4(requirements, components, code);
    console.log('  [4/5] Documentation Writer ✓');

    // Agent 5: Publish to GitHub + Deploy to ACA
    console.log('  [5/5] GitHub Publisher + Azure Deployer...');
    const result = await runAgent5({
      requirements,
      code,
      docs,
      repoName: payload.project_name,
      visibility: payload.repo_visibility || 'private',
      collaborators: payload.collaborators || [],
      ttlHours: payload.environment_config?.ttl_hours || 72,
    });
    console.log('  [5/5] GitHub Publisher + Azure Deployer ✓');

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n  ✓ Prototype ready in ${elapsed}s`);
    console.log(`  Repo: ${result.repository_url}`);
    console.log(`  URL:  ${result.prototype_url}\n`);

    res.json({
      success: true,
      ...result,
      execution_time: parseFloat(elapsed),
    });
  } catch (error) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.error(`\n  ✗ Failed after ${elapsed}s:`, error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      stage: error.stage || 'unknown',
      execution_time: parseFloat(elapsed),
    });
  }
});

app.listen(PORT, () => {
  console.log(`\nReal Foundry API running on http://localhost:${PORT}`);
  console.log(`GitHub Token: ${process.env.GITHUB_TOKEN ? '✓ configured' : '✗ MISSING'}`);
  console.log(`Azure: ${process.env.ACR_LOGIN_SERVER ? '✓ configured' : '✗ MISSING'}\n`);
});
