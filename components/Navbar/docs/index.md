# Navbar

## Description
The navbar component serves as a way to group common header and navigation elements for an application.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-navbar />
    </div>
  </div>
</template>

<script>
import { UiNavbar } from 'Components/Navbar';

export default {
  components: { UiNavbar },
};
</script>
```

## Navigation
The Navbar component uses a [Nav](/documentation/nav) internally, so you can pass your navbar a valid navigation array in the same manner.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-navbar :navigation="navbar" />
    </div>
  </div>
</template>

<script>
import { UiNavbar } from 'Components/Navbar';

export default {
  components: { UiNavbar },

  data() {
    return {
      navbar: [
        { to: '#', label: 'Prospect' },
        { to: '#', label: 'Alert' },
        { to: '#', label: 'Learn' },
      ],
    };
  },
};
</script>
```

## Actions Slot
The actions slot renders on the right side of the navbar. Use it for things like user actions.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-navbar :navigation="navbar">
        <ui-avatar
          slot="actions"
          show-arrow
          src="/images/group.png"
        />
      </ui-navbar>
    </div>
  </div>
</template>

<script>
import { UiNavbar } from 'Components/Navbar';
import { UiAvatar } from 'Components/Avatar';

export default {
  components: { UiNavbar, UiAvatar },

  data() {
    return {
      navbar: [
        { to: '#', label: 'Prospect' },
        { to: '#', label: 'Alert' },
        { to: '#', label: 'Learn' },
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
