/* eslint-disable class-methods-use-this */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'name');
    this._validateNumber(length, 'length');
    this._validateArrayOfStrings(students, 'students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    this._validateString(newName, 'name');
    this._name = newName;
  }

  set length(newLength) {
    this._validateNumber(newLength, 'length');
    this._length = newLength;
  }

  set students(newStudents) {
    this._validateArrayOfStrings(newStudents, 'students');
    this._students = newStudents;
  }

  _validateString(value, paramName) {
    if (typeof value !== 'string') throw TypeError(`${paramName} must be a string`);
  }

  _validateNumber(value, paramName) {
    if (typeof value !== 'number') throw TypeError(`${paramName} must be a number`);
  }

  _validateArrayOfStrings(value, paramName) {
    if (!Array.isArray(value) || !value.every((el) => typeof el === 'string')) {
      throw TypeError(`${paramName} must be an array of strings`);
    }
  }
}
