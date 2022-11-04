import { Queue, Stack } from "../../src/data-structure";

export function hotPotato(elementList: string[], interactions: number) {
  const queue = new Queue<string>();
  const eliminatedList = new Stack<string>();

  elementList.forEach((element) => queue.enqueue(element));

  while (queue.size() > 1) {
    for (let i = 0; i < interactions; i++) {
      const firstQueueElement = queue.dequeue();
      queue.enqueue(firstQueueElement);
    }

    const eliminated = queue.dequeue();
    eliminatedList.push(eliminated);
  }

  return {
    eliminatedList,
    winner: queue.dequeue(),
  };
}
