export interface IQueueRepository<T> {
  enqueue: (element: T) => void;
  dequeue: () => undefined | T;
  peek: () => undefined | T;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
  toString: () => string;
}

export interface IItems<T> {
  [key: number]: T;
}
