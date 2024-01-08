import sharp from "sharp";
import fs from "fs";
import { join } from "path";

sharp.cache(false);

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

const formatsToConvert = [".HEIC", ".png", ".webp"];
const formatsToConvertRegexp = /\.HEIC|\.png|\.webp/;
const formatsToNotConvert = [".jpeg", ".jpg", ".JPG"];
const allFormats = [...formatsToConvert, ...formatsToNotConvert];

async function resizeImages() {
  const imgPaths = getFiles(assetDirectory).filter((path) =>
    allFormats.some((format) => path.includes(format))
  );
  console.log(`🌇 Resizing images: 
  
  ${imgPaths.join("\n")}`);
  try {
    await Promise.all(
      imgPaths.map(async (path) => {
        const img = sharp(path);
        const metadata = await img.metadata();
        const isCoverImg = path.includes("cover");
        if (
          (!isCoverImg && (metadata?.height || 1001) > 1000) ||
          (isCoverImg && (metadata?.width || 1601) > 1600)
        ) {
          const resizedImageBuffer = await img
            .resize(
              isCoverImg
                ? // Cover images are restricted by width, so we want to resize them by width
                  {
                    width: 1600,
                  }
                : // Other images are restricted by height, so we resize them by height
                  {
                    height: 1000,
                  }
            )
            .toFormat("jpeg", { mozjpeg: true, quality: 90 })
            .toBuffer();

          await sharp(resizedImageBuffer).toFile(
            path.replace(formatsToConvertRegexp, ".jpg")
          );

          // Delete the original image if it's in a format that have been converted to .jpg
          if (formatsToConvertRegexp.test(path)) {
            await fs.promises.unlink(path);
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}

resizeImages();
