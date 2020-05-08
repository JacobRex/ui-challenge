# Button

## Description
Buttons are interactive elements that are used to perform an action.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button>Button</ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  components: { UiButton },
};
</script>
```

## Event handling
The Button component emits a click event, which can be used to perform actions.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button @click="handleClick">
        Clicked {{ numclicks }} time{{s}}
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  components: { UiButton },

  data() {
    return {
      numclicks: 0,
    };
  },

  computed: {
    s() {
      return this.numclicks === 1 ? '' : 's';
    },
  },

  methods: {
    handleClick() {
      this.numclicks += 1;
    },
  },
};
</script>
```

## Sizes
Buttons come in two sizes: `normal`, and `small`. Use the `size` prop to choose your size.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button>Normal</ui-button>
    </div>
    <div class="demo__item">
      <ui-button size="small">Small</ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  components: { UiButton },
};
</script>
```

## Disabled buttons
Buttons may be disabled with the `disabled` attribute. Use disabled buttons with caution, as it could be confusing to users why they cannot interact with a button. Instead, try and provide your users with the actions needed to enable the button.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button disabled>Button</ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  components: { UiButton },
};
</script>
```

## Loading buttons
Buttons may be put into a loading state with the `loading` prop. Use loading buttons to indicate that the button has been pressed and that a process is underway. Loading buttons are also disabled.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button loading>Button</ui-button>
    </div>
    <div class="demo__item">
      <ui-button
        size="small"
        loading
      >
        Secondary
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  components: { UiButton },
};
</script>
```

## Linked buttons
Button's can link to an external url or an internal route with the `to` prop, and will render as an `a` or `router-link` instead of a `button` as needed depending on your environment.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-button
        to="http://intricately.com"
        target="_blank"
      >
        External
      </ui-button>
    </div>
    <div class="demo__item">
      <ui-button to="/documentation">
        Internal
      </ui-button>
    </div>
    <div class="demo__item">
      <ui-button :to="{ path: '/documentation'}">
        Internal Obj
      </ui-button>
    </div>
  </div>
</template>

<script>
import { UiButton } from 'Components/Button';

export default {
  components: { UiButton },
};
</script>
```

## Button Props
Buttons are compatible with the standard [button html attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Attributes).

Buttons are compatible with the standard [a html attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes) when rendered as an `a` with the `to` prop.

| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| size | `String` | `normal` | `normal`, `small` | Defines the size of your button. |
| to | `String`, `Object` | - | - | Use to define an external url or route for your button. Renders the button as an  `a` or `router-link` as needed. |
| disabled | `Boolean` | `false` | `true`, `false` | Disables the button, making it unclickable and giving it a different appearance. |
| loading | `Boolean` | `false` | `true`, `false` | Replaces button text with a loading indicator and disables the button. |

## Button Events
| Event | Argument | Triggers when... |
| ----- | -------- | ---------------- |
| `@click` | Event Obj | The button is clicked. |
