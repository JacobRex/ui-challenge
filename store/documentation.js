export const state = () => ({
  navigation: [],
});

export const mutations = {
  setNavigation (state, nav) {
    state.navigation = nav;
  },
};
