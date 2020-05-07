<template>
  <div>
    Company Page
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit(
      'layout/setBreadCrumbs',
      [
        { to: '/', label: 'Home',},
        { to: '/company-page', label: 'Company Page',},
      ],
    );

    this.$store.commit('layout/setVariant', 'backdrop');
  },
};
</script>
