export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export type IEqualsFunction<T> = (a: T, b: T) => boolean;
export type ICompareFunction<T> = (a: T, b: T) => number;

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

// a - b
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) return Compare.EQUALS;

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
