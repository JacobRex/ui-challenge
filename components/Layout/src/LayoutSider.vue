<template>
  <aside :class="$s.LayoutSider">
    <slot />
  </aside>
</template>

<script>
export default {
  name: 'UiLayoutSider',
};
</script>

<style module="$s">
@import 'Vars';

.LayoutSider {
  width: var(--layout-sider-width);
}
</style>
