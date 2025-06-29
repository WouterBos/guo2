const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../hires-photos');

// Remove the "Full_SX_" prefix from all files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        const newFileName = file.replace(/Full_S\d_/, '');

        if (newFileName !== file) {
            const oldFilePath = path.join(directoryPath, file);
            const newFilePath = path.join(directoryPath, newFileName);

            fs.rename(oldFilePath, newFilePath, (err) => {
                if (err) {
                    console.error('Error renaming file:', err);
                } else {
                    console.log(`Renamed: ${file} -> ${newFileName}`);
                }
            });
        }
    });
});