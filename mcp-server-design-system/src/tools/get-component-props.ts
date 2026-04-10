import type { ComponentProps } from '../types.js';

export async function getComponentProps(componentName: string): Promise<ComponentProps> {
  // In production, this would fetch from Storybook or NPM package metadata.
  // For now, returns a standard prop structure.
  return {
    component: componentName,
    props: {
      variant: {
        type: 'string',
        options: ['primary', 'secondary', 'outlined'],
        default: 'primary',
        description: 'Visual variant of the component',
      },
      size: {
        type: 'string',
        options: ['small', 'medium', 'large'],
        default: 'medium',
        description: 'Size of the component',
      },
      disabled: {
        type: 'boolean',
        default: false,
        description: 'Whether the component is disabled',
      },
    },
  };
}
