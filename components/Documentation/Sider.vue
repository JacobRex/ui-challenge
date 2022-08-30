<template>
  <aside
    ref="wrapper"
    :class="$s.Sider"
  >
    <ui-icon
      :class="$s.Logo"
      name="logo-pink"
    />
    <nav :class="$s.Nav">
      <nuxt-link
        v-for="(link, linkIndex) in navigation"
        :key="linkIndex"
        :class="$s.NavLink"
        :to="link.to"
      >
        {{ link.title }}
      </nuxt-link>
    </nav>
  </aside>
</template>

<script>
import { UiIcon } from 'Components/Icon';

export default {
  name: 'DocSider',

  components: {
    UiIcon,
  },

  props: {
    navigation: {
      type: Array,
      default() {
        return [
          {
            to: '/route',
            title: 'Link Text',
          }
        ];
      },
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.Logo {
  margin-bottom: var(--space-lg);
  color: var(--color-pink-500);
}

.NavLink {
  display: block;
  padding: var(--space-xs) var(--space-sm);
  color: var(--color-gray-500);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius);
  text-decoration: none;

  &:hover {
    color: var(--color-pink-500);
  }

  &:global(.nuxt-link-exact-active) {
    color: var(--color-pink-500);
    background: var(--color-pink-515);
  }

  & + .NavLink {
    margin-top: var(--space-sm);
  }
}
</style>
