<template>
  <div
    :class="[
      $s.LayoutContent,
      { [$s['has-sider']]: hasSider },
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiLayoutContent',

  props: {
    hasSider: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.LayoutContent {
  flex: 1;
  max-width: 100%;

  &.has-sider {
    max-width: calc(var(--max-width) -  var(--layout-sider-width) - var(--space-xx));
  }
}
</style>
