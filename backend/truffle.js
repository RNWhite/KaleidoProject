/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var Web3 = require('web3');

module.exports = {
  networks: {
    development:{
      host:"localhost",
      port:8545,
      network_id:'*'
    },
      Doctors_node: {
        provider: () => {
          return new Web3.providers.HttpProvider('https://u0wocf8ycj-u0wabu53sf-rpc.us-east-2.kaleido.io', 0, 'u0h16yhzw4', 'n_9tPGKmEGyeXIJsUgjVdMHVluTWKcLbaXr4I4fSghE');
        },
        network_id: "*", // Match any network id
        gasPrice: 0,
        gas: 4500000
      }
    }
};