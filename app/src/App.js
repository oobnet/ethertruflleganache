'use client'

import {useEffect,useState} from 'react'
import logo from './logo.svg';
import Web3 from 'web3'
import './App.css';

function App() {
  const baseUrl = 'http://localhost:8545'
  const address = '0x284eE8907ac553CCb1a4fF1E7E37062a0E47573f'
  const abi =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "oob",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getHello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]

  const [name,setName] = useState('odair')

  useEffect(() => {
    getLogin()
  })
  
  async function getLogin(){

    const web3 = new Web3(baseUrl);
    const contract = new web3.eth.Contract(abi, address);
    const resp = await contract.methods.getHello().call()
    setName(resp)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {name}
        </p>
        
      </header>
    </div>
  );
}

export default App;
