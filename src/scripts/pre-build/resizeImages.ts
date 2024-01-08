import sharp from "sharp";

import fs from "fs";
import { join } from "path";

// Recursive function to get files
const getFiles = (dir: string, files: string[] = []) => {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files);
    } else {
      // If it is a file, push the full path to the files array
      files.push(name);
    }
  }
  return files;
};

const assetDirectory = join(process.cwd(), "public/assets/blog");

export default async function resizeImages() {
  const imgPaths = getFiles(assetDirectory).filter(
    (path) =>
      path.includes(".HEIC") ||
      path.includes(".jpeg") ||
      path.includes(".png") ||
      path.includes(".webp")
  );
  console.log(imgPaths);
  try {
    await Promise.all(
      imgPaths.map(async (path) => {
        const img = sharp(path);
        const metadata = await img.metadata();
        if (metadata.width && metadata.width > 816) {
          await img
            .resize({
              height: 816,
            })
            .toFormat("jpeg", { mozjpeg: true, quality: 80 })
            .toFile(path.replace(/\.HEIC|\.jpeg|\.png|\.webp/, ".jpeg"));
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}
