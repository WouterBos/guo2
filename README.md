# GUOS photo gallery website generator

With GUOS, you can generate a minimal photo gallery website.

The purpose of the website:

- Show visitors a quick overview of your (recent) creative work.
- Store hires images in a separate folder with image descriptions in a seperate folder. This way, the photos are stored in a future proof format.

Features:
- Works on both mobile and desktop.
- Find an image by code by using the browser's page search.
- Fast.

For demo, check out [Groeten uit Oss website](https://bososs.nl/groetenuitoss/).

⚠️ **Expect some bugs.** For now, this generator is only used by me. You're free to use GUOS to create your own website but expect issues that I haven't encounter myself.

## Getting Started

- `npm install` - Installs the required packages.
- Add images to `/hires-photos`.
- `npm run prebuild` - This will convert the hires photos to web optimised images in `/public/photos`. It also generate additional text files for optional photo description. After that, it generates a data json with photo names and descriptions. It will only create web optimised images for the ones that haven't been processed yet. Use `npm run rebuild` to recreate all image files again if needed.
- `npm run start` - Run dev server and open  http://localhost:3000/groetenuitoss.
- `npm run build` - Generate website files to the `dist` folder. Upload the files to a web server in the subfolder `/groetenuitoss/`.

## Auto publish

Running `npm run deploy` will deploy the built files in the `dist` folder to the webserver.

### Configuration

First, you need to create a file called `deploy-credentials.json` in the root of this project, next to the other "deploy-*" files. The file should look like the code. Edit the values where required.

```
{
  "forcePasv": true,
  "host": "HOST",
  "password": "PASSWORD",
  "port": 22,
  "sftp": true,
  "user": "USERNAME"
}
```

The deploy wil ONLY upload this year's photo's. This is because it uses `ftp-deploy` which cannot ignore existing files. To curtail bandwidth waste only this year's photos are automatically uploaded. Alternatively you can run `npm run deploy-site` to ignore the photos folder during the deploy process.

## ⚠️ This project makes a few assumptions

- **The website is hosted in a subfolder**. The name of that subfolder is "groetenuitoss". If you need a different name, search and replace that string in code. If your website should not be running in a subfolder, replace any instance of `/groetenuitoss/` with `/`.
- **Image source files prefixed with YYYYMMDD date format** (eg. 20251231). This will ensure, for example, that new images appear at the top of the page.
