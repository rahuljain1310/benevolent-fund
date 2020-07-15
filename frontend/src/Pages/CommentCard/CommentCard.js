import React from 'react';
import {Card} from 'react-bootstrap';

function CommentCard () {
    return(
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>
            <Card.Img variant="top" src="holder.js/100px18" />
            <Card.ImgOverlay>
            <Card.Title>Udita Wadhwa</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">First Year Student</Card.Subtitle>
            </Card.ImgOverlay>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                My  Experience helping the beneficiaries.......Everyone should come forward.
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }
    
    export default CommentCard;