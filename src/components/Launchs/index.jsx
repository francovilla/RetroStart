import launchsFile from '../../launchs.json'
import { Container, Row, Col } from 'react-bootstrap';
import Launch from './components/launch';

function Launchs(params) {
  return(
  <Container style={{paddingTop: '1.1%'}}>
    <Row>
    {launchsFile.map((data) => (
      <Col lg={6} sm={12}>
         
        <Launch data={data}/>
        
      </Col>
      
    ))}

      
    </Row>
    
  </Container>)
}

export default Launchs;