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
