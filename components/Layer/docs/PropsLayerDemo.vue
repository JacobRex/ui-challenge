<template>
  <ui-card
    :class="$s.MyCard"
    :title="title"
    :padding="padding"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut purus ornare, pharetra lacus at, tincidunt mauris. In hac habitasse platea dictumst. In elementum pulvinar arcu a consequat. Praesent tempor finibus risus, ac laoreet arcu vehicula in. Maecenas porttitor mauris eget felis dictum vestibulum. Nam a tempus ligula.
  </ui-card>
</template>

<script>
import { UiCard } from 'Components/Card';

export default {
  components: {
    UiCard,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },
    padding: {
      type: String,
      default: 'lg',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', 'xx', 'xxx'].includes(value),
    },
  },
};
</script>

<style module="$s">
.MyCard {
  width: 585px;
}
</style>
