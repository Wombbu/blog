const DELAY_MS = 500;

export const textToArray = (text: string) => {
  // The test is above
  const result = text
    .split("|")
    .reduce(
      (acc, curr) => [...acc, (acc.at(-2) ?? "") + curr, DELAY_MS],
      [] as (string | number)[]
    );

  return result;
};
