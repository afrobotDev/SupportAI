export class Customer {
  firstName: string;
  lastName: string;
  #balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  purchase(cost: number) {
    if (cost > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= cost;
    return this.#balance;
  }
}
