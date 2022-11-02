export interface IStackRepository<T> {
  push: (element: T) => void;
  pop: () => undefined | T;
  peek: () => undefined | T;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
  toString: () => string;
}

export interface IItems<T> {
  [key: number]: T;
}
