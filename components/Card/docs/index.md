# Card

## Description
Cards are a bordered content area used to group areas of content.

Use the `title` prop to generate a title for your card.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-card title="My Card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque enim sapien, a laoreet lorem semper in. Duis vitae dui eget nulla interdum pharetra. Vivamus pretium, neque vitae feugiat auctor, diam elit blandit ipsum, nec pellentesque orci leo sed massa. Aliquam id viverra sapien. Cras eleifend leo eget pellentesque interdum. Suspendisse efficitur suscipit mi nec mollis. Integer iaculis sagittis erat eu efficitur. Nulla varius, libero ut cursus dictum, ante sapien iaculis nisl, vel blandit lectus augue nec lorem. Etiam in libero pharetra, vestibulum erat eget, semper magna. Mauris neque nisi, malesuada venenatis placerat vitae, mollis sit amet est. Aenean blandit lobortis ultricies. Pellentesque efficitur orci risus, nec scelerisque erat sagittis in. Pellentesque sit amet erat nec augue pharetra pharetra sit amet gravida tellus.
      </ui-card>
    </div>
  </div>
</template>

<script>
import { UiCard } from 'Components/Card';

export default {
  components: { UiCard },
};
</script>
```

## Padding
Cards can be given variable padding, depending on your needs.

```vue
<template>
  <div class="demo">
    <div
      v-for="padding in cardPadding"
      :key="padding"
      class="demo__item"
    >
      <ui-card
        :title="`Padding ${padding}`"
        :padding="padding"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ui-card>
    </div>
  </div>
</template>

<script>
import { UiCard } from 'Components/Card';

export default {
  components: { UiCard },

  data() {
    return {
      cardPadding: ['xs', 'sm', 'md', 'lg', 'xl', 'xx', 'xxx'],
    };
  },
};
</script>
```

## Card Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| title | `String` | - | A valid string. | Adds a title to your card with a border. |
| padding | `String` | `lg` | `xs`, `sm`, `md`, `lg`, `xl`, `xx`, `xxx` | The padding givent to the card content. |
