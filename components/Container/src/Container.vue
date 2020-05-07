<template>
  <div :class="$s.Container">
    <div :class="$s.Content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
};
</script>

<style module="$s">
@import 'Vars';

.Content {
  width: calc(100% - (2 * var(--space-xl)));
  max-width: var(--max-width);
  margin: auto;
}
</style>
