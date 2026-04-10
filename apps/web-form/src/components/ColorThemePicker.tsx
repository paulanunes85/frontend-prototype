import { useState } from 'react';

const PRESET_THEMES = [
  { name: 'Microsoft Blue', primary: '#0078D4', secondary: '#00A4EF', accent: '#F3F2F1' },
  { name: 'Forest Green', primary: '#107C10', secondary: '#7FBA00', accent: '#F0FFF0' },
  { name: 'Sunset Orange', primary: '#D83B01', secondary: '#F25022', accent: '#FFF5F0' },
  { name: 'Royal Purple', primary: '#5C2D91', secondary: '#9B59B6', accent: '#F5F0FF' },
  { name: 'Midnight Dark', primary: '#24292E', secondary: '#586069', accent: '#F6F8FA' },
  { name: 'Ocean Teal', primary: '#008080', secondary: '#00B7C3', accent: '#F0FFFF' },
];

interface Props {
  value: { primary: string; secondary: string; accent: string };
  onChange: (theme: { primary: string; secondary: string; accent: string }) => void;
}

export function ColorThemePicker({ value, onChange }: Props) {
  const [customMode, setCustomMode] = useState(false);

  return (
    <div className="bg-white border border-[#E1E1E1] rounded-2xl p-8 mb-5 transition-all hover:border-[#c0c0c0]">
      <h3 className="text-xl font-extrabold text-[#171717] mb-1">Color Theme</h3>
      <p className="text-sm text-[#616161] mb-6">Choose the color palette for your generated prototype.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {PRESET_THEMES.map((theme) => {
          const isSelected = value.primary === theme.primary;
          return (
            <button key={theme.name} type="button" onClick={() => { onChange(theme); setCustomMode(false); }}
              className={`flex items-center gap-3 p-3 rounded-xl border-[1.5px] text-left transition-all ${
                isSelected
                  ? 'border-[#0078D4] bg-[rgba(0,120,212,0.04)] shadow-[0_0_0_3px_rgba(0,120,212,0.08)]'
                  : 'border-[#E1E1E1] hover:border-[#c0c0c0]'
              }`}>
              <div className="flex gap-1">
                <div className="w-5 h-5 rounded-full" style={{ background: theme.primary }} />
                <div className="w-5 h-5 rounded-full" style={{ background: theme.secondary }} />
              </div>
              <span className="text-xs font-semibold text-[#171717]">{theme.name}</span>
            </button>
          );
        })}
      </div>

      <button type="button" onClick={() => setCustomMode(!customMode)}
        className="text-xs font-semibold text-[#0078D4] hover:underline">
        {customMode ? 'Hide custom colors' : 'Use custom colors'}
      </button>

      {customMode && (
        <div className="flex gap-4 mt-3">
          <label className="flex-1">
            <span className="text-xs font-semibold text-[#616161] block mb-1">Primary</span>
            <input type="color" value={value.primary}
              onChange={(e) => onChange({ ...value, primary: e.target.value })}
              className="w-full h-10 rounded-lg border border-[#E1E1E1] cursor-pointer" />
          </label>
          <label className="flex-1">
            <span className="text-xs font-semibold text-[#616161] block mb-1">Secondary</span>
            <input type="color" value={value.secondary}
              onChange={(e) => onChange({ ...value, secondary: e.target.value })}
              className="w-full h-10 rounded-lg border border-[#E1E1E1] cursor-pointer" />
          </label>
          <label className="flex-1">
            <span className="text-xs font-semibold text-[#616161] block mb-1">Background</span>
            <input type="color" value={value.accent}
              onChange={(e) => onChange({ ...value, accent: e.target.value })}
              className="w-full h-10 rounded-lg border border-[#E1E1E1] cursor-pointer" />
          </label>
        </div>
      )}

      {/* Preview */}
      <div className="mt-4 p-4 rounded-xl border border-[#E1E1E1]" style={{ background: value.accent }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-16 rounded-full" style={{ background: value.primary }} />
          <div className="h-2 w-10 rounded-full" style={{ background: value.secondary }} />
        </div>
        <div className="h-3 w-32 rounded bg-[#171717]/10 mb-1" />
        <div className="h-2 w-48 rounded bg-[#171717]/5" />
        <div className="flex gap-2 mt-3">
          <div className="px-3 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: value.primary }}>Button</div>
          <div className="px-3 py-1 rounded-full text-[10px] font-bold border" style={{ borderColor: value.primary, color: value.primary }}>Secondary</div>
        </div>
      </div>
    </div>
  );
}
