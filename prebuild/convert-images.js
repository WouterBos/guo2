const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "assets/photos/hires";
const outputDir = "assets/photos/web";
const maxDimension = 2000;
const maxDimensionThumbnail = 400;
const rxBaseOutputFile = /\d+_\d+.avif/;

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const convertImages = () => {
  const inputFiles = fs.readdirSync(inputDir);
  const outputFiles = fs
    .readdirSync(outputDir)
    .filter((file) => {
      const inOutput = rxBaseOutputFile.test(file);
      return inOutput;
    })
    .map((file) => path.parse(file).name)

  // Remove all already converted files from the file list.
  const filesToConvert = inputFiles.filter(
    (file) => !outputFiles.includes(path.parse(file).name)
  );

  for (const file of filesToConvert) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, path.parse(file).name);

    createAvif(maxDimension, inputFilePath, `${outputFilePath}.avif`, 45, file);
    createAvif(
      maxDimensionThumbnail,
      inputFilePath,
      `${outputFilePath}-thumbnail.avif`,
      40,
      file
    );
  }
};

const createAvif = async (
  maxDimension,
  inputFilePath,
  outputFilePath,
  quality,
  file
) => {
  try {
    await sharp(inputFilePath)
      .resize(maxDimension, maxDimension, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFormat("avif")
      .avif({ quality: quality })
      .toFile(outputFilePath);

    console.log(`Converted ${file} to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error converting ${file}:`, error);
  }
};

convertImages();
