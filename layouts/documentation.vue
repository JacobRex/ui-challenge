<template>
  <ui-layout>
    <ui-layout-main>
      <ui-layout-sider>
        <doc-sider
          v-if="$store.state.documentation.navigation.length"
          :navigation="$store.state.documentation.navigation"
        />
      </ui-layout-sider>
      <ui-layout-content has-sider>
        <nuxt />
      </ui-layout-content>
    </ui-layout-main>
  </ui-layout>
</template>

<script>
import { UiLayout, UiLayoutMain, UiLayoutSider, UiLayoutContent } from 'Components/Layout';

import DocSider from 'DocComponents/Sider.vue';
import cleanRoute from 'DocUtils/pathToMetaTitle.js';

export default {
  components: {
    UiLayout,
    UiLayoutMain,
    UiLayoutSider,
    UiLayoutContent,
    DocSider,
  },

  head() {
    return {
      title: `${cleanRoute(this.$route.fullPath)}`,
    };
  },
};
</script>

<style>
@import 'Docs';
</style>
