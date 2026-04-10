import type { FormData } from '@/types/form';

interface Props {
  formData: FormData;
}

export function ReviewStep({ formData }: Props) {
  return (
    <div className="bg-white border border-[#E1E1E1] rounded-2xl p-8 mb-5">
      <h3 className="text-xl font-extrabold text-[#171717] mb-1">Review Configuration</h3>
      <p className="text-sm text-[#616161] mb-6">Verify your settings before generating the prototype.</p>

      <div className="space-y-4">
        <Row label="Project Name" value={formData.projectName || '(not set)'} />
        <Row label="Framework" value={formData.framework === 'both' ? 'React + Vue' : formData.framework} />
        <Row label="Prototype Type" value={formData.prototypeType} />
        <Row label="Components" value={formData.components.length > 0 ? formData.components.join(', ') : '(none selected)'} />
        <Row label="Features" value={formData.features.length > 0 ? formData.features.join(', ') : '(none)'} />
        <Row label="Business Rules" value={formData.businessRules || '(none)'} />
        <Row label="GitHub Visibility" value={formData.repoVisibility} />
        <Row label="Collaborators" value={formData.collaborators.length > 0 ? formData.collaborators.map(c => '@' + c).join(', ') : '(none)'} />
        <Row label="TTL" value={`${formData.ttlHours} hours`} />
        <Row label="Azure Region" value={formData.azureRegion} />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-[#F3F2F1] last:border-0">
      <span className="text-sm font-semibold text-[#616161] w-[140px] shrink-0">{label}</span>
      <span className="text-sm text-[#171717] text-right">{value}</span>
    </div>
  );
}
