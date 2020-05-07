<template>
  <div
    :class="[
      $s.GridItem,
      {
        [$s[`span_${span}`]]: span,
        [$s[`tablet_${tabletSpan}`]]: tabletSpan,
        [$s[`desktop_${desktopSpan}`]]: desktopSpan,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
const isValidSpan = value => [
  'one-fourth',
  'one-third',
  'one-half',
  'two-thirds',
  'three-fourths',
  'fullwidth'
].includes(value);

import Key from './Key';

export default {
  name: 'UiGridItem',

  inject: {
    grid: {
      from: Key,
      default: undefined,
    },
  },

  props: {
    span: {
      type: [Number, String],
      default() {
        const span = Math.ceil(12 / this.grid.numGridItems);
        let defaultSpan;
        switch(span) {
          case 12:
            defaultSpan = 'fullwidth';
            break;
          case 6:
            defaultSpan = 'one-half';
            break;
          case 4:
            defaultSpan = 'one-third';
            break;
          default:
            defaultSpan = 'one-fourth';
        }
        return defaultSpan;
      },
      validator: isValidSpan,
    },
    tabletSpan: {
      type: [Number, String],
      default: undefined,
      validator: isValidSpan,
    },
    desktopSpan: {
      type: [Number, String],
      default: undefined,
      validator: isValidSpan,
    },
  },

  computed: {
    numGridItems() {
      return this.grid && this.grid.numGridItems;
    },
  },

  mounted() {
    if (!this.grid) {
      throw new Error('UiGridItem: The UiGridItem component must be a child of of a UiGrid.');
    }
  },
};
</script>

<style module="$s">
@import 'Vars';

.GridItem {
  box-sizing: border-box;
  padding: 0 calc(var(--grid-gutter) / 2) var(--grid-gutter);

  /* Columns */
  &.span_one-fourth {
    width: 25%;
  }

  &.span_one-third {
    width: 33.333%;
  }

  &.span_one-half {
    width: 50%;
  }

  &.span_two-thirds {
    width: 66.666%;
  }

  &.span_three-fourths {
    width: 75%;
  }

  &.span_fullwidth{
    width: 100%;
  }

  @media (--tablet-up) {
    &.tablet_one-fourth {
      width: 25%;
    }

    &.tablet_one-third {
      width: 33.333%;
    }

    &.tablet_one-half {
      width: 50%;
    }

    &.tablet_two-thirds {
      width: 66.666%;
    }

    &.tablet_three-fourths {
      width: 75%;
    }

    &.tablet_fullwidth{
      width: 100%;
    }
  }

  @media (--desktop-up) {
    &.desktop_one-fourth {
      width: 25%;
    }

    &.desktop_one-third {
      width: 33.333%;
    }

    &.desktop_one-half {
      width: 50%;
    }

    &.desktop_two-thirds {
      width: 66.666%;
    }

    &.desktop_three-fourths {
      width: 75%;
    }

    &.desktop_fullwidth{
      width: 100%;
    }
  }
}
</style>
