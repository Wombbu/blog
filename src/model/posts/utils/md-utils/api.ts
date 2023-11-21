import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "@/model/posts/types/Post";
import { getPlaiceholder } from "plaiceholder";
import { jsonDb } from "@/essentials/db/db";

const postsDirectory = join(process.cwd(), "_posts");
const publicDir = join(process.cwd(), "public");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let base64 = "";
  // If the placeholder is already in the db, use it.
  if (jsonDb?.data.mainImagePlaceholders[realSlug]) {
    base64 = jsonDb.data.mainImagePlaceholders[realSlug];
  } else {
    // Otherwise, generate it and save it to the json db.
    const file = fs.readFileSync(`${publicDir}${data.coverImage.url}`);
    const placeholder = await getPlaiceholder(file);
    base64 = placeholder.base64;

    if (jsonDb) {
      jsonDb.data.mainImagePlaceholders[realSlug] = placeholder.base64;
      jsonDb.write();
    }
  }

  return {
    ...data,
    coverImage: {
      ...data.coverImage,
      blurDataURL: base64,
    },
    slug: realSlug,
    content: content,
  } as Post & {
    slug: string;
    content: string;
    coverImage: { blurDataURL: string };
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const promises = slugs.map(async (slug) => getPostBySlug(slug));
  const posts = await Promise.all(promises);

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
