<template>
  <div :class="$s.MyLayer">
    My Layer
  </div>
</template>

<style module="$s">
@import 'Vars';

.MyLayer {
  width: 400px;
  padding: var(--space-xx);
  text-align: center;
  background: var(--color-white);
  border-radius: var(--border-radius);
}
</style>
