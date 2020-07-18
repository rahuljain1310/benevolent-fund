import React from 'react';
import {Card} from 'react-bootstrap';
import './CommentCard.css'

function CommentCard () {
    return(
        <Card className="CommentCard">
            <Card.Img variant="top" src={rahul} alt="My Profile Picture" className="image" />
            <Card.Body className="body">
                <Card.Text className="title">
                <b>RAHUL JAIN</b><br/>
                A Third Year Student, IITD
                </Card.Text>
                <Card.Text className="para">
                "I feel fortunate and happy to play my role in the society especially at a time when it was needed the most."<br/>
                <a style={{textDecoration:'none'}} href="" className="More">See More...</a>
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }

    export default CommentCard;
