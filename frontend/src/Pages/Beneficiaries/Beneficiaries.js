<<<<<<< HEAD
 import React from 'react';
=======
import React from 'react';
>>>>>>> 48b6c4359c86a7fbeaa6d0af4e2c9481f3eacfa6
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
<<<<<<< HEAD
=======
            <hr/>
>>>>>>> 48b6c4359c86a7fbeaa6d0af4e2c9481f3eacfa6
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
            Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
            Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
<<<<<<< HEAD
            Aenean nec enim id orci porta dictum et pretium mi.
            <hr/>
=======
            Aenean nec enim id orci porta dictum et pretium mi. 
            <br/>
            <br/>
>>>>>>> 48b6c4359c86a7fbeaa6d0af4e2c9481f3eacfa6
            <Button>Load more</Button>
            </p>
          </Col>
          <Col>
<<<<<<< HEAD
            <ul>
=======
            <ul> 
>>>>>>> 48b6c4359c86a7fbeaa6d0af4e2c9481f3eacfa6
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
