import Vue from 'vue';
import App from './app/containers/App.vue';
import store from './app/store/index';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import './index.scss';
import 'normalize.css';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import createLogger from 'vuex/dist/logger';

const debug = process.env.NODE_ENV !== 'production';

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
  store,
  render: h => h('router-view'),
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
