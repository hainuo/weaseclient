import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);
/* eslint-disable no-new */
// const app =
// new Vue({
//   el: 'body',
//   components: { App },
// });
// console.log(app);

const router = new VueRouter();
const Foo = Vue.extend({
  template: '<p>This is foo!</p>',
});

const Bar = Vue.extend({
  template: '<p>This is bar!</p>',
});


router.map({
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
});

router.start(App, 'body');
