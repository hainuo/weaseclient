import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueAuth from 'vue-auth';

// import Login from './components/pages/Login';

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

Vue.use(VueAuth, {
  storagePrefix: '_prefix.',
  redirectType: 'browser',
});

router.map({
  '/bar': {
    auth: true,
    component: Bar,
  },
  '/foo': {
    component: Foo,
  },
  // '/login': {
  //   auth: false,
  //   name: 'login',
  //   component: require('./components/pages/Login.vue')
  // },
  // '/login/:type': {
  //   name: 'oauth2-type',
  //   component: require('./components/pages/Oauth2.vue')
  // },
  // '/register': {
  //   auth: false,
  //   name: 'register',
  //   component: require('./components/pages/Register.vue')
  // },
  // '/oauth1': {
  //   name: 'oauth1',
  //   component: require('./components/pages/Oauth1.vue')
  // },
  // '/oauth2': {
  //   name: 'oauth2',
  //   component: require('./components/pages/Oauth2.vue')
  // },
  // '/account': {
  //   auth: true,
  //   name: 'account',
  //   component: require('./components/pages/Account.vue')
  // },
  // '/admin': {
  //   auth: 'admin',
  //   name: 'admin',
  //   component: require('./components/pages/Admin.vue')
  // },
  // '/users': {
  //   auth: ['admin'],
  //   name: 'users',
  //   component: require('./components/pages/Users.vue')
  // },
  // '/404': {
  //   name: 'error-404',
  //   component: require('./components/pages/404.vue')
  // },
  // '/403': {
  //   name: 'error-403',
  //   component: require('./components/pages/403.vue')
  // },
});
router.start(App, 'body');
// Vue.use(require('@websanova/vue-auth'), {
//   solvesVar: 'type',
// });

