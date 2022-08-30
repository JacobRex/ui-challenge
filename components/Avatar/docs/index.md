# Avatar

## Description
Avatars are used to show a thumbnail representation of an individual. By default, a blank illustration is shown but a src photo can be passed in also.

```vue
<template>
  <div class="demo">
    <div class="demo__item gray">
      <ui-avatar class="my-avatar" />
    </div>
    <div class="demo__item">
      <ui-avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
    </div>
  </div>
</template>

<script>
import { UiAvatar } from 'Components/Avatar';
export default {
  components: { UiAvatar },
};
</script>

<style>
.my-avatar {
  box-shadow: 0 0 0 1px var(--color-gray-400);
  border-radius: 100%;
}
</style>
```

## Show Arrow
Add the `show-arrow` boolean to add an arrow to your avatar. This would be a good way to indicate that clicking the avatar will show some actions.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        show-arrow
      />
    </div>
  </div>
</template>

<script>
import { UiAvatar } from 'Components/Avatar';
export default {
  components: { UiAvatar },
};
</script>
```

## Responsive images
If desired, a series of images can be passed in as a `srcset`. Import your images and return them as data. Then you can generate a string to pass into your srcset.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-avatar :srcset="`${group} 1x, ${group2x} 2x, ${group3x} 3x`" />
    </div>
  </div>
</template>

<script>
import { UiAvatar } from 'Components/Avatar';
import group from 'Static/images/group.png';
import group2x from 'Static/images/group@2x.png';
import group3x from 'Static/images/group@3x.png';

export default {
  components: { UiAvatar },

  data() {
    return {
      group,
      group2x,
      group3x,
    };
  },
};
</script>

<style>
.my-avatar {
  box-shadow: 0 0 0 1px var(--color-gray-400);
  border-radius: 100%;
}
</style>
```


## Avatar Props
| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| src | `String` | - | Any valid image path. | Use to replace the default avatar with an image. |
| srcset | `String` | - | Any valid srcset. | Use to set responsive images for your avatar. |
| show-arrow | `boolean` | `false` | - | Displays an arrow icon next to the avatar. |

## Avatar Events
| Event | Argument | Triggers when... |
| ----- | -------- | ---------------- |
| `@click` | Event Obj | The avatar is clicked. |
