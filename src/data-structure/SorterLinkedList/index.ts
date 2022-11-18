import { LinkedList } from "../LinkedList";
import { ISortedLinkedListRepository } from "./ISortedLinkedListRepository";
import {
  defaultCompare,
  defaultEquals,
  ICompareFunction,
  IEqualsFunction,
  Compare,
} from "../../utils";

export class SortedLinkedList<T>
  extends LinkedList<T>
  implements ISortedLinkedListRepository<T>
{
  constructor(
    protected equalsFn: IEqualsFunction<T> = defaultEquals,
    protected compareFn: ICompareFunction<T> = defaultCompare
  ) {
    super(equalsFn);
  }

  push(element: T): void {
    if (this.isEmpty()) {
      return super.push(element);
    }

    const posElementIndex = this.getIndexNextSortedElement(element);
    super.insert(element, posElementIndex);
  }

  insert(element: T): void {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }

    const posElementIndex = this.getIndexNextSortedElement(element);
    return super.insert(element, posElementIndex);
  }

  getIndexNextSortedElement(element: T) {
    let current = this.head;
    let i = 0;

    for (i = 0; i < this.size() && current; i++) {
      const posElementIndex = this.compareFn(element, current.element);
      if (posElementIndex === Compare.LESS_THAN) {
        return i;
      }

      current = current.next;
    }

    return i;
  }
}
