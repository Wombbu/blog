import { postsDirectory } from "@/model/posts/constants/postsDirectory";
import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import { Post } from "@/model/posts/types/Post";

export const readSlugGrayMatter = (
  slug: string
): {
  data: Post;
  content: string;
} => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // @ts-ignore
  return matter(fileContents);
};
