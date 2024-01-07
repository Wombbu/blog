import { Post } from "@/model/posts/types/Post";
import { getPostBySlug } from "@/model/posts/utils/getPostBySlug";
import { getPostSlugs } from "@/model/posts/utils/getPostSlugs";

export const getAllPosts = () =>
  getPostSlugs()
    // If the post file name contains 'draft', only show it in dev mode.
    .filter(
      (slug) => process.env.NODE_ENV !== "production" || !slug.includes("draft")
    )
    .map(getPostBySlug)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
