import Vue from 'vue';
import Vuex from 'vuex';

// Make vue aware of Vuex
Vue.use(Vuex);

const state = {
  count: 0,
};


const mutations = {

  /* eslint no-shadow: ["error",{ "allow": ["state"]}] */
  /* eslint-env es6 */

  /* eslint no-param-reassign: ["error", { "props": false }] */
  INCREMENT(state, n) {
    console.log(state, n, 'n');
    state.count = state.count + n;
  },
};

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations,
});
