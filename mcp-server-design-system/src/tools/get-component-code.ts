const PACKAGE_NAME = '@company/design-system';

export async function getComponentCode(
  componentName: string,
  framework: string,
  variant?: string,
): Promise<string> {
  if (framework === 'vue') {
    return `<template>
  <${componentName} variant="${variant || 'default'}" />
</template>

<script setup lang="ts">
import { ${componentName} } from '${PACKAGE_NAME}';
</script>`;
  }

  return `import { ${componentName} } from '${PACKAGE_NAME}';

export function Example() {
  return (
    <${componentName}
      variant="${variant || 'default'}"
    />
  );
}`;
}
