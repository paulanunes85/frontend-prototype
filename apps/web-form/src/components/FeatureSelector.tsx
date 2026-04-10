import { FEATURES } from '@/types/form';

interface Props {
  selected: string[];
  onChange: (features: string[]) => void;
}

export function FeatureSelector({ selected, onChange }: Props) {
  function toggle(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((s) => s !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  return (
    <section className="form-section">
      <h2 className="section-title">Features</h2>
      <p className="section-subtitle">Select additional capabilities for your prototype.</p>
      <div className="feature-list">
        {FEATURES.map((feature) => (
          <label key={feature.value} className="feature-item">
            <input
              type="checkbox"
              checked={selected.includes(feature.value)}
              onChange={() => toggle(feature.value)}
            />
            {feature.label}
          </label>
        ))}
      </div>
    </section>
  );
}
