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

// function BeneficiariesText() {
//   return (
//     <div>
//       <h3>Beneficiaries</h3>
//       <hr />
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
//         Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
//         Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
//         Aenean nec enim id orci porta dictum et pretium mi.
//         <br /> <br />
//         <Button className='btn-danger'>Load more</Button>
//       </p>
//     </div>
//   )
// }

// function BeneficiariesList ({beneficiary}) {
  
//   const [segmentList, setSegmentList] = useState(beneficiary.slice())

//   useEffect(() => {
//     const interval = setInterval( () => {
//       setSegmentList(segmentList => {
//         var tmp = segmentList.slice()
//         tmp.push(tmp.shift())
//         return tmp
//       })
//     }, 4000);
//     return () => clearInterval(interval)
//   }, []);

//   return (
//     <div className='list-div'>
//       <ul> 
//         {segmentList.slice(0,5).map((person, idx) => (
//           <li> {person[0]} : {person[1]} </li>
//           ))}
//       </ul>
//     </div>
//   )
// }

function BeneficiariesText() {
  return (
    <Card style={{ width: '100%' }}>
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
  )
}

function BeneficiariesList({ list }) {
  return (
    <div style={{overflowY: 'scroll',height: '100%', marginTop: '10px'}}>
      <ListGroup style={{height: '1rem'}}>
        <ListGroup>
          <ListGroup.Item as='h5'>
            List of beneficiaries
          </ListGroup.Item>
        </ListGroup>
          {list.map((person, idx) =>
            <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
              <ListGroup.Item style={{ width: '100%' }}>
                {person[0]}, <span style={{ color: "gray", fontSize: "0.8em" }}>{person[1]}</span>
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