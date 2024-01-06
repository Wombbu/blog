import { postsDirectory } from "@/model/posts/constants/postsDirectory";
import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

export const readSlug = (slug: string) => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
};
