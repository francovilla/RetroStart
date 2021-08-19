import React, { useEffect } from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import { useWeb3React } from '@web3-react/core'
import Address  from './components/Address';
import UnlockButton from './components/UnlockButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import LayersIcon from '@material-ui/icons/Layers';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import Logo from '../../assets/logo.png'
import { useState } from 'react';

function Navd() {
  const {library, account} = useWeb3React()
  const [open, setNav] = useState(false)
  
  useEffect(()=>{
    console.log('Web3 changed... ')
  }, [library])

  const openNav =()=> {
    document.getElementById("mySidenav").style.width = "100%";
    setNav(true)
  }

  const closeNav =()=>{
      document.getElementById("mySidenav").style.width = "0";
      setNav(false)
     
    }
  


  

  return (
    <div className="App">
      <Navbar style={{paddingTop: 20,backgroundColor : '#1c1f2b'}} variant="dark" expand="sm" fixed="top">
      
      <Navbar.Brand href="#home"><img alt="RetroLogo" style={{width: 200}} src={Logo}></img></Navbar.Brand>
      <Button className="d-lg-none d-md-none menu-button" onClick={open? closeNav: openNav} >{open? <MenuOpenIcon/>: <MenuIcon/>} </Button>


      <Navbar.Collapse id="sdsds">
         <Nav className="ml-auto" style={{alignItems: 'center'}}>
           <Nav.Link style={{color: 'rgb(252, 245, 223)', margin: 4, fontSize: 20}}>App <OpenInNewIcon/></Nav.Link>
           <Nav.Link style={{color: 'rgb(252, 245, 223)', margin: 4, fontSize: 20}}><LayersIcon/>Farms</Nav.Link>
           <Nav.Link style={{color: 'rgb(252, 245, 223)', margin: 4, fontSize: 20}}><TelegramIcon/>Telegram</Nav.Link>
           {account? <Address account={account}/>: <UnlockButton/>}
           
         </Nav>

      </Navbar.Collapse>
      </Navbar>
      <div style={{paddingTop: '95px'}} id="mySidenav" class="sidenav text-center">
        <a href="/xd">App <OpenInNewIcon/></a>
        <a href="/xd">Farms <LayersIcon/></a>
        <a href="/xd">Telegram <TelegramIcon/></a>
        {account? <Address account={account}/>: <UnlockButton/>}
      </div>
    </div>
    
  );
}

export default Navd;