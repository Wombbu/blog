import { Author } from "./Author";

export type PostMetadata = {
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  readingTime: string;
  audio?: string;
  tags: string;
  coverImage: {
    url: string;
    desc?: string;
    credit?: string;
    license?: string;
    licenseLink?: string;
    blurDataURL?: string;
  };
  ogImageType?: "ONLY_NAME";
  tweet?: string;
};
