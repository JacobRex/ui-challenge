<template>
  <div>
    <ui-button @click="openLayer">
      Open Layer
    </ui-button>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

import NotesModal from './components/NotesModal.vue';

export default {
  components: {
    UiButton,
  },

  inject: ['layerAPI'],

  methods: {
    openLayer() {
      this.layerAPI.open(NotesModal);
    },
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
};
</script>
