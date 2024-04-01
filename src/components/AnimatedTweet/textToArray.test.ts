import { textToArray } from "@/components/AnimatedTweet/textToArray";
import { expect, test, describe } from "vitest";

const DELAY_MS = 500;

describe("textToArray", () => {
  test("works with multiple breaks", () => {
    const text = "Hello| world.| There should be a 500 ms break here:| <--";
    const result = textToArray(text);
    expect(result).toEqual([
      "Hello",
      DELAY_MS,
      "Hello world.",
      DELAY_MS,
      "Hello world. There should be a 500 ms break here:",
      DELAY_MS,
      "Hello world. There should be a 500 ms break here: <--",
      DELAY_MS,
    ]);
  });

  test("works with no breaks", () => {
    const text = "Hello world.";
    const result = textToArray(text);
    expect(result).toEqual(["Hello world.", DELAY_MS]);
  });

  test("works with one break", () => {
    const text = "Hello| world.";
    const result = textToArray(text);
    expect(result).toEqual(["Hello", DELAY_MS, "Hello world.", DELAY_MS]);
  });
});
