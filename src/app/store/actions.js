import * as types from '../constants/ActionTypes';
import contactsAPI from '../api/contacts';

export const loadContacts = ({commit}) => {
  contactsAPI.getAll(contacts => {
    commit(types.LOAD_CONTACTS, {contacts});
  });
};
