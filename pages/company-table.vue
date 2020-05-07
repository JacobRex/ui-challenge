<template>
  <div>
    Company Table
  </div>
</template>

<script>
export default {
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
