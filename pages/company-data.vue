<template>
  <ui-card padding="xl">
    <p :class="$s.Text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>

    <ui-form-field
      :error="form.companyName.error"
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

export default {
  inject: ['layerAPI'],

  components: {
    UiButton,
    UiCard,
    UiFormField,
    UiGrid,
    UiGridItem,
    UiInput,
  },

  data() {
    return {
      form: {
        companyName: {
          value: '',
          error: null,
        },
        spendMin: {
          value: '',
          errors: [],
        },
        spendMax: {
          value: '',
          errors: [],
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
  },

  methods: {
    handleSubmit(form = this.form) {
      // Validate Company Name
      if (form.companyName.value === '') {
        form.companyName.error = 'You must enter a company name.';
      } else {
        form.companyName.error = null;
      }
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
