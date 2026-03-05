const FtpDeploy = require("ftp-deploy");
const credentials = require("./deploy-credentials");
const ftp = new FtpDeploy();

console.log("🚀 Uploading photos of the last two months...");

ftp.on("uploading", function (data) {
  console.log(`📦 ${data.filename}`);
});

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');

const previousDate = new Date(currentDate);
previousDate.setMonth(previousDate.getMonth() - 1);
const previousYear = previousDate.getFullYear();
const previousMonth = String(previousDate.getMonth() + 1).padStart(2, '0');

const config = {
  ...credentials,
  deleteRemote: false,
  include: [`${currentYear}${currentMonth}*`, `${previousYear}${previousMonth}*`],
  localRoot: __dirname + "/dist/photos",
  remoteRoot: "/groetenuitoss/photos",
};

ftp
  .deploy(config)
  .then((res) => console.log("✅"))
  .catch((err) => console.log(err));
