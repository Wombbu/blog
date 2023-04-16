type Response = {};

const urlBuilder = (slug: string, count: number) =>
  `http://localhost:3000/api/update-claps?slug=${slug}&count=${count}`;

export const postClaps = async (
  slug: string,
  count: number
): Promise<Response> => {
  const response = await fetch(urlBuilder(slug, count));
  const json = await response.json();
  return json;
};
