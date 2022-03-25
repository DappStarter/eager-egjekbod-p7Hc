require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stone recipe praise pulp give kite army gauge'; 
let testAccounts = [
"0x2251c5f2346f929cd27434416abf6a85689e35cd9f07835ac1f7953aab4d21d2",
"0x8c3bce16a51b0b5d5639ae48cadc996fe2722f9e45522928e8288cb804deaad0",
"0xf3a7e17040b5e926d8d18f39fee8ebc726e998e79441cc37254620ab4d878ac5",
"0xce9f7652d58372ee2f1b6b6b3957dcb4dcb7086b40c89db2892d111ecb0016d1",
"0x09030d517c34c4841f0467215eedb12568ed6635acf3f42afc1b35379cc0f509",
"0xa8fb6102e12f9ab0706a8c1dc4acf9412a533a3def61733095f026179846e0a1",
"0x339547eb5bdc429f103bed88add30f18d6a1daa714a89e4c799fcbfca493a6ef",
"0x7512fc9073fa5f172bb9860596f7bc02383175491eec26731c4df861bd40a873",
"0x0bd57dc18ecbe31dd78c843777b804c215933bb30a24bdc70702cfb0844e990c",
"0x184bf738e590f2653ca6b676a35ec9c8fe300ad93c19b4c2d652c7d8fa444b20"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

