<template>
  <ui-card padding="xl">
    <p :class="$s.Text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>

    <ui-button @click="handleSubmit">
      Submit
    </ui-button>
  </ui-card>
</template>

<script>
import { UiButton } from 'Components/Button';
import { UiCard } from 'Components/Card';


export default {
  inject: ['layerAPI'],

  components: {
    UiButton,
    UiCard,
  },

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

  methods: {
    handleSubmit() {
      console.log('handleSubmit');
    },
  },
};
</script>

<style module="$s">
/* Text
---------------------------------------------- */
.Text {
  margin-bottom: var(--space-xx);
  font-size: 14px;
  line-height: var(--line-height-md);
}
</style>
