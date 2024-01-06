import { getPostBySlug, PostExtended } from "@/model/posts/utils/getPostBySlug";
import { getPostSlugs } from "@/model/posts/utils/getPostSlugs";

export async function getAllPosts(): Promise<PostExtended[]> {
  const slugs = getPostSlugs();
  const isDevEnv = process.env.NODE_ENV !== "production";

  const promises = slugs
    // If the post file name contains 'draft', only show it in dev mode.
    .filter((slug) => isDevEnv || !slug.includes("draft"))
    .map(async (slug) => getPostBySlug(slug));
  const posts = await Promise.all(promises);

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
