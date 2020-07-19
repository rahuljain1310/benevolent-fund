import React from 'react';
import Card from 'react-bootstrap/Card';

function CardTemplate(props){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} style={{width: '18rem', height: '15rem'}} />
        <Card.Body>
            <Card.Title style={{color: 'blue'}}>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

