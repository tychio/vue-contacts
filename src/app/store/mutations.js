import * as types from '../constants/ActionTypes';

export const initialState = {
  contacts: [],
  message: {
    type: 'success',
    text: ''
  }
};

export default {
  [types.LOAD_CONTACTS](state, data) {
    state.contacts = data.contacts;
  },
  [types.ADD_CONTACT](state, data) {
    state.contacts.push(data);
  },
  [types.EDIT_CONTACT](state, data) {
    state.contacts = state.contacts.map(contact =>
      contact.id === data.id ?
        Object.assign({}, contact, data) :
        contact
    );
  },
  [types.DELETE_CONTACT](state, data) {
    state.contacts = state.contacts.filter(contact => contact.id !== data);
  },

  [types.MESSAGE_ERROR](state, text) {
    state.message = {
      text,
      type: 'danger'
    };
  }
};
