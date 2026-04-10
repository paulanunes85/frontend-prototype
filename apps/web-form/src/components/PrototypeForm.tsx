import { useState } from 'react';
import { BasicInfoStep } from './BasicInfoStep';
import { PrototypeTypeStep } from './PrototypeTypeStep';
import { ComponentSelector } from './ComponentSelector';
import { FeatureSelector } from './FeatureSelector';
import { BusinessRulesStep } from './BusinessRulesStep';
import { GitHubConfigStep } from './GitHubConfigStep';
import { EphemeralConfigStep } from './EphemeralConfigStep';
import { GenerationProgress } from './GenerationProgress';
import { GenerationResult } from './GenerationResult';
import { usePrototypeGeneration } from '@/hooks/usePrototypeGeneration';
import { formSchema } from '@/hooks/useFormValidation';
import type { FormData } from '@/types/form';

const INITIAL_FORM: FormData = {
  projectName: '',
  description: '',
  framework: 'both',
  prototypeType: 'dashboard',
  components: [],
  features: ['responsive'],
  businessRules: '',
  repoVisibility: 'private',
  collaborators: [],
  ttlHours: 72,
  azureRegion: 'eastus2',
};

export function PrototypeForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const mutation = usePrototypeGeneration();

  function updateField(field: keyof FormData, value: FormData[keyof FormData]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationErrors([]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      setValidationErrors(result.error.errors.map((err) => err.message));
      return;
    }
    setValidationErrors([]);
    mutation.mutate(formData);
  }

  function handleReset() {
    setFormData(INITIAL_FORM);
    setValidationErrors([]);
    mutation.reset();
  }

  if (mutation.isSuccess) {
    return <GenerationResult result={mutation.data} onReset={handleReset} />;
  }

  if (mutation.isPending) {
    return <GenerationProgress />;
  }

  return (
    <form onSubmit={handleSubmit} className="prototype-form">
      <h1>Foundry Prototype Generator</h1>
      <p className="form-subtitle">
        Fill out the form to generate a functional prototype in ~4.5 minutes.
      </p>

      <BasicInfoStep
        formData={formData}
        onChange={(field, value) => updateField(field, value)}
      />

      <PrototypeTypeStep
        value={formData.prototypeType}
        onChange={(value) => updateField('prototypeType', value)}
      />

      <ComponentSelector
        selected={formData.components}
        onChange={(components) => updateField('components', components)}
      />

      <FeatureSelector
        selected={formData.features}
        onChange={(features) => updateField('features', features)}
      />

      <BusinessRulesStep
        businessRules={formData.businessRules}
        onBusinessRulesChange={(value) => updateField('businessRules', value)}
      />

      <GitHubConfigStep formData={formData} onChange={updateField} />

      <EphemeralConfigStep formData={formData} onChange={updateField} />

      {validationErrors.length > 0 && (
        <div className="error-banner">
          {validationErrors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
        </div>
      )}

      {mutation.isError && (
        <div className="error-banner">
          Error: {mutation.error.message}
        </div>
      )}

      <button type="submit" className="btn-primary">
        Generate Prototype
      </button>
    </form>
  );
}
