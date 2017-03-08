import Vue from 'vue';
import App from './app/containers/App.vue';

import './index.scss';
import 'normalize.css';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: App
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
