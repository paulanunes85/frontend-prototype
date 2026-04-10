import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import type { FormData } from '@/types/form';
import type { GenerationResponse } from '@/types/api';

function toApiPayload(formData: FormData) {
  return {
    project_name: formData.projectName,
    description: formData.description,
    framework: formData.framework,
    prototype_type: formData.prototypeType,
    components: formData.components,
    features: formData.features,
    business_rules: formData.businessRules,
    repo_visibility: formData.repoVisibility,
    collaborators: formData.collaborators,
    environment_config: {
      ttl_hours: formData.ttlHours,
      azure_region: formData.azureRegion,
      notify_before_expiry: true,
    },
  };
}

async function generatePrototype(formData: FormData): Promise<GenerationResponse> {
  const payload = toApiPayload(formData);
  const { data } = await apiClient.post<GenerationResponse>(
    '/api/generate-prototype',
    payload,
  );
  return data;
}

export function usePrototypeGeneration() {
  return useMutation({
    mutationFn: generatePrototype,
  });
}
