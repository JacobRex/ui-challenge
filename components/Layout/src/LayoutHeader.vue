<template>
  <header
    :class="[
      $s.LayoutHeader,
      { [$s.sticky]: sticky }
    ]"
  >
    <slot />
  </header>
</template>

<script>
export default {
  name: 'UiLayoutHeader',

  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style module="$s">
.LayoutHeader {
  position: relative;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: 1;
  }
}
</style>
