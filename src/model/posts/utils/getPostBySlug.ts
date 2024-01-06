import { Post } from "@/model/posts/types/Post";
import { getBase64Img } from "@/model/posts/utils/getBase64Img";
import { readSlug } from "@/model/posts/utils/readSlug";

let imagePlaceholders: Record<
  /*Slug*/ string,
  /*base64 placeholder image*/ string
> = {};

export type PostExtended = Post & {
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
