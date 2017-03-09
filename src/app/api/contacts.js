import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import {url} from '../../../conf/env.conf';

const contactsResource = Vue.resource(url.api + 'contacts{/id}');

export default {
  getAll(callback) {
    contactsResource.query().then(respond => {
      callback(respond.body);
    });
  }
};
