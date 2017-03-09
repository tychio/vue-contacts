import avoriaz, {mount} from 'avoriaz';
import Vuex from 'vuex';
avoriaz.use(Vuex);

import Contacts from './Contacts.vue';

describe('Contacts', () => {
  it('should be a Contacts', () => {
    expect(Contacts.name).toEqual('Contacts');
  });

  it('should get contacts when was created', () => {
    const dispatch = jasmine.createSpy('dispatch');
    mount(Contacts, {
      store: {
        dispatch,
        getters: {contacts: [{}]}
      }
    });
    expect(dispatch).toHaveBeenCalled();
  });
});
