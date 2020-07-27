import React, {useState} from 'react';
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button
} from 'react-bootstrap';
import './Beneficiaries.css';

function BeneficiariesText() {
  return (
    <div className="aboutbeneficiaries">
     <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'lighter' }}> Know About Beneficiaries</h2>
     {/* <hr style={{backgroundColor:'orange'}} /> */}
    <Card style={{ width: '100%', borderTopColor:'orange' }}>
        {/* <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'lighter' }}>Know About Beneficiaries</h2>
        <hr style={{backgroundColor:'orange'}} /> */}
      <Card.Body>
        <Card.Title>About Beneficiaries</Card.Title>
        <Card.Text>
          In lieu of the current events of the closing down of IIT Delhi due to COVID-19, we all wish to keep ourselves safe and healthy. Being concerned about personal safety is a good thing, but at the same time, we should not forget the community that drove us while we were in IIT Delhi. These campus workers which helped us to sustain, in one way or another, in IIT Delhi, include Rickshaw Pullers, Sweepers, Washerman, Gardners, Presswalas, Night Mess Workers, Tea stall workers, Cycle repair and many more.
              </Card.Text>
        <Card.Title>Why do they need us?</Card.Title>
        <Card.Text>
          We were dependent on, one or many of, these workers in many ways while we were at the campus. We must-have interacted with many of them for some kind of our work or assistance. With the advent of the current circumstances of COVID-19, all of these campus workers have lost their sources of income, thus making the situation uneasy for them. These are harsh circumstances, most of them don't have any work to do, their savings are exhausted, many have to pay their rents, bills, many require medical assistance, their children are unable to get good education and resources, and some even have nothing to eat. These people are hit hard by this pandemic.
              </Card.Text>
        <Card.Title>Let's help our community!</Card.Title>
        <Card.Text>
          Without these workers, our life hadn't been so smooth and our college hadn't been so well maintained. So now, it is on us, the students' community, to assist our campus community in their times of crisis. Let us contribute to this noble cause. We will look forward to hearing from you.
              </Card.Text>
        {/* <embed src='../../Assets/BeneficiariesList.pdf' type="application/pdf" style={{width:'100%'}} /> */}
        <a href="https://drive.google.com/file/d/1IhBop3VFa2QAy5v8c64JT6hJaXmXMWjr/view?usp=sharing" download>click here</a>
      </Card.Body>
    </Card>
    </div>
  )
}

// function HandelOnClick(list){
//   return(
//     <div style={{overflowY: 'scroll',height: '100%', marginTop: '15px'}}>
//       <ListGroup style={{height: '1rem'}}>
//         <ListGroup>
//           <ListGroup.Item className="list-head">
//             List of beneficiaries
//           </ListGroup.Item>
//         </ListGroup>
//           {list.map((person, idx) =>
//             <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
//               <ListGroup.Item style={{ width: '100%', backgroundColor:'white' }}>
//                 {person[0]} <br/> <span style={{ color: "gray", fontSize: "0.9em" }}>{person[1]}</span>
//               </ListGroup.Item>
//             </ListGroup>
//           )}
//       </ListGroup>
//       </div>
//   )
// }

// function BeneficiariesList({ list }) {

  // HandelOnClick(){
  //   return(
  //     <div style={{overflowY: 'scroll',height: '100%', marginTop: '15px'}}>
  //     <ListGroup style={{height: '1rem'}}>
  //       <ListGroup>
  //         <ListGroup.Item className="list-head">
  //           List of beneficiaries
  //         </ListGroup.Item>
  //       </ListGroup>
  //         {list.map((person, idx) =>
  //           <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
  //             <ListGroup.Item style={{ width: '100%', backgroundColor:'white' }}>
  //               {person[0]} <br/> <span style={{ color: "gray", fontSize: "0.9em" }}>{person[1]}</span>
  //             </ListGroup.Item>
  //           </ListGroup>
  //         )}
  //     </ListGroup>
  //     </div>
  //   )
  // }

//   const show1 = (
//     <div style={{height: '100%', marginTop: '15px'}}>
//     <ListGroup style={{height: '1rem'}}>
//       <ListGroup>
//         <ListGroup.Item className="list-head">
//           List of beneficiaries
//         </ListGroup.Item>
//       </ListGroup>
//         {list.map((person, idx) =>
//           <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
//             <ListGroup.Item style={{ width: '100%', backgroundColor:'white' }}>
//               {person[0]} <br/> <span style={{ color: "gray", fontSize: "0.9em" }}>{person[1]}</span>
//             </ListGroup.Item>
//           </ListGroup>
//         )}
//     </ListGroup>
//     </div>
//   )

//   const show2 = (
//     <div style={{overflowY: 'scroll',height: '100%', marginTop: '15px'}}>
//       <ListGroup style={{height: '1rem'}}>
//         <ListGroup>
//           <ListGroup.Item className="list-head">
//             List of beneficiaries
//           </ListGroup.Item>
//         </ListGroup>
//           {list.map((person, idx) =>
//             <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
//               <ListGroup.Item style={{ width: '100%', backgroundColor:'white' }}>
//                 {person[0]} <br/> <span style={{ color: "gray", fontSize: "0.9em" }}>{person[1]}</span>
//               </ListGroup.Item>
//             </ListGroup>
//           )}
//       </ListGroup>
//       </div>
//   )

//   return (
//     <div>
//       {show1}
//       <br />
//       <button >View All</button>
//     </div>

//   )
// }

function BeneficiariesList(){

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

  const beneficiary1 = [
    ["Mukesh", "Karakoram shop"],
    ["Aashish", "Vindy Washerman"],
    ["Om", "Shivalik gardner"],
    ["Vinay", "Himadri shop"],
  ]

  
  const handelClick = () => setList(
    <div style={{overflowY: 'scroll',height: '100%', marginTop: '0px'}} className="listclass">
    <ListGroup style={{height: '1rem'}}>
      <ListGroup>
        <ListGroup.Item className="list-head">
          List of beneficiaries
        </ListGroup.Item>
      </ListGroup>
        {beneficiary.map((person, idx) =>
          <ListGroup horizontal key={idx} style={{ height: '4rem' }}>
            <ListGroup.Item style={{ width: '100%', backgroundColor:'white' }}>
              {person[0]} <br/> <span style={{ color: "#9e1c66", fontSize: "0.9em" }}>{person[1]}</span>
            </ListGroup.Item>
          </ListGroup>
        )}
    </ListGroup>
    </div>)

  const [list, setList] = useState(
    <div style={{height: '100%', marginTop: '10px'}}>
    <ListGroup style={{height: '1rem'}}>
      <ListGroup>
        <ListGroup.Item className="list-head">
          List of beneficiaries
        </ListGroup.Item>
      </ListGroup>
     
        {beneficiary1.map((person, idx) =>
            <ListGroup horizontal key={idx} style={{ height: '4rem',width:'100%' }}>
              <ListGroup.Item style={{ width: '100%', backgroundColor:'white' }}>
                {person[0]} <br/> <span style={{ color: "#9e1c66", fontSize: "0.9em" }}>{person[1]}</span>
              </ListGroup.Item>
            </ListGroup>
        )}
        <ListGroup>
        <Button onClick={handelClick} style={{}}>View All</Button>
        </ListGroup>

        </ListGroup>

    </div>
  )
      return(
        <div  style={{height:'100%'}}>{list}</div>
     
      )
    
}

function Beneficiaries() {
  return (
    <section id="sc-beneficiary">
      <Row style={{height:'auto'}}>
        <Col sm={8}> <BeneficiariesText /> </Col>
        <Col sm={4}> <BeneficiariesList /> </Col>
      </Row>
    </section>
  )
}

export default Beneficiaries;