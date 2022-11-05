import { ILinkedListRepository } from "./ILinkedListRepository";
import { defaultEquals } from "../..//utils";
import { Node } from "../models";

export class LinkedList<T> implements ILinkedListRepository<T> {
  private count: number;
  private head: Node<T> | undefined;
  private equalsFn: (a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T) {
    const node = new Node<T>(element);
    let current: Node<T>;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  insert(element: T, index: number) {
    if (index < 0 && index >= this.count) {
      return;
    }

    const node = new Node<T>(element);

    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }

    this.count++;
  }

  getElementAt(index: number) {
    if (index < 0 && index >= this.count) {
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i < index && current != null; i++) {
      current = current.next;
    }

    return current;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element: T) {
    let current = this.head;

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  removeAt(index: number) {
    if (index < 0 && index >= this.count) {
      return undefined;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;

    return current.element;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) return "";

    let listString = this.head.element.toString();
    let current = this.head.next;

    for (let i = 0; i < this.count && current != null; i++) {
      listString = `${listString},${current.element}`;
      current = current.next;
    }

    return listString;
  }
}
