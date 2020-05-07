<template>
  <div>
    Company Page
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('layout/setVariant', 'backdrop');
  },
};
</script>
