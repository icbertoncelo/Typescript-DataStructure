import { DoublyLinkedList } from "../../src/data-structure";

describe("LinkedList", () => {
  let doublyLinkedList: DoublyLinkedList<number>;

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  it("should starts empty", () => {
    expect(doublyLinkedList.size()).toBe(0);
    expect(doublyLinkedList.isEmpty()).toBeTruthy();
  });

  it("should push a new element", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    expect(doublyLinkedList.size()).toBe(3);
  });

  it("should remove an element at specific position", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    expect(doublyLinkedList.removeAt(1)).toBe(2);
  });

  it("should add an element at specific position", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);

    doublyLinkedList.insert(0, 0);
    doublyLinkedList.insert(4, 3);

    expect(doublyLinkedList.size()).toBe(5);
  });

  it("should return an element index or -1 if does not exists", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);

    expect(doublyLinkedList.indexOf(2)).toBe(1);
    expect(doublyLinkedList.indexOf(5)).toBe(-1);
  });

  it("should remove an element", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);

    expect(doublyLinkedList.remove(2)).toBe(2);
  });

  it("should return a list header", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);

    expect(doublyLinkedList.getHead()).toEqual(
      expect.objectContaining({
        element: 1,
      })
    );
  });

  it("should return a list string", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);

    expect(doublyLinkedList.toString()).toBe("1,2");
  });

  it("should return an inverted list string", () => {
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);

    expect(doublyLinkedList.inverseString()).toBe("2,1");
  });
});
