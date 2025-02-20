const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../assets/photos/web');
const outputFilePath = path.join(__dirname, '../src/images.json');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter image files and sort them in descending alphabetical order
    const imageFiles = files.filter(file => /\.avif$/i.test(file)).sort().reverse();

    const result = {};

    imageFiles.forEach(file => {
        const fileNameWithoutExt = path.parse(file).name;
        const textFilePath = path.join(directoryPath, `${fileNameWithoutExt}.txt`);

        if (fs.existsSync(textFilePath)) {
            const fileContent = fs.readFileSync(textFilePath, 'utf8');
            result[fileNameWithoutExt] = fileContent;
        } else {
            result[fileNameWithoutExt] = '';
        }
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 1).replaceAll('\\n', ''), 'utf8');
    console.log('JSON file has been created');
});