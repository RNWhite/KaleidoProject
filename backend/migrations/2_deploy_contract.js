var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage,['Dr. Carlo Mertz302', 'Dr. Ava Hand954', 'Dr. Jimmy Dach745', 'Dr. Jay Dickins196'], {gas: 6700000});
};