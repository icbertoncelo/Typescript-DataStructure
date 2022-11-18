import { IStackLinkedListRepository } from "./IStackLinkedListRepository";
import { DoublyLinkedList } from "../DoublyLinkedList";

export class StackLinkedList<T> implements IStackLinkedListRepository<T> {
  private items: DoublyLinkedList<T>;

  constructor() {
    this.items = new DoublyLinkedList<T>();
  }

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const removedItem = this.items.removeAt(this.size() - 1);
    return removedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastItem = this.items.getElementAt(this.size() - 1);
    return lastItem.element;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items.clear();
  }

  toString() {
    return this.items.toString();
  }
}
