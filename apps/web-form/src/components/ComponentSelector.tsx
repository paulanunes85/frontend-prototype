import { useState } from 'react';

interface Props {
  selected: string[];
  onChange: (components: string[]) => void;
}

const AVAILABLE_COMPONENTS = [
  { name: 'DataTable', category: 'Data Display', description: 'Paginated data table with filters' },
  { name: 'LineChart', category: 'Charts', description: 'Interactive line chart' },
  { name: 'BarChart', category: 'Charts', description: 'Bar chart' },
  { name: 'PieChart', category: 'Charts', description: 'Pie chart' },
  { name: 'KPICard', category: 'Data Display', description: 'Metric / KPI card' },
  { name: 'Card', category: 'Layout', description: 'Visual container' },
  { name: 'Button', category: 'Actions', description: 'Button with variants' },
  { name: 'Form', category: 'Input', description: 'Complete form' },
  { name: 'Modal', category: 'Overlay', description: 'Modal / Dialog' },
  { name: 'Navbar', category: 'Navigation', description: 'Navigation bar' },
  { name: 'Sidebar', category: 'Navigation', description: 'Side menu' },
  { name: 'Hero', category: 'Layout', description: 'Hero section for landing pages' },
  { name: 'Footer', category: 'Layout', description: 'Page footer' },
  { name: 'Alert', category: 'Feedback', description: 'Alert / notification' },
  { name: 'Tabs', category: 'Navigation', description: 'Tab navigation' },
  { name: 'Select', category: 'Input', description: 'Dropdown select' },
  { name: 'DatePicker', category: 'Input', description: 'Date picker' },
];

export function ComponentSelector({ selected, onChange }: Props) {
  const [search, setSearch] = useState('');

  const filtered = AVAILABLE_COMPONENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()),
  );

  function toggle(name: string) {
    if (selected.includes(name)) {
      onChange(selected.filter((s) => s !== name));
    } else {
      onChange([...selected, name]);
    }
  }

  return (
    <fieldset className="form-step">
      <legend>Components</legend>
      <input
        type="text"
        placeholder="Search components..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <small>{selected.length} component(s) selected</small>
      <div className="component-grid">
        {filtered.map((component) => (
          <label
            key={component.name}
            className={`component-chip ${selected.includes(component.name) ? 'selected' : ''}`}
          >
            <input
              type="checkbox"
              checked={selected.includes(component.name)}
              onChange={() => toggle(component.name)}
            />
            <span className="chip-name">{component.name}</span>
            <span className="chip-category">{component.category}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
