<template>
  <div>
    Company Data
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit(
      'layout/setBreadCrumbs',
      [
        { to: '/', label: 'Home',},
        { to: '/company-data', label: 'Company Data',},
      ],
    );

    this.$store.commit('layout/setVariant', 'normal');
  },
};
</script>
