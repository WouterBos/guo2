const FtpDeploy = require("ftp-deploy");
const credentials = require("./deploy-credentials");
const ftp = new FtpDeploy();

ftp.on("uploading", function (data) {
  console.log(`📦 ${data.filename}`);
});

const config = {
  ...credentials,
  deleteRemote: false,
  include: ["index.html", ".htaccess"],
  localRoot: __dirname + "/dist/",
  remoteRoot: "/groetenuitoss/",
};

ftp
  .deploy(config)
  .then((res) => console.log("✅"))
  .catch((err) => console.log(err));