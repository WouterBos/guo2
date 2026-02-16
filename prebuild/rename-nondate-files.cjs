// rename-nondate-files.cjs
// NodeJS script to prefix files in hires-photos that do not start with a number, using the date the picture was taken.
// Usage: node prebuild/rename-nondate-files.cjs

const fs = require('fs');
const path = require('path');
const exif = require('exif-parser');

const hiresDir = path.join(__dirname, '../hires-photos');

function startsWithNumber(filename) {
  return /^\d/.test(filename);
}

function getDateFromExif(filepath) {
  try {
    const buffer = fs.readFileSync(filepath);
    const parser = exif.create(buffer);
    const result = parser.parse();
    if (result.tags && result.tags.DateTimeOriginal) {
      const date = new Date(result.tags.DateTimeOriginal * 1000);
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}${mm}${dd}`;
    }
  } catch (e) {
    // ignore
  }
  return null;
}

function getDateFromStat(filepath) {
  const stats = fs.statSync(filepath);
  const date = stats.birthtime || stats.ctime;
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}`;
}

fs.readdirSync(hiresDir).forEach(file => {
  if (!startsWithNumber(file) && file.match(/\.(jpg|jpeg|png|avif)$/i)) {
    const filepath = path.join(hiresDir, file);
    let date = getDateFromExif(filepath);
    if (!date) {
      date = getDateFromStat(filepath);
    }
    if (date) {
      const newName = `${date}_${file}`;
      const newPath = path.join(hiresDir, newName);
      if (!fs.existsSync(newPath)) {
        fs.renameSync(filepath, newPath);
        console.log(`Renamed: ${file} -> ${newName}`);
      } else {
        console.log(`Skipped (target exists): ${newName}`);
      }
    } else {
      console.log(`Skipped (no date): ${file}`);
    }
  }
});
