/**
 * Represents an user
 */
export default class {
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.photo = '';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
