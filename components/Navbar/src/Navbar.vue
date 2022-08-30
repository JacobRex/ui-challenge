<template>
  <div
    :class="$s.Navbar"
    v-on="$listeners"
  >
    <ui-icon
      :class="$s.Logo"
      name="logo-pink"
    />
    <div
      v-if="$slots.default"
      :class="$s.Content"
    >
      <slot />
    </div>
    <div
      v-if="navigation || $slots.navigation"
      :class="$s.Navigation"
    >
      <slot
        v-if="$slots.navigation"
        name="navigation"
      />
      <ui-nav
        v-else
        :navigation="navigation"
      />
    </div>
    <div :class="$s.Space" />
    <div
      v-if="$slots.actions"
      :class="$s.Actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
import { UiIcon } from 'Components/Icon';
import { UiNav } from 'Components/Nav';

export default {
  name: 'UiNavbar',

  components: {
    UiIcon,
    UiNav,
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

.Navbar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-blue-500);
}


/* Elements
---------------------------------------------- */
.Logo {
  width: 40px;
  height: 40px;
  color: var(--color-pink-500);
}

.Content,
.Navigation,
.Actions {
   margin-left: var(--space-xx);
}

.Actions {
  display: flex;
}

.Space {
  flex: 1;
}
</style>
