import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './BulletinBoard.css';
import CountUp from 'react-countup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import ChartFigure from '../Chart/Chart';

function NewBulletinBoard(){
    const [beneficiary, setBeneficiary] = useState([
        ["Mukesh","Karakoram shop"],
        ["Aashish", "Vindy Washerman"],
        ["Om","Shivalik gardner"],
        ["Vinay","Himadri shop"],
        ["Vasant","Kailash juice shop"]]);
    const [contributors, setContributors] = useState([
        ["Mukesh",500],
        ["Aashish", 100],
        ["Om",1000],
        ["Vinay",5000],
        ["Vasant",50],
        ["Rahul",55],
        ["Pankaj",250],
        ["Om",1000],
        ["Vinay",5000],
        ["Vasant",50],
        ["Rahul",55]]);
    
    const listOfBeneficiary = beneficiary.map( (person) => 
                <ListGroup.Item>{person[0]} : {person[1]} 
                <hr style={{color:"black"}} />
                 </ListGroup.Item>);

    // const listOfBeneficiary = beneficiary.map( (person) => <li>{person[0]} : {person[1]} <hr style={{color:"black"}} /> </li>);
    // const listOfContributors = beneficiary.map( (person) => <li>{person[0]} : {person[1]} <hr style={{color:"black"}} /> </li>);

    const listOfContributors = contributors.map( (person, idx) => <ListGroup horizontal key={idx} style={{height:'4rem'}}>
            <ListGroup.Item style={{width: '300px'}}>
                {person[0]} 
                <br/> 
                <p style={{color:"rgb(49, 6, 6)", fontSize:"12px"}}>1st year undergrad</p>
                </ListGroup.Item>
            <ListGroup.Item style={{width: '100px'}}>
                <p style={{color:"rgb(49, 6, 6)", fontSize:"20px"}}>
                    {person[1]}
                    </p>
                </ListGroup.Item>
            </ListGroup>);

    const [contributorsCount, setContributorCount]= useState(554);

    const [totalAmount, setTotalAmount] = useState(587554);


    return(
        <Container style={{height:'575px',backgroundColor: 'rgb(245, 244, 201)'}}>
            <Row >
                {/* <Col md={3}>
                    <Card border="info"  >
                        <Card.Header className="text-center" style={{color:'rgb(65, 6, 80)'}}>Total Contributors</Card.Header>
                        <Card.Body>
                        <p className="text">
                        <CountUp  end={contributorsCount} />
                        </p>
                        </Card.Body>
                    </Card>
                    <hr />
                </Col>
                <Col md={{ span: 3, offset: 0 }}  >
                    <Card border="info" >
                    <Card.Header className="text-center" style={{color:'rgb(65, 6, 80)'}}>Total Contribution</Card.Header>
                    <Card.Body>
                    <p className="text">
                    <CountUp  end={totalAmount} />
                    </p>
                    </Card.Body>
                    </Card>
                    <hr />
                </Col> */}
                <Col md={6} style={{alignItems:'center'}}>
                    <CardGroup>
                    <Card border="info"  >
                        <Card.Header className="text-center" style={{color:'rgb(65, 6, 80)'}}>Total Contributors</Card.Header>
                        <Card.Body>
                        <p className="text">
                        <CountUp  end={contributorsCount} />
                        </p>
                        </Card.Body>
                    </Card>
                    <Card border="info" >
                    <Card.Header className="text-center" style={{color:'rgb(65, 6, 80)'}}>Total Contribution</Card.Header>
                    <Card.Body>
                    <p className="text">
                    <CountUp  end={totalAmount} />
                    </p>
                    </Card.Body>
                    </Card>
                    </CardGroup>
                    <hr style={{color:'orange'}}/>
                   
                    <ChartFigure className="chartclass" />
                </Col>
                
                <Col md={6} bsPrefix="cold"  style={{overflowY:'scroll', height:'575px', alignItems:'centre', margin:'auto'}}>
                    <h3 style={{color:'rgb(65, 6, 80)', textAlign:'center'}}>Contributors</h3>
                    <ListGroup>
                        {listOfContributors}
                    </ListGroup>
                    
                </Col>
            </Row>
        </Container>
)}
export default NewBulletinBoard;