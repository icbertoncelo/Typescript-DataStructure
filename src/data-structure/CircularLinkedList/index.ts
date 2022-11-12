import { LinkedList } from "../LinkedList";
import { Node } from "../models";
import { ICircularLinkedListRepository } from "./ICircularLinkedListRepository";
import { defaultEquals, IEqualsFunction } from "../../utils";

export class CircularLinkedList<T>
  extends LinkedList<T>
  implements ICircularLinkedListRepository<T>
{
  protected head: undefined | Node<T>;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    super(equalsFn);
  }

  push(element: T): void {
    const node = new Node<T>(element);
    let current: Node<T>;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }

    node.next = this.head;
    this.count++;
  }

  insert(element: T, index: number): void {
    if (index < 0 && index > this.count) {
      return;
    }

    const node = new Node<T>(element);
    let current = this.head;

    if (index === 0) {
      if (this.head == null) {
        this.head = node;
        node.next = this.head;
      } else {
        this.head = node;
        node.next = this.head;

        current = this.getElementAt(this.size() - 1);
        current.next = this.head;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = node;
      node.next = current;
    }

    this.count++;
  }

  removeAt(index: number): T {
    if (index < 0 && index >= this.count) {
      return undefined;
    }

    let current = this.head;

    if (index === 0) {
      if (this.size() === 1) {
        this.head = undefined;
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size() - 1);
        this.head = this.head.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count--;

    return current.element;
  }
}
