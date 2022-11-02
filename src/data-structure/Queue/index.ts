import { IItems, IQueueRepository } from "./IQueueRepository";

export class Queue<T> implements IQueueRepository<T> {
  private count: number;
  private items: IItems<T>;
  private firstElementKey: number;

  constructor() {
    this.count = 0;
    this.items = {};
    this.firstElementKey = 0;
  }

  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const removedItem = this.items[this.firstElementKey];
    delete this.items[this.firstElementKey];
    this.firstElementKey++;
    this.count--;

    return removedItem;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.firstElementKey];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.firstElementKey = 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let stackString = `${this.items[this.firstElementKey]}`;
    for (let i = this.firstElementKey + 1; i < this.count; i++) {
      stackString = `${stackString},${this.items[1]}`;
    }

    return stackString;
  }
}
