<template>
  <main :class="$s.LayoutMain">
    <div :class="$s.LayoutMainContent">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'UiLayoutMain',
};
</script>

<style module="$s">
@import 'Vars';

.LayoutMain {
  flex: 1;
  margin: var(--space-xl) 0;
}

.LayoutMainContent {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - (2 * var(--space-xl)));
  max-width: var(--max-width);
  margin: auto;
}
</style>
