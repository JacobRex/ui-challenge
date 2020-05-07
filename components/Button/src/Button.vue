<template>
  <component
    :is="element"
    :to="to"
    :class="[
      $s.Button,
      $s[`size_${size}`],
      $s[`variant_${variant}`],
      { [$s['is-disabled']]: disabled || loading },
    ]"
    @click="handleClick"
  >
    <div :class="[$s.ButtonContent, { [$s['is-loading']]: loading }]">
      <slot />
    </div>
    <ui-loading-indicator
      v-if="loading"
      :class="$s.LoadingIndicator"
    />
  </component>
</template>

<script>
import { UiLoadingIndicator } from 'Components/LoadingIndicator';

import DynamicLink from 'Utils/DynamicLink';

export default {
  name: 'UiButton',

  components: {
    UiLoadingIndicator,
    DynamicLink,
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => ['small', 'normal'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary'].includes(value),
    },
  },

  computed: {
    element() {
      return this.to ? 'dynamic-link' : 'button';
    },
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding-right: var(--space-xl);
  padding-left: var(--space-xl);
  letter-spacing: var(--letter-spacing);
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  border: 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  appearance: none;
  user-select: none;
  outline: none;
  text-decoration: none;
  transition: var(--transition);

  /* Variant
  ---------------------------------------------- */
  &.variant_primary {
    color: var(--color-white);
    font-weight: var(--font-weight-medium);
    background-color: var(--color-blue-300);

    &:not(.disabled):hover {
      opacity: 0.85;
    }
  }

  /* Size
  ---------------------------------------------- */
  &.size_small {
    height: var(--control-height-small);
    line-height: var(--control-height-small);
  }

  &.size_normal {
    height: var(--control-height);
    line-height: var(--control-height);
  }

  /* Disabled
  ---------------------------------------------- */
  &.is-disabled {
    pointer-events: none;
    cursor: default;
    opacity: var(--opacity-disabled);
  }
}

/* Loading
---------------------------------------------- */
.LoadingIndicator {
  position: absolute;
  top: calc(50% - calc(var(--space-md) / 2));
  left: calc(50% - calc(var(--space-md) / 2));
}

.ButtonContent {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition);

  &.is-loading {
    opacity: 0;
  }
}
</style>
