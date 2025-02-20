const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../assets/photos/hires');

// Read the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    // Iterate over each file
    files.forEach((file) => {
        // Check if the file name matches the pattern "Full_S2_"
        const newFileName = file.replace(/Full_S\d_/, '');

        // If the file name was changed, rename the file
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