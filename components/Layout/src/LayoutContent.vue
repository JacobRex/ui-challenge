<template>
  <div
    :class="[
      $s.LayoutContent,
      { [$s.hasSider]: hasSider },
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

  &.hasSider {
    margin-left: var(--space-xx);
  }
}
</style>
