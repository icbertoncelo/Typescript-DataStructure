export interface IDeckRepository<T> {
  addFront: (element: T) => void;
  addBack: (element: T) => void;
  removeFront: () => undefined | T;
  removeBack: () => undefined | T;
  peekFront: () => undefined | T;
  peekBack: () => undefined | T;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
  toString: () => string;
}

export interface IItems<T> {
  [key: number]: T;
}
