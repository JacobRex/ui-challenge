<template>
  <div>
    Company Data
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('layout/setVariant', 'normal');
  },
};
</script>
