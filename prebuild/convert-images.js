const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "assets/photos/hires";
const outputDir = "assets/photos/web";
const maxWidth = 2000;
const maxHeight = 2000;

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert images
const convertImages = async () => {
  const inputFiles = fs.readdirSync(inputDir);
  const outputFiles = fs
    .readdirSync(outputDir)
    .map((file) => path.parse(file).name);

  const filesToConvert = inputFiles.filter(
    (file) => !outputFiles.includes(path.parse(file).name)
  );

  for (const file of filesToConvert) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(
      outputDir,
      path.parse(file).name + ".avif"
    );

    try {
      await sharp(inputFilePath)
        .resize(maxWidth, maxHeight, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFormat("avif")
        .avif({ quality: 45 })
        .toFile(outputFilePath);

      console.log(`Converted ${file} to ${outputFilePath}`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
};

convertImages();
