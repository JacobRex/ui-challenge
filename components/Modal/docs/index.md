# Modal

## Description
A Modal is a component meant to be opened in a [Layer](/documentation/Layer). You must have a [Layout Component](/documentation/layout) in a parent of the view trying to open the Modal.

## Opening a Modal
To open a Modal, inject the layerAPI and then pass in your Modal. Our documentation uses the Layout component already, so we have this API provided.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="openModal">
        Open Layer
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';
const OpenModalDemo = require('Components/Modal/docs/OpenModalDemo.vue').default;

export default {
  inject: ['layerAPI'],

  components: { UiButton },

  methods: {
    openModal() {
      this.layerAPI.open(OpenModalDemo);
    },
  },
};
</script>
```

## Closing a Modal
Modals can be cancelled by clicking the overlay behind them or the X icon inside.

The `layerAPI` also provides two methods for closing a layer: `cancel` and `close`. The `beforeCancel` and `beforeClose` callbacks can be defined and used if needed.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="openModal">
        Open Layer
      </ui-button>
    </div>
    <div class="demo__item">
      Modal closed with: {{ closeMethod }}
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';
const CloseModalDemo = require('Components/Modal/docs/CloseModalDemo.vue').default;

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
    openModal() {
      this.layerAPI.open(CloseModalDemo);
    },
  },
};
</script>
```

## Passing Props to a Modal
You can pass a data object to the Modal. This is useful if you want to pass props to your Modal.

Refer to the [vue docs](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for all the options available.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="openModal">
        Open Layer
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';
const PropsModalDemo = require('Components/Modal/docs/PropsModalDemo.vue').default;

export default {
  inject: ['layerAPI'],

  components: { UiButton },

  methods: {
    openModal() {
      this.layerAPI.open(
        PropsModalDemo,
        {
          props: {
            title: 'My title',
          },
        },
      );
    },
  },
};
</script>
```
