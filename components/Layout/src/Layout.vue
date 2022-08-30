<template>
  <div
    :class="[
      $s.Layout,
      $s[`variant_${variant}`]
    ]"
  >
    <slot />
    <ui-layer v-if="layer.component" />
  </div>
</template>

<script>
import { UiLayer } from 'Components/Layer';

export default {
  name: 'UiLayout',

  provide() {
    return {
      layerAPI: this.layer,
    };
  },

  components:  {
    UiLayer,
  },

  props: {
    variant: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'backdrop'].includes(value),
    },
  },

  data() {
    return {
      layer: {
        open: this.openLayer,
        cancel: this.cancelLayer,
        close: this.closeLayer,
        component: null,
        viewData: {},
        beforeCancel: null,
        beforeClose: null,
      },
    };
  },

  methods: {
    openLayer(component, data) {
      if (component) {
        Object.assign(this.layer, {
          component: component,
          viewData: data,
        });
        document.body.classList.add(this.$s.disable_scroll);
        document.addEventListener('keyup', this.handleEscKey);
      } else {
        throw new Error('UiLayer: No component was defined to open.');
      }
    },

    cancelLayer(data) {
      if (typeof this.layer.beforeCancel === 'function') {
        this.layer.beforeCancel(data);
      }

      Object.assign(this.layer, {
        component: null,
        viewData: data,
      });
      document.body.classList.remove(this.$s.disable_scroll);
      document.removeEventListener('keyup', this.handleEscKey);
    },

    closeLayer(data) {
      if (typeof this.layer.beforeClose === 'function') {
        this.layer.beforeClose(data);
      }

      Object.assign(this.layer, {
        component: null,
        viewData: data,
      });
      document.body.classList.remove(this.$s.disable_scroll);
      document.removeEventListener('keyup', this.handleEscKey);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
}
</style>

<style module="$s">
@import 'Vars';

.Layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  color: var(--font-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: var(--line-height);
  min-height: 100vh;

  &.variant_backdrop {
    background-color: var(--color-blue-100);
  }
}
</style>
