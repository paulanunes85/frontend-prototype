import { PROTOTYPE_TYPES } from '@/types/form';
import type { FormData, PrototypeType } from '@/types/form';

interface Props {
  value: FormData['prototypeType'];
  onChange: (value: PrototypeType) => void;
}

export function PrototypeTypeStep({ value, onChange }: Props) {
  return (
    <fieldset className="form-step">
      <legend>Prototype Type</legend>
      <div className="type-grid">
        {PROTOTYPE_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            className={`type-card ${value === type.value ? 'active' : ''}`}
            onClick={() => onChange(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
