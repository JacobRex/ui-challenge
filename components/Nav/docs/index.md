# Nav

## Description
The nav component generates a series of horizontal links.

```vue
<template>
  <div class="demo">
    <div class="demo__item blue">
      <ui-nav :navigation="navigation" />
    </div>
  </div>
</template>

<script>
import { UiNav } from 'Components/Nav';

export default {
  components: { UiNav },

  data() {
    return {
      navigation: [
        { to: '#', label: 'Prospect' },
        { to: '#', label: 'Alert' },
        { to: '#', label: 'Learn' },
      ],
    };
  },
};
</script>
```

## Children
If you give a link children, it will show an error. Dropdowns for child links have not been built yet.

```vue
<template>
  <div class="demo">
    <div class="demo__item blue">
      <ui-nav :navigation="navigation" />
    </div>
  </div>
</template>

<script>
import { UiNav } from 'Components/Nav';

export default {
  components: { UiNav },

  data() {
    return {
      navigation: [
        {
          to: '#',
          label: 'Prospect',
          children: [ { to: '#', label: 'Fake Child'} ],
        },
        {
          to: '#',
          label: 'Alert',
          children: [ { to: '#', label: 'Fake Child'} ],
        },
        {
          to: '#',
          label: 'Learn',
          children: [ { to: '#', label: 'Fake Child'} ],
        },
      ],
    };
  },
};
</script>
```

## Variant
Use the `variant` prop to change the style of your nav.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-nav
        :navigation="navigation"
        variant="secondary"
      />
    </div>
  </div>
</template>

<script>
import { UiNav } from 'Components/Nav';

export default {
  components: { UiNav },

  data() {
    return {
      navigation: [
        { to: '#', label: 'Prospect' },
        { to: '#', label: 'Alert' },
        { to: '#', label: 'Learn' },
      ],
    };
  },
};
</script>
```



## Nav Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| navigation | `Array` | - | `[{to:'', label: ''}]` | An array of links for the nav to generate. |
| variant | `String` | `primary` | `primary`, `secondary` | The style of your nav. |
