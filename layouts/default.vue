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
      <div :class="$s.Flex">
        <div :class="$s.FlexItem">
          <ui-nav
            :class="$s.FooterNav"
            :navigation="footerNav"
            variant="secondary"
          />
          <div :class="$s.Copyright">
            &copy; Copyright 2017, Intricately, Inc. All Rights Reserved.
          </div>
        </div>
        <div :class="[$s.FlexItem, $s.content]">
          <ui-nav
            :class="$s.FooterNav"
            :navigation="footerSecondaryNav"
            variant="secondary"
          />
          <div :class="[$s.Flex, $s['justify_end']]">
            <div
              v-for="(link, index) in socialMedia"
              :key="index"
              :class="[$s.FlexItem, $s.content]"
            >
              <a
                :class="$s.SocialMediaLink"
                :href="link.url"
                target="_blank"
              >
                <ui-icon :name="link.icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ui-layout-footer>
  </ui-layout>
</template>

<script>
import { UiAvatar } from 'Components/Avatar';
import { UiIcon } from 'Components/Icon';
import { UiLayout, UiLayoutHeader, UiLayoutMain, UiLayoutSider, UiLayoutContent, UiLayoutFooter } from 'Components/Layout';
import { UiNav } from 'Components/Nav';
import { UiNavbar } from 'Components/Navbar';
import { UiSideNav } from 'Components/SideNav';

import group from 'Static/images/group.png';
import group2x from 'Static/images/group@2x.png';
import group3x from 'Static/images/group@3x.png';

export default {
  components: {
    UiAvatar,
    UiIcon,
    UiLayout,
    UiLayoutHeader,
    UiLayoutMain,
    UiLayoutSider,
    UiLayoutContent,
    UiLayoutFooter,
    UiNav,
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
      footerNav: [
        { to: '#', label: 'Pricing' },
        { to: '#', label: 'Blog' },
        { to: '#', label: 'Webinars' },
        { to: '#', label: 'Events' },
        { to: '#', label: 'Help Center' },
      ],
      footerSecondaryNav: [
        { to: '#', label: 'Terms and Conditions' },
        { to: '#', label: 'Privacy Policy' },
      ],
      socialMedia: [
        { icon: 'fill-92', url: '#' },
        { icon: 'fill-93', url: '#' },
        { icon: 'fill-118', url: '#' },
      ],
    };
  },
};
</script>

<style module="$s">

/* Footer
---------------------------------------------- */
.Flex {
  display: flex;

  &.justify_end {
    justify-content: flex-end;
  }
}

.FlexItem {
  flex: 1;

  &.content {
    flex: 0 0 auto;
  }

  & + .FlexItem {
    margin-left: var(--space-lg);
  }
}

.FooterNav {
  margin-bottom: var(--space-xl);
}

.Copyright {
  color: var(--color-gray-300);
}

.SocialMediaLink {
  display: block;
  color: var(--color-blue-300);
  transition: color var(--transition);

  &:hover {
    color: var(--color-blue-500);
  }
}
</style>
