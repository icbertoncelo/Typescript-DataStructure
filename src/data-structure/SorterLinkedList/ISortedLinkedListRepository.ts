import { ILinkedListRepository } from "../LinkedList/ILinkedListRepository";

export interface ISortedLinkedListRepository<T>
  extends ILinkedListRepository<T> {
  insert: (element: T) => void;
  getIndexNextSortedElement: (element: T) => number;
}
