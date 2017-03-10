import avoriaz, {mount} from 'avoriaz';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
avoriaz.use(Vuex);
avoriaz.use(BootstrapVue);

import Contacts from './Contacts.vue';

describe('Contacts', () => {
  let componentBuilder;
  let dispatch;
  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    componentBuilder = propsData => mount(Contacts, {
      propsData,
      store: {
        dispatch,
        getters: {contacts: [{id: 123}]}
      }
    });
  });

  it('should be a Contacts', () => {
    expect(Contacts.name).toEqual('Contacts');
  });

  it('should get contacts when was created', () => {
    componentBuilder();
    expect(dispatch).toHaveBeenCalledWith('loadContacts');
  });
});
