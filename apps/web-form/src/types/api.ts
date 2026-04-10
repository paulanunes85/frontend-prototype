export interface GenerationResponse {
  success: boolean;
  repository_url: string;
  prototype_url: string;
  react_url: string;
  vue_url: string;
  expires_at: string;
  ttl_hours: number;
  execution_time: number;
}

export interface GenerationError {
  error: string;
  stage?: string;
  details?: string;
}

export interface AgentProgress {
  agent: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  elapsed_ms?: number;
}

export interface GenerationStatus {
  workflow_id: string;
  status: 'running' | 'completed' | 'failed';
  agents: AgentProgress[];
  result?: GenerationResponse;
  error?: GenerationError;
}
