<template>
  <ui-heading>
    Company Table
  </ui-heading>
</template>

<script>
import { UiHeading } from 'Components/Heading';

export default {
  components: {
    UiHeading,
  },

  mounted() {
    this.$store.commit(
      'layout/setBreadCrumbs',
      [
        { to: '/', label: 'Home',},
        { to: '/company-table', label: 'Company Table',},
      ],
    );

    this.$store.commit('layout/setVariant', 'normal');
  },
};
</script>
