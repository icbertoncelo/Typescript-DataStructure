import { Queue } from "../../src/data-structure";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should starts empty", () => {
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should be able to enqueue a new element", () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  it("should be able to dequeue an element", () => {
    expect(queue.dequeue()).toBe(undefined);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it("should peek the top of queue", () => {
    expect(queue.peek()).toBe(undefined);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
  });

  it("should show if the queue is empty", () => {
    queue.enqueue(1);
    queue.dequeue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should be able to clear the queue", () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);

    queue.clear();
    expect(queue.size()).toBe(0);
  });

  it("should convert the queue to string", () => {
    expect(queue.toString()).toBe("");

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe("1,2");
  });
});
