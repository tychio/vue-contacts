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
  },
  save(contact, callback) {
    contactsResource.save(contact).then(respond => {
      callback(respond.body.id);
    });
  },
  edit(contact, callback) {
    contactsResource.update({id: contact.id}, contact).then(() => {
      callback();
    });
  },
  remove(id, callback) {
    contactsResource.delete({id}).then(() => {
      callback(id);
    });
  }
};
