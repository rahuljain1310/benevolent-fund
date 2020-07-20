import React from 'react';
import {
    Row,
    Col,
    Container,
    Card,
    CardGroup
} from 'react-bootstrap';
import nature1 from '../../Assets/nature2.jpg';

function MediaCard(){
    return(
        <Container fluid>
            <Row>
                <Col md={4}>
                    <img src={nature1} style={{height:'200px', alignItems:'center'}}/>
                </Col>
                <Col md={8}>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            {/* <Row>
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
            </Row> */}
            
        </Container>
    )
}

export default MediaCard;