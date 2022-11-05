import { IItems, IStackRepository } from "./IStackRepository";

export class Stack<T> implements IStackRepository<T> {
  private count: number;
  private items: IItems<T>;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const removedItem = this.items[this.count];
    delete this.items[this.count];

    return removedItem;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let stackString = this.items[0].toString();
    for (let i = 1; i < this.count; i++) {
      stackString = `${stackString},${this.items[i]}`;
    }

    return stackString;
  }
}
