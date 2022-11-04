import { decimalToBinary, baseConverter } from "../../src/others";

describe("Base Converter", () => {
  it("should be able to convert a decimal number to binary", () => {
    expect(decimalToBinary(2)).toBe("10");
    expect(decimalToBinary(3)).toBe("11");
  });

  it("should be able to convert a decimal number to hexadecimal", () => {
    expect(baseConverter(164, 16)).toBe("A4");
    expect(baseConverter(1998, 16)).toBe("7CE");
  });
});
