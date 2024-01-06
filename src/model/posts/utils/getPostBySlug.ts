import { Post } from "@/model/posts/types/Post";
import { getBase64Img } from "@/model/posts/utils/getBase64Img";
import { imgPlaceholderCache } from "@/model/posts/utils/imgPlaceholderCache";
import { readSlugGrayMatter } from "@/model/posts/utils/readSlugGrayMatter";

export type PostExtended = Post & {
  slug: string;
  content: string;
  coverImage: { blurDataURL: string };
  isDraft?: boolean;
};

export async function getPostBySlug(slug: string): Promise<PostExtended> {
  const realSlug = slug.replace(/\.md$/, "");

  const { data, content } = readSlugGrayMatter(realSlug);

  const base64 = imgPlaceholderCache.getSync(data.coverImage.url);
  // If the placeholder is already stored, use it.
  if (!base64) {
    throw new Error(
      "Image placeholder not found in cache. This should be done in prebuild step"
    );
  }

  return {
    ...data,
    coverImage: {
      ...data.coverImage,
      blurDataURL: base64,
    },
    slug: realSlug,
    content: content,
    isDraft: realSlug.includes("draft"),
  } as Post & {
    slug: string;
    content: string;
    coverImage: { blurDataURL: string };
    isDraft?: boolean;
  };
}
