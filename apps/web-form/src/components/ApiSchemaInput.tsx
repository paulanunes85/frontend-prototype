import { useState } from 'react';
import { FileJson, Check, AlertCircle } from 'lucide-react';

interface Props {
  value: string;
  onChange: (schema: string) => void;
}

export function ApiSchemaInput({ value, onChange }: Props) {
  const [status, setStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');

  function handlePaste(text: string) {
    onChange(text);
    try {
      const parsed = JSON.parse(text);
      if (parsed.openapi || parsed.swagger || parsed.paths) {
        setStatus('valid');
      } else {
        setStatus('invalid');
      }
    } catch {
      setStatus(text.trim() ? 'invalid' : 'idle');
    }
  }

  return (
    <div className="bg-white border border-[#E1E1E1] rounded-2xl p-8 mb-5 transition-all hover:border-[#c0c0c0]">
      <div className="flex items-center gap-2 mb-1">
        <FileJson size={20} className="text-[#0078D4]" />
        <h3 className="text-xl font-extrabold text-[#171717]">API Schema (Optional)</h3>
      </div>
      <p className="text-sm text-[#616161] mb-6">Paste an OpenAPI/Swagger spec to auto-generate mock API endpoints and data models.</p>

      <textarea
        placeholder='{"openapi": "3.0.0", "paths": { "/api/users": { "get": { ... } } } }'
        value={value}
        onChange={(e) => handlePaste(e.target.value)}
        rows={6}
        className="w-full px-4 py-3 border-[1.5px] border-[#E1E1E1] rounded-[10px] text-[13px] text-[#171717] bg-[#F8F9FB] focus:outline-none focus:border-[#0078D4] focus:ring-[3px] focus:ring-[rgba(0,120,212,0.1)] transition-all placeholder:text-[#8E8E8E] resize-y font-mono"
      />

      {status === 'valid' && (
        <div className="flex items-center gap-2 mt-2 text-[#7FBA00] text-xs font-semibold">
          <Check size={14} /> Valid OpenAPI schema detected
        </div>
      )}
      {status === 'invalid' && (
        <div className="flex items-center gap-2 mt-2 text-[#F25022] text-xs font-semibold">
          <AlertCircle size={14} /> Invalid JSON or not an OpenAPI schema
        </div>
      )}
      <p className="text-xs text-[#8E8E8E] mt-1">Supports OpenAPI 3.0+ and Swagger 2.0 specifications.</p>
    </div>
  );
}
