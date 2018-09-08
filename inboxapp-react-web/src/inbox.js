import web3 from './web3';

//****Rinkeby Address
const address = '0x391C846d92FBd070B1ff11936E341F7AB5d7Ec67';

//****Local Ganache Address
//const address = '0xaa9a2809B4A041f7dda56D0bBb0209264e0f9Bd9';

const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [
        
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        
      ],
      "name": "getMessage",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        
      ],
      "name": "message",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialMessage",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ];

export default new web3.eth.Contract(abi, address);
