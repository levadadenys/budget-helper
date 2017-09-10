import * as types from './actionTypes';
import IncomeAndExpensesModel from './../utils/IncomeAndExpensesModel';
import CategoryModel from './../utils/CategoryModel';

export function addIncome (payload) {
  return addItem('income', payload);
}

export function editIncome (payload) {
  return editItem('income', payload);
}

export function deleteIncome (payload) {
  return deleteItem('income', payload);

}

export function addExpense (payload) {
  return addItem('expenses', payload);
}

export function editExpense (payload) {
  return editItem('expenses', payload);
}

export function deleteExpense (payload) {
  return deleteItem('expenses', payload);

}

function addItem (dataType, payload) {
  return {
    type: types.ADD_ITEM,
    dataType,
    payload: new IncomeAndExpensesModel(payload.sum, payload.date,
      payload.description,
      payload.category.id)
  };
}

function deleteItem (dataType, payload) {
  return {
    type: types.DELETE_ITEM,
    dataType,
    payload
  };
}

function editItem (dataType, payload) {
  return {
    type: types.EDIT_ITEM,
    dataType,
    payload: new IncomeAndExpensesModel(payload.sum, payload.date,
      payload.description,
      payload.category.id, payload.id)
  };
}

export function addCategory (payload) {
  return {
    type: types.ADD_CATEGORY,
    payload: new CategoryModel(payload.name)
  };
}

export function editCategory (payload) {
  return {
    type: types.EDIT_CATEGORY,
    payload: new CategoryModel(payload.name, payload.id)
  };
}

export function deleteCategory (payload) {
  return {
    type: types.DELETE_CATEGORY,
    payload
  };
}