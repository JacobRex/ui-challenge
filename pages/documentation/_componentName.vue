<template>
  <doc-render-markdown :component-name="componentName" />
</template>

<script>
import DocRenderMarkdown from 'DocComponents/RenderMarkdown.vue';

export default {
  components: {
    DocRenderMarkdown,
  },

  computed: {
    componentName() {
      let { componentName } = this.$route.params;
      componentName = this.capitalizeRouteParam(componentName);
      return componentName;
    },
  },

  methods: {
    capitalizeRouteParam(string) {
      let spiltString = string.split('-');
      for (var i = 0; i < spiltString.length; i++) {
        spiltString[i] = spiltString[i].charAt(0).toUpperCase() + spiltString[i].slice(1);
      }
      return spiltString.join('');
    },
  },
};
</script>
