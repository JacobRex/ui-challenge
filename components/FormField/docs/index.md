# Form Field

## Description
The FormField component is a wrapper for html form fields that handles labels, and error handling.

## Label
The `label` prop adds label text above your field. Labels are required.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field
        class="my-field"
        label="Label"
      >
        <div class="demo__element">Any form element</div>
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';

export default {
  components: { UiFormField },
};
</script>

<style scoped>
.my-field {
  margin: 0;
}
</style>
```

## Errors
Use the `error` prop to add an error message below the field. The FormField component will provide the error state to the child field, which will be responsible for its own error styling.

The error message should clearly explain what went wrong and how to fix it. Use passive voice so people don’t feel like they’re being blamed for the error.

```vue
<template>
  <div class="demo">
    <div class="demo__item">
      <ui-form-field
        class="my-field"
        label="Label"
        secondary-text="Secondary Text"
        error="Error message here."
      >
        <div class="demo__element">Any form element</div>
      </ui-form-field>
    </div>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';

export default {
  components: { UiFormField },
};
</script>

<style scoped>
.my-field {
  margin: 0;
}
</style>
```

## FormField Props

| Prop | Type | Default | Options | Description |
| ---- | ---- | ------- | ------- | ----------- |
| error | `String` | - | - | The error message displayed beneath the field. |
| label* | `String` | - | - | REQUIRED. A label of text above the field describing what the field does. |
