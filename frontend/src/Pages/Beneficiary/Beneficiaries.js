import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button
} from 'react-bootstrap';
import './Beneficiaries.css';

// const beneficiaryData = React.lazy(() => import('./Data'))
import beneficiaryData from './BeneficiaryData'

function BeneficiariesText() {
  return (
    <div className="aboutbeneficiaries">
      <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'lighter' }}> Know About Beneficiaries</h2>
      <hr />
      <div>
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
          </div>
    </div>
  )
}

function BeneficiariesList({ beneficiary, complete, title }) {
  const beneficiarySmall = beneficiary.slice(0, 6)
  const [viewAll, setViewAll] = useState(complete)
  const [beneficiaryDisplay, setDisplay] = useState(complete ? beneficiary : beneficiarySmall)
  const handleClick = () => {
    setViewAll(true)
    setDisplay(beneficiary)
  }
  return (
    <div style={{ overflowY: 'scroll', height: '100%', margin: '10px 0px' }} className="listclass">
      <ListGroup style={{ height: '500px' }}>
        <ListGroup>
          <ListGroup.Item className="list-head"> {title} </ListGroup.Item>
        </ListGroup>
        {beneficiaryDisplay.map((person, idx) =>
          <ListGroup horizontal key={idx} style={{ height: '3.5rem', width: '100%' }}>
            <ListGroup.Item style={{ width: '100%'}}>
              {person[0]}, <span className='designation'>{person[1]}</span>
            </ListGroup.Item>
          </ListGroup>
        )}
        {viewAll || <Button onClick={handleClick}> View All </Button>}
      </ListGroup>
    </div>
  )
}

function BeneficiaryDetails() {
  return (
    <section>
      <div style={{margin: '60px 0px' }} className="details">
        <div className="list-head" style={{fontSize: '1.8em', marginBottom: '15px'}}> List of Beneficiaries </div>
        <ListGroup>
          <ListGroup horizontal style={{width: '100%' }}>
              <ListGroup.Item className="list-head" style={{width: '25%', color: 'green'}}> Name </ListGroup.Item>
              <ListGroup.Item className="list-head" style={{width: '25%', color: 'green'}}> Place </ListGroup.Item>
              <ListGroup.Item className="list-head" style={{width: '25%', color: 'green'}}> Profession </ListGroup.Item>
              <ListGroup.Item className="list-head" style={{width: '25%', color: 'green'}}> Contact </ListGroup.Item>
            </ListGroup>
          {beneficiaryData && beneficiaryData.map((person, idx) => 
            <ListGroup horizontal key={idx} style={{width: '100%' }}>
              <ListGroup.Item style={{width: '25%'}}> {person.name} </ListGroup.Item>
              <ListGroup.Item style={{width: '25%'}}> {person.place} </ListGroup.Item>
              <ListGroup.Item style={{width: '25%'}}> {person.profession} </ListGroup.Item>
              <ListGroup.Item style={{width: '25%'}}> {person.contact} </ListGroup.Item>
            </ListGroup>
          )}
        </ListGroup>
      </div>
    </section>
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
    ["Vasant", "Kailash juice shop"],
    ["Mukesh", "Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om", "Shivalik gardner"],
    ["Vinay", "Himadri shop"],
  ]

  return (
    <section id="sc-beneficiary">
      <Row style={{ height: 'auto' }}>
        <Col sm={8}> <BeneficiariesText /> </Col>
        <Col sm={4}> <BeneficiariesList beneficiary={beneficiary} title={'List of Beneficiaries'} complete={false} /> </Col>
      </Row>
    </section>
  )
}


export {
  Beneficiaries,
  BeneficiaryDetails,
} 