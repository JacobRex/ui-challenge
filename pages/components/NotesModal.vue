<template>
  <div :class="$s.Test">
    Additional notes
  </div>
</template>

<style module="$s">
@import 'Vars';

.Test {
  width: 500px;
  padding: var(--space-xx);
  text-align: center;
  border-radius: var(--border-radius);
  background: var(--color-white);
}
</style>
