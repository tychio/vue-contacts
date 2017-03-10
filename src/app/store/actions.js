import * as types from '../constants/ActionTypes';
import contactsAPI from '../api/contacts';

export const loadContacts = ({commit}) => {
  contactsAPI.getAll(contacts => {
    commit(types.LOAD_CONTACTS, {contacts});
  }, message => {
    commit(types.MESSAGE_ERROR, message);
  });
};

export const addContact = ({commit}, contact) => {
  contactsAPI.save(contact, id => {
    contact.id = id;
    commit(types.ADD_CONTACT, contact);
  }, message => {
    commit(types.MESSAGE_ERROR, message);
  });
};

export const editContact = ({commit}, contact) => {
  contactsAPI.edit(contact, () => {
    commit(types.EDIT_CONTACT, contact);
  }, message => {
    commit(types.MESSAGE_ERROR, message);
  });
};

export const deleteContact = ({commit}, contactId) => {
  contactsAPI.remove(contactId, id => {
    if (id === contactId) {
      commit(types.DELETE_CONTACT, id);
    }
  }, message => {
    commit(types.MESSAGE_ERROR, message);
  });
};
