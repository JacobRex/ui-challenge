<template>
  <ui-modal>
    <div :class="$s.Content">
      <ui-button @click="cancelLayer">
        Cancel
      </ui-button>
      <ui-button @click="closeLayer">
        Close
      </ui-button>
    </div>
  </ui-modal>
</template>

<script>
import { UiModal } from 'Components/Modal';
import { UiButton } from 'Components/Button';

export default {
  inject: ['layerAPI'],

  components: {
    UiModal,
    UiButton,
  },

  methods: {
    cancelLayer() {
      this.layerAPI.cancel();
    },

    closeLayer() {
      this.layerAPI.close();
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-lg);
}
</style>
