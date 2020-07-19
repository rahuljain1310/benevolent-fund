import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import './Beneficiaries.css';

function Beneficiaries () {

  const beneficiary = [
    ["Mukesh","Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om","Shivalik gardner"],
    ["Vinay","Himadri shop"],
    ["Vasant","Kailash juice shop"],
    ["Mukesh","Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om","Shivalik gardner"],
    ["Vinay","Himadri shop"],
    ["Vasant","Kailash juice shop"],
    ["Mukesh","Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om","Shivalik gardner"],
    ["Vinay","Himadri shop"],
    ["Vasant","Kailash juice shop"]
  ] 
  const listOfBeneficiaries = beneficiary.map((person, idx) => 
                  <ListGroup horizontal key={idx} style={{height:'4rem'}}>
                  <ListGroup.Item style={{width: '400px'}}>
                  {person[0]} 
                  <br/> 
                  <p style={{color:"rgb(49, 6, 6)", fontSize:"12px"}}>{person[1]}</p>
                  </ListGroup.Item>
                  </ListGroup>)

  return (
    <section className="beneficiary" style={{maxContentLength:'500px'}}  >
      <Container style={{backgroundColor:'whitesmoke'}}>
        <Row>
          <Col style={{backgroundColor:'whitesmoke',paddingTop:'20px'}} md={8}>
            <Card style={{width:'100%'}}>
            <Card.Header as="h5">Beneficiaries</Card.Header>
            <Card.Body>
              <Card.Title>Who they are?</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
                Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
                Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
                Aenean nec enim id orci porta dictum et pretium mi. 
              </Card.Text>
              <Card.Title>Who they are?</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
                Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
                Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
                Aenean nec enim id orci porta dictum et pretium mi. 
              </Card.Text>
              <Card.Title>Who they are?</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
                Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
                Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
                Aenean nec enim id orci porta dictum et pretium mi. 
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4} style={{overflowY:'scroll', height:'575px', alignItems:'centre', margin:'auto', paddingTop:'30px'}}>
            
            <ListGroup style={{height:'2rem'}}>
              <ListGroupItem as="h5" style={{width: '325px', backgroundColor:'whitesmoke'}}>List of beneficiaries</ListGroupItem>
              {listOfBeneficiaries}
            </ListGroup>
          </Col> 
        </Row>
    </Container>
    </section>
  )
}

export default Beneficiaries;
