import React from 'react';
import {
  Row,
  Col,
  Card,
  ListGroup,
} from 'react-bootstrap';
import './Beneficiaries.css';

function BeneficiariesText() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Header as="h5">Beneficiaries</Card.Header>
      <Card.Body>
        <Card.Title>About Beneficiaries</Card.Title>
        <Card.Text>
          Stuck at home, our responsibility to look after ourselves can easily overshadow our responsibility  in  our community. We must remember our role is not limited to us. These benefeciaries are those campus workers who did not back away from their roles, when we needed them. The 
          Rickshaw Pullers, Sweepers, Gardners, Laundry Workers, Night Mess Workers, Tea stall workers, Cycle repairmen - anyone who made our campus invaluable.
            
        </Card.Text>
        <Card.Title>Why do they need us?</Card.Title>
        <Card.Text>
            We all know that the campus has been closed. Since the main source of income for these workers was providing various services around the campus,most of them are now unemployed, left with 
            negligible savings and bills to pay. They are struggling to provide food to their families, give any kind of education to their childer and recieve proper medical assistance.
              </Card.Text>
        <Card.Title>Let's help our community!</Card.Title>
        <Card.Text>
          Let's be honest, we wouldn't have survived campus without these workers. So, now we must come together and contribute. 
              </Card.Text>

              
          Your small contribution can have an unfathomable impact.We look forward to hearing from you.
      </Card.Body>
    </Card>
  )
}

function BeneficiariesList({ list }) {
  return (
    <div style={{overflowY: 'scroll',height: '100%', marginTop: '15px'}}>
      <ListGroup style={{height: '1rem'}}>
        <ListGroup>
          <ListGroup.Item className="list-head">
            List of beneficiaries
          </ListGroup.Item>
        </ListGroup>
          {list.map((person, idx) =>
            <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
              <ListGroup.Item style={{ width: '100%' }}>
                {person[0]} <br/> <span style={{ color: "gray", fontSize: "0.9em" }}>{person[1]}</span>
              </ListGroup.Item>
            </ListGroup>
          )}
      </ListGroup>
    </div>
  )
}

function Beneficiaries() {

  const beneficiary = [
    ["Mukesh", "Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om", "Shivalik gardner"],
    ["Vinay", "Himadri shop"],
    ["Vasant", "Kailash juice shop"],
    ["Mukesh", "Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om", "Shivalik gardner"],
    ["Vinay", "Himadri shop"],
  ]

  return (
    <section id="sc-beneficiary">
      <Row>
        <Col md={8}> <BeneficiariesText /> </Col>
        <Col md={4}> <BeneficiariesList list={beneficiary} /> </Col>
      </Row>
    </section>
  )
}

export default Beneficiaries;