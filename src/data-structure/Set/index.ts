import { GenericSetType, IItems, ISetRepository } from "./ISetRepository";

export class Set implements ISetRepository {
  private items: IItems;

  constructor() {
    this.items = {};
  }

  add(element: GenericSetType) {
    if (this.has(element)) {
      return false;
    }

    this.items[element] = element;
    return true;
  }

  delete(element: GenericSetType) {
    if (!this.has(element)) {
      return false;
    }

    delete this.items[element];
    return true;
  }

  has(element: GenericSetType) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet: Set) {
    const unionSet = new Set();

    otherSet.values().forEach((value) => {
      unionSet.add(value);
    });
    this.values().forEach((value) => {
      unionSet.add(value);
    });

    return unionSet;
  }

  intersection(otherSet: Set) {
    const intersectionSet = new Set();
    let biggestSet = this.values();
    let smallestSet = otherSet.values();

    if (smallestSet.length - biggestSet.length > 0) {
      biggestSet = otherSet.values();
      smallestSet = this.values();
    }

    smallestSet.forEach((value) => {
      if (biggestSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet: Set) {
    const differenceSet = new Set();

    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  isSubsetOf(otherSet: Set) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    const isSubset = this.values().every((value) => {
      return otherSet.has(value);
    });

    return isSubset;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  toString: () => string;
}
