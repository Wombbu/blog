import { Author } from "./Author";

export type PostMetadata = {
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageDesc?: string;
  coverImageCredit?: string;
  coverImageLicense?: string;
  coverImageLicenseLink?: string;
  date: string;
  author: Author;
  ogImage: {
    url: string;
  };
  readingTime: string;
  audio?: string;
  tags: string;
};
