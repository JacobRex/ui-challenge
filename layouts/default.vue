<template>
  <ui-layout>
    <ui-layout-header sticky>
      Header
    </ui-layout-header>

    <ui-layout-main>
      Main
      <ui-layout-sider>
        Sider
      </ui-layout-sider>
      <ui-layout-content has-sider>
        <nuxt />
      </ui-layout-content>
    </ui-layout-main>

    <ui-layout-footer>
      Footer
    </ui-layout-footer>
  </ui-layout>
</template>

<script>
import { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutSider, UiLayoutContent, UiLayoutFooter } from 'Components/Layout';

export default {
  components: {
    UiLayout,
    UiLayoutHeader,
    UiLayoutMain,
    UiLayoutSider,
    UiLayoutContent,
    UiLayoutFooter,
  },
};
</script>
