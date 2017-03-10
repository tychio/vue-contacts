import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import {url} from '../../../conf/env.conf';

const contactsResource = Vue.resource(url.api + 'contacts{/id}');

export default {
  getAll(success, error) {
    contactsResource.query().then(respond => {
      success(respond.body);
    }, respond => {
      error(respond.body.message);
    });
  },
  save(contact, success, error) {
    contactsResource.save(contact).then(respond => {
      success(respond.body.id);
    }, respond => {
      error(respond.body.message);
    });
  },
  edit(contact, success, error) {
    contactsResource.update({id: contact.id}, contact).then(() => {
      success();
    }, respond => {
      error(respond.body.message);
    });
  },
  remove(id, success, error) {
    contactsResource.delete({id}).then(() => {
      success(id);
    }, respond => {
      error(respond.body.message);
    });
  }
};
