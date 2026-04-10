import { AZURE_REGIONS, TTL_OPTIONS } from '@/types/form';
import type { FormData } from '@/types/form';

interface Props {
  formData: FormData;
  onChange: (field: keyof FormData, value: FormData[keyof FormData]) => void;
}

export function EphemeralConfigStep({ formData, onChange }: Props) {
  return (
    <fieldset className="form-step">
      <legend>Ephemeral Environment</legend>

      <label htmlFor="ttlHours">Time to Live (TTL)</label>
      <select
        id="ttlHours"
        value={formData.ttlHours}
        onChange={(e) => onChange('ttlHours', Number(e.target.value))}
      >
        {TTL_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <small>The prototype will be automatically removed after this period.</small>

      <label htmlFor="azureRegion">Azure Region</label>
      <select
        id="azureRegion"
        value={formData.azureRegion}
        onChange={(e) => onChange('azureRegion', e.target.value)}
      >
        {AZURE_REGIONS.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
