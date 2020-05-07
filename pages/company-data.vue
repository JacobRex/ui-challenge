<template>
  <div>
    <ui-form-field
      label="Form Field"
      :error="inputOne.error"
    >
      <ui-textarea
        v-model="inputOne.value"
        placeholder="Placeholder"
        resizeable
      />
    </ui-form-field>

    <ui-form-field
      label="Form Field with Error"
      :error="inputTwo.error"
    >
      <ui-textarea
        v-model="inputTwo.value"
        placeholder="Placeholder"
      />
    </ui-form-field>
  </div>
</template>

<script>
import { UiFormField } from 'Components/FormField';
import { UiTextarea } from 'Components/Textarea';

export default {
  components: {
    UiFormField,
    UiTextarea,
  },

  data() {
    return {
      inputOne: {
        error: null,
        value: '',
      },
      inputTwo: {
        error: 'Ruh roh Raggy!',
        value: '',
      },
      inputThree: {
        error: null,
        value: 'Value',
      },
    };
  },

  mounted() {
    this.$store.commit(
      'layout/setBreadCrumbs',
      [
        { to: '/', label: 'Home',},
        { to: '/company-data', label: 'Company Data',},
      ],
    );

    this.$store.commit('layout/setVariant', 'normal');
  },
};
</script>

<style module="$s">
.Field {
  width: 300px;
  line-height: 40px;
  text-align: center;
  color: var(--color-gray-300);
  border: 1px dashed var(--color-gray-300);
}
</style>
