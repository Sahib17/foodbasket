const imagekit = require("../utils/imagekit");

const imageKitAuth = (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

module.exports = imageKitAuth;
