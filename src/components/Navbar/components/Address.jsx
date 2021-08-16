import {Nav} from "react-bootstrap";
import Jazzicon, {jsNumberForAddress} from 'react-jazzicon'


import {Fragment} from 'react';
function Address(props) {
  return(
    <Fragment>
      <Nav.Link  style={{alignItems: 'center',color: 'rgb(252, 245, 223)', fontSize: 22, backgroundColor: '#0f1118', borderRadius: 8, padding: 7}}>
           <Jazzicon diameter={19} seed={jsNumberForAddress(props.account)} /> {(props.account).slice(0, 9)+ '...'}</Nav.Link>
    </Fragment>
  )
}
export default Address;