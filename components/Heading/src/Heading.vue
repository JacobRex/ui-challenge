<template>
  <component
    :is="element"
    :class="[
      $s.Heading,
      $s[`variant_${variant}`],
      { [$s.flush]: flush },
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UiHeading',

  props: {
    element: {
      type: String,
      default: 'div',
      validator: value => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'span', 'label'].includes(value),
    },
    flush: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'page-title',
      validator: value => ['page-title', 'element-title'].includes(value),
    }
  },
};
</script>

<style module="$s">
@import 'Vars';

.Heading {
  margin-top: 0;
  margin-bottom: 1em;
  font-weight: var(--font-weight-regular);

  &.flush {
    margin-bottom: 0;
  }
}

/* Variants
---------------------------------------------- */
.variant_page-title {
  color: var(--color-gray-600);
  font-size: 32px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 1px;
}

.variant_element-title {
  font-size: var(--font-size);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;
}
</style>
