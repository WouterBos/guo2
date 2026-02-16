const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, '../public/photos/');
const outputFile = path.join(__dirname, '../src/images.json');
const inputDir = "hires-photos";

fs.readdir(photosDir, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const imageFiles = files.filter(file => /\d\.avif$/i.test(file)).sort().reverse();
  const result = {};

  imageFiles.forEach(file => {
    const fileNameWithoutExt = path.parse(file).name;
    const textFilePath = path.join(inputDir, `${fileNameWithoutExt}.txt`);

    if (fs.existsSync(textFilePath)) {
      let fileContent = fs.readFileSync(textFilePath, 'utf8');
      
      result[fileNameWithoutExt] = fileContent.replace(/\n+$/, '');
    } else {
      result[fileNameWithoutExt] = 'No description available';
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(result, null, 1), 'utf8');
  console.log('JSON file has been created');
});