var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage,['a', 'b', 'c', 'd'], {gas: 6700000});
};