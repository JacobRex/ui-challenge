# Grid

## Description
The Grid component allocates items columns separated by gutters and supports responsive behavior. The Grid component **should not** be used simply to put elements side by side, such as navigation links or buttons.

The only children of a Grid component are GridItem's. Putting any other child inside will throw an error.

If a GridItem isn't a child of a Grid, it will throw an error.

## Default Sizing
GridItems will automatically size themselves to be equal width. They will round to the nearest valid column size: `one-fourth`, `one-third`, `one-half`, or `fullwidth`. Below, you can see that these grid items are sized to `one-third` automatically because there are 3 GridItems in the Grid.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-grid>
        <ui-grid-item>
          <div class="grid-item">auto</div>
        </ui-grid-item>
        <ui-grid-item>
          <div class="grid-item">auto</div>
        </ui-grid-item>
        <ui-grid-item>
          <div class="grid-item">auto</div>
        </ui-grid-item>
      </ui-grid>
    </div>
  </div>
</template>

<script>
import { UiGrid, UiGridItem} from 'Components/Grid';

export default {
  components: {
    UiGrid,
    UiGridItem,
  },
};
</script>

<style scoped>
.grid-item {
  text-align: center;
  border: 1px dashed var(--border-color);
  padding: var(--space-xs);
}
</style>
```

## GridItem Span
The `span` prop defines how many columns a GridItem spans. Rows will wrap automatically as necessary.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-grid>
        <ui-grid-item span="fullwidth">
          <div class="grid-item">fullwidth</div>
        </ui-grid-item>
        <ui-grid-item span="one-fourth">
          <div class="grid-item">one-fourth</div>
        </ui-grid-item>
        <ui-grid-item span="three-fourths">
          <div class="grid-item">three-fourths</div>
        </ui-grid-item>
        <ui-grid-item span="one-third">
          <div class="grid-item">one-third</div>
        </ui-grid-item>
        <ui-grid-item span="two-thirds">
          <div class="grid-item">two-thirds</div>
        </ui-grid-item>
        <ui-grid-item span="one-half">
          <div class="grid-item">one-half</div>
        </ui-grid-item>
        <ui-grid-item span="one-half">
          <div class="grid-item">one-half</div>
        </ui-grid-item>
        <ui-grid-item span="one-third">
          <div class="grid-item">one-third</div>
        </ui-grid-item>
        <ui-grid-item span="one-third">
          <div class="grid-item">one-third</div>
        </ui-grid-item>
        <ui-grid-item span="one-third">
          <div class="grid-item">one-third</div>
        </ui-grid-item>
        <ui-grid-item span="one-fourth">
          <div class="grid-item">one-fourth</div>
        </ui-grid-item>
        <ui-grid-item span="one-fourth">
          <div class="grid-item">one-fourth</div>
        </ui-grid-item>
        <ui-grid-item span="one-fourth">
          <div class="grid-item">one-fourth</div>
        </ui-grid-item>
        <ui-grid-item span="one-fourth">
          <div class="grid-item">one-fourth</div>
        </ui-grid-item>
      </ui-grid>
    </div>
  </div>
</template>

<script>
import { UiGrid, UiGridItem} from 'Components/Grid';

export default {
  components: {
    UiGrid,
    UiGridItem,
  },
};
</script>

<style scoped>
.grid-item {
  text-align: center;
  border: 1px dashed var(--border-color);
  padding: var(--space-xs);
}
</style>
```

## Responsive Sizing
You can change the size of a GridItem depending on the width of the screen.

Specify different widths for different breakpoints using the `span`, `tablet-span` and `desktop-span` attributes.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-grid>
        <ui-grid-item
          span="fullwidth"
          tablet-span="one-half"
          desktop-span="one-fourth"
        >
          <div class="grid-item">Responsive Item</div>
        </ui-grid-item>
        <ui-grid-item
          span="fullwidth"
          tablet-span="one-half"
          desktop-span="one-fourth"
        >
          <div class="grid-item">Responsive Item</div>
        </ui-grid-item>
        <ui-grid-item
          span="fullwidth"
          tablet-span="one-half"
          desktop-span="one-fourth"
        >
          <div class="grid-item">Responsive Item</div>
        </ui-grid-item>
        <ui-grid-item
          span="fullwidth"
          tablet-span="one-half"
          desktop-span="one-fourth"
        >
          <div class="grid-item">Responsive Item</div>
        </ui-grid-item>
      </ui-grid>
    </div>
  </div>
</template>

<script>
import { UiGrid, UiGridItem} from 'Components/Grid';

export default {
  components: {
    UiGrid,
    UiGridItem,
  },
};
</script>

<style scoped>
.grid-item {
  text-align: center;
  border: 1px dashed var(--border-color);
  padding: var(--space-xs);
}
</style>
```

## GridItem Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| span | `String` | Automatic. [See Docs](#). | `one-fourth`, `one-third`, `one-half`, `two-thirds`, `three-fourths`,`fullwidth` | The GridItem's column span. |
| tablet-span | `String` | - | `one-fourth`, `one-third`, `one-half`, `two-thirds`, `three-fourths`,`fullwidth` | The GridItem's column span for tablet. |
| desktop-span | `String` | - | `one-fourth`, `one-third`, `one-half`, `two-thirds`, `three-fourths`,`fullwidth` | The GridItem's column span for desktop. |
