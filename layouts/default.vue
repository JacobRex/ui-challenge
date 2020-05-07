<template>
  <ui-layout>
    <ui-layout-header sticky>
      <ui-navbar :navigation="navbar">
        <ui-avatar
          slot="actions"
          show-arrow
          :src="group"
          :srcset="`${group} 1x, ${group2x} 2x, ${group3x} 3x`"
        />
      </ui-navbar>
    </ui-layout-header>

    <ui-layout-main>
      <ui-layout-sider>
        <ui-side-nav :navigation="sideNav" />
      </ui-layout-sider>
      <ui-layout-content has-sider>
        <nuxt />
      </ui-layout-content>
    </ui-layout-main>

    <ui-layout-footer>
      Footer
    </ui-layout-footer>
  </ui-layout>
</template>

<script>
import { UiAvatar } from 'Components/Avatar';
import { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutSider, UiLayoutContent, UiLayoutFooter } from 'Components/Layout';
import { UiNavbar } from 'Components/Navbar';
import { UiSideNav } from 'Components/SideNav';

import group from 'Static/images/group.png';
import group2x from 'Static/images/group@2x.png';
import group3x from 'Static/images/group@3x.png';

export default {
  components: {
    UiAvatar,
    UiLayout,
    UiLayoutHeader,
    UiLayoutMain,
    UiLayoutSider,
    UiLayoutContent,
    UiLayoutFooter,
    UiNavbar,
    UiSideNav,
  },

  data() {
    return {
      group,
      group2x,
      group3x,
      navbar: [
        {
          to: '#',
          label: 'Prospect',
          children: [
            {
              to: '#',
              label: 'Fake Child',
            },
          ],
        },
        {
          to: '#',
          label: 'Alert',
          children: [
            {
              to: '#',
              label: 'Fake Child',
            },
          ],
        },
        {
          to: '#',
          label: 'Learn',
          children: [
            {
              to: '#',
              label: 'Fake Child',
            },
          ],
        },
      ],
      sideNav: [
        { to: '/company-data', label: 'Company Data' },
        { to: '/company-table', label: 'Company Table' },
        { to: '/company-page', label: 'Company Page' },
      ],
    };
  },
};
</script>
