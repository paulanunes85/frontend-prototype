import { useState } from 'react';
import type { FormData } from '@/types/form';

interface Props {
  formData: FormData;
  onChange: (field: keyof FormData, value: FormData[keyof FormData]) => void;
}

export function GitHubConfigStep({ formData, onChange }: Props) {
  const [collaboratorInput, setCollaboratorInput] = useState('');

  function addCollaborator() {
    const username = collaboratorInput.trim();
    if (username && !formData.collaborators.includes(username)) {
      onChange('collaborators', [...formData.collaborators, username]);
      setCollaboratorInput('');
    }
  }

  function removeCollaborator(username: string) {
    onChange(
      'collaborators',
      formData.collaborators.filter((c) => c !== username),
    );
  }

  return (
    <fieldset className="form-step">
      <legend>GitHub Settings</legend>

      <label htmlFor="repoVisibility">Visibility</label>
      <select
        id="repoVisibility"
        value={formData.repoVisibility}
        onChange={(e) => onChange('repoVisibility', e.target.value)}
      >
        <option value="private">Private</option>
        <option value="public">Public</option>
      </select>

      <label>Collaborators</label>
      <div className="collaborator-input">
        <input
          type="text"
          placeholder="GitHub username"
          value={collaboratorInput}
          onChange={(e) => setCollaboratorInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCollaborator())}
        />
        <button type="button" onClick={addCollaborator}>
          Add
        </button>
      </div>
      {formData.collaborators.length > 0 && (
        <ul className="collaborator-list">
          {formData.collaborators.map((c) => (
            <li key={c}>
              @{c}
              <button type="button" onClick={() => removeCollaborator(c)}>
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}
