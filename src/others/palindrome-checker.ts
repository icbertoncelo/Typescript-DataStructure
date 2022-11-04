import { Deck } from "../../src/data-structure";

export function palindromeChecker(wordString: string) {
  if (
    wordString === null ||
    wordString === undefined ||
    (wordString !== undefined && wordString.length === 0)
  )
    return false;

  const deck = new Deck<string>();
  const lowercaseString = wordString.toLowerCase().replace(/\s/g, "");
  let isEqual = true;
  let firstChar: string, lastChar: string;

  for (let i = 0; i < lowercaseString.length; i++) {
    deck.addBack(lowercaseString.charAt(i));
  }

  while (deck.size() > 1 && isEqual) {
    firstChar = deck.removeFront();
    lastChar = deck.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
