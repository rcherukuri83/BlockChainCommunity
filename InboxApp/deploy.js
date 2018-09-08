const HDWalletProvider = require('truffle-hdwallet-provider');


const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
//TODO If you would like to use Ganache use below lines
const ganache = require('ganache-cli');
//const ganache_builtin_provider = ganache.provider();
const ganache_localhost_provider = new HDWalletProvider(
    'ask harvest wave cotton panda enemy gas tiger detect excess bar monitor'
    ,'HTTP://127.0.0.1:8545'
    );

const ganache_mac_provider = new HDWalletProvider(
    'movie concert bridge foot hollow useless slide inform margin general put happy'
    ,'HTTP://127.0.0.1:8545'
    );

//TODO for using Infura Test Account, use below
// use your mnemonic & infura address
const RinkebyProvider = new HDWalletProvider(
    'mnemonic'
    ,'https://rinkeby.infura.io/youraddress'
    );

const web3 = new Web3(ganache_localhost_provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from Account',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).
        deploy({data: bytecode, arguments: ['Hello BlockChainClub']})
        .send({gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to',result.options.address);
    console.log(interface);
};

deploy();

/* Rinkeby Deploy July 14,2018
RC-MAC:InboxApp mac$ node deploy.js
Attempting to deploy from Account 0x34DD313cEE7E9A2D63B3e60Ca63c69c2383FDB92
Contract deployed to 0x51958e20FF5A35c0cDe496E241628af1E4a1C898
*/
