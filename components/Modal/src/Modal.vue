<template>
  <div :class="$s.Modal">
    <ui-icon
      :class="$s.Close"
      name="close"
      @click="cancelModal"
    />
    <div :class="$s.Content">
      <slot />
    </div>
  </div>
</template>

<script>
import { UiIcon } from 'Components/Icon';

export default {
  name: 'UiModal',

  inject: ['layerAPI'],

  components: {
    UiIcon,
  },

  methods: {
    cancelModal() {
      this.layerAPI.cancel();
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Modal {
  position: relative;
  width: calc(100% - (2 * var(--space-xl)));
  max-width: 585px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px var(--color-gray-300);
}

.Close {
  position: absolute;
  top: var(--space-xs);
  right: calc(var(--space-xl) - var(--space-lg));
  padding: var(--space-lg);
  color: var(--color-gray-300);
  transition: color var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--color-gray-400);
  }
}

.Content {
  padding: var(--space-xx) var(--space-xl);
}
</style>
