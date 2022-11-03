import { Deck } from "../../src/data-structure";

describe("Deck", () => {
  let deck: Deck<number>;

  beforeEach(() => {
    deck = new Deck();
  });

  it("should starts empty", () => {
    expect(deck.size()).toBe(0);
    expect(deck.isEmpty()).toBeTruthy();
  });

  it("should be able to add a new element by front", () => {
    deck.addFront(1);
    expect(deck.size()).toBe(1);
    expect(deck.isEmpty()).toBeFalsy();
  });

  it("should be able to add a new element by back", () => {
    deck.addBack(1);
    expect(deck.size()).toBe(1);
    expect(deck.isEmpty()).toBeFalsy();
  });

  it("should be able to peek a front element", () => {
    deck.addFront(1);
    deck.addFront(2);

    expect(deck.peekFront()).toBe(2);
  });

  it("should be able to peek a back element", () => {
    deck.addBack(1);
    deck.addBack(2);

    expect(deck.peekBack()).toBe(2);
  });

  it("should show if the deck is empty", () => {
    deck.addFront(1);
    deck.removeFront();

    expect(deck.isEmpty()).toBeTruthy();
  });

  it("should be able to clear the deck", () => {
    deck.addFront(1);
    expect(deck.size()).toBe(1);

    deck.clear();
    expect(deck.size()).toBe(0);
  });

  it("should convert the deck to string", () => {
    expect(deck.toString()).toBe("");

    deck.addFront(1);
    deck.addFront(2);

    expect(deck.toString()).toBe("2,1");

    deck.addBack(2);
    expect(deck.toString()).toBe("2,1,2");
  });
});
