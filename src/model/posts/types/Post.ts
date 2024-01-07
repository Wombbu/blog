import { PostMetadata } from "@/model/posts/types/PostMetadata";

export type Post = {
  slug: string;
  content: string;
  isDraft: boolean;
} & PostMetadata;
