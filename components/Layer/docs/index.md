# Layer

### Description
Layers are used to overlay components like modals over a screen.

### LayerAPI
In order to user Layers, a parent view must use the Layout component. The layout component provides an API to open and close layers. You can inject this API into your view top open the layer.

**Parent View**
```
<template>
  <ui-layout>
    <child-view />
  </ui-layout>
</template>

<script>
import { UiLayout } from 'Components/Layout';
import ChildView from '...';

export default {
  components: {
    UiLayout,
    ChildView,
  },
};
</script>
```

**Child View**
```
<template>
  <button @click="openLayer">
    Open Layer
  </button>
</template>

<script>
import MyModal from '...';

export default {
  inject: ['layerAPI'],

  methods: {
    openLayer() {
      this.layerAPI.open(MyModal);
    },
  },
};
</script>
```

### layerAPI Methods
| Name | Parameters | Description |
| ---- | ---------- | ----------- |
| `open` | `(Component, { DataObject })` | Component: The component to be mounted. <br> DataObject: Refer to the [vue docs](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for all the options available. |
