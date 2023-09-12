import * as React from "react";

type Response = {
  claps: number;
};

const urlBuilder = (slug: string) => `/api/get-claps?slug=${slug}`;

export const fetchClaps = async (slug: string): Promise<Response> => {
  const response = await fetch(urlBuilder(slug));
  return response.json();
};
