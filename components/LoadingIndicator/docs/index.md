# Loading Indicator

## Description
Loading indicators let a user know that a process is underway. The indicator color will be the text color in that area.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-loading-indicator />
    </div>
    <div class="demo__item">
      <ui-loading-indicator class="pink" />
    </div>
  </div>
</template>

<script>
import { UiLoadingIndicator } from 'Components/LoadingIndicator';

export default {
  components: { UiLoadingIndicator },
};
</script>

<style scoped>
.pink {
  color: #FF3C6A;
}
</style>
```

## Loading Buttons
Buttons have their own `loading` prop, and do not need to have a LoadingIndicator implemented manually. See the [Button Docs](/documentation/button) for more information.
