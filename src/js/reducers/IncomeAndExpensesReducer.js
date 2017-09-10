import * as types from './../actions/actionTypes';

export default function incomeAndExpensesStore (state = {
  income: [],
  expenses: []
}, action = {}) {
  const {type, dataType} = action;

  switch (type) {
    case types.ADD_ITEM:
    case types.DELETE_ITEM:
    case types.EDIT_ITEM:
      return {
        ...state,
        [dataType]: data(state[dataType], action)
      };
    default:
      return state;
  }
}

function data (state = [], action = {}) {
  const {type, payload} = action;

  switch (type) {
    case types.ADD_ITEM:
      return state.concat(payload);
    case types.DELETE_ITEM:
      return state.filter(item => item.id !== payload.id);
    case types.EDIT_ITEM:
      return state.map(item => item.id === payload.id ? payload : item);
    default:
      return state;
  }
}