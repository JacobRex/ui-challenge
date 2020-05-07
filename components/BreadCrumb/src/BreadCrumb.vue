<template>
  <nav :class="$s.BreadCrumb">
    <dynamic-link
      v-for="(crumb, index) in crumbs"
      :key="index"
      :class="$s.Crumb"
      :to="crumb.to"
    >
      <div
        v-if="index > 0"
        :class="$s.Seperator"
      >
        /
      </div>
      {{ crumb.label }}
    </dynamic-link>
  </nav>
</template>

<script>
import DynamicLink from 'Utils/DynamicLink.vue';

export default {
  name: 'UiBreadCrumb',

  components: {
    DynamicLink,
  },

  props: {
    crumbs: {
      type: Array,
      default: undefined,
    },
  },
};
</script>

<style module="$s">
@import 'Vars';

.BreadCrumb {
  display: flex;
  width: 100%;
  margin-bottom: var(--space-xl);
}

.Crumb {
  display: flex;
  color: var(--color-gray-400);
  line-height: 1em;
  letter-spacing: var(--letter-spacing);
  text-decoration: none;
  text-transform: uppercase;
  transition: color var(--transition);

  &:hover {
    color: var(--color-gray-500);
  }
}

.Seperator {
  margin: 0 var(--space-md);
}

</style>
