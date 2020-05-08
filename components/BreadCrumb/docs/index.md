# Breadcrumb

## Description
Breadcrumbs show a user their current context in an application by displaying the current page and parent pages as links.

Use the `crumbs` prop to pass in an array of links. Each entry should have a `to` (a valid URL or route), and a `label` (the text to be displayed).

```vue
<template>
  <div class="demo">
    <div class="demo__item gray">
      <ui-bread-crumb
        class="my-breadcrumb"
        :crumbs="mybreadcrumbs"
      />
    </div>
  </div>
</template>

<script>
import { UiBreadCrumb } from 'Components/BreadCrumb';

export default {
  components: { UiBreadCrumb },

  data() {
    return {
      mybreadcrumbs: [
        { to: '#', label: 'Ancestor' },
        { to: '#', label: 'Parent' },
        { to: '#', label: 'Current' },
      ],
    };
  },
};
</script>

<style>
.my-breadcrumb {
  margin: 0;
}
</style>
```

## BreadCrumb Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| crumbs | `Array` | - | `[{to: '', label: ''}]` | An array of the breadcrumbs to show. |
