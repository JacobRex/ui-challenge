<template>
  <nav :class="$s.Nav">
    <template v-for="(link, index) in navigation">
      <div
        v-if="index > 0 && variant === 'secondary'"
        :key="index"
        :class="$s.NavLinkSeparator"
      >
        |
      </div>
      <dynamic-link
        :key="link.label"
        :class="[
          $s.NavLink,
          $s[`variant_${variant}`]
        ]"
        :to="link.to"
      >
        {{ link.label }}
        <ui-icon
          v-if="link.children"
          :class="[
            $s.NavLinkIcon,
            $s[`variant_${variant}`]
          ]"
          name="arrow-down"
        />
      </dynamic-link>
    </template>
  </nav>
</template>

<script>
import { UiIcon } from 'Components/Icon';
import DynamicLink from 'Utils/DynamicLink.vue';

export default {
  name: 'UiNav',

  components: {
    UiIcon,
    DynamicLink,
  },

  props: {
    navigation: {
      type: Array,
      default: undefined,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary'].includes(value),
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Nav {
  display: flex;
}

.NavLink {
  display: block;
  font-size: var(--font-size-sm);
  text-decoration: none;

  &.variant_primary {
    color: var(--color-white);
    letter-spacing: var(--letter-spacing);
    text-transform: uppercase;
    transition: color var(--transition);

    &:hover {
      color: var(--color-blue-200);
    }

    & + .NavLink {
      margin-left: var(--space-xx);
    }
  }

  &.variant_secondary {
    color: var(--color-blue-500);

    &:hover {
      color: var(--color-blue-700);
    }
  }
}

.NavLinkIcon {
  margin-left: var(--space-xs);

  &.variant_primary {
    color: var(--color-blue-300);
  }
}

.NavLinkSeparator {
  margin: 0 var(--space-sm);
}
</style>
