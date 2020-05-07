<template>
  <div
    :class="[
      $s.Layout,
      $s[`variant_${variant}`]
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiLayout',

  props: {
    variant: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'backdrop'].includes(value),
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
}
</style>

<style module="$s">
@import 'Vars';

.Layout {
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--font-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: var(--line-height);
  min-height: 100vh;

  &.variant_backdrop {
    background-color: var(--color-blue-100);
  }
}
</style>
