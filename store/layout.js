export const state = () => ({
  breadcrumbs: null,
  variant: null,
});

export const mutations = {
  setBreadCrumbs(state, crumbs) {
    state.breadcrumbs = crumbs;
  },

  setVariant(state, variant) {
    state.variant = variant;
  },
};
