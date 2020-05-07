<template>
  <button
    :class="$s.Button"
    @click="$emit('click')"
  >
    <div :class="$s.Avatar">
      <div :class="$s.Default" />
      <img
        v-if="hasAsset"
        :class="$s.Img"
        :src="src"
        :srcset="srcset"
      >
    </div>
    <ui-icon
      v-if="showArrow"
      :class="$s.Arrow"
      name="arrow-down"
    />
  </button>
</template>

<script>
import { UiIcon } from 'Components/Icon';

export default {
  name: 'UiAvatar',

  components: {
    UiIcon,
  },

  props: {
    showArrow: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: undefined,
    },
    srcset: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    hasAsset() {
      return this.src || this.srcset;
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

:root {
  --avatar-size: 32px;
}

.Button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  appearance: none;
  user-select: none;
  border: 0;
  outline: none;
}

.Avatar {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--avatar-size);
  height: var(--avatar-size);
  background-color: var(--color-white);
  border-radius: var(--avatar-size);
  overflow: hidden;
}

.Default {
  display: flex;
  align-items: center;
  flex-direction: column;

  &::before {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color:var(--color-gray-300);
    content: '';
  }

  &::after {
    display: block;
    width: 18px;
    height: 8px;
    margin-top: 2px;
    border-radius: 50% 50% 50% 50% / 66% 66% 34% 34%;
    background-color:var(--color-gray-300);
    content: '';
  }
}

.Img {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--avatar-size);
  height: var(--avatar-size);
  object-fit: cover;
}

.Arrow {
  margin-left: var(--space-sm);
  color: var(--color-blue-300);
}
</style>
