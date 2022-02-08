require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note predict coach imitate prize fortune security'; 
let testAccounts = [
"0x3749da2048b7d84774d38f695f220f978f9fcd7e17c7aba83610fce1123494ad",
"0xb0bc5e2b92a75a92d48f70d98ed23f11f194281558d6afb1995e0b1eba1be0e3",
"0x1b529673b518d7ba62ea4661383f64d0debfa65b9c983474849c1087cd7b0c44",
"0x3d6db5cec3be4f04abe65a18508a1800b9f13e5c349fe24689e283ed470a08be",
"0xe7ff2f1311c965b1a47471fee262eabdbfb100413ba0a7b9428825763258a73a",
"0x6bf8171b49d71c2712fb43aa58505b9526c4fd17dac4747dd0c6a8fa4d9bb5e1",
"0xa2ad62569c0af0ebe2b42863036949c90609f519c6b740f82bb4a5427a9941eb",
"0x7561bea42beaa22fcf505bd756bc4cddf5bd28bb340e4b07d8a9b9fcb34ca2e5",
"0x4d785ad5e34ce207b68dd4264a186691c72b5b07c6e82cf6e76fdf97241c0276",
"0xca18a3a7ef20d9e4dbab9c021635156e86b779e47d6c99a82ea45fd340c71508"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


