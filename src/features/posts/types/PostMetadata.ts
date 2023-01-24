import { Author } from "./Author";

export type PostMetadata = {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: Author;
  ogImage: {
    url: string;
  };
  readingTime: number;
};
