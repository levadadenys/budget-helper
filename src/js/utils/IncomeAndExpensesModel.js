import { v4 } from 'node-uuid';
import moment from 'moment';

export default class IncomeAndExpensesModel {
  constructor (
    sum = 0, date = moment(), description = '', category = '', id = v4()) {
    this.id = id;
    this.sum = sum;
    this.date = moment(date);
    this.description = description;
    this.category = category;
  }
}