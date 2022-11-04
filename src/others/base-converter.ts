import { Stack } from "../../src/data-structure";

export function decimalToBinary(decimalNumber: number) {
  const remStack = new Stack<number>();
  let rem: number;
  let binaryString = "";

  while (decimalNumber > 0) {
    rem = Math.floor(decimalNumber % 2);
    remStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

export function baseConverter(decimalNumber: number, base: number) {
  const remStack = new Stack<number>();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rem: number;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) return "";

  while (decimalNumber > 0) {
    rem = Math.floor(decimalNumber % base);
    remStack.push(rem);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
