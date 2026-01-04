const FtpDeploy = require("ftp-deploy");
const credentials = require("./deploy-credentials");
const ftp = new FtpDeploy();

ftp.on("uploading", function (data) {
  console.log(`📦 ${data.filename}`);
});

const config = {
  ...credentials,
  deleteRemote: true,
  include: ["*"],
  localRoot: __dirname + "/dist/assets",
  remoteRoot: "/groetenuitoss/assets/",
};

ftp
  .deploy(config)
  .then((res) => console.log("✅"))
  .catch((err) => console.log(err));