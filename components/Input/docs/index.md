# Input

## Description
The input component is a form control that is used to collect a single line of information. For labels and error handling, see the [FormField](/documentation/form-field) component.

## Placeholders
Use the `placeholder` prop to add a placeholder. Placeholder text is shown inside the text field to show people what to input. Placeholders should be used for supplementary information because the text has low color contrast and is hidden when field is active.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field label="Email Address">
        <ui-input
          v-model="inputPlaceholder"
          placeholder="email@address.com"
        />
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';
import { UiInput } from 'Components/Input';

export default {
  components: { UiFormField, UiInput },

  data() {
    return { inputPlaceholder: '' };
  },
};
</script>
```

## Prefix
Use the `prefix` prop or slot to add a prefix to your field. The prefix will render before the input value.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field label="Service Cost">
        <ui-input
          v-model="inputPrefix"
          prefix="$"
          placeholder="Price"
          type="number"
        />
      </ui-form-field>
    </div>
    <div class="demo__item">
      <ui-form-field label="Address">
        <ui-input
          v-model="inputPrefix2"
          placeholder="Street Address"
        >
          <ui-icon
            slot="prefix"
            name="location"
          />
        </ui-input>
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';
import { UiInput } from 'Components/Input';
import { UiIcon } from 'Components/Icon';

export default {
  components: { UiFormField, UiInput, UiIcon },

  data() {
    return {
      inputPrefix: '',
      inputPrefix2: ''
    };
  },
};
</script>
```

## Errors
Add an `error` to the FormField wrapping your Input. See the [FormField documentation](/documentation/form-field) for more information.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field
        label="Label"
        error="Error message here."
      >
        <ui-input
          v-model="errorData"
          placeholder="Input placeholder"
        />
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';
import { UiInput } from 'Components/Input';

export default {
  components: { UiFormField, UiInput },

  data() {
    return {
      errorData: '',
    };
  },
};
</script>
```

## Input Props
Inputs are also compatible with the standard [html attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes).

| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| placeholder | `String` | `undefined` | - | Adds placeholder text to the input |
| prefix | `String` | `undefined` | - | Text rendered before the input value |
| value (v-model) | - | - | the value of the input |

| Slot | Description |
| ---- | ----------- |
| prefix | Renders on the left side of the input before the input value. |

| Event | Arguments | Triggers When... |
| ----- | --------- | ---------------- |
| `@blur` | `Event` | Propagates native event. |
| `@change` | `Event` | Propagates native event. |
| `@focus` | `Event` | Propagates native event. |
| `@input` | `newValue` | Propagates native event. |
| `@keyup` | `Event` | Propagates native event. |
| `@keydown` | `Event` | Propagates native event. |
