import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import './Beneficiaries.css';

function BeneficiariesText () {
  return (
    <div>
      <h3>Beneficiaries</h3>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
        Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
        Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
        Aenean nec enim id orci porta dictum et pretium mi. 
        <br/> <br/>
        <Button className='btn-danger'>Load more</Button>
      </p>
    </div>
  )
}

function BeneficiariesList ({beneficiary}) {
  
  const [segmentList, setSegmentList] = useState(beneficiary.slice())

  useEffect(() => {
    const interval = setInterval( () => {
      setSegmentList(segmentList => {
        var tmp = segmentList.slice()
        tmp.push(tmp.shift())
        return tmp
      })
    }, 4000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className='list-div'>
      <ul> 
        {segmentList.slice(0,5).map((person, idx) => (
          <li> {person[0]} : {person[1]} </li>
          ))}
      </ul>
    </div>
  )
}

function Beneficiaries () {

  const beneficiary = [
    ["Mukesh","Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om","Shivalik gardner"],
    ["Vinay","Himadri shop"],
    ["Vasant","Kailash juice shop"],
    ["Om","Shivalik gardner"],
    ["Vinay","Himadri shop"],
    ["Vasant","Kailash juice shop"]    
  ] 

  return (
    <section id='sc-bene' className="beneficiary">
      <Container> 
        <Row>
          <Col sm={6}> <BeneficiariesText/> </Col>
          <Col sm={2}> </Col>
          <Col sm={4}> <BeneficiariesList {...{beneficiary}}/> </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Beneficiaries;