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
    <Card style={{ width: '100%' }} className="card_b">
      <Card.Header id="header_b">BENEFICIARIES</Card.Header>
            <Card.Body>
              <Card.Title id="subhead_b">About Beneficiaries</Card.Title>
              <Card.Text id="content">
                  In lieu of the current events of the closing down of IIT Delhi due to COVID-19, we all wish to keep ourselves safe and healthy. Being concerned about personal safety is a good thing, but at the same time, we should not forget the community that drove us while we were in IIT Delhi. These campus workers which helped us to sustain, in one way or another, in IIT Delhi, include Rickshaw Pullers, Sweepers, Washerman, Gardners, Presswalas, Night Mess Workers, Tea stall workers, Cycle repair and many more.
              </Card.Text>
              <Card.Title id="subhead_b">Why do they need us?</Card.Title>
              <Card.Text id="content">
                  We were dependent on, one or many of, these workers in many ways while we were at the campus. We must-have interacted with many of them for some kind of our work or assistance. With the advent of the current circumstances of COVID-19, all of these campus workers have lost their sources of income, thus making the situation uneasy for them. These are harsh circumstances, most of them don't have any work to do, their savings are exhausted, many have to pay their rents, bills, many require medical assistance, their children are unable to get good education and resources, and some even have nothing to eat. These people are hit hard by this pandemic.
              </Card.Text>
              <Card.Title id="subhead_b">Let's help our community!</Card.Title>
              <Card.Text id="content">
                  Without these workers, our life hadn't been so smooth and our college hadn't been so well maintained. So now, it is on us, the students' community, to assist our campus community in their times of crisis. Let us contribute to this noble cause. We will look forward to hearing from you.
              </Card.Text>
            </Card.Body>
    </Card>
  )
}

function BeneficiariesList({ list }) {
  return (
    <div style={{overflowY: 'scroll',height: '100%', marginTop: '15px'}}>
      <ListGroup style={{height: '1rem'}}>
        <ListGroup>
          <ListGroup.Item id="list-head">
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