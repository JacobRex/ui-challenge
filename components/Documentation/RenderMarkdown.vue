<template>
  <div class="docs">
    <component :is="componentFile || markdownFile" />
  </div>
</template>

<script>
function getComponentFile(componentName) {
  try {
    const component = require(`Components/${componentName}/docs/index.md`).default;
    return component;
  } catch (e) {
    return false;
  }
}
export default {
  name: 'DocRenderMarkdown',

  props: {
    componentName: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    componentFile() {
      return getComponentFile(this.componentName);
    },
  },
};
</script>
