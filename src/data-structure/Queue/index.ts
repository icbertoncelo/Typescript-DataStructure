import { IItems, IQueueRepository } from "./IQueueRepository";

export class Queue<T> implements IQueueRepository<T> {
  private count: number;
  private items: IItems<T>;
  private lowestCount: number;

  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const removedItem = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return removedItem;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let stackString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      stackString = `${stackString},${this.items[i]}`;
    }

    return stackString;
  }
}
