const FtpDeploy = require("ftp-deploy");
const credentials = require("./deploy-credentials");
const ftp = new FtpDeploy();

const daysArg = process.argv.find(arg => arg.startsWith("--days="));
const days = daysArg ? parseInt(daysArg.split("=")[1], 10) : 30;

console.log(`🚀 Uploading photos of the last ${days} days...`);

ftp.on("uploading", function (data) {
  console.log(`📦 ${data.filename}`);
});

const include = [];
for (let i = 0; i <= days; i++) {
  const date = new Date();
  date.setDate(date.getDate() - i);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  include.push(`${year}${month}${day}*`);
}

const config = {
  ...credentials,
  deleteRemote: false,
  include,
  localRoot: __dirname + "/dist/photos",
  remoteRoot: "/groetenuitoss/photos",
};

ftp
  .deploy(config)
  .then((res) => console.log("✅"))
  .catch((err) => console.log(err));
