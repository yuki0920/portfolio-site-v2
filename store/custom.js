  export const state = () => ({
    tab: 0,
    isExpanded: true,
    isExpandedServices: true,
  });

  export const mutations = {
    SET_TAB: (state, param) => state.tab = param,
    SET_EXPANDED: (state) => state.isExpanded = !state.isExpanded,
    SET_EXPANDED_SERVICES: (state) => state.isExpandedServices = !state.isExpandedServices,
  }

  export const getters = {
    tab: state => {
      return state.tab;
    },
    isExpanded: state => {
      return state.isExpanded;
    },
    isExpandedServices: state => {
      return state.isExpandedServices;
    },
  }

  export const actions = {
    setTab({
      commit
    }, param) {
      commit("SET_TAB", param)
    },
    setExpanded({
      commit
    }) {
      commit("SET_EXPANDED")
    },
    setExpandedServices({
      commit
    }) {
      commit("SET_EXPANDED_SERVICES")
    },
  }
