import { Stack } from "../../src/data-structure";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should starts empty", () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should be able to push a new element", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it("should be able to pop an element", () => {
    expect(stack.pop()).toBe(undefined);

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("should peek the top of stack", () => {
    expect(stack.peek()).toBe(undefined);

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  it("should show if the stack is empty", () => {
    stack.push(1);
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should be able to clear the stack", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);

    stack.clear();
    expect(stack.size()).toBe(0);
  });

  it("should convert the stack to string", () => {
    expect(stack.toString()).toBe("");

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe("1,2");
  });
});
