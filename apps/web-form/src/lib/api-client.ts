import axios from 'axios';

// WARNING: VITE_FOUNDRY_API_TOKEN is exposed in the client bundle.
// In production, replace this with a Backend-for-Frontend (BFF) proxy
// or Azure Functions HTTP trigger that keeps the token server-side.
// See: https://owasp.org/Top10/A01_2021-Broken_Access_Control/
const API_BASE_URL = import.meta.env.VITE_FOUNDRY_API_URL;
const API_TOKEN = import.meta.env.VITE_FOUNDRY_API_TOKEN;

if (API_TOKEN && import.meta.env.MODE === 'production') {
  console.warn(
    '[Security] API token is embedded in the client bundle. ' +
    'Use a server-side proxy in production.',
  );
}

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
  },
  timeout: 300_000, // 5 minutes — full pipeline timeout
});
