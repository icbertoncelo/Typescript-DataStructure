import { LinkedList } from "../../src/data-structure";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should starts empty", () => {
    expect(linkedList.size()).toBe(0);
    expect(linkedList.isEmpty()).toBeTruthy();
  });

  it("should push a new element", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.size()).toBe(3);
  });

  it("should remove an element at specific position", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.removeAt(1)).toBe(2);
  });

  it("should add an element at specific position", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    linkedList.insert(0, 0);
    linkedList.insert(4, 3);

    expect(linkedList.size()).toBe(5);
  });

  it("should return an element index or -1 if does not exists", () => {
    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(5)).toBe(-1);
  });

  it("should remove an element", () => {
    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.remove(2)).toBe(2);
  });

  it("should return a list header", () => {
    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.getHead()).toEqual(
      expect.objectContaining({
        element: 1,
      })
    );
  });

  it("should return a list string", () => {
    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.toString()).toBe("1,2");
  });
});
