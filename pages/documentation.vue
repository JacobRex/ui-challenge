<template>
  <nuxt-child />
</template>

<script>
export default {
  layout: 'documentation',

  mounted() {
    this.$store.commit('documentation/setNavigation', [
      {
        to: '/documentation',
        title: 'Overview',
      },
      {
        to: '/documentation/avatar',
        title: 'Avatar',
      },
      {
        to: '/documentation/bread-crumb',
        title: 'Bread Crumb',
      },
      {
        to: '/documentation/button',
        title: 'Button',
      },
      {
        to: '/documentation/card',
        title: 'Card',
      },
      {
        to: '/documentation/container',
        title: 'Container',
      },
      {
        to: '/documentation/form-field',
        title: 'Form Field',
      },
      {
        to: '/documentation/grid',
        title: 'Grid',
      },
      {
        to: '/documentation/heading',
        title: 'Heading',
      },
      {
        to: '/documentation/icon',
        title: 'Icon',
      },
      {
        to: '/documentation/input',
        title: 'Input',
      },
      {
        to: '/documentation/layer',
        title: 'Layer',
      },
      {
        to: '/documentation/layout',
        title: 'Layout',
      },
      {
        to: '/documentation/loading-indicator',
        title: 'Loading Indicator',
      },
      {
        to: '/documentation/nav',
        title: 'Nav',
      },
      {
        to: '/documentation/navbar',
        title: 'Navbar',
      },
      {
        to: '/documentation/side-nav',
        title: 'SideNav',
      },
      {
        to: '/documentation/textarea',
        title: 'Textarea',
      },
    ]);
  }
};
</script>
