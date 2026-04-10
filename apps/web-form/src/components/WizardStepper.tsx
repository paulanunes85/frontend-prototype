import { Check } from 'lucide-react';

const WIZARD_STEPS = [
  { label: 'Template', key: 'template' },
  { label: 'Details', key: 'details' },
  { label: 'Components', key: 'components' },
  { label: 'Features', key: 'features' },
  { label: 'Config', key: 'config' },
  { label: 'Review', key: 'review' },
];

interface Props {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function WizardStepper({ currentStep, onStepClick }: Props) {
  return (
    <div className="flex items-center justify-between max-w-[700px] mx-auto mb-10">
      {WIZARD_STEPS.map((step, i) => {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep;
        return (
          <div key={step.key} className="flex items-center">
            <button
              type="button"
              onClick={() => isCompleted && onStepClick(i)}
              className={`flex items-center gap-2 transition-all ${isCompleted ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                isCompleted ? 'bg-[#7FBA00] text-white' :
                isCurrent ? 'bg-[#0078D4] text-white shadow-[0_0_0_4px_rgba(0,120,212,0.15)]' :
                'bg-[#F3F2F1] text-[#8E8E8E]'
              }`}>
                {isCompleted ? <Check size={16} /> : i + 1}
              </div>
              <span className={`text-xs font-semibold hidden md:block ${
                isCurrent ? 'text-[#0078D4]' : isCompleted ? 'text-[#171717]' : 'text-[#8E8E8E]'
              }`}>{step.label}</span>
            </button>
            {i < WIZARD_STEPS.length - 1 && (
              <div className={`w-8 md:w-16 h-[2px] mx-2 transition-all ${
                i < currentStep ? 'bg-[#7FBA00]' : 'bg-[#E1E1E1]'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export { WIZARD_STEPS };
