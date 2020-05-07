<template>
  <footer
    :class="[
      $s.LayoutFooter,
      $s[`variant_${variant}`]
    ]"
  >
    <ui-container>
      <slot />
    </ui-container>
  </footer>
</template>

<script>
import { UiContainer } from 'Components/Container';

export default {
  name: 'UiLayoutContent',

  components: {
    UiContainer,
  },

  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'backdrop'].includes(value),
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.LayoutFooter {
  padding: var(--space-xx) 0;

  &.variant_normal {
    background-color: var(--color-gray-200);
  }

  &.variant_backdrop {
    background-color: var(--color-white);
  }
}
</style>
