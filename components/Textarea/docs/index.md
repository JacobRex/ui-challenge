# Textarea

## Description
A `textarea` allows the user to enter multiple lines of text into an input. For labels and error handling, see the [FormField](/documentation/form-field) component.

## Placeholders
Use the `placeholder` prop to add a placeholder. Placeholder text is shown inside the text field to show people what to input. Placeholders should be used for supplementary information because the text has low color contrast and is hidden when field is active.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field label="Additional notes">
        <ui-textarea
          v-model="placeHolderData"
          placeholder="e.g. Good Tech Company"
        />
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';
import { UiTextarea } from 'Components/Textarea';

export default {
  components: { UiFormField, UiTextarea },

  data() {
    return { placeHolderData: '' };
  },
};
</script>
```

## Resizable
The `resizable` prop will add a resizing handle in the bottom right of the textarea. The field can only have its height resized. The field also has a min height to prevent it from collapsing.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field label="Additional Notes">
        <ui-textarea
          v-model="resizableData"
          placeholder="e.g. Good Tech Company"
          resizable
        />
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';
import { UiTextarea } from 'Components/Textarea';

export default {
  components: { UiFormField, UiTextarea },

  data() {
    return { resizableData: '' };
  },
};
</script>
```

## Errors
Add an `error` to the FormField wrapping your TextArea. See the [FormField documentation](/documentation/form-field) for more information.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field
        label="Label"
        error="Error message here."
      >
        <ui-textarea
          v-model="errorData"
          placeholder="Textarea placeholder"
        />
      </ui-form-field>
    </div>
  </div>
</template>

<script>

import { UiFormField } from 'Components/FormField';
import { UiTextarea } from 'Components/Textarea';

export default {
  components: { UiFormField, UiTextarea },

  data() {
    return {
      errorData: '',
    };
  },
};
</script>
```

## Textarea Props
The textarea component also supports [native attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| placeholder | `String` | `undefined` | - | Adds placeholder text to the input. |
| resizable | `Boolean` | `false` | - | Adds a resizing handle in the bottom right of the textarea. |
| value (v-model) | - | - | the value of the textarea |

| Event | Arguments | Triggers When... |
| ----- | --------- | ---------------- |
| `@blur` | `Event` | Propagates native event. |
| `@change` | `Event` | Propagates native event. |
| `@focus` | `Event` | Propagates native event. |
| `@input` | `newValue` | Propagates native event. |
| `@keyup` | `Event` | Propagates native event. |
| `@keydown` | `Event` | Propagates native event. |
