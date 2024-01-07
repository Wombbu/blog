import { Post } from "@/model/posts/types/Post";
import { imgPlaceholderCache } from "@/model/posts/utils/imgPlaceholderCache";
import { readSlugGrayMatter } from "@/model/posts/utils/readSlugGrayMatter";

export const getPostBySlug = (slug: string): Post => {
  const { data, content } = readSlugGrayMatter(slug);

  const blurDataURL = imgPlaceholderCache.getSync(data.coverImage.url);

  if (!blurDataURL) {
    throw new Error(
      "Image placeholder not found in cache. This should be done in prebuild step"
    );
  }

  return {
    ...data,
    coverImage: {
      ...data.coverImage,
      blurDataURL,
    },
    slug,
    content: content,
    isDraft: slug.includes("draft"),
  };
};
