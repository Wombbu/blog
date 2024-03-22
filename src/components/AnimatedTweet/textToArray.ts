/**

test("textToArray", () => {
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
  ]);
});

 */
export const textToArray = (text: string) => {
  // The test is above
  const result = text
    .split("|")
    .reduce(
      (acc, curr) => [...acc, (acc.at(-2) ?? "") + curr, 500],
      [] as (string | number)[]
    );

  return result;
};
