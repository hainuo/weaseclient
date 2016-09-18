import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueAuth from 'vue-auth';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAuth, {
  storagePrefix: '_wease.',
  // authPath: '/manage',
  redirectType: 'browser',
});
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
  '/user': {
    component: App,
  },
  '/manage': {
    auth: true,
    component: Bar,
    subRoutes: {
      '/Foo': {
        component: Foo,
      },
    },
  },
});

router.start(App, 'body');
