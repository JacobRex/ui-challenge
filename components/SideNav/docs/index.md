# SideNav

## Description
The SideNav component is used for navigation within an array of the application, and renders as a vertical list of links.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-side-nav :navigation="sideNav" />
    </div>
  </div>
</template>

<script>
import { UiSideNav } from 'Components/SideNav';

export default {
  components: { UiSideNav },

  data() {
    return {
      sideNav: [
        { to: '/company-data', label: 'Company Data' },
        { to: '/company-table', label: 'Company Table' },
        { to: '/company-page', label: 'Company Page' },
      ],
    };
  },
};
</script>
```

## Active Link
The SideNav component leverages the router to determine which link is active.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-side-nav :navigation="sideNav" />
    </div>
  </div>
</template>

<script>
import { UiSideNav } from 'Components/SideNav';

export default {
  components: { UiSideNav },

  data() {
    return {
      sideNav: [
        { to: '/documentation/overview', label: 'Documentation Overview' },
        { to: '/documentation/side-nav', label: 'SideNav' },
        { to: '/documentation/navbar', label: 'Navbar' },
        { to: '/documentation/nav', label: 'Nav' },
      ],
    };
  },
};
</script>
```

## Navbar Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| navigation | `Array` | - | `[{to:'', label: ''}]` | An array of links for the nav to generate. |

## Navbar Slots
| Slot | Description |
| ---- | ----------- |
| actions | Renders on the right side of the Navbar. |
