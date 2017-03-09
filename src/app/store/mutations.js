import * as types from '../constants/ActionTypes';

export const initialState = {
  contacts: []
};

export default {
  [types.LOAD_CONTACTS](state, text) {
    state.contacts = text.contacts;
  },
  [types.DELETE_CONTACT](state, text) {
    state.contacts = state.contacts.filter(contact => contact.id !== text);
  }
};
