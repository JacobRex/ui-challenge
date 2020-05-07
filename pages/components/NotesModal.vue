<template>
  <ui-modal>
    <ui-form-field label="Additional Notes">
      <ui-textarea
        v-model="form.additionalNotes.value"
        ref="textarea"
        placeholder="e.g. Good Tech Company"
      />
    </ui-form-field>
    <ui-button
      :class="$s.Button"
      size="small"
      @click="closeModal"
    >
      Save
    </ui-button>
    <div :class="$s.Clear" />
  </ui-modal>
</template>

<script>
import { UiButton } from 'Components/Button';
import { UiFormField } from 'Components/FormField';
import { UiTextarea } from 'Components/Textarea';
import { UiModal } from 'Components/Modal';

export default {
  name: 'NotesModal',

  inject: ['layerAPI'],

  components: {
    UiButton,
    UiFormField,
    UiTextarea,
    UiModal,
  },

  props: {
    additionalNotes: {
      type: String,
      default: undefined,
    },
  },

  data() {
    return {
      form: {
        additionalNotes: {
          value: this.additionalNotes,
        },
      },
    };
  },

  mounted() {
    this.$refs.textarea.$el.focus();
  },

  methods: {
    closeModal() {
      this.layerAPI.close(this.form.additionalNotes.value);
    },
  },
};
</script>

<style module="$s">
.Button {
  float: right;
}

.Clear {
  clear: both;
}
</style>
