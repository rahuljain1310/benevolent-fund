import React from 'react';
import {
    Row,
    Col,
    Container,
    Card,
    CardGroup
} from 'react-bootstrap';
import nature1 from '../../Assets/nature2.jpg';
import './Media.css';

function MediaCard(){
    return(
        <div className="mediacard">
            <h2 style={{textAlign:'center', color:'green', fontWeight:'lighter'}}>IITD Benevolent Fund in News</h2>
            <hr style={{backgroundColor:'orange', width:'80%'}} />
            <Row>
            <Col md={4} style={{alignItems:'center'}}>
                <img src={nature1} style={{height:'200px', paddingLeft:'60px'}} />
            </Col>
            <Col md={8} style={{alignItems:'center'}}>
                <h3 style={{color:'blue',fontWeight:'lighter',paddingTop:'10px'}}>Hello</h3>
                <p>IIT Delhi institutes 'BENEVOLENT FUND' to help people of the lower economic strata within campus, 
                    receiving voluntary contributions in a formal and transparent manner for meeting minimal needs of 
                    the people of campus community.</p>
                <p style={{color:'#737573'}}>- covered by ndtv, 31st March</p>
                
            </Col>
            </Row>
        </div>
        // <Container fluid>
        //     <Row>
        //         <Col md={6}>
        //             <img src={nature1} style={{height:'200px', alignItems:'center' }}/>
        //         </Col>
        //         <Col md={6}>
        //             <Card.Body>
        //             <Card.Title>Card title</Card.Title>
        //             <Card.Text>
        //                 This card has supporting text below as a natural lead-in to additional
        //                 content.{' '}
        //             </Card.Text>
        //             </Card.Body>
        //         </Col>
        //     </Row>
            /* <Row>
                <Col >
                <CardGroup >
                <Card>
                    <Card.Img variant="top" src={nature1} style={{height:'200px'}} />
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
                </Col>
            </Row>
            <br />
            <Row >
                <Col>
                <CardGroup >
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={nature1} style={{height:'200px'}} />
                </Card>
                </CardGroup>
                </Col>
            </Row>
            <br />
            <Row >
                <Col>
                <CardGroup >
                <Card>
                    <Card.Img variant="left" src={nature1} style={{height:'200px'}} />
                </Card>
                <Card style={{borderCollapse:'collapse'}}>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
                </Col>
    </Row> */
            
        // </Container>
    )
}

export default MediaCard;