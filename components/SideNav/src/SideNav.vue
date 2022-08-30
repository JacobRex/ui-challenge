<template>
  <nav :class="$s.SideNav">
    <dynamic-link
      v-for="(link, index) in navigation"
      :key="index"
      :class="$s.SideNavLink"
      :to="link.to"
    >
      {{ link.label }}
    </dynamic-link>
  </nav>
</template>

<script>
import DynamicLink from 'Utils/DynamicLink.vue';

export default {
  name: 'UiSideNav',

  components: {
    DynamicLink,
  },

  props: {
    navigation: {
      type: Array,
      default: undefined,
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.SideNav {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--border-radius);
}

.SideNavLink {
  display: block;
  position: relative;
  padding: var(--space-xl) var(--space-lg);
  color: var(--color-blue-300);
  letter-spacing: var(--letter-spacing);
  text-decoration: none;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-border);
  overflow: hidden;
  transition: background-color var(--transition);

  &:hover {
    background: var(--color-gray-100);
  }

  &:global(.nuxt-link-active) {
    color: var(--color-gray-500);
    font-weight: var(--font-weight-medium);
    background-color: var(--color-gray-100);

    &::after {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 4px;
      background-color: var(--color-blue-500);
      content: '';
    }
  }

  &:first-child {
    border-radius: var(--border-radius) var(--border-radius) 0 0;

    &::after {
      border-top-left-radius: var(--border-radius);
    }
  }

  &:last-child {
    border-radius: 0 0 var(--border-radius) var(--border-radius);

    &::after {
      border-bottom-left-radius: var(--border-radius);
    }
  }

  & + .SideNavLink {
    margin-top: -1px;
  }
}

</style>
