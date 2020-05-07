<template>
  <div :class="$s.LoadingIndicator" />
</template>

<script>
export default {
  name: 'UiLoadingIndicator',
};
</script>

<style module="$s">
@import 'Vars';

.LoadingIndicator {
  width: calc(var(--space-md) - 4px);
  height: calc(var(--space-md) - 4px);
  border: 2px solid currentColor;
  border-top: 2px solid transparent;
  border-radius: var(--space-md);
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
