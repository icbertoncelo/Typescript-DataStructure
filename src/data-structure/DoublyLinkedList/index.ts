import { LinkedList } from "../LinkedList";
import { DoublyNode } from "../models";
import { IDoublyLinkedListRepository } from "./IDoublyLinkedListRepository";
import { defaultEquals, IEqualsFunction } from "../../utils";

export class DoublyLinkedList<T>
  extends LinkedList<T>
  implements IDoublyLinkedListRepository<T>
{
  protected tail: undefined | DoublyNode<T>;
  protected head: undefined | DoublyNode<T>;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element: T): void {
    const node = new DoublyNode<T>(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.count++;
  }

  insert(element: T, index: number): void {
    if (index < 0 && index > this.count) {
      return;
    }

    const node = new DoublyNode<T>(element);
    let current = this.head;

    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = current;
      current.prev = node;
      node.prev = previous;
    }

    this.count++;
  }

  removeAt(index: number): T {
    if (index < 0 && index >= this.count) {
      return;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;

      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;
    }

    this.count--;
    return current.element;
  }

  getTail() {
    return this.tail;
  }

  clear(): void {
    super.clear();
    this.tail = undefined;
  }

  inverseString() {
    if (this.tail == null) return "";

    let listString = this.tail.element.toString();
    let previous = this.tail.prev;

    while (previous != null) {
      listString = `${listString},${previous.element}`;
      previous = previous.prev;
    }

    return listString;
  }
}
