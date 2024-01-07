import { postsDirectory } from "@/model/posts/constants/postsDirectory";
import fs from "fs";

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
}
