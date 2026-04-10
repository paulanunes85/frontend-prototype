import { useRef } from 'react';
import { Download, Upload } from 'lucide-react';
import type { FormData } from '@/types/form';

interface Props {
  formData: FormData;
  onImport: (data: FormData) => void;
}

export function ConfigExportImport({ formData, onImport }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleExport() {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blueprint-config-${formData.projectName || 'untitled'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string);
        onImport(data);
      } catch {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  return (
    <div className="flex gap-3 mb-5">
      <button type="button" onClick={handleExport}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E1E1E1] text-xs font-semibold text-[#616161] hover:border-[#0078D4] hover:text-[#0078D4] transition-all bg-white">
        <Download size={14} /> Export Config
      </button>
      <button type="button" onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E1E1E1] text-xs font-semibold text-[#616161] hover:border-[#0078D4] hover:text-[#0078D4] transition-all bg-white">
        <Upload size={14} /> Import Config
      </button>
      <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
    </div>
  );
}
