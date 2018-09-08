const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();

const {interface,bytecode} = require('../compile');
const INITIAL_STRING = 'Hi there!';

const HDWalletProvider = require('truffle-hdwallet-provider');
//const ganache_builtin_provider = ganache.provider();
const ganache_localhost_provider = new HDWalletProvider(
    'embrace secret floor into actress obvious good city peasant recall brush mutual'
    ,'HTTP://127.0.0.1:8545'
    );

const ganache_mac_provider = new HDWalletProvider(
    'movie concert bridge foot hollow useless slide inform margin general put happy'
    ,'HTTP://127.0.0.1:8545'
    );
//TODO for using Infura Test Account, use below
const RinkebyProvider = new HDWalletProvider(
    'slogan hammer often tunnel life report unhappy neither glow critic beauty hundred'
    ,'https://rinkeby.infura.io/ekW7yVzOq3264EJTbZ1p'
    );

const web3 = new Web3(ganache_localhost_provider);

let accounts;
let inbox;
beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();        

    //Use one of those accounts to deploy
    
    //the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_STRING]})
        .send({from: accounts[0], gas:'1000000' });
    
        inbox.setProvider(ganache_mac_provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
        console.log(inbox.options.address);
        console.log(inbox);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,INITIAL_STRING);
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('Hey BlockChain Club').send({from: accounts[0], gas:'10000000'});
        const message = await inbox.methods.message().call();
        assert.equal(message,'Hey BlockChain Club');
    });

});