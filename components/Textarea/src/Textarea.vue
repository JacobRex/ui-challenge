<template>
  <textarea
    :class="[
      $s.Textarea,
      {
        [$s.error]: hasError,
        [$s.resizable]: resizable
      },
    ]"
    v-bind="$attrs"
    :placeholder="placeholder"
    :value="value"
    v-on="textareaListeners"
    @input="handleInput"
  />
</template>

<script>
import FormFieldKey from 'Components/FormField/src/Key';

export default {
  name: 'UiTextarea',

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
    resizable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: undefined,
    }
  },

  computed: {
    hasError() {
      return this.formField && this.formField.error;
    },

    textareaListeners() {
      const listeners = {
        ...this.$listeners,
      };
      if (this.$props.value !== undefined) {
        listeners.input = (event) => {
          // eslint not smart enough to see that the following line gets
          // executed as part of a callback and not within the computed
          // prop itself so we have to disable it
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.textareaVal = event.target.value;
        };
      }
      return listeners;
    },
  },

  mounted() {
    if (!this.formField) {
      throw new Error('UiTextarea: The UiTextarea component must be a child of UiFormField.');
    }
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

:root {
  --textarea-min-height: 160px;
}

/* Textarea
---------------------------------------------- */
.Textarea {
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: var(--textarea-min-height);
  padding: var(--space-md) var(--space-lg);
  color: var(--font-color);
  font-size: 14px;
  box-shadow: var(--box-shadow-border);
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  transition:
    box-shadow var(--transition),
    opacity var(--transition);
  resize: none;

  &::placeholder {
    color: var(--color-blue-200);
  }

  &:hover {
    box-shadow: var(--box-shadow-border-hover), var(--control-box-shadow);
  }

  &:focus {
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

  &.resizable {
    resize: vertical;
  }
}
</style>
