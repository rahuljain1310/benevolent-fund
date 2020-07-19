import React from 'react';
import {
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import './Beneficiaries.css';

function Beneficiaries () {

  const beneficiary = [
    ["Mukesh","Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om","Shivalik gardner"],
    ["Vinay","Himadri shop"],
    ["Vasant","Kailash juice shop"]
  ]

  return (
    <section className="beneficiary">
      <Container>
        <Row>
          <Col>
            <h3>Beneficiaries </h3>
            <hr/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
            Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
            Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
            Aenean nec enim id orci porta dictum et pretium mi. 
            <br/>
            <br/>
            <Button>Load more</Button>
            </p>
          </Col>
          <Col>
            <ul> 
                {beneficiary.map((person, idx) => (
                  <li> {person[0]} : {person[1]} <hr style={{color:"black"}} /> </li>
                  ))}
            </ul>
          </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Beneficiaries;
