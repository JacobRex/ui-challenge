# Icon

## Description
An Icon is an svg consisting of a single color, or shades of that color. Multicolored svg's should be considered assets and rendered appropriately.

The icon component renders an inline SVG. An icon is defined with the `name` prop, which will match the filename of the SVG to be rendered.

## Icons
```vue
<template>
  <div class="demo">
    <div
      v-for="icon in icons"
      :key="icon"
      class="demo__item"
    >
      <ui-icon :name="icon" />
      {{ icon }}
    </div>
  </div>
</template>

<script>
import { UiIcon } from 'Components/Icon';

export default {
  components: { UiIcon },

  data() {
    return {
      icons: ['fill-92', 'fill-93', 'fill-118', 'arrow-down', 'close', 'location', 'logo-pink']
    };
  },
};
</script>
```

## Coloring an Icon
An icon's fill matches the color of text in the same area. To change an icon's color, apply a `color` style to your icon or its parent. You can also see how the icon takes on the color of a button automatically in one of the examples below.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-icon
        class="blue"
        name="fill-92"
      />
    </div>
    <div class="demo__item">
      <ui-icon name="fill-92" />
    </div>
    <div class="demo__item">
      <ui-button>
        <ui-icon name="close" />
      </ui-button>
    </div
  </div>
</template>

<script>
import { UiIcon } from 'Components/Icon'
import { UiButton } from 'Components/Button'

export default {
  components: { UiIcon, UiButton },
};
</script>

<style scoped>
  .blue { color: #3366CC; }
</style>
```

## Icon Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| name | `String` | `undefined` | See above. | Defines the icon to be rendered. |
| arial-label | `String` | The icon name. | Any string. | A brief description of the icon for accessibility. |
| role | `String` | `img` | `img`, `presentation` | The role of the svg. |
