import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Web3ReactProvider } from '@web3-react/core'
import App from './App';
import { ethers } from "ethers";





const getLibrary = (provider:any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider)
  console.log('New Provider set...')
  return library
}


ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
    <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

