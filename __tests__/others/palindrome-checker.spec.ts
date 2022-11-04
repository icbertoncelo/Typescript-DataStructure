import { palindromeChecker } from "../../src/others";

describe("Palindrome Checker", () => {
  it("Should return false if the an empty string", () => {
    expect(palindromeChecker("")).toBe(false);
  });

  it("Should return true if the string has upper and lower characters", () => {
    expect(palindromeChecker("aBA")).toBe(true);
    expect(palindromeChecker("Was it a CAR or a CAT I saw")).toBe(true);
  });

  it("Should return false if the string is not a palindrome", () => {
    expect(palindromeChecker("levels")).toBe(false);
    expect(palindromeChecker("Potato")).toBe(false);
  });
});
