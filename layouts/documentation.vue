<template>
  <ui-layout>
    <ui-layout-main :class="$s.Main">
      <ui-layout-sider :class="$s.Sider">
        <doc-sider
          v-if="$store.state.documentation.navigation.length"
          :navigation="$store.state.documentation.navigation"
        />
      </ui-layout-sider>
      <ui-layout-content
        :class="$s.Content"
        has-sider
      >
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

<style module="$s">
@import 'Vars';

.Sider {
  @media(--lg-tablet-down) {
    width: 100%;
    max-width: calc(var(--max-width) -  var(--layout-sider-width) - var(--space-xx));
    margin: auto;
  }
}

.Main {
  @media(--lg-tablet-down) {
    justify-content: center;
  }
}

.Content {
  margin: auto;

  @media(--lg-tablet-up) {
    margin: 0;
  }
}
</style>
