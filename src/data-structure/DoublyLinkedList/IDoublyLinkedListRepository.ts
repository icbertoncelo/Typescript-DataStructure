import { ILinkedListRepository } from "../LinkedList/ILinkedListRepository";
import { Node } from "../models";

export interface IDoublyLinkedListRepository<T>
  extends ILinkedListRepository<T> {
  getTail: () => undefined | Node<T>;
  inverseString: () => string;
}
