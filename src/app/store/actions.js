import * as types from '../constants/ActionTypes';
import contactsAPI from '../api/contacts';

export const loadContacts = ({commit}) => {
  contactsAPI.getAll(contacts => {
    commit(types.LOAD_CONTACTS, {contacts});
  });
};

export const deleteContact = ({commit}, contactId) => {
  contactsAPI.remove(contactId, id => {
    if (id === contactId) {
      commit(types.DELETE_CONTACT, id);
    }
  });
};
