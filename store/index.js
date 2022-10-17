export const state = () => ({
  page: 0,
});

export const mutations = {
  changePage(state, index) {
    state.page = index;
  },
};
