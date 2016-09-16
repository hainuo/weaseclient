import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';


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
router.start(App, 'body');
