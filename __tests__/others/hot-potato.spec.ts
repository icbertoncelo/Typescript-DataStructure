import { hotPotato } from "../../src/others";

describe("Hot Potato", () => {
  it("Should return the correct winner", () => {
    const players = ["Fulano", "John", "Doe", "Chris", "Silva"];

    const { winner } = hotPotato(players, 3);
    expect(winner).toBe("Fulano");
  });
});
