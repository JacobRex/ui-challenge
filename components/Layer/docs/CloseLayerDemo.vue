<template>
  <div :class="$s.MyLayer">
    <ui-button @click="cancelLayer">
      Cancel
    </ui-button>
    <ui-button @click="closeLayer">
      Close
    </ui-button>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  inject: ['layerAPI'],

  components: {
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

.MyLayer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: var(--space-xx);
  text-align: center;
  background: var(--color-white);
  border-radius: var(--border-radius);
}
</style>
