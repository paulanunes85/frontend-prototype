import type { FormData } from '@/types/form';

interface Props {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
}

export function BasicInfoStep({ formData, onChange }: Props) {
  return (
    <section className="form-section">
      <h2 className="section-title">Basic Information</h2>
      <p className="section-subtitle">Tell us about your project.</p>

      <label htmlFor="projectName">Project Name</label>
      <input
        id="projectName"
        type="text"
        placeholder="my-dashboard"
        value={formData.projectName}
        onChange={(e) => onChange('projectName', e.target.value)}
        required
      />
      <small>Lowercase letters, numbers, and hyphens. E.g.: sales-dashboard</small>

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Sales dashboard with key metrics..."
        value={formData.description}
        onChange={(e) => onChange('description', e.target.value)}
        rows={3}
        required
      />

      <label htmlFor="framework">Framework</label>
      <select
        id="framework"
        value={formData.framework}
        onChange={(e) => onChange('framework', e.target.value)}
      >
        <option value="both">React + Vue (Both)</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </select>
    </section>
  );
}
