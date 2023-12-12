import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "@/model/posts/types/Post";
import { getPlaiceholder } from "plaiceholder";

let imagePlaceholders: Record<
  /*Slug*/ string,
  /*base64 placeholder image*/ string
> = {};

const postsDirectory = join(process.cwd(), "_posts");
const publicDir = join(process.cwd(), "public");

type PostExtended = Post & {
  slug: string;
  content: string;
  coverImage: { blurDataURL: string };
  isDraft?: boolean;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<PostExtended> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let base64 = "";
  // If the placeholder is already stored, use it.
  if (imagePlaceholders[realSlug]) {
    base64 = imagePlaceholders[realSlug];
  } else {
    // Otherwise, generate it and save it.
    const file = fs.readFileSync(`${publicDir}${data.coverImage.url}`);
    const placeholder = await getPlaiceholder(file);
    base64 = placeholder.base64;
    imagePlaceholders[realSlug] = placeholder.base64;
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
