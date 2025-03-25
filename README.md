# Simple photography portfolio website

This code is used for the [Groeten uit Oss website](https://bososs.nl/groetenuitoss/) but can be adjusted and published to your own needs for an online portfolio.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

- `npm install` Installs the required packages.
- `npm run prebuild` This will convert hires photos to web optimised images and generates a data json with photo names and descriptions. It will only create web optimised images for the ones that haven't been processed yet. Use `npm run rebuild` to recreate all image files again if needed.
- `npm run dev` Run dev server and open  http://localhost:3000/groetenuitoss.
- `npm run build` Generate website files to the `out` folder. Upload the files to a web server in the subfolder `/groetenuitoss/`.