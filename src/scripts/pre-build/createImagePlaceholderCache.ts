// Node file for creating image placeholder cache
import { imgPlaceholderCache } from "@/model/posts/utils/imgPlaceholderCache";
import { getBase64Img } from "../../model/posts/utils/getBase64Img";
import { getPostSlugs } from "../../model/posts/utils/getPostSlugs";
import { readSlugGrayMatter } from "../../model/posts/utils/readSlugGrayMatter";

export default async function createImagePlaceholderCache() {
  const slugs = getPostSlugs();

  const pers = slugs
    .map((slug) => slug.replace(/\.md$/, ""))
    .map(readSlugGrayMatter);

  await Promise.all(
    pers.map(async (post) => {
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
