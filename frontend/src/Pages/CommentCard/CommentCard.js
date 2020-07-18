import React from 'react';
import {Card} from 'react-bootstrap';
import './CommentCard.css'

function CommentCard (Name , About , Comments) {
    return(
        <Card className="CommentCard">
            <Card.Img variant="top" src={rahul} alt="My Profile Picture" className="image" />
            <Card.Body className="body">
                <Card.Text className="title">
                <b>Name </b><br/>
                About
                </Card.Text>
                <Card.Text className="para">
                Comments<br/>
                <a style={{textDecoration:'none'}} href="" className="More">See More...</a>
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }

    export default CommentCard;
