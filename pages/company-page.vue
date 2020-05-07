<template>
  <div :class="$s.Page">
    <div :class="$s.PageHeading">
      <img
        :class="$s.PageHeadingIcon"
        src="/images/windows.svg"
      >
      <div>
        <ui-heading
          :class="$s.PageTitle"
          variant="page-title"
        >
          Microsoft
        </ui-heading>
        <div :class="$s.Location">
          <ui-icon
            :class="$s.LocationIcon"
            name="location"
          />
          Redmond, WA USA
        </div>
      </div>
    </div>
    <p :class="$s.Text">
      <!-- eslint-disable vue/max-attributes-per-line -->
      At Microsoft, our mission is to empower every person and every organization on the planert to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create. <a :class="$s.Link" href="#">View More...</a>
      <!-- eslint-enable vue/max-attributes-per-line -->
    </p>

    <ui-grid>
      <ui-grid-item>
        <ui-card
          :class="[$s.Card, $s.stretch]"
          title="Activities"
        >
          ...
        </ui-card>
      </ui-grid-item>
      <ui-grid-item>
        <ui-card
          :class="$s.Card"
          title="Similar Companies"
        >
          ...
        </ui-card>
        <ui-card
          :class="$s.Card"
          title="Company Spend History"
        >
          ...
        </ui-card>
        <ui-card
          :class="$s.Card"
          title="Company Spend History"
        >
          ...
        </ui-card>
      </ui-grid-item>
    </ui-grid>
  </div>
</template>

<script>
import { UiCard } from 'Components/Card';
import { UiGrid, UiGridItem } from 'Components/Grid';
import { UiHeading } from 'Components/Heading';
import { UiIcon } from 'Components/Icon';

export default {
  components: {
    UiCard,
    UiGrid,
    UiGridItem,
    UiHeading,
    UiIcon,
  },

  mounted() {
    this.$store.commit(
      'layout/setBreadCrumbs',
      [
        { to: '/', label: 'Home',},
        { to: '/company-data', label: 'Company Page',},
      ],
    );

    this.$store.commit('layout/setVariant', 'backdrop');
  },
};
</script>

<style module="$s">

/* Heading
---------------------------------------------- */
.PageHeading {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.PageHeadingIcon {
  margin-right: var(--space-lg);
}

.PageTitle {
  margin-bottom: var(--space-lg);
}

/* Location
---------------------------------------------- */
.Location {
  display: flex;
  align-items: center;
  color: var(--color-gray-400);
}

.LocationIcon {
  margin-right: var(--space-sm);
}

/* Text
---------------------------------------------- */
.Text {
  margin-bottom: var(--space-xx);
  font-size: 14px;
  line-height: var(--line-height-md);
}

.Link {
  color: var(--color-blue-300);
}

/* Card Grid
---------------------------------------------- */
.Card {
  &:not(:last-of-type) {
    margin-bottom: var(--space-lg);
  }

  &.stretch {
    height: 100%;
  }
}
</style>
