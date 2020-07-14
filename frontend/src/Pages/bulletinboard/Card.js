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

export default CardTemplate;

// .card {display:inline-block;}
// Some quick example text to build on the card title and make up the bulk of
//             the card's content.