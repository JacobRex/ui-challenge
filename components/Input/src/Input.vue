<template>
  <div :class="$s.Wrapper">
    <div
      :class="[
        $s.InputContainer,
        {
          [$s.focused]: isFocused,
          [$s.error]: hasError,
        }
      ]"
      @click="focus()"
    >
      <div
        v-if="prefix || $slots.prefix"
        :class="$s.Prefix"
      >
        <slot name="prefix">
          {{ prefix }}
        </slot>
      </div>
      <input
        ref="input"
        v-bind="$attrs"
        :class="$s.Input"
        :placeholder="placeholder"
        :value="value"
        v-on="inputListeners"
        @input="handleInput"
        @focus="onFocus"
        @blur="onBlur"
      >
    </div>
  </div>
</template>

<script>
import FormFieldKey from 'Components/FormField/src/Key';

export default {
  name: 'UiInput',

  inheritAttrs: false,

  inject: {
    formField: {
      from: FormFieldKey,
      default: undefined,
    },
  },

  props: {
    placeholder: {
      type: String,
      default: undefined,
    },
    prefix: {
      type: String,
      default: undefined,
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
  },

  data() {
    return {
      isFocused: false,
    };
  },

  computed: {
    inputListeners() {
      const listeners = {
        ...this.$listeners,
      };
      if (this.$props.value !== undefined) {
        listeners.input = (event) => {
          // eslint not smart enough to see that the following line gets
          // executed as part of a callback and not within the computed
          // prop itself so we have to disable it
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.inputVal = event.target.value;
        };
      }
      return listeners;
    },

    hasError() {
      return this.formField && this.formField.error;
    },
  },

  mounted() {
    if (!this.formField) {
      throw new Error('UiInput: The UiInput component must be a child of UiFormField.');
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },

    blur() {
      this.$refs.input.blur();
    },

    handleInput(e) {
      this.$emit('input', e.target.value);
    },

    onBlur() {
      this.isFocused = false;
    },

    onFocus() {
      this.isFocused = true;
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Wrapper {
  width: 100%;

  &.disabled {
    opacity: var(--opacity-disabled);
  }
}

/* Input
---------------------------------------------- */
.InputContainer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--control-height);
  padding: 0 var(--space-md);
  box-shadow: var(--box-shadow-border), var(--control-box-shadow);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  transition:
    box-shadow var(--transition),
    opacity var(--transition);

  &:hover {
    box-shadow: var(--box-shadow-border-hover), var(--control-box-shadow);
  }

  &.focused {
    box-shadow: var(--box-shadow-border-focus), var(--control-box-shadow);
    outline: 0;
  }

  &.error {
    box-shadow: var(--box-shadow-border-error), var(--control-box-shadow);

    &:hover {
      box-shadow: var(--box-shadow-border-error), var(--control-box-shadow);
    }

    &.focused  {
      box-shadow: var(--box-shadow-border-error), var(--control-box-shadow);
    }
  }
}

/* Inner Input
---------------------------------------------- */
.Input {
  flex: 1;
  box-sizing: border-box;
  display: block;
  padding: 0;
  color: var(--color-gray-500);
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 1em;
  font-weight: var(--font-weight-medium);
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0;
  background-color: transparent;
  outline: 0;
  overflow: hidden;
  -webkit-appearance: none;

  &::placeholder {
    color: var(--color-blue-200);
    font-size: inherit;
    font-weight: var(--font-weight);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

/* Prefix
---------------------------------------------- */
.Prefix {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: var(--space-sm);
  color: var(--font-color);
  font-size: 14px;
  line-height: 1em;
  font-weight: var(--font-weight-medium);
}
</style>
