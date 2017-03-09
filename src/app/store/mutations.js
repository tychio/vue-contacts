import * as types from '../constants/ActionTypes';

export const initialState = {
  contacts: [
    {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      description: ''
    }
  ]
};

export default {
  [types.LOAD_CONTACTS](state, text) {
    state.contacts = text;
  }
};
