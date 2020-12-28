  export const state = () => ({
    tab: 0,
    isExpandedSkills: true,
    isExpandedServices: true,
  });

  export const mutations = {
    SET_TAB: (state, param) => state.tab = param,
    SET_EXPANDED_SKILLS: (state) => state.isExpandedSkills = !state.isExpandedSkills,
    SET_EXPANDED_SERVICES: (state) => state.isExpandedServices = !state.isExpandedServices,
  }

  export const getters = {
    tab: state => {
      return state.tab;
    },
    isExpandedSkills: state => {
      return state.isExpandedSkills;
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
    setExpandedSkills({
      commit
    }) {
      commit("SET_EXPANDED_SKILLS")
    },
    setExpandedServices({
      commit
    }) {
      commit("SET_EXPANDED_SERVICES")
    },
  }
