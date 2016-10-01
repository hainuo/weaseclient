import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAuth from '@websanova/vue-auth';
import VueResource from 'vue-resource';
import Login from './components/Login.vue';
import './css/main.css';

Vue.use(VueRouter);
Vue.use(VueResource);
// 0. If using a module system, call Vue.use(VueRouter)
// 1. Define route components.
// These can be imported from other files
const Bar = { template: '<div>bar</div>' };
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/login',
    auth: false,
    component: Login,
  },
  {
    path: '/bar',
    auth: true,
    component: Bar,
  },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
Vue.router = new VueRouter({
  routes, // short for routes: routes
});

Vue.use(VueAuth, {
  http: Vue.http,
});
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router: Vue.router,
  mounted() {
    // console.log(this);
    console.log(this.$auth.ready(), this.$auth.check(), this.$http, this.$resource);
  },
}).$mount('#app');
console.log(app);
// Now the app has started!
