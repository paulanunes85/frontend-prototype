/**
 * LLM Client — Azure OpenAI
 * Uses the OpenAI SDK pointed at Azure OpenAI endpoint.
 */

import { AzureOpenAI } from 'openai';

const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_API_KEY = process.env.AZURE_OPENAI_API_KEY;
const AZURE_OPENAI_DEPLOYMENT = process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4o';
const AZURE_OPENAI_API_VERSION = process.env.AZURE_OPENAI_API_VERSION || '2024-12-01-preview';

const client = new AzureOpenAI({
  endpoint: AZURE_OPENAI_ENDPOINT,
  apiKey: AZURE_OPENAI_API_KEY,
  apiVersion: AZURE_OPENAI_API_VERSION,
});

/**
 * Call Azure OpenAI.
 * @param {string} systemPrompt - The agent's system prompt
 * @param {string} userMessage - The input data (JSON stringified)
 * @param {object} options - temperature, max_tokens
 * @returns {string} The model's response text
 */
export async function callLLM(systemPrompt, userMessage, options = {}) {
  const { temperature = 0.3, maxTokens = 4000 } = options;

  const response = await client.chat.completions.create({
    model: AZURE_OPENAI_DEPLOYMENT,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    temperature,
    max_tokens: maxTokens,
  });

  return response.choices[0]?.message?.content || '';
}

/**
 * Call LLM and parse JSON response.
 * Strips markdown code fences if present.
 */
export async function callLLMJson(systemPrompt, userMessage, options = {}) {
  const text = await callLLM(systemPrompt, userMessage, options);

  // Strip ```json ... ``` wrappers
  const cleaned = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  return JSON.parse(cleaned);
}
