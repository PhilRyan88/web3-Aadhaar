const Aadhar = artifacts.require("Aadhar");

module.exports = function (deployer) {
  deployer.deploy(Aadhar);
};
