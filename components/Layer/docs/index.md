# Layout

## Description
The Layer component is used to mount components in an overlay over an application. To use the layerAPI, you must have a [Layout Component](/documentation/layout) in a parent of the view trying to open the layer.

## Opening a Layer
To open a component in a layer, inject the layerAPI and then pass in your component. Our documentation uses the Layout component already, so we have this API provided.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="openLayer">
        Open Layer
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';
const OpenLayerDemo = require('Components/Layer/docs/OpenLayerDemo.vue').default;

export default {
  inject: ['layerAPI'],

  components: { UiButton },

  methods: {
    openLayer() {
      this.layerAPI.open(OpenLayerDemo);
    },
  },
};
</script>
```

## Closing a layer
Layers can be closed by clicking the overlay behind the mounted component.

The `layerAPI` also provides two methods for closing a layer: `cancel` and `close`. The `beforeCancel` and `beforeClose` callbacks can be defined and used if needed.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="openLayer">
        Open Layer
      </ui-button>
    </div>
    <div class="demo__item">
      Layer closed with: {{ closeMethod }}
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';
const CloseLayerDemo = require('Components/Layer/docs/CloseLayerDemo.vue').default;

export default {
  inject: ['layerAPI'],

  components: { UiButton },

  data() {
    return {
      closeMethod: '',
    };
  },

  mounted() {
    this.layerAPI.beforeCancel = this.beforeCancel;
    this.layerAPI.beforeClose = this.beforeClose;
  },

  methods: {
    beforeCancel() {
      this.closeMethod = 'cancel';
    },
    beforeClose() {
      this.closeMethod = 'close';
    },
    openLayer() {
      this.layerAPI.open(CloseLayerDemo);
    },
  },
};
</script>
```

## Passing Props to a Layer
You can pass a data object to the layer. This is useful if you want to pass props to your layer.

Refer to the [vue docs](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for all the options available.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="openLayer">
        Open Layer
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';
const PropsLayerDemo = require('Components/Layer/docs/PropsLayerDemo.vue').default;

export default {
  inject: ['layerAPI'],

  components: { UiButton },

  methods: {
    openLayer() {
      this.layerAPI.open(
        PropsLayerDemo,
        {
          props: {
            title: 'My title',
            padding: 'xxx',
          },
        },
      );
    },
  },
};
</script>
```

## LayerAPI Methods
Refer to the [vue docs](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for all the options available for Data Objects.

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
| `open` | `(Component, { DataObject })` | Component: The component you want mounted. <br> DataObject: Vue data object. |
| `cancel` | `{ DataObject }` | DataObject: Vue data object. Runs when a layer's overlay is clicked. |
| `close` | `{ DataObject }` | DataObject: Vue data object. Must be defined to be used. |

## LayerAPI Callbacks
| Name | Description |
| ---- | ----------- |
| `beforeCancel` | Runs when the Layer is cancelled. |
| `beforeClosed` | Runs when the Layer is closed. |
