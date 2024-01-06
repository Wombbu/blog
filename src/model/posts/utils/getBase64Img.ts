import fs from "fs";
import { getPlaiceholder } from "plaiceholder";
import { publicDirectory } from "@/model/posts/constants/publicDirectory";

export async function getBase64Img({
  coverImageUrl,
}: {
  /** Cover image from md post options*/
  coverImageUrl: string;
}): Promise<string> {
  const file = fs.readFileSync(`${publicDirectory}${coverImageUrl}`);
  const placeholder = await getPlaiceholder(file);
  return placeholder.base64;
}
