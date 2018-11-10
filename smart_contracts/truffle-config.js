var HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "stuff menu best sound erupt liberty color slide session comfort kiss spy";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/46a8f1b45bdb43718a05497adbb108c3') 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};
