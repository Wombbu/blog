import { imgPlaceholderCache } from "@/model/posts/utils/imgPlaceholderCache";
import { getBase64Img } from "@/model/posts/utils/getBase64Img";
import { getPostSlugs } from "@/model/posts/utils/getPostSlugs";
import { readSlugGrayMatter } from "@/model/posts/utils/readSlugGrayMatter";

/**
 * This function is used to generate image placeholders for all posts.
 *
 * It is called in the pre-build step (via runner.ts) because it is a relatively expensive operation.
 * Without caching placeholders would be created O(n) times, where n is the number of posts.
 *
 * This function maps through each post and generates a base64 blur placeholder for each post's cover image.
 * It then stores the placeholder in a file system cache. This cache may be committed to the repo.
 */
export default async function createImagePlaceholderCache() {
  const slugs = getPostSlugs();

  await Promise.all(
    slugs.map(readSlugGrayMatter).map(async (post) => {
      const cacheHit = imgPlaceholderCache.getSync(post.data.coverImage.url);
      // If the placeholder is already stored, use it.
      if (cacheHit) {
        return Promise.resolve();
      } else {
        // Otherwise, generate it and save it.
        const base64 = await getBase64Img({
          coverImageUrl: post.data.coverImage.url,
        });
        imgPlaceholderCache.setSync(post.data.coverImage.url, base64);
      }
    })
  );
}
