<template>
  <div
    :class="$s.Card"
  >
    <div
      v-if="title"
      :class="$s.CardHeader"
    >
      <ui-heading
        :class="$s.CardTitle"
        variant="element-title"
        element="h3"
        flush
      >
        {{ title }}
      </ui-heading>
    </div>
    <div
      :class="[
        $s.CardContent,
        $s[`padding_${padding}`],
        { [$s['has-header']]: title, }
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { UiHeading } from 'Components/Heading';

export default {
  name: 'UiCard',

  components: {
    UiHeading,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },
    padding: {
      type: String,
      default: 'lg',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', 'xx', 'xxx'].includes(value),
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Card {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  overflow: hidden;
}

.CardHeader {
  padding: var(--space-lg);
}

.CardContent {
  &.has-header {
    border-top: var(--border);
  }
}

/* Padding
---------------------------------------------- */
.padding_xs {
  padding: var(--space-xs);
}

.padding_sm {
  padding: var(--space-sm);
}

.padding_md {
  padding: var(--space-md);
}

.padding_lg {
  padding: var(--space-lg);
}

.padding_xl {
  padding: var(--space-xl);
}

.padding_xx {
  padding: var(--space-xx);
}

.padding_xxx {
  padding: var(--space-xxx);
}
</style>
