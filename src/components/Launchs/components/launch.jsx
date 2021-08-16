import {Container ,Row, Col } from 'react-bootstrap';
import Date from './date';
import { ProgressBar } from 'react-bootstrap';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Launch(params) {

  return(
    <div className="launch">
        <Container>
        <Row>
          <Col sm={12}>
            <Row>
            <h4 > <img style={{width:40, marginRight:5}} src={"../images/" + params.data.tokenName + '.png'} alt="DD" />{params.data.tokenName}</h4>
            
            <Date/>
            </Row>
          </Col>
          <Col style={{marginBottom:10}} sm={6}>
          <Row>
          <p className="infoText"><LocalOfferIcon style={{width:15}}/> Token Price: 5 BUSD</p>
          <p className="infoText"><TrendingUpIcon style={{width:15}}/> To raise: 50000 BUSD</p>
          </Row>
          
          </Col>
          <Col lg={6} md={6} sm={12}>
          <ProgressBar label="40% Complete"  variant="info" animated  striped style={{backgroundColor: '#1c1f2b', width: '100%', height: 25, maxWidth:250}} now={40} />
          
          </Col>
          
          
          
        
        

         
        </Row>
        </Container>

        
        
        
        </div>
  )
  
}

export default Launch;
