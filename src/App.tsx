import React,{useEffect} from 'react';
import Navbar from "./components/Navbar/index";
import Launchs from "./components/Launchs/index";
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import {Fragment} from 'react';

function handleError(error:Error) {
  console.log(error)
}

function setInject(activate: any) {
     const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })
     activate(injected, handleError, false)
}


function App() {
  const { activate} = useWeb3React()

  useEffect(()=>{
    setInject(activate)
   }, [activate])
 
  return (
    <Fragment>
      <Navbar/>
      <Launchs/>
    </Fragment>
      
  );
}

export default App;
