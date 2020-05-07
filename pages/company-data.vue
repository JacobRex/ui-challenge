<template>
  <ui-card padding="xl">
    <p :class="$s.Text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>

    <ui-form-field
      :error="form.companyName.errors.join('. ')"
      label="Company Name"
    >
      <ui-input
        v-model="form.companyName.value"
        placeholder="e.g. Your Company Name"
      />
    </ui-form-field>

    <ui-grid>
      <ui-grid-item>
        <ui-form-field
          :error="form.spendMin.errors.join('. ')"
          label="Company Spend Ability (Min)"
        >
          <ui-input
            v-model="form.spendMin.value"
            prefix="$"
            placeholder="e.g. $150,000"
            type="number"
          />
        </ui-form-field>
      </ui-grid-item>
      <ui-grid-item>
        <ui-form-field
          :error="form.spendMax.errors.join('. ')"
          label="Company Spend Ability (Max)"
        >
          <ui-input
            v-model="form.spendMax.value"
            prefix="$"
            placeholder="e.g. $330,000"
            type="number"
          />
        </ui-form-field>
      </ui-grid-item>
    </ui-grid>

    <ui-form-field label="Notes">
      <ui-textarea
        v-model="form.notes.value"
        placeholder="e.g. Good Tech Company"
        @focus="openModal"
      />
    </ui-form-field>

    <ui-button @click="handleSubmit">
      Submit
    </ui-button>
  </ui-card>
</template>

<script>
import { UiButton } from 'Components/Button';
import { UiCard } from 'Components/Card';
import { UiFormField } from 'Components/FormField';
import { UiGrid, UiGridItem } from 'Components/Grid';
import { UiInput } from 'Components/Input';
import { UiTextarea } from 'Components/Textarea';

import NotesModal from './components/NotesModal.vue';

export default {
  inject: ['layerAPI'],

  components: {
    UiButton,
    UiCard,
    UiFormField,
    UiGrid,
    UiGridItem,
    UiInput,
    UiTextarea,
  },

  data() {
    return {
      form: {
        companyName: {
          value: '',
          errors: [],
        },
        spendMin: {
          value: '',
          errors: [],
        },
        spendMax: {
          value: '',
          errors: [],
        },
        notes: {
          value: '',
        },
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

    this.layerAPI.beforeClose = this.modalSaved;
  },

  methods: {
    handleSubmit(form = this.form) {
      // Validate Company Name
      this.validateField(form.companyName, form.companyName.value, 'You must enter a Company Name');

      // Validate positive spend numbers
      this.validateField(form.spendMin, form.spendMin.value >= 0, 'You must enter a positive value');
      this.validateField(form.spendMax, form.spendMax.value >= 0, 'You must enter a positive value');

      // Validate min < max
      this.validateField(
        form.spendMin,
        form.spendMin.value <= form.spendMax.value,
        'The min spend must be less than the max spend'
      );
      this.validateField(
        form.spendMax,
        form.spendMax.value >= form.spendMin.value,
        'The max spend must be greater than the min spend'
      );
    },

    validateField(field, validCondition, error) {
      if (!validCondition) {
        if (!field.errors.includes(error)) {
          field.errors.push(error);
        }
      } else {
        field.errors.splice(field.errors.indexOf(error, 1));
      }
    },

    openModal() {
      this.layerAPI.open(
        NotesModal,
        {
          props: {
            additionalNotes: this.form.notes.value,
          },
        },
      );
    },

    modalSaved(data) {
      this.form.notes.value = data;
    },
  },
};
</script>

<style module="$s">
/* Text
---------------------------------------------- */
.Text {
  margin-bottom: var(--space-xx);
  font-size: 14px;
  line-height: var(--line-height-md);
}
</style>
