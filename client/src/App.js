import React from "react";
import ethers from "ethers";
import "./App.css";
import { useEffect, useState } from "react";
//import abi from "./Aadhar.json";
import Web3 from "web3";
//import {useNavigate} from 'react-router-dom';
const App = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false); //for checking if metamask installed or not
  const [account, setAccount] = useState(null); // for checking connection status

  const ethereum = window.ethereum;

  const MyContractJSON = require("./Aadhar.json");

  const contractAddress = MyContractJSON.networks["5777"].address;
  const contractAbi = MyContractJSON.abi;

  const web3 = new Web3(ethereum);

  const myContract = new web3.eth.Contract(contractAbi, contractAddress);

  async function Get(e) {
    e.preventDefault();

    const client = await myContract.methods.enter().call();

    console.log(client);
  }

  useEffect(() => {
    if (window.ethereum) {
      //checks if metamask extension is there
      setIsWalletInstalled(true); // if it's there then changes the initial value of false to true
    }
  }, []);

  async function connect() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  if (account === null) {
    return (
      <div>
        {isWalletInstalled ? (
          <center>
            <h1>Login </h1> <button onClick={connect}>Connect</button>
          </center>
        ) : (
          <p>Install metamask</p>
        )}
      </div>
    );
  }
  return (
    <div>
      <center>
        <h1>Web3 Aadhaar Minter</h1>
      </center>
      <br />
      <br />

      <h3>Enter your details</h3>

      <br />
      <br />
      <span>Name </span>
      <input type="text" placeholder="Enter Your Name" />
      <br />
      <br />
      <span>Age </span>
      <input type="text" placeholder="Enter Your Age" />
      <br />
      <br />
      <span>Gender </span>
      <input type="text" placeholder="Male or Female only" />
      <br />
      <br />
      <span>State </span>
      <input type="text" />
      <br />
      <br />
      <span>District </span>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};

export default App;
