# Minimal photography portfolio website

This code is meant for the [Groeten uit Oss website](https://bososs.nl/groetenuitoss/) but you can use it for your own portfolio if you like this software project.

## Getting Started

- `npm install` - Installs the required packages.
- Add images to `/assets/photos/hires`.
- `npm run prebuild` - This will convert hires photos to web optimised images and generates a data json with photo names and descriptions. It will only create web optimised images for the ones that haven't been processed yet. Use `npm run rebuild` to recreate all image files again if needed.
- Optionally add description to your photo. Save a text file with the same name as the photo in `/public/photos`.
- `npm run start` - Run dev server and open  http://localhost:3000/groetenuitoss.
- `npm run build` - Generate website files to the `dist` folder. Upload the files to a web server in the subfolder `/groetenuitoss/`.