<template>
  <ui-modal>
    <ui-heading v-if="title">
      {{ title }}
    </ui-heading>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus ornare, pharetra lacus at, tincidunt mauris. In hac habitasse platea dictumst. In elementum pulvinar arcu a consequat. Praesent tempor finibus risus, ac laoreet arcu vehicula in. Maecenas porttitor mauris eget felis dictum vestibulum. Nam a tempus ligula.
  </ui-modal>
</template>

<script>
import { UiModal } from 'Components/Modal';
import { UiHeading } from 'Components/Heading';

export default {
  components: {
    UiModal,
    UiHeading,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },
  },
};
</script>
