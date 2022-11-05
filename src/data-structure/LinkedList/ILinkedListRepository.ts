import { Node } from "../models";

export interface ILinkedListRepository<T> {
  push: (element: T) => void;
  insert: (element: T, index: number) => void;
  getElementAt: (index: number) => undefined | Node<T>;
  remove: (element: T) => undefined | T;
  indexOf: (element: T) => number;
  removeAt: (index: number) => undefined | T;
  isEmpty: () => boolean;
  size: () => number;
  getHead: () => undefined | Node<T>;
  toString: () => string;
}
