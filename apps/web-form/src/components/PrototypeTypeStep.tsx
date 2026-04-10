import { PROTOTYPE_TYPES } from '@/types/form';
import type { FormData, PrototypeType } from '@/types/form';

interface Props {
  value: FormData['prototypeType'];
  onChange: (value: PrototypeType) => void;
}

export function PrototypeTypeStep({ value, onChange }: Props) {
  return (
    <section className="form-section" id="prototype-type">
      <h2 className="section-title">What are you building?</h2>
      <p className="section-subtitle">Select the type of prototype that best matches your needs.</p>
      <div className="type-grid">
        {PROTOTYPE_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            className={`type-card ${value === type.value ? 'active' : ''}`}
            onClick={() => onChange(type.value)}
          >
            <span className="type-icon">{type.icon}</span>
            <span className="type-label">{type.label}</span>
            <span className="type-desc">{type.description}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
