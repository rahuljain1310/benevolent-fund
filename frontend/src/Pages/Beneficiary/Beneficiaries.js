import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Table,

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
          Rickshaw Pullers, Sweepers, Gardners, Laundry Workers, Night Mess Workers, Tea stall workers, Cycle repairmen - anyone who made our campus invaluable. <br/><a href='/beneficiaries'>See all beneficiary details here.</a>
        </Card.Text>
        <Card.Title>Why do they need us?</Card.Title>
        <Card.Text>
          With the campus closed, the main source of income for these workers has taken a hit and most of them are now unemployed, left with
          negligible savings to provide food for their families, continue education of their children and recieve proper medical assistance.
        </Card.Text>
        <Card.Title>Let's help our community!</Card.Title>
        <Card.Text>
          Let's be honest, we wouldn't have survived campus without these workers. So, now we must come together and contribute.
        </Card.Text>
      </div>
    </div>
  )
}

function HowToContribute() {
  return (
    <div className="aboutbeneficiaries">
      <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'lighter' }}> How Can I Contribute?</h2>
      <hr />
      <div>
        <i>
          Your small contribution can have an unfathomable impact.We look forward to hearing from you.
        </i>
        <ol>
          <li>
            <Card.Title />
            <Card.Text>
              Estimate how much you might have paid to these workers combined <b>if the campus had not entered shutdown</b>. Can we contribute a fraction of that amount?
            </Card.Text>
          </li>
          <li>
            <Card.Title />
            <Card.Text>
              Many students might have received/would be receiving <b>their first salary as a working professional or an intern</b>. If we think that the problems these workers are facing, are more pressing than our current needs - can we commit a percentage of our first salary towards a larger cause which shall help so many workers on campus?
            </Card.Text>
          </li>
          <li>
            <Card.Title />
            <Card.Text>
              In these unprecedented circumstances, most of these workers have been forced out if livelihood. Can we atleast <b>show support by talking to them</b> and see if there's some way we can help them (helping them find employment, providing financial assistance, connecting them with NGOs, are a few things that we can do)
            </Card.Text>
          </li>
        </ol>
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
            <ListGroup.Item style={{ width: '100%' }}>
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
      <div style={{ margin: '60px 0px' }} className="details">
        <div className="list-head" style={{ fontSize: '1.8em', marginBottom: '15px' }}> List of Beneficiaries </div>
        <Table striped bordered hover responsive>
          <thead horizontal style={{ width: '100%' }}>
            <th style={{ width: '25%' }}> Name </th>
            <th style={{ width: '25%' }}> Place </th>
            <th style={{ width: '25%' }}> Profession </th>
            <th style={{ width: '25%' }}> Contact </th>
          </thead>
          <tbody>
            {beneficiaryData && beneficiaryData.map((person, idx) =>
              <tr horizontal key={idx} style={{ width: '100%' }}>
                <td style={{ width: '25%' }}> {person.name} </td>
                <td style={{ width: '25%' }}> {person.place} </td>
                <td style={{ width: '25%' }}> {person.profession} </td>
                <td style={{ width: '25%' }}> {person.contact} </td>
              </tr>
            )}
          </tbody>
        </Table>
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
      <Row style={{ height: 'auto', margin: 'auto' }}>
        <Col sm={6}> <BeneficiariesText /> </Col>
        <Col sm={6}> <HowToContribute /> </Col>
      </Row>
    </section>
  )
}


export {
  Beneficiaries,
  BeneficiaryDetails,
} 