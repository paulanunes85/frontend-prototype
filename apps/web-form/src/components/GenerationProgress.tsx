interface Agent {
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
}

const AGENTS: Agent[] = [
  { name: 'Requirements Parser', status: 'pending' },
  { name: 'Component Selector', status: 'pending' },
  { name: 'Code Generator', status: 'pending' },
  { name: 'Documentation Writer', status: 'pending' },
  { name: 'GitHub Publisher + Azure Deployer', status: 'pending' },
];

interface Props {
  currentAgent?: number;
}

export function GenerationProgress({ currentAgent = 0 }: Props) {
  const agents = AGENTS.map((agent, i) => ({
    ...agent,
    status: i < currentAgent ? 'completed' as const : i === currentAgent ? 'running' as const : 'pending' as const,
  }));

  return (
    <div className="generation-progress">
      <h2>Gerando protótipo...</h2>
      <p className="progress-subtitle">Isso pode levar ~4.5 minutos</p>
      <ol className="agent-list">
        {agents.map((agent, i) => (
          <li key={i} className={`agent-item ${agent.status}`}>
            <span className="agent-icon">
              {agent.status === 'completed' && '✓'}
              {agent.status === 'running' && '⟳'}
              {agent.status === 'pending' && '○'}
              {agent.status === 'failed' && '✗'}
            </span>
            <span className="agent-name">
              Agent {i + 1}: {agent.name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
