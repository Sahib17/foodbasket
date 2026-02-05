const createUser = require("./createUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");

console.log("Exporting:", { createUser, loginUser, logoutUser });

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
