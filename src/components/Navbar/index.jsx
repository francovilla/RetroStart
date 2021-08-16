import React, { useEffect } from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { useWeb3React } from '@web3-react/core'
import Address  from './components/Address';
import UnlockButton from './components/UnlockButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import LayersIcon from '@material-ui/icons/Layers';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Logo from '../../assets/logo.png'

function Navd() {
  const {library, account} = useWeb3React()
  useEffect(()=>{
    console.log('Web3 changed... ')
  }, [library])


  

  return (
    <div className="App">
      <Navbar style={{marginTop: 5, position: "sticky"}} variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="#home"><img alt="RetroLogo" style={{width: 200}} src={Logo}></img></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>

      <Navbar.Collapse id="navbarScroll">
         <Nav className="ml-auto" style={{alignItems: 'center'}}>
           <Nav.Link style={{color: 'rgb(252, 245, 223)', margin: 4, fontSize: 20}}>App <OpenInNewIcon/></Nav.Link>
           <Nav.Link style={{color: 'rgb(252, 245, 223)', margin: 4, fontSize: 20}}><LayersIcon/>Farms</Nav.Link>
           <Nav.Link style={{color: 'rgb(252, 245, 223)', margin: 4, fontSize: 20}}><TelegramIcon/>Telegram</Nav.Link>
           {account? <Address account={account}/>: <UnlockButton/>}
           
         </Nav>
         
      </Navbar.Collapse>

      

      </Navbar>
    </div>
    
  );
}

export default Navd;