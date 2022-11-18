import { Set } from ".";

export type GenericSetType = number | string;

export interface ISetRepository {
  add: (element: GenericSetType) => boolean;
  delete: (element: GenericSetType) => boolean;
  has: (element: GenericSetType) => boolean;
  values: () => GenericSetType[];
  union: (otherSet: Set) => Set;
  intersection: (otherSet: Set) => Set;
  difference: (otherSet: Set) => Set;
  isSubsetOf: (otherSet: Set) => boolean;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
  toString: () => string;
}

export interface IItems {
  [key: GenericSetType]: GenericSetType;
}
