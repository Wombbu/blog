import { textToArray } from "@/components/AnimatedTweet/textToArray";
import { expect, test, describe } from "vitest";
describe("textToArray", () => {
  test("works with multiple breaks", () => {
    const text = "Hello| world.| There should be a 500 ms break here:| <--";
    const result = textToArray(text);
    expect(result).toEqual([
      "Hello",
      500,
      "Hello world.",
      500,
      "Hello world. There should be a 500 ms break here:",
      500,
      "Hello world. There should be a 500 ms break here: <--",
      500,
    ]);
  });

  test("works with no breaks", () => {
    const text = "Hello world.";
    const result = textToArray(text);
    expect(result).toEqual(["Hello world.", 500]);
  });

  test("works with one break", () => {
    const text = "Hello| world.";
    const result = textToArray(text);
    expect(result).toEqual(["Hello", 500, "Hello world.", 500]);
  });
});
