# GUOS photo gallery website generator

With GUOS, you can generate a minimal photo gallery website. It is a personal project but can easily be adjusted to your own needs **if** you have some web development knowledge.

The purpose of the website:

- Show visitors a quick overview of your (recent) creative work.
- The website has a specific workflow that will not only produce a website but also a very basic documentation of you portfolio: hires images are stored together with a description file. It's very basic but because of that very future proof documentation.

Features:
- Works on both mobile and desktop.
- Find an image by code by using the browser's page search.
- Accessible for all users (WCAG 2.2).
- Light and fast.

Limits:
- This website is meant to showcase your best images, not your complete collection of 10.000+ images. Both the tech and the user won't handle such a large number of images.

For demo, check out [Groeten uit Oss website](https://bososs.nl/groetenuitoss/).

⚠️ **Expect some bugs.** For now, this generator is only used by me. You're free to use GUOS to create your own website but expect issues that I haven't encounter myself.

## Getting Started

- `npm install` - Installs the required packages.
- Add images to `/hires-photos`.
- `npm run prebuild` - This will convert the hires photos to web optimised images in `/public/photos`. It also generate additional text files for optional photo description. After that, it generates a data json with photo names and descriptions. It will only create web optimised images for the ones that haven't been processed yet. Use `npm run rebuild` to recreate all image files again if needed.
- `npm run start` - Run dev server and open  http://localhost:3000/groetenuitoss.
- `npm run build` - Generate website files to the `dist` folder. Upload the files to a web server in the subfolder `/groetenuitoss/`.

## Auto publish

Run `npm run build` to build the website files. These files will be saved in the `dist` folder. Then run `npm run deploy` to deploy the website files to the webserver.

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

The script can't detect if images are already uploaded so it will ONLY upload recent photos to save bandwidth. You can configure the maximum age of the images in `package.json`. If you only changed website code and not the images, you can run `npm run deploy-site` to only upload the website code.

## ⚠️ This project makes a few assumptions

- **The website is hosted in a subfolder**. The name of that subfolder is "groetenuitoss". If you need a different name, search and replace that string in code. If your website should not be running in a subfolder, replace any instance of `/groetenuitoss/` with `/`.
- **Image source files prefixed with YYYYMMDD date format** (eg. 20251231). This will ensure, for example, that new images appear at the top of the page.
