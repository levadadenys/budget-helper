import * as types from './../actions/actionTypes';

export default function categoriesStore (store = [], action = {}) {
  const {type, payload} = action;

  switch (type) {
    case types.ADD_CATEGORY:
      return store.concat(payload);
    case types.EDIT_CATEGORY:
      return store.map(item => item.id === payload.id ? payload : item);
    case types.DELETE_CATEGORY:
      return store.filter(item => item.id !== payload.id);
    default:
      return store;
  }
}