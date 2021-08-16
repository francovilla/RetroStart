import {Button} from "react-bootstrap";

import {Fragment} from 'react';

function UnlockButton(props) {
  return(
    <Fragment>
      <Button style={{padding: 5, margin: 4}} variant="primary">Connect Wallet</Button>
    </Fragment>
  )
}
export default UnlockButton;