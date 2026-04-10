import type { ComponentExample } from '../types.js';

export async function getComponentExamples(
  componentName: string,
  framework: string,
): Promise<{ component: string; framework: string; examples: ComponentExample[] }> {
  const pkg = '@company/design-system';

  const reactExamples: ComponentExample[] = [
    {
      name: 'Basic Usage',
      code: `import { ${componentName} } from '${pkg}';\n\nexport function Example() {\n  return <${componentName} />;\n}`,
    },
    {
      name: 'With Props',
      code: `import { ${componentName} } from '${pkg}';\n\nexport function Example() {\n  return <${componentName} variant="primary" size="large" />;\n}`,
    },
  ];

  const vueExamples: ComponentExample[] = [
    {
      name: 'Basic Usage',
      code: `<template>\n  <${componentName} />\n</template>\n\n<script setup lang="ts">\nimport { ${componentName} } from '${pkg}';\n</script>`,
    },
    {
      name: 'With Props',
      code: `<template>\n  <${componentName} variant="primary" size="large" />\n</template>\n\n<script setup lang="ts">\nimport { ${componentName} } from '${pkg}';\n</script>`,
    },
  ];

  return {
    component: componentName,
    framework,
    examples: framework === 'vue' ? vueExamples : reactExamples,
  };
}
