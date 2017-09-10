import { v4 } from 'node-uuid';

export default class CategoryModel {
  constructor (name = '', id = v4()) {
    this.id = id;
    this.name = name;
  }
}