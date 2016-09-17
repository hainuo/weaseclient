import Vue from 'vue';
import Vuex from 'vuex';

// Make vue aware of Vuex
Vue.use(Vuex);


// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT(state, n) {
      console.log(state, n, 'n');
      state.count = state.count + n;
    },
  },
});
