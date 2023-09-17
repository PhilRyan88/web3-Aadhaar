import React from "react";
import { useEffect, useState } from "react";
//import {useNavigate} from 'react-router-dom';
const App = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false); //for checking if metamask installed or not
  const [account, setAccount] = useState(null); // for checking connection status

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
      <input type="text" placeholder="name" />
      <br />
      <br />
      <span>Age </span>
      <input type="date" />
      <br />
      <br />
      <span>Gender </span>
      <input type="text" />
      <br />
      <br />
      <span>State </span>
      <input type="text" />
      <br />
      <br />
      <span>District </span>
      <input type="text" />
    </div>
  );
};

export default App;
