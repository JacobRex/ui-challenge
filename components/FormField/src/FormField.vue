<template>
  <div :class="$s.FormField">
    <ui-heading
      v-if="label"
      :class="[
        $s.Label,
        { [$s.error]: error },
      ]"
      element="label"
      variant="element-title"
    >
      {{ label }}
    </ui-heading>
    <div :class="$s.Field">
      <slot />
    </div>
    <p
      v-if="error"
      :class="$s.ErrorText"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
import { UiHeading } from 'Components/Heading';
import FormFieldKey from './Key';

export default {
  name: 'UiFormField',

  provide() {
    return {
      [FormFieldKey]: this.state,
    };
  },

  components: {
    UiHeading,
  },

  props: {
    error: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: undefined,
      required: true,
    },
  },

  data() {
    return {
      state: {
        error: this.error,
      }
    };
  },
};
</script>

<style module="$s">
@import "Vars";

.FormField {
  width: 100%;
  margin-bottom: var(--space-xl);
}

/* Label
---------------------------------------------- */
.Label {
  display: block;
  margin-bottom: var(--space-sm);
  color: var(--color-gray-300);

  &.error {
    color: var(--color-danger);
  }
}

/* Errors
---------------------------------------------- */
.ErrorText {
  margin-top: var(--space-sm);
  color: var(--color-danger);
}
</style>
