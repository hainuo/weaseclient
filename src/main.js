import Vue from 'vue';
import Login from './components/Login';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Foo = { components: '<template>f00</template>' };
const routes = [
  { path: '/', componets: Foo },
  { path: '/login', components: Login },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
// const app =
new Vue({
  router,
  components: { Login },
}).$mount('#app');

// new Vue({
//   el: 'body',
//   components: { Login },
//   ready() {
//     console.log('this is the v-dom ready', this);
//   },
// });
