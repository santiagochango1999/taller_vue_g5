import Vuex from 'vuex';
const store = new Vuex.Store({
  state: {
    cedula: null, // Store the user's cedula here
  },
  mutations: {
    setCedula(state, cedula) {
      state.cedula = cedula;
    },
  },
});