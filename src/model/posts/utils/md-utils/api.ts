import { Post } from "@/model/posts/types/Post";
import { getBase64Img } from "@/model/posts/utils/getBase64Img";
import { getPostSlugs } from "@/model/posts/utils/getPostSlugs";
import { readSlug } from "@/model/posts/utils/readSlug";

let imagePlaceholders: Record<
  /*Slug*/ string,
  /*base64 placeholder image*/ string
> = {};

type PostExtended = Post & {
  slug: string;
  content: string;
  coverImage: { blurDataURL: string };
  isDraft?: boolean;
};

export async function getPostBySlug(slug: string): Promise<PostExtended> {
  const realSlug = slug.replace(/\.md$/, "");

  const { data, content } = readSlug(realSlug);

  let base64 = "";
  // If the placeholder is already stored, use it.
  if (imagePlaceholders[realSlug]) {
    base64 = imagePlaceholders[realSlug];
  } else {
    // Otherwise, generate it and save it.
    imagePlaceholders[realSlug] = await getBase64Img({
      coverImageUrl: data.coverImage.url,
    });
    base64 = imagePlaceholders[realSlug];
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
