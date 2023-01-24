import { PostMetadata } from "@/features/posts/types/PostMetadata";

export type Post = {
  slug: string;
  content: string;
} & PostMetadata;
