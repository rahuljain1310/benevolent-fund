import React from 'react';
import {Card} from 'react-bootstrap';

function CommentCard ({person}) {
  return(
    <Card className="CommentCard">
        <Card.Img variant="top" src={person?.imgPath} alt="My Profile Picture" className="image" />
          <Card.Title className="title">{person?.name}</Card.Title>
          <Card.Subtitle className="subtitle">{person?.year}</Card.Subtitle>
          <Card.Text className="para">{person?.description}</Card.Text>
      </Card>
    )
}

export default CommentCard;
