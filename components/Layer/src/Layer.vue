<template>
  <transition
    appear
    :appear-active-class="$s.fading"
    :leave-active-class="$s.fading"
    :appear-class="$s.transparent"
    :leave-to-class="$s.transparent"
  >
    <div
      v-if="layerAPI.component"
      :class="$s.Layer"
      @click.self="clickOverlay"
    >
      <layer-mounter
        :class="$s.MountedComponent"
        :component="layerAPI.component"
        :data="layerAPI.viewData"
      />
    </div>
  </transition>
</template>

<script>
import LayerMounter from './LayerMounter.vue';

export default {
  name: 'UiLayer',

  inject: ['layerAPI'],

  components: {
    LayerMounter,
  },

  methods: {
    clickOverlay() {
      this.layerAPI.cancel();
    },
  },

  mounted() {
    if (!this.layerAPI) {
      throw new Error('UiLayer: The UiLayer component must be mounted inside a UiLayout. Make sure that the view attempting to mount your Layer is a child of a UiLayout component.');
    }
  },
};
</script>

<style module="$s">
.Layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.25);
}

.MountedComponent {
  cursor: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

/* Fade Transition
---------------------------------------------- */
.fading {
  transition: opacity var(--transition-long);
}

.transparent {
  opacity: 0;
}
</style>
