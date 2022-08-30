# Layout

## Description
The Layout component is intended to be the root element of your application. It provides a lot of the base styles to other components and provides an API for [Layers](/documentation/layer).

Use the Layout components to construct the overall layout of your application.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-layout class="layout">
        <ui-layout-header class="header">
          Header
        </ui-layout-header>

        <ui-layout-main>
          <ui-layout-content class="content">
            Content
          </ui-layout-content>
        </ui-layout-main>

        <ui-layout-footer class="footer">
          Footer
        </ui-layout-footer>
      </ui-layout>
    </div>
  </div>
</template>

<script>
import { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutContent, UiLayoutFooter } from 'Components/Layout';

export default {
  components: { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutContent, UiLayoutFooter },
};
</script>

<style scoped>
/* These styles are just for the demo. DO NOT USE */
.layout {
  min-height: 0;
  border: 1px dashed var(--border-color);
}

.header {
  padding: var(--space-xl);
  text-align: center;
  border: 1px dashed var(--border-color);
}

.sider,
.content {
  line-height: 200px;
  text-align: center;
  border: 1px dashed var(--border-color);
}

.footer {
  text-align: center;
}
</style>
```

## Variant

The backdrop `variant` can be added to the `Layout` and `LayoutFooter` components to adjust their styling.

Here we also add a `LayoutSider` component.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-layout class="layout" variant="backdrop">
        <ui-layout-header class="header">
          Header
        </ui-layout-header>

        <ui-layout-main>
          <ui-layout-sider class="sider">
            Sider
          </ui-layout-sider>
          <ui-layout-content class="content" has-sider>
            Content
          </ui-layout-content>
        </ui-layout-main>

        <ui-layout-footer class="footer" variant="backdrop">
          Footer
        </ui-layout-footer>
      </ui-layout>
    </div>
  </div>
</template>

<script>
import { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutSider, UiLayoutContent, UiLayoutFooter } from 'Components/Layout';

export default {
  components: { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutSider, UiLayoutContent, UiLayoutFooter },
};
</script>

<style scoped>
/* These styles are just for the demo. DO NOT USE */
.layout {
  min-height: 0;
  border: 1px dashed var(--border-color);
}

.header {
  padding: var(--space-xl);
  text-align: center;
  border: 1px dashed var(--color-blue-300);
}

.sider,
.content {
  line-height: 200px;
  text-align: center;
  border: 1px dashed var(--color-blue-300);
}

.footer {
  text-align: center;
}
</style>
```

## Layout Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| variant | `String` | `normal` | `normal`, `backdrop` | The style of the Layout. |

## Layout Header Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| sticky | `Boolean` | `false` | `true`, `false` | Makes the header stick to the top of the screen as you scroll. |

## Layout Content Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| has-sider | `Boolean` | `false` | `true`, `false` | Styles the LayoutContent to be beside a LayoutSider. |

## Layout Footer Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| variant | `String` | `normal` | `normal`, `backdrop` | The style of the LayoutFooter. |
