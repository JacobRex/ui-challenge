<template>
  <div :class="$s.LayoutContent">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiLayoutContent',
};
</script>

<style module="$s">
@import 'Vars';

.LayoutContent {
  flex: 1;
  max-width: 100%;
}
</style>
