<template>
  <div>
    Company Table
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('layout/setVariant', 'normal');
  },
};
</script>
