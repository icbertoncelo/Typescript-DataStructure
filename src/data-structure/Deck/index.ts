import { IDeckRepository, IItems } from "./IDeckRepository";

export class Deck<T> implements IDeckRepository<T> {
  private items: IItems<T>;
  private count: number;
  private lowestCount: number;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addFront(element: T) {
    switch (true) {
      case this.isEmpty():
        this.addBack(element);
        break;
      case this.lowestCount > 0:
        this.lowestCount--;
        this.items[this.lowestCount] = element;
        break;
      default:
        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1];
        }
        this.count++;
        this.lowestCount = 0;
        this.items[this.lowestCount] = element;
        break;
    }
  }

  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;

    const removedItem = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return removedItem;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const removedItem = this.items[this.count];
    delete this.items[this.count];

    return removedItem;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
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

    let deckString = this.items[this.lowestCount].toString();
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      deckString = `${deckString},${this.items[i]}`;
    }

    return deckString;
  }
}
