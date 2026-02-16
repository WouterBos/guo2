const FtpDeploy = require("ftp-deploy");
const credentials = require("./deploy-credentials");
const ftp = new FtpDeploy();

ftp.on("uploading", function (data) {
  console.log(`📦 ${data.filename}`);
});

const currentYear = new Date().getFullYear();

const config = {
  ...credentials,
  deleteRemote: false,
  include: [`${currentYear}*`],
  localRoot: __dirname + "/dist/photos",
  remoteRoot: "/groetenuitoss/photos",
};

ftp
  .deploy(config)
  .then((res) => console.log("✅"))
  .catch((err) => console.log(err));
