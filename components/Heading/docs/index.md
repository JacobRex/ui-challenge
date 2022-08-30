# Heading

## Description
The heading component generates a title with the styling and html element you need.

## Variants
The `variant` prop sets the look and feel of your heading.

The `flush` prop used here removes the bottom margin from the headings.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-heading flush>
        Page Title
      </ui-heading>
    </div>
    <div class="demo__item">
      <ui-heading variant="element-title" flush>
        Element Title
      </ui-heading>
    </div>
  </div>
</template>

<script>
import { UiHeading } from 'Components/Heading';

export default {
  components: { UiHeading },
};
</script>
```

## Element
The `element` prop lets you select what the element the heading renders as.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-heading element="h3" flush>
        h3
      </ui-heading>
    </div>
    <div class="demo__item">
      <ui-heading element="div" flush>
        div
      </ui-heading>
    </div>
    <div class="demo__item">
      <ui-heading element="span" flush>
        span
      </ui-heading>
    </div>
  </div>
</template>

<script>
import { UiHeading } from 'Components/Heading';

export default {
  components: { UiHeading },
};
</script>
```

## Heading Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| element | `String` | `div` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `p`, `span`, `label` | The element to render. |
| flush | `Boolean` | `false` | `true`, `false` | Removes the bottom margin from the heading. |
| variant | `String` | `page-title` | `page-title`, `element-title` | The style of the heading. |
