import type { GenerationResponse } from '@/types/api';

interface Props {
  result: GenerationResponse;
  onReset: () => void;
}

export function GenerationResult({ result, onReset }: Props) {
  const expiresAt = new Date(result.expires_at);

  return (
    <div className="generation-result">
      <div className="result-badge">✓ Prototype created successfully!</div>

      <div className="result-links">
        <a href={result.prototype_url} target="_blank" rel="noopener noreferrer" className="link-primary">
          Open Prototype
        </a>
        <div className="link-grid">
          <a href={result.react_url} target="_blank" rel="noopener noreferrer">
            React Version
          </a>
          <a href={result.vue_url} target="_blank" rel="noopener noreferrer">
            Vue Version
          </a>
          <a href={result.repository_url} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>

      <div className="result-meta">
        <p>
          <strong>Expires:</strong> {expiresAt.toLocaleDateString('en-US')} at{' '}
          {expiresAt.toLocaleTimeString('en-US')} ({result.ttl_hours}h)
        </p>
        <p>
          <strong>Generation time:</strong> {Math.round(result.execution_time)}s
        </p>
      </div>

      <button type="button" className="btn-secondary" onClick={onReset}>
        Generate another prototype
      </button>
    </div>
  );
}
