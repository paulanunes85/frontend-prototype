import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { WizardStepper } from './WizardStepper';
import { TemplateGallery } from './TemplateGallery';
import { BasicInfoStep } from './BasicInfoStep';
import { PrototypeTypeStep } from './PrototypeTypeStep';
import { ComponentSelector } from './ComponentSelector';
import { FeatureSelector } from './FeatureSelector';
import { BusinessRulesStep } from './BusinessRulesStep';
import { ColorThemePicker } from './ColorThemePicker';
import { ApiSchemaInput } from './ApiSchemaInput';
import { GitHubConfigStep } from './GitHubConfigStep';
import { EphemeralConfigStep } from './EphemeralConfigStep';
import { ConfigExportImport } from './ConfigExportImport';
import { ReviewStep } from './ReviewStep';
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
  colorTheme: { primary: '#0078D4', secondary: '#00A4EF', accent: '#F3F2F1' },
  apiSchema: '',
  templateId: null,
};

export function PrototypeForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const mutation = usePrototypeGeneration();

  function updateField(field: keyof FormData, value: FormData[keyof FormData]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationErrors([]);
  }

  function applyTemplate(template: any) {
    if (template.id === 'custom') {
      setFormData({ ...INITIAL_FORM, templateId: 'custom' });
    } else {
      setFormData((prev) => ({
        ...prev,
        templateId: template.id,
        prototypeType: template.config.prototypeType || prev.prototypeType,
        components: template.config.components || prev.components,
        features: template.config.features || prev.features,
        businessRules: template.config.businessRules || prev.businessRules,
      }));
    }
  }

  function handleSubmit() {
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
    setStep(0);
    mutation.reset();
  }

  if (mutation.isSuccess) {
    return <GenerationResult result={mutation.data} onReset={handleReset} />;
  }

  if (mutation.isPending) {
    return <GenerationProgress />;
  }

  const TOTAL_STEPS = 6;
  const canGoNext = step < TOTAL_STEPS - 1;
  const canGoBack = step > 0;

  return (
    <div>
      <WizardStepper currentStep={step} onStepClick={setStep} />
      <ConfigExportImport formData={formData} onImport={(data) => setFormData(data)} />

      {/* Step 0: Template */}
      {step === 0 && (
        <TemplateGallery
          selected={formData.templateId}
          onSelect={(t) => applyTemplate(t)}
        />
      )}

      {/* Step 1: Details */}
      {step === 1 && (
        <>
          <BasicInfoStep formData={formData} onChange={(field, value) => updateField(field, value)} />
          <PrototypeTypeStep value={formData.prototypeType} onChange={(value) => updateField('prototypeType', value)} />
        </>
      )}

      {/* Step 2: Components */}
      {step === 2 && (
        <ComponentSelector
          selected={formData.components}
          onChange={(components) => updateField('components', components)}
        />
      )}

      {/* Step 3: Features */}
      {step === 3 && (
        <>
          <FeatureSelector selected={formData.features} onChange={(features) => updateField('features', features)} />
          <BusinessRulesStep businessRules={formData.businessRules} onBusinessRulesChange={(value) => updateField('businessRules', value)} />
          <ColorThemePicker value={formData.colorTheme} onChange={(theme) => updateField('colorTheme', theme)} />
          <ApiSchemaInput value={formData.apiSchema} onChange={(schema) => updateField('apiSchema', schema)} />
        </>
      )}

      {/* Step 4: Config */}
      {step === 4 && (
        <>
          <GitHubConfigStep formData={formData} onChange={updateField} />
          <EphemeralConfigStep formData={formData} onChange={updateField} />
        </>
      )}

      {/* Step 5: Review */}
      {step === 5 && (
        <>
          <ReviewStep formData={formData} />
          {validationErrors.length > 0 && (
            <div className="bg-[rgba(242,80,34,0.06)] text-[#F25022] px-5 py-4 rounded-[10px] mb-5 border border-[rgba(242,80,34,0.15)] text-sm">
              {validationErrors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
          )}
          {mutation.isError && (
            <div className="bg-[rgba(242,80,34,0.06)] text-[#F25022] px-5 py-4 rounded-[10px] mb-5 border border-[rgba(242,80,34,0.15)] text-sm">
              Error: {mutation.error.message}
            </div>
          )}
        </>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        {canGoBack ? (
          <button type="button" onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#E1E1E1] text-sm font-semibold text-[#171717] hover:border-[#171717] hover:-translate-y-0.5 transition-all">
            <ChevronLeft size={16} /> Back
          </button>
        ) : <div />}

        {canGoNext ? (
          <button type="button" onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#24292E] text-white text-sm font-bold shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#1B1F23] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all">
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button type="button" onClick={handleSubmit}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#0078D4] text-white text-sm font-bold shadow-[0_4px_20px_rgba(0,120,212,0.3)] hover:bg-[#005faa] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,120,212,0.4)] transition-all">
            <Sparkles size={16} /> Generate Prototype
          </button>
        )}
      </div>
    </div>
  );
}
