const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "assets/photos/hires";
const outputDir = "public/photos/";
const maxDimension = 2000;
const maxDimensionThumbnail = 300;
const rxBaseOutputFile = /\d+_[^.]+.avif/;
const isRebuild = process.argv.includes("rebuild");

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
    .map((file) => path.parse(file).name);

  const unconvertedFiles = isRebuild
    ? inputFiles
    : inputFiles.filter((file) => !outputFiles.includes(path.parse(file).name));

  for (const file of unconvertedFiles) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, path.parse(file).name);

    createAvif(
      maxDimension,
      false,
      inputFilePath,
      `${outputFilePath}.avif`,
      45,
      file
    );
    createAvif(
      maxDimensionThumbnail,
      true,
      inputFilePath,
      `${outputFilePath}-thumbnail.avif`,
      40,
      file
    );
  }
};

const createAvif = async (
  maxDimension,
  square,
  inputFilePath,
  outputFilePath,
  quality,
  file
) => {
  try {
    await sharp(inputFilePath)
      .resize(maxDimension, maxDimension, {
        fit: square ? sharp.fit.cover : sharp.fit.inside,
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
